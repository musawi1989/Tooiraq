/* ============================================================
   TooIraq — guest booking status & management page.
   Reached from the manage link (booking.html?ref=…&token=…).
   ============================================================ */
(function () {
  "use strict";
  const TQ = window.TooIraq, B = window.TI_BACKEND;

  TQ.addStrings({
    bkpTitle: "My booking", bkpLead: "Check the status of your booking, pay online, or cancel.",
    bkpRef: "Booking reference", bkpToken: "Manage code (from your confirmation link)",
    bkpFind: "Find my booking", bkpNotFound: "Booking not found — check the reference and code, or open the exact link from your confirmation.",
    bkpStatus: "Status", bkpPayment: "Payment", bkpDate: "Tour date", bkpPax: "Travelers", bkpTotal: "Total",
    bkpAgency: "Agency", bkpChat: "WhatsApp the agency",
    bkpCancel: "Cancel booking", bkpCancelAsk: "Cancel this booking?", bkpCancelled: "Booking cancelled.",
    bkpPay: "Pay online", bkpPayTitle: "Pay securely with PayPal", bkpPaid: "Payment received — thank you!",
    bkpPayErr: "Payment didn't complete. You can try again.",
    bkpOff: "Online booking management is being switched on — check back soon.",
    st_pending: "Pending confirmation", st_confirmed: "Confirmed", st_declined: "Declined",
    st_cancelled_by_traveler: "Cancelled by you", st_cancelled_by_agency: "Cancelled by agency",
    st_completed: "Completed", st_no_show: "No-show",
    pay_unpaid: "Unpaid", pay_paid: "Paid", pay_refunded: "Refunded", pay_partially_refunded: "Partially refunded"
  }, {
    bkpTitle: "حجزي", bkpLead: "تحقق من حالة حجزك أو ادفع إلكترونياً أو ألغِ الحجز.",
    bkpRef: "رقم الحجز", bkpToken: "رمز الإدارة (من رابط التأكيد)",
    bkpFind: "ابحث عن حجزي", bkpNotFound: "لم يُعثر على الحجز — تحقق من الرقم والرمز، أو افتح الرابط من رسالة التأكيد مباشرة.",
    bkpStatus: "الحالة", bkpPayment: "الدفع", bkpDate: "تاريخ الجولة", bkpPax: "المسافرون", bkpTotal: "الإجمالي",
    bkpAgency: "الشركة", bkpChat: "راسل الشركة على واتساب",
    bkpCancel: "إلغاء الحجز", bkpCancelAsk: "هل تريد إلغاء هذا الحجز؟", bkpCancelled: "تم إلغاء الحجز.",
    bkpPay: "ادفع إلكترونياً", bkpPayTitle: "ادفع بأمان عبر PayPal", bkpPaid: "تم استلام الدفعة — شكراً!",
    bkpPayErr: "لم تكتمل العملية. يمكنك المحاولة مرة أخرى.",
    bkpOff: "إدارة الحجوزات الإلكترونية قيد التفعيل — عد قريباً.",
    st_pending: "بانتظار التأكيد", st_confirmed: "مؤكد", st_declined: "مرفوض",
    st_cancelled_by_traveler: "ألغيته أنت", st_cancelled_by_agency: "ألغته الشركة",
    st_completed: "مكتمل", st_no_show: "لم يحضر",
    pay_unpaid: "غير مدفوع", pay_paid: "مدفوع", pay_refunded: "مسترجع", pay_partially_refunded: "مسترجع جزئياً"
  });

  const t = TQ.t, esc = TQ.esc, L = TQ.L;
  const money = (c) => "$" + (c / 100).toFixed(2).replace(/\.00$/, "");
  const params = new URLSearchParams(window.location.search);
  let ref = params.get("ref") || "", token = params.get("token") || "";

  async function view() {
    const el = document.getElementById("booking-root"); if (!el) return;
    if (!B.enabled) {
      el.innerHTML = '<div class="auth-card panel center"><h1 class="t2">' + t("bkpTitle") + '</h1><p class="subhead mt-4">' + t("bkpOff") + "</p></div>";
      return;
    }
    if (ref && token) {
      const b = await B.lookupBooking(ref, token);
      if (b) return showBooking(el, b);
    }
    showFinder(el, ref && token);
  }

  function showFinder(el, failed) {
    el.innerHTML =
      '<div class="auth-card panel">' +
      '<h1 class="t2">' + t("bkpTitle") + '</h1><p class="subhead mt-2">' + t("bkpLead") + "</p>" +
      (failed ? '<div class="notice-proto mt-4">' + t("bkpNotFound") + "</div>" : "") +
      '<div class="form-grid mt-4">' +
      "<div><label>" + t("bkpRef") + '</label><input id="bf-ref" placeholder="TI-XXXXXX" value="' + esc(ref) + '"/></div>' +
      "<div><label>" + t("bkpToken") + '</label><input id="bf-token" value="' + esc(token) + '"/></div>' +
      '<button class="btn btn-primary btn-block" id="bf-go">' + t("bkpFind") + "</button>" +
      "</div></div>";
    document.getElementById("bf-go").addEventListener("click", () => {
      ref = document.getElementById("bf-ref").value.trim();
      token = document.getElementById("bf-token").value.trim();
      view();
    });
  }

  function showBooking(el, b) {
    const canCancel = ["pending", "confirmed"].includes(b.status);
    const canPay = window.TI_PAY && window.TI_PAY.enabled && b.payment === "unpaid" &&
      b.total_cents > 0 && ["pending", "confirmed"].includes(b.status);
    const ag = b.agency || {};
    el.innerHTML =
      '<div class="auth-card panel" style="max-width:520px">' +
      '<h1 class="t2">' + t("bkpTitle") + '</h1>' +
      '<div class="amount mt-2" style="font-size:24px">' + esc(b.ref) + "</div>" +
      '<h3 class="t3 mt-4">' + esc(L(b.tour && b.tour.title)) + "</h3>" +
      '<div class="form-grid mt-4" style="gap:8px">' +
      row(t("bkpStatus"), t("st_" + b.status)) +
      row(t("bkpPayment"), t("pay_" + b.payment) + (b.total_cents ? " · " + money(b.total_cents) : "")) +
      row(t("bkpDate"), b.tour_date) +
      row(t("bkpPax"), String(b.pax_adults + b.pax_children)) +
      row(t("bkpAgency"), esc(L(ag.name))) +
      "</div>" +
      '<div class="form-grid mt-4">' +
      (ag.whatsapp ? '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="https://wa.me/' + esc(ag.whatsapp) + '?text=' + encodeURIComponent("TooIraq " + b.ref) + '">' + t("bkpChat") + "</a>" : "") +
      (canPay ? '<button class="btn btn-primary btn-block" id="bp-pay">' + t("bkpPay") + '</button><div id="bp-ppbox"></div>' : "") +
      (canCancel ? '<button class="btn btn-outline btn-block" id="bp-cancel">' + t("bkpCancel") + "</button>" : "") +
      '<div id="bp-msg" class="form-note"></div>' +
      "</div></div>";

    const msg = (m, ok) => { const e = document.getElementById("bp-msg"); e.textContent = m; e.style.color = ok ? "var(--color-accent)" : "#8E1020"; };
    const payBtn = document.getElementById("bp-pay");
    if (payBtn) payBtn.addEventListener("click", async () => {
      payBtn.disabled = true;
      const box = document.getElementById("bp-ppbox");
      box.innerHTML = '<p class="footnote">' + t("bkpPayTitle") + "</p><div class='ppb'></div>";
      await window.TI_PAY.renderButtons(box.querySelector(".ppb"), b.ref, token,
        () => { msg(t("bkpPaid"), true); setTimeout(view, 1500); },
        () => { msg(t("bkpPayErr")); payBtn.disabled = false; });
    });
    const cBtn = document.getElementById("bp-cancel");
    if (cBtn) cBtn.addEventListener("click", async () => {
      if (!window.confirm(t("bkpCancelAsk"))) return;
      const ok = await B.cancelBookingGuest(b.ref, token);
      if (ok) { msg(t("bkpCancelled"), true); setTimeout(view, 1200); }
    });
  }
  const row = (k, v) => '<div style="display:flex;justify-content:space-between;gap:12px"><span class="footnote">' + k + '</span><b style="font-size:15px">' + v + "</b></div>";

  TQ.onRender = view;
  TQ.init({ page: "booking" });
})();
