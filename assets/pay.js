/* ============================================================
   TooIraq — PayPal buttons helper (client side).
   Renders PayPal Smart Buttons for a booking (by ref + manage
   token); order creation & capture happen server-side in
   Supabase edge functions, which enforce the real amount.
   No-op unless PAYPAL_CLIENT_ID is configured.
   ============================================================ */
window.TI_PAY = (function () {
  "use strict";
  const cfg = window.TOOIRAQ_CONFIG || {};
  const enabled = !!(cfg.PAYPAL_CLIENT_ID && window.TI_BACKEND && window.TI_BACKEND.enabled);
  let sdkLoading = null;

  function loadSdk() {
    if (window.paypal) return Promise.resolve();
    if (!sdkLoading) {
      sdkLoading = new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "https://www.paypal.com/sdk/js?client-id=" + encodeURIComponent(cfg.PAYPAL_CLIENT_ID) +
          "&currency=USD&intent=capture";
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
    }
    return sdkLoading;
  }

  /* container: DOM node · booking: {ref, manage_token} · onPaid: fn */
  async function renderButtons(container, ref, token, onPaid, onError) {
    if (!enabled) return false;
    await loadSdk();
    container.innerHTML = "";
    window.paypal.Buttons({
      style: { layout: "vertical", color: "gold", shape: "rect", label: "paypal", height: 44 },
      createOrder: async () => {
        const r = await window.TI_BACKEND.paypalCreateOrder(ref, token);
        if (!r || !r.orderId) throw new Error((r && r.error) || "order failed");
        return r.orderId;
      },
      onApprove: async (data) => {
        const r = await window.TI_BACKEND.paypalCapture(ref, token, data.orderID);
        if (r && r.ok) { if (onPaid) onPaid(); }
        else if (onError) onError((r && r.error) || "capture failed");
      },
      onError: (err) => { if (onError) onError(String(err)); }
    }).render(container);
    return true;
  }

  return { enabled, renderButtons };
})();
