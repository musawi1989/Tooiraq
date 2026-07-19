// TooIraq — capture a PayPal order and mark the booking paid.
// Verifies captured amount against the booking total before marking paid.
import { createClient } from "npm:@supabase/supabase-js@2";

const PP_BASE = (Deno.env.get("PAYPAL_ENV") || "sandbox") === "live"
  ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function ppToken(): Promise<string> {
  const id = Deno.env.get("PAYPAL_CLIENT_ID")!;
  const secret = Deno.env.get("PAYPAL_SECRET")!;
  const r = await fetch(`${PP_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${id}:${secret}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const j = await r.json();
  if (!j.access_token) throw new Error("paypal auth failed");
  return j.access_token;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const { ref, token, orderId } = await req.json();
    if (!ref || !token || !orderId) throw new Error("missing params");

    const db = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data: b } = await db.from("bookings")
      .select("id, ref, manage_token, total_cents, currency, payment, timeline")
      .eq("ref", String(ref).toUpperCase().trim()).maybeSingle();
    if (!b || b.manage_token !== token) throw new Error("booking not found");
    if (b.payment === "paid") return new Response(JSON.stringify({ ok: true, already: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });

    const access = await ppToken();
    const r = await fetch(`${PP_BASE}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: { Authorization: `Bearer ${access}`, "Content-Type": "application/json" },
    });
    const cap = await r.json();
    const unit = cap.purchase_units && cap.purchase_units[0];
    const capture = unit && unit.payments && unit.payments.captures && unit.payments.captures[0];
    if (!capture || capture.status !== "COMPLETED") {
      throw new Error("capture failed: " + JSON.stringify(cap));
    }
    const paidCents = Math.round(parseFloat(capture.amount.value) * 100);
    if (paidCents !== b.total_cents || capture.amount.currency_code !== (b.currency || "USD")) {
      throw new Error("amount mismatch");
    }

    await db.from("bookings").update({
      payment: "paid", payment_provider: "paypal", paypal_order_id: orderId,
      updated_at: new Date().toISOString(),
      timeline: [...(b.timeline || []), { at: new Date().toISOString(), ev: "paid_paypal", by: "traveler" }],
    }).eq("id", b.id);

    await db.from("payments").insert({
      booking_id: b.id, provider: "paypal", provider_order_id: orderId,
      provider_capture_id: capture.id, amount_cents: paidCents,
      currency: capture.amount.currency_code, status: "captured", raw: cap,
    });

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e.message || e) }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
