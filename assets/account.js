/* ============================================================
   TooIraq — traveler account page (auth, bookings, wishlist,
   reviews, profile). Requires backend.js configured; shows a
   friendly notice otherwise.
   ============================================================ */
(function () {
  "use strict";
  const TQ = window.TooIraq, B = window.TI_BACKEND;

  TQ.addStrings({
    acctTitle: "My account", acctLead: "Your bookings, saved tours and details — in one place.",
    signIn: "Sign in", signUp: "Create account", email: "Email", password: "Password",
    fullName: "Full name", authOr: "or", magicBtn: "Email me a sign-in link", magicSent: "Check your inbox — we sent you a sign-in link.",
    signUpDone: "Account created! Check your email to confirm, then sign in.",
    authErr: "Sign-in failed — check your details and try again.",
    signOut: "Sign out",
    myBookings: "My bookings", noBookings: "No bookings yet — find your next tour!", browseTours: "Browse tours",
    wishlistT: "Saved tours", noWishlist: "Nothing saved yet. Tap ♡ on any tour to keep it here.",
    profileT: "Profile", save: "Save changes", saved: "Saved ✓",
    prefLang: "Preferred language", whatsNum: "WhatsApp number",
    refWord: "Booking ref", totalWord: "Total", dateWord: "Date", paxWord: "Travelers",
    payNow: "Pay online", payTitle: "Pay securely with PayPal", payDone: "Payment received — thank you!", payErr: "Payment didn't complete. You can try again.",
    cancelBooking: "Cancel booking", confirmCancel: "Cancel this booking?", cancelledMsg: "Booking cancelled.",
    writeReview: "Write a review", yourRating: "Your rating", reviewBody: "Your review", submitReview: "Submit review",
    reviewSent: "Thanks! Your review is pending moderation.",
    chatAgency: "WhatsApp the agency",
    st_pending: "Pending confirmation", st_confirmed: "Confirmed", st_declined: "Declined",
    st_cancelled_by_traveler: "Cancelled by you", st_cancelled_by_agency: "Cancelled by agency",
    st_completed: "Completed", st_no_show: "No-show",
    pay_unpaid: "Unpaid", pay_paid: "Paid", pay_refunded: "Refunded", pay_partially_refunded: "Partially refunded",
    backendOff: "Accounts are almost ready — this feature is being switched on. Check back soon!"
  }, {
    acctTitle: "حسابي", acctLead: "حجوزاتك وجولاتك المحفوظة وبياناتك — في مكان واحد.",
    signIn: "تسجيل الدخول", signUp: "إنشاء حساب", email: "البريد الإلكتروني", password: "كلمة المرور",
    fullName: "الاسم الكامل", authOr: "أو", magicBtn: "أرسلوا لي رابط دخول", magicSent: "تفقد بريدك — أرسلنا لك رابط الدخول.",
    signUpDone: "تم إنشاء الحساب! أكّد بريدك الإلكتروني ثم سجّل الدخول.",
    authErr: "تعذر تسجيل الدخول — تحقق من بياناتك وحاول مجدداً.",
    signOut: "تسجيل الخروج",
    myBookings: "حجوزاتي", noBookings: "لا حجوزات بعد — اعثر على جولتك القادمة!", browseTours: "تصفح الجولات",
    wishlistT: "الجولات المحفوظة", noWishlist: "لا شيء محفوظ بعد. اضغط ♡ على أي جولة لحفظها هنا.",
    profileT: "الملف الشخصي", save: "حفظ التغييرات", saved: "تم الحفظ ✓",
    prefLang: "اللغة المفضلة", whatsNum: "رقم واتساب",
    refWord: "رقم الحجز", totalWord: "الإجمالي", dateWord: "التاريخ", paxWord: "المسافرون",
    payNow: "ادفع إلكترونياً", payTitle: "ادفع بأمان عبر PayPal", payDone: "تم استلام الدفعة — شكراً!", payErr: "لم تكتمل العملية. يمكنك المحاولة مرة أخرى.",
    cancelBooking: "إلغاء الحجز", confirmCancel: "هل تريد إلغاء هذا الحجز؟", cancelledMsg: "تم إلغاء الحجز.",
    writeReview: "اكتب تقييماً", yourRating: "تقييمك", reviewBody: "رأيك", submitReview: "إرسال التقييم",
    reviewSent: "شكراً! تقييمك قيد المراجعة.",
    chatAgency: "راسل الشركة على واتساب",
    st_pending: "بانتظار التأكيد", st_confirmed: "مؤكد", st_declined: "مرفوض",
    st_cancelled_by_traveler: "ألغيته أنت", st_cancelled_by_agency: "ألغته الشركة",
    st_completed: "مكتمل", st_no_show: "لم يحضر",
    pay_unpaid: "غير مدفوع", pay_paid: "مدفوع", pay_refunded: "مسترجع", pay_partially_refunded: "مسترجع جزئياً",
    backendOff: "الحسابات ستتوفر قريباً — هذه الميزة قيد التفعيل."
  });

  const t = TQ.t, esc = TQ.esc, L = TQ.L;
  const root = () => document.getElementById("account-root");
  const money = (cents, cur) => (cur === "USD" || !cur ? "$" : cur + " ") + (cents / 100).toFixed(2).replace(/\.00$/, "");
  const stPill = (s) => {
    const good = { confirmed: 1, completed: 1 }[s], bad = { declined: 1, cancelled_by_traveler: 1, cancelled_by_agency: 1, no_show: 1 }[s];
    const cls = good ? "pill-live" : bad ? "" : "pill-pending";
    const style = bad ? 'style="background:var(--color-primary-tint);color:#8E1020"' : "";
    return '<span class="pill-status ' + cls + '" ' + style + ">" + t("st_" + s) + "</span>";
  };

  async function view() {
    const el = root(); if (!el) return;
    if (!B.enabled) {
      el.innerHTML = '<div class="auth-card panel center"><h1 class="t2">' + t("acctTitle") + '</h1><p class="subhead mt-4">' + t("backendOff") + "</p></div>";
      return;
    }
    const user = await B.getUser();
    if (!user) return viewAuth(el);
    return viewDash(el, user);
  }

  /* ---------- auth ---------- */
  function viewAuth(el) {
    el.innerHTML =
      '<div class="auth-card panel">' +
      '<h1 class="t2">' + t("acctTitle") + '</h1><p class="subhead mt-2">' + t("acctLead") + "</p>" +
      '<div class="form-grid mt-4">' +
      '<div id="au-name-wrap" class="hide"><label>' + t("fullName") + '</label><input id="au-name"/></div>' +
      "<div><label>" + t("email") + '</label><input type="email" id="au-email" autocomplete="email"/></div>' +
      "<div><label>" + t("password") + '</label><input type="password" id="au-pass" autocomplete="current-password"/></div>' +
      '<div id="au-err" class="form-note hide" style="color:#8E1020"></div>' +
      '<button class="btn btn-primary btn-block" id="au-go">' + t("signIn") + "</button>" +
      '<button class="btn btn-tint btn-block" id="au-mode">' + t("signUp") + "</button>" +
      '<div class="center footnote">' + t("authOr") + "</div>" +
      '<button class="btn btn-outline btn-block" id="au-magic">' + t("magicBtn") + "</button>" +
      "</div></div>";

    let mode = "in";
    const err = (m) => { const e = document.getElementById("au-err"); e.textContent = m; e.classList.remove("hide"); };
    document.getElementById("au-mode").addEventListener("click", () => {
      mode = mode === "in" ? "up" : "in";
      document.getElementById("au-name-wrap").classList.toggle("hide", mode === "in");
      document.getElementById("au-go").textContent = mode === "in" ? t("signIn") : t("signUp");
      document.getElementById("au-mode").textContent = mode === "in" ? t("signUp") : t("signIn");
    });
    document.getElementById("au-go").addEventListener("click", async () => {
      const email = document.getElementById("au-email").value.trim();
      const pass = document.getElementById("au-pass").value;
      if (!email || !pass) return err(t("authErr"));
      const r = mode === "in" ? await B.signIn(email, pass)
        : await B.signUp(email, pass, document.getElementById("au-name").value.trim());
      if (r.error) return err(r.error.message || t("authErr"));
      if (mode === "up" && !(r.data && r.data.session)) return err(t("signUpDone"));
      view();
    });
    document.getElementById("au-magic").addEventListener("click", async () => {
      const email = document.getElementById("au-email").value.trim();
      if (!email) return err(t("authErr"));
      const r = await B.signInOtp(email);
      err(r.error ? (r.error.message || t("authErr")) : t("magicSent"));
    });
  }

  /* ---------- dashboard ---------- */
  async function viewDash(el, user) {
    const [profile, bookings, wl] = await Promise.all([B.getProfile(), B.myBookings(), B.myWishlist()]);
    const p = profile || {};

    el.innerHTML =
      '<div class="section-head"><div><h1 class="t1">' + t("acctTitle") + '</h1><p class="subhead sub">' + esc(p.full_name || user.email) + "</p></div>" +
      '<button class="btn btn-outline btn-sm" id="ac-out">↩ ' + t("signOut") + "</button></div>" +

      '<div class="panel mb-4"><h2>' + t("myBookings") + '</h2><div id="ac-bookings"></div></div>' +
      '<div class="panel mb-4"><h2>' + t("wishlistT") + '</h2><div id="ac-wl" class="card-grid mt-4"></div></div>' +

      '<div class="panel"><h2>' + t("profileT") + '</h2><div class="form-grid mt-4">' +
      '<div class="form-row"><div><label>' + t("fullName") + '</label><input id="pr-name" value="' + esc(p.full_name || "") + '"/></div>' +
      "<div><label>" + t("whatsNum") + '</label><input id="pr-wa" value="' + esc(p.whatsapp || "") + '" placeholder="+964 …"/></div></div>' +
      "<div><label>" + t("prefLang") + '</label><select id="pr-lang">' +
      '<option value="en"' + (p.preferred_lang !== "ar" ? " selected" : "") + ">English</option>" +
      '<option value="ar"' + (p.preferred_lang === "ar" ? " selected" : "") + ">العربية</option></select></div>" +
      '<button class="btn btn-primary" id="pr-save">' + t("save") + "</button>" +
      "</div></div>";

    document.getElementById("ac-out").addEventListener("click", async () => { await B.signOut(); view(); });
    document.getElementById("pr-save").addEventListener("click", async () => {
      await B.updateProfile({
        full_name: document.getElementById("pr-name").value.trim(),
        whatsapp: document.getElementById("pr-wa").value.trim(),
        preferred_lang: document.getElementById("pr-lang").value,
        updated_at: new Date().toISOString()
      });
      document.getElementById("pr-save").textContent = t("saved");
      setTimeout(() => { document.getElementById("pr-save").textContent = t("save"); }, 1800);
    });

    renderBookings(bookings);
    renderWishlist(wl);
  }

  function renderBookings(list) {
    const box = document.getElementById("ac-bookings"); if (!box) return;
    if (!list.length) {
      box.innerHTML = '<p class="subhead mt-4">' + t("noBookings") + '</p><a class="btn btn-tint mt-4" href="tours.html">' + t("browseTours") + "</a>";
      return;
    }
    box.innerHTML = list.map((b) => {
      const title = b.tours ? esc(L(b.tours.title)) : b.ref;
      const ag = b.agencies || {};
      const canCancel = ["pending", "confirmed"].includes(b.status);
      const canPay = window.TI_PAY && window.TI_PAY.enabled && b.payment === "unpaid" && b.total_cents > 0 &&
        ["pending", "confirmed"].includes(b.status);
      const canReview = b.status === "completed";
      return '<div class="ptour" data-id="' + b.id + '">' +
        '<div class="tx"><b>' + title + "</b>" +
        "<span>" + t("refWord") + ": " + b.ref + " · " + t("dateWord") + ": " + b.tour_date +
        " · " + t("paxWord") + ": " + (b.pax_adults + b.pax_children) +
        " · " + t("totalWord") + ": " + money(b.total_cents, b.currency) +
        " · " + t("pay_" + b.payment) + "</span>" +
        '<span style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">' +
        (ag.whatsapp ? '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + esc(ag.whatsapp) + '">' + t("chatAgency") + "</a>" : "") +
        (canPay ? '<button class="btn btn-primary btn-sm ac-pay" data-ref="' + b.ref + '" data-token="' + b.manage_token + '">' + t("payNow") + "</button>" : "") +
        (canCancel ? '<button class="btn btn-outline btn-sm ac-cancel" data-id="' + b.id + '">' + t("cancelBooking") + "</button>" : "") +
        (canReview ? '<button class="btn btn-tint btn-sm ac-review" data-tour="' + b.tour_id + '" data-agency="' + b.agency_id + '" data-booking="' + b.id + '">' + t("writeReview") + "</button>" : "") +
        "</span>" +
        '<span class="ac-paybox" style="display:block;max-width:340px"></span>' +
        "</div>" + stPill(b.status) + "</div>";
    }).join("");

    box.querySelectorAll(".ac-cancel").forEach((btn) => btn.addEventListener("click", async () => {
      if (!window.confirm(t("confirmCancel"))) return;
      await B.setBookingStatus(btn.dataset.id, "cancelled_by_traveler");
      view();
    }));
    box.querySelectorAll(".ac-pay").forEach((btn) => btn.addEventListener("click", async () => {
      const holder = btn.closest(".tx").querySelector(".ac-paybox");
      holder.innerHTML = '<p class="footnote mt-2">' + t("payTitle") + "</p><div class='ppbox'></div>";
      btn.disabled = true;
      await window.TI_PAY.renderButtons(holder.querySelector(".ppbox"), btn.dataset.ref, btn.dataset.token,
        () => { holder.innerHTML = '<p class="freecancel">✓ ' + t("payDone") + "</p>"; setTimeout(view, 1500); },
        () => { holder.innerHTML = '<p class="footnote" style="color:#8E1020">' + t("payErr") + "</p>"; btn.disabled = false; });
    }));
    box.querySelectorAll(".ac-review").forEach((btn) => btn.addEventListener("click", () => {
      const tx = btn.closest(".tx");
      if (tx.querySelector(".rv-form")) return;
      const f = document.createElement("div");
      f.className = "rv-form form-grid mt-4";
      f.innerHTML = "<div><label>" + t("yourRating") + '</label><select class="rv-stars">' +
        [5, 4, 3, 2, 1].map((n) => '<option value="' + n + '">' + "★".repeat(n) + "</option>").join("") + "</select></div>" +
        "<div><label>" + t("reviewBody") + '</label><textarea class="rv-body"></textarea></div>' +
        '<button class="btn btn-primary btn-sm rv-send">' + t("submitReview") + "</button>";
      tx.appendChild(f);
      f.querySelector(".rv-send").addEventListener("click", async () => {
        const user = await B.getUser();
        const prof = await B.getProfile();
        await B.submitReview({
          tour_id: btn.dataset.tour, agency_id: btn.dataset.agency, booking_id: btn.dataset.booking,
          author_id: user.id, author_name: (prof && prof.full_name) || user.email.split("@")[0],
          rating: +f.querySelector(".rv-stars").value, body: f.querySelector(".rv-body").value.trim(),
          lang: TQ.getLang()
        });
        f.innerHTML = '<p class="freecancel">✓ ' + t("reviewSent") + "</p>";
      });
    }));
  }

  function renderWishlist(wl) {
    const box = document.getElementById("ac-wl"); if (!box) return;
    const tours = wl.map((w) => w.tours).filter(Boolean);
    if (!tours.length) { box.outerHTML = '<p class="subhead mt-4">' + t("noWishlist") + "</p>"; return; }
    box.innerHTML = tours.map((x) => {
      const img = (x.images && x.images[0]) || "";
      const src = img.startsWith("http") ? img : (window.IMG ? IMG(img || "babylon") : "");
      return '<article class="tcard"><a class="media" href="tour.html?id=' + x.id + '"><img alt="" src="' + src + '"/></a>' +
        '<div class="body"><h3><a href="tour.html?id=' + x.id + '">' + esc(L(x.title)) + "</a></h3>" +
        '<div class="foot"><span class="price"><b>' + (x.price_cents ? "$" + (x.price_cents / 100) : t("poa")) + "</b></span>" +
        '<a class="btn btn-tint btn-sm" href="tour.html?id=' + x.id + '">' + t("seeTour") + "</a></div></div></article>";
    }).join("");
  }

  TQ.onRender = view;
  TQ.init({ page: "account" });
})();
