// TooIraq — create a PayPal order for a booking (server-side price authority).
// Secrets required: PAYPAL_CLIENT_ID, PAYPAL_SECRET, PAYPAL_ENV ("sandbox"|"live")
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
    const { ref, token } = await req.json();
    if (!ref || !token) throw new Error("missing ref/token");

    const db = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data: b } = await db.from("bookings")
      .select("id, ref, manage_token, total_cents, currency, payment, status")
      .eq("ref", String(ref).toUpperCase().trim()).maybeSingle();

    if (!b || b.manage_token !== token) throw new Error("booking not found");
    if (b.payment === "paid") throw new Error("already paid");
    if (!b.total_cents || b.total_cents <= 0) throw new Error("nothing to pay");
    if (["declined", "cancelled_by_traveler", "cancelled_by_agency"].includes(b.status)) {
      throw new Error("booking not payable");
    }

    const access = await ppToken();
    const amount = (b.total_cents / 100).toFixed(2);
    const r = await fetch(`${PP_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: { Authorization: `Bearer ${access}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{
          reference_id: b.ref,
          amount: { currency_code: b.currency || "USD", value: amount },
          description: `TooIraq booking ${b.ref}`,
        }],
      }),
    });
    const order = await r.json();
    if (!order.id) throw new Error("paypal order failed: " + JSON.stringify(order));

    await db.from("payments").insert({
      booking_id: b.id, provider: "paypal", provider_order_id: order.id,
      amount_cents: b.total_cents, currency: b.currency || "USD",
      status: "created", raw: order,
    });

    return new Response(JSON.stringify({ orderId: order.id }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e.message || e) }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
