/* ============================================================
   TooIraq — real provider portal (Supabase-backed).
   Activates only when the backend is configured; otherwise the
   localStorage prototype in app.js keeps running.
   Sections: dashboard · tours · editor · availability ·
   bookings · reviews · agency profile.
   ============================================================ */
(function () {
  "use strict";
  const B = window.TI_BACKEND;
  if (!B || !B.enabled) return;               // prototype handles backend-off
  const TQ = window.TooIraq;

  TQ.addStrings({
    ppSignLead: "Sign in to manage your agency, tours, availability and bookings.",
    ppNoAgency: "Your account isn't linked to an agency yet. If you applied with this email, we'll link it automatically once approved. Haven't applied?",
    ppApplyLink: "Apply to list your business",
    ppNavBookings: "Bookings", ppNavAvail: "Availability", ppNavReviews: "Reviews", ppNavProfile: "Agency profile",
    ppPendingReq: "Pending requests", ppEarnings: "Earnings (confirmed)", ppToursLive: "Published tours",
    ppRecent: "Latest bookings", ppNone: "Nothing here yet.",
    ppEdit: "Edit", ppPause: "Pause", ppResume: "Submit for review", ppNewTour: "➕ New tour",
    ppSaveDraft: "Save draft", ppSubmitReview: "Submit for review", ppSavedOk: "Saved ✓",
    ppImgs: "Photo URLs — one per line (uploads coming right after launch)",
    ppItinEn: "Itinerary — one step per line: Title | detail (English)",
    ppItinAr: "Itinerary — one step per line: Title | detail (Arabic)",
    ppLangs: "Tour languages (e.g. EN · AR · KU)", ppPickup: "Hotel pickup available",
    ppPolicy: "Cancellation policy", pol_free48: "Free up to 48h before", pol_free24: "Free up to 24h before", pol_nonrefundable: "Non-refundable",
    ts_draft: "Draft", ts_pending_review: "Pending review", ts_published: "Published", ts_paused: "Paused", ts_archived: "Archived",
    ppTraveler: "Traveler", ppConfirm: "Confirm", ppDecline: "Decline", ppComplete: "Completed", ppNoShow: "No-show",
    ppChatTraveler: "WhatsApp traveler",
    ppPickTour: "Choose a tour", ppAddDate: "Add date", ppDate: "Date", ppTime: "Start time", ppCap: "Capacity",
    ppPriceOv: "Price override $ (optional)", ppBooked: "booked", ppDel: "Delete",
    ppReplyPh: "Write a public reply…", ppReplySend: "Send reply", ppReplied: "Your reply",
    ppProfileLead: "This is what travelers see on your public profile.",
    ppWebsite: "Website", ppPhone: "Phone", ppLangsAg: "Languages you serve",
    ppLogout: "Log out",
    payShort_unpaid: "Unpaid", payShort_paid: "Paid ✓", payShort_refunded: "Refunded", payShort_partially_refunded: "Part-refunded"
  }, {
    ppSignLead: "سجّل الدخول لإدارة شركتك وجولاتك والمواعيد والحجوزات.",
    ppNoAgency: "حسابك غير مرتبط بشركة بعد. إذا قدّمت طلباً بهذا البريد فسنربطه تلقائياً بعد الموافقة. لم تقدّم طلباً؟",
    ppApplyLink: "قدّم طلب إدراج نشاطك",
    ppNavBookings: "الحجوزات", ppNavAvail: "المواعيد", ppNavReviews: "التقييمات", ppNavProfile: "ملف الشركة",
    ppPendingReq: "طلبات معلّقة", ppEarnings: "الأرباح (المؤكدة)", ppToursLive: "جولات منشورة",
    ppRecent: "أحدث الحجوزات", ppNone: "لا شيء هنا بعد.",
    ppEdit: "تعديل", ppPause: "إيقاف مؤقت", ppResume: "إرسال للمراجعة", ppNewTour: "➕ جولة جديدة",
    ppSaveDraft: "حفظ مسودة", ppSubmitReview: "إرسال للمراجعة", ppSavedOk: "تم الحفظ ✓",
    ppImgs: "روابط الصور — رابط في كل سطر (رفع الملفات يتوفر بعد الإطلاق مباشرة)",
    ppItinEn: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (إنجليزي)",
    ppItinAr: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (عربي)",
    ppLangs: "لغات الجولة (مثال: EN · AR · KU)", ppPickup: "توصيل من الفندق متاح",
    ppPolicy: "سياسة الإلغاء", pol_free48: "مجاني حتى ٤٨ ساعة", pol_free24: "مجاني حتى ٢٤ ساعة", pol_nonrefundable: "غير قابل للاسترجاع",
    ts_draft: "مسودة", ts_pending_review: "قيد المراجعة", ts_published: "منشورة", ts_paused: "موقوفة", ts_archived: "مؤرشفة",
    ppTraveler: "المسافر", ppConfirm: "تأكيد", ppDecline: "رفض", ppComplete: "اكتملت", ppNoShow: "لم يحضر",
    ppChatTraveler: "راسل المسافر على واتساب",
    ppPickTour: "اختر جولة", ppAddDate: "أضف موعداً", ppDate: "التاريخ", ppTime: "وقت البدء", ppCap: "السعة",
    ppPriceOv: "سعر خاص $ (اختياري)", ppBooked: "محجوز", ppDel: "حذف",
    ppReplyPh: "اكتب رداً علنياً…", ppReplySend: "إرسال الرد", ppReplied: "ردّك",
    ppProfileLead: "هذا ما يراه المسافرون في ملفك العام.",
    ppWebsite: "الموقع الإلكتروني", ppPhone: "الهاتف", ppLangsAg: "اللغات التي تخدم بها",
    ppLogout: "تسجيل الخروج",
    payShort_unpaid: "غير مدفوع", payShort_paid: "مدفوع ✓", payShort_refunded: "مسترجع", payShort_partially_refunded: "استرجاع جزئي"
  });

  const t = TQ.t, esc = TQ.esc, L = TQ.L;
  const money = (c) => "$" + ((c || 0) / 100).toFixed(2).replace(/\.00$/, "");
  const root = () => document.getElementById("portal-root");
  let agency = null, section = "dash", editId = null;

  const stPill = (s) => {
    const cls = s === "published" || s === "confirmed" || s === "completed" ? "pill-live" : "pill-pending";
    return '<span class="pill-status ' + cls + '">' + (t("ts_" + s) !== "ts_" + s ? t("ts_" + s) : t("st_" + s)) + "</span>";
  };

  async function view() {
    const el = root(); if (!el) return;
    const user = await B.getUser();
    if (!user) return viewAuth(el);
    if (!agency) {
      const mine = await B.myAgencies();
      if (!mine.length) {
        await B.claimApplication(user.email);
        const retry = await B.myAgencies();
        if (!retry.length) return viewNoAgency(el);
        agency = retry[0];
      } else agency = mine[0];
    }
    viewShell(el);
  }

  /* ---------- auth ---------- */
  function viewAuth(el) {
    el.innerHTML =
      '<div class="container"><div class="auth-card panel">' +
      '<h1 class="t2">' + t("portalTitle") + '</h1><p class="subhead mt-2">' + t("ppSignLead") + "</p>" +
      '<div class="form-grid mt-4">' +
      "<div><label>" + t("plEmail") + '</label><input type="email" id="pl-email"/></div>' +
      "<div><label>" + t("plPass") + '</label><input type="password" id="pl-pass"/></div>' +
      '<div id="pl-err" class="form-note hide" style="color:#8E1020"></div>' +
      '<button class="btn btn-primary btn-block" id="pl-in">' + t("signIn") + "</button>" +
      '<button class="btn btn-tint btn-block" id="pl-up">' + t("signUp") + "</button>" +
      "</div></div></div>";
    const err = (m) => { const e = document.getElementById("pl-err"); e.textContent = m; e.classList.remove("hide"); };
    const go = async (mode) => {
      const email = document.getElementById("pl-email").value.trim();
      const pass = document.getElementById("pl-pass").value;
      if (!email || !pass) return err(t("authErr"));
      const r = mode === "in" ? await B.signIn(email, pass) : await B.signUp(email, pass, "");
      if (r.error) return err(r.error.message);
      if (mode === "up" && !(r.data && r.data.session)) return err(t("signUpDone"));
      view();
    };
    document.getElementById("pl-in").addEventListener("click", () => go("in"));
    document.getElementById("pl-up").addEventListener("click", () => go("up"));
  }

  function viewNoAgency(el) {
    el.innerHTML =
      '<div class="container"><div class="auth-card panel center">' +
      '<h1 class="t2">' + t("portalTitle") + "</h1>" +
      '<p class="subhead mt-4">' + t("ppNoAgency") + "</p>" +
      '<a class="btn btn-primary mt-4" href="join.html">' + t("ppApplyLink") + "</a>" +
      '<button class="btn btn-outline btn-block mt-4" id="pl-out">' + t("ppLogout") + "</button>" +
      "</div></div>";
    document.getElementById("pl-out").addEventListener("click", async () => { await B.signOut(); agency = null; view(); });
  }

  /* ---------- shell ---------- */
  function viewShell(el) {
    const navItem = (id, ic, key) =>
      '<a href="#' + id + '" data-sec="' + id + '"' + (section === id ? ' class="active"' : "") + ">" + ic + " " + t(key) + "</a>";
    el.innerHTML =
      '<div class="container portal-shell">' +
      '<aside class="portal-nav">' +
      navItem("dash", "📊", "pNavDash") +
      navItem("tours", "🗂", "pNavTours") +
      navItem("bookings", "📥", "ppNavBookings") +
      navItem("avail", "📅", "ppNavAvail") +
      navItem("reviews", "⭐", "ppNavReviews") +
      navItem("profile", "🏷", "ppNavProfile") +
      '<a href="#" id="p-out">↩ ' + t("ppLogout") + "</a></aside>" +
      '<div id="p-content"></div></div>';
    el.querySelectorAll("[data-sec]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); section = a.dataset.sec; editId = null; viewShell(el);
    }));
    document.getElementById("p-out").addEventListener("click", async (e) => {
      e.preventDefault(); await B.signOut(); agency = null; section = "dash"; view();
    });
    const c = document.getElementById("p-content");
    if (section === "dash") secDash(c);
    else if (section === "tours") secTours(c);
    else if (section === "edit") secEditor(c);
    else if (section === "bookings") secBookings(c);
    else if (section === "avail") secAvail(c);
    else if (section === "reviews") secReviews(c);
    else if (section === "profile") secProfile(c);
  }

  /* ---------- dashboard ---------- */
  async function secDash(c) {
    const [tours, bookings] = await Promise.all([B.agencyTours(agency.id), B.agencyBookings(agency.id)]);
    const live = tours.filter((x) => x.status === "published").length;
    const pending = bookings.filter((x) => x.status === "pending").length;
    const earn = bookings.filter((x) => ["confirmed", "completed"].includes(x.status))
      .reduce((s, x) => s + (x.total_cents || 0), 0);
    c.innerHTML =
      '<h1 class="t2">' + esc(L(agency.name)) + "</h1>" +
      '<div class="stat-row mt-4">' +
      '<div class="stat"><div class="v">' + pending + '</div><div class="l">' + t("ppPendingReq") + "</div></div>" +
      '<div class="stat"><div class="v">' + money(earn) + '</div><div class="l">' + t("ppEarnings") + "</div></div>" +
      '<div class="stat"><div class="v">' + live + '</div><div class="l">' + t("ppToursLive") + "</div></div></div>" +
      '<div class="panel"><h2>' + t("ppRecent") + '</h2><div id="pd-recent"></div></div>';
    document.getElementById("pd-recent").innerHTML = bookings.length
      ? bookings.slice(0, 8).map(bookingRow).join("")
      : '<p class="subhead mt-4">' + t("ppNone") + "</p>";
    wireBookingActions(c);
  }

  /* ---------- tours list ---------- */
  async function secTours(c) {
    const tours = await B.agencyTours(agency.id);
    c.innerHTML =
      '<div class="section-head"><h1 class="t2">' + t("pYourTours") + '</h1>' +
      '<button class="btn btn-primary btn-sm" id="pt-new">' + t("ppNewTour") + "</button></div>" +
      '<div class="panel">' +
      (tours.length ? tours.map((x) =>
        '<div class="ptour"><div class="tx"><b>' + esc(L(x.title)) + "</b>" +
        "<span>" + (x.price_cents ? money(x.price_cents) : t("poa")) + " · " + esc(x.city_id || "") + "</span></div>" +
        stPill(x.status) +
        '<button class="btn btn-outline btn-sm pt-edit" data-id="' + x.id + '">' + t("ppEdit") + "</button>" +
        (x.status === "published"
          ? '<button class="btn btn-outline btn-sm pt-pause" data-id="' + x.id + '">' + t("ppPause") + "</button>"
          : (x.status !== "pending_review"
            ? '<button class="btn btn-tint btn-sm pt-submit" data-id="' + x.id + '">' + t("ppResume") + "</button>" : "")) +
        "</div>").join("")
        : '<p class="subhead">' + t("ppNone") + "</p>") +
      "</div>";
    document.getElementById("pt-new").addEventListener("click", () => { editId = null; section = "edit"; viewShell(root()); });
    c.querySelectorAll(".pt-edit").forEach((b) => b.addEventListener("click", () => { editId = b.dataset.id; section = "edit"; viewShell(root()); }));
    c.querySelectorAll(".pt-pause").forEach((b) => b.addEventListener("click", async () => { await B.saveTour({ id: b.dataset.id, status: "paused" }); secTours(c); }));
    c.querySelectorAll(".pt-submit").forEach((b) => b.addEventListener("click", async () => { await B.saveTour({ id: b.dataset.id, status: "pending_review" }); secTours(c); }));
  }

  /* ---------- tour editor ---------- */
  async function secEditor(c) {
    let x = { title: {}, description: {}, highlights: { en: [], ar: [] }, itinerary: [], meeting: {}, images: [], langs: [] };
    if (editId) {
      const tours = await B.agencyTours(agency.id);
      x = tours.find((z) => z.id === editId) || x;
    }
    const cityOpts = CITIES.map((z) => '<option value="' + z.id + '"' + (x.city_id === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
    const typeOpts = TYPES.map((z) => '<option value="' + z.id + '"' + (x.type_id === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
    const polOpts = ["free48", "free24", "nonrefundable"].map((p) =>
      '<option value="' + p + '"' + (x.cancel === p ? " selected" : "") + ">" + t("pol_" + p) + "</option>").join("");
    const itinTxt = (side) => (x.itinerary || []).map((s) => (L2(s.t, side) + " | " + L2(s.d, side))).join("\n");
    const L2 = (o, side) => (o && o[side]) || "";

    c.innerHTML =
      '<h1 class="t2">' + (editId ? t("ppEdit") : t("pAddTitle")) + "</h1>" +
      '<div class="panel mt-4"><div class="form-grid">' +
      '<div class="form-row"><div><label>' + t("pfTitleEn") + '</label><input id="pe-ten" value="' + esc(x.title.en || "") + '"/></div>' +
      "<div><label>" + t("pfTitleAr") + '</label><input id="pe-tar" dir="rtl" value="' + esc(x.title.ar || "") + '"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfCity") + '</label><select id="pe-city">' + cityOpts + "</select></div>" +
      "<div><label>" + t("pfType") + '</label><select id="pe-type">' + typeOpts + "</select></div></div>" +
      '<div class="form-row"><div><label>' + t("pfDays") + '</label><input id="pe-days" type="number" min="1" value="' + (x.days || 1) + '"/></div>' +
      "<div><label>" + t("pfHours") + '</label><input id="pe-hours" type="number" min="1" max="24" value="' + (x.hours || 8) + '"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfPrice") + '</label><input id="pe-price" type="number" min="0" value="' + Math.round((x.price_cents || 0) / 100) + '"/></div>' +
      "<div><label>" + t("pfGroup") + '</label><input id="pe-group" type="number" min="1" value="' + (x.group_max || 10) + '"/></div></div>' +
      '<div class="form-row"><div><label>' + t("ppPolicy") + '</label><select id="pe-pol">' + polOpts + "</select></div>" +
      "<div><label>" + t("ppLangs") + '</label><input id="pe-langs" value="' + esc((x.langs || []).join(" ")) + '" placeholder="EN AR"/></div></div>' +
      '<div><label class="f-check"><input type="checkbox" id="pe-pickup"' + (x.pickup ? " checked" : "") + "/>" + t("ppPickup") + "</label></div>" +
      "<div><label>" + t("pfDescEn") + '</label><textarea id="pe-den">' + esc(x.description.en || "") + "</textarea></div>" +
      "<div><label>" + t("pfDescAr") + '</label><textarea id="pe-dar" dir="rtl">' + esc(x.description.ar || "") + "</textarea></div>" +
      '<div class="form-row"><div><label>' + t("pfHi") + '</label><textarea id="pe-hen">' + esc((x.highlights.en || []).join("\n")) + "</textarea></div>" +
      "<div><label>" + t("pfHiAr") + '</label><textarea id="pe-har" dir="rtl">' + esc((x.highlights.ar || []).join("\n")) + "</textarea></div></div>" +
      '<div class="form-row"><div><label>' + t("ppItinEn") + '</label><textarea id="pe-ien">' + esc(itinTxt("en")) + "</textarea></div>" +
      "<div><label>" + t("ppItinAr") + '</label><textarea id="pe-iar" dir="rtl">' + esc(itinTxt("ar")) + "</textarea></div></div>" +
      '<div class="form-row"><div><label>' + t("pfMeet") + ' (EN)</label><input id="pe-men" value="' + esc(x.meeting.en || "") + '"/></div>' +
      "<div><label>" + t("pfMeet") + ' (AR)</label><input id="pe-mar" dir="rtl" value="' + esc(x.meeting.ar || "") + '"/></div></div>' +
      "<div><label>" + t("ppImgs") + '</label><textarea id="pe-imgs">' + esc((x.images || []).join("\n")) + "</textarea></div>" +
      '<div id="pe-msg" class="form-note"></div>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '<button class="btn btn-outline" id="pe-draft">' + t("ppSaveDraft") + "</button>" +
      '<button class="btn btn-primary" id="pe-send">' + t("ppSubmitReview") + "</button></div>" +
      "</div></div>";

    const gv = (id) => document.getElementById(id).value;
    const parseItin = () => {
      const en = gv("pe-ien").split("\n").filter((s) => s.trim());
      const ar = gv("pe-iar").split("\n").filter((s) => s.trim());
      return en.map((line, i) => {
        const [te, de] = line.split("|").map((s) => (s || "").trim());
        const [ta, da] = (ar[i] || "").split("|").map((s) => (s || "").trim());
        return { t: { en: te || "", ar: ta || te || "" }, d: { en: de || "", ar: da || de || "" } };
      });
    };
    const save = async (status) => {
      const payload = {
        agency_id: agency.id, status: status,
        title: { en: gv("pe-ten").trim(), ar: gv("pe-tar").trim() || gv("pe-ten").trim() },
        description: { en: gv("pe-den").trim(), ar: gv("pe-dar").trim() },
        city_id: gv("pe-city"), type_id: gv("pe-type"),
        days: +gv("pe-days") || 1, hours: +gv("pe-hours") || null,
        price_cents: Math.round((+gv("pe-price") || 0) * 100),
        group_max: +gv("pe-group") || 10,
        cancel: gv("pe-pol"),
        langs: gv("pe-langs").split(/[\s,·]+/).filter(Boolean).map((s) => s.toUpperCase()),
        pickup: document.getElementById("pe-pickup").checked,
        highlights: { en: gv("pe-hen").split("\n").filter((s) => s.trim()), ar: gv("pe-har").split("\n").filter((s) => s.trim()) },
        itinerary: parseItin(),
        meeting: { en: gv("pe-men").trim(), ar: gv("pe-mar").trim() || gv("pe-men").trim() },
        images: gv("pe-imgs").split("\n").map((s) => s.trim()).filter(Boolean)
      };
      if (editId) payload.id = editId;
      const r = await B.saveTour(payload);
      const msg = document.getElementById("pe-msg");
      if (r && r.error) { msg.textContent = r.error.message; msg.style.color = "#8E1020"; return; }
      msg.textContent = t("ppSavedOk"); msg.style.color = "var(--color-accent)";
      if (r && r.data && r.data.id) editId = r.data.id;
    };
    document.getElementById("pe-draft").addEventListener("click", () => save(editId && x.status && x.status !== "draft" ? x.status : "draft"));
    document.getElementById("pe-send").addEventListener("click", () => save("pending_review"));
  }

  /* ---------- bookings ---------- */
  function bookingRow(bk) {
    const canAct = bk.status === "pending";
    const canFinish = bk.status === "confirmed";
    return '<div class="ptour"><div class="tx">' +
      "<b>" + esc(bk.tours ? L(bk.tours.title) : "") + " · " + bk.ref + "</b>" +
      "<span>" + bk.tour_date + " · " + (bk.pax_adults + bk.pax_children) + "👤 · " +
      money(bk.total_cents) + " · " + t("payShort_" + bk.payment) +
      " · " + t("ppTraveler") + ": " + esc(bk.contact_name) + "</span>" +
      '<span style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">' +
      '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + esc((bk.contact_whatsapp || "").replace(/[^\d]/g, "")) + '?text=' + encodeURIComponent("TooIraq " + bk.ref) + '">' + t("ppChatTraveler") + "</a>" +
      (canAct ? '<button class="btn btn-green btn-sm pb-act" data-id="' + bk.id + '" data-st="confirmed">' + t("ppConfirm") + "</button>" +
        '<button class="btn btn-outline btn-sm pb-act" data-id="' + bk.id + '" data-st="declined">' + t("ppDecline") + "</button>" : "") +
      (canFinish ? '<button class="btn btn-tint btn-sm pb-act" data-id="' + bk.id + '" data-st="completed">' + t("ppComplete") + "</button>" +
        '<button class="btn btn-outline btn-sm pb-act" data-id="' + bk.id + '" data-st="no_show">' + t("ppNoShow") + "</button>" : "") +
      "</span></div>" + stPill(bk.status) + "</div>";
  }
  function wireBookingActions(scope) {
    scope.querySelectorAll(".pb-act").forEach((b) => b.addEventListener("click", async () => {
      b.disabled = true;
      await B.setBookingStatus(b.dataset.id, b.dataset.st);
      viewShell(root());
    }));
  }
  async function secBookings(c) {
    const bookings = await B.agencyBookings(agency.id);
    c.innerHTML = '<h1 class="t2">' + t("ppNavBookings") + '</h1><div class="panel mt-4">' +
      (bookings.length ? bookings.map(bookingRow).join("") : '<p class="subhead">' + t("ppNone") + "</p>") + "</div>";
    wireBookingActions(c);
  }

  /* ---------- availability ---------- */
  async function secAvail(c) {
    const tours = (await B.agencyTours(agency.id)).filter((x) => ["published", "pending_review", "paused", "draft"].includes(x.status));
    const opts = tours.map((x, i) => '<option value="' + x.id + '"' + (i === 0 ? " selected" : "") + ">" + esc(L(x.title)) + "</option>").join("");
    c.innerHTML =
      '<h1 class="t2">' + t("ppNavAvail") + "</h1>" +
      '<div class="panel mt-4"><div class="form-grid">' +
      "<div><label>" + t("ppPickTour") + '</label><select id="pa-tour">' + opts + "</select></div>" +
      '<div class="form-row"><div><label>' + t("ppDate") + '</label><input type="date" id="pa-date"/></div>' +
      "<div><label>" + t("ppTime") + '</label><input type="time" id="pa-time" value="09:00"/></div></div>' +
      '<div class="form-row"><div><label>' + t("ppCap") + '</label><input type="number" id="pa-cap" min="1" value="10"/></div>' +
      "<div><label>" + t("ppPriceOv") + '</label><input type="number" id="pa-ov" min="0" placeholder="—"/></div></div>' +
      '<button class="btn btn-primary" id="pa-add">' + t("ppAddDate") + "</button>" +
      '</div></div><div class="panel mt-4" id="pa-list"></div>';
    const list = async () => {
      const tid = document.getElementById("pa-tour").value;
      if (!tid) { document.getElementById("pa-list").innerHTML = '<p class="subhead">' + t("ppNone") + "</p>"; return; }
      const rows = await B.listSessions(tid);
      document.getElementById("pa-list").innerHTML = rows.length ? rows.map((s) =>
        '<div class="ptour"><div class="tx"><b>' + s.start_date + (s.start_time ? " · " + s.start_time.slice(0, 5) : "") + "</b>" +
        "<span>" + s.booked + "/" + s.capacity + " " + t("ppBooked") +
        (s.price_override_cents ? " · " + money(s.price_override_cents) : "") + "</span></div>" +
        stPill(s.status === "open" ? "published" : "paused") +
        '<button class="btn btn-outline btn-sm pa-del" data-id="' + s.id + '">' + t("ppDel") + "</button></div>").join("")
        : '<p class="subhead">' + t("ppNone") + "</p>";
      document.querySelectorAll(".pa-del").forEach((b) => b.addEventListener("click", async () => { await B.deleteSession(b.dataset.id); list(); }));
    };
    document.getElementById("pa-tour").addEventListener("change", list);
    document.getElementById("pa-add").addEventListener("click", async () => {
      const tid = document.getElementById("pa-tour").value;
      const d = document.getElementById("pa-date").value;
      if (!tid || !d) return;
      await B.saveSessions(tid, [{
        start_date: d, start_time: document.getElementById("pa-time").value || null,
        capacity: +document.getElementById("pa-cap").value || 10,
        price_override_cents: document.getElementById("pa-ov").value ? Math.round(+document.getElementById("pa-ov").value * 100) : null
      }]);
      list();
    });
    list();
  }

  /* ---------- reviews ---------- */
  async function secReviews(c) {
    const rows = await B.agencyReviews(agency.id);
    c.innerHTML = '<h1 class="t2">' + t("ppNavReviews") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map((r) =>
        '<div class="review"><div class="who"><span class="av">' + esc((r.author_name || "?").slice(0, 1)) + "</span>" +
        "<div><b>" + esc(r.author_name) + "</b><br><span>" + esc(r.tours ? L(r.tours.title) : "") + "</span></div>" +
        '<span style="margin-inline-start:auto">' + TQ.starsHTML(r.rating) + " " + stPill(r.status === "approved" ? "published" : "pending_review") + "</span></div>" +
        "<p>" + esc(r.body) + "</p>" +
        (r.reply_body
          ? '<p class="footnote mt-2"><b>' + t("ppReplied") + ":</b> " + esc(r.reply_body) + "</p>"
          : '<div class="form-grid mt-2"><textarea class="pr-reply" placeholder="' + t("ppReplyPh") + '"></textarea>' +
            '<button class="btn btn-tint btn-sm pr-send" data-id="' + r.id + '">' + t("ppReplySend") + "</button></div>") +
        "</div>").join("")
        : '<p class="subhead">' + t("ppNone") + "</p>") + "</div>";
    c.querySelectorAll(".pr-send").forEach((b) => b.addEventListener("click", async () => {
      const body = b.closest(".form-grid").querySelector(".pr-reply").value.trim();
      if (!body) return;
      await B.replyReview(b.dataset.id, body);
      secReviews(c);
    }));
  }

  /* ---------- agency profile ---------- */
  function secProfile(c) {
    const a = agency;
    c.innerHTML =
      '<h1 class="t2">' + t("ppNavProfile") + '</h1><p class="subhead mt-2">' + t("ppProfileLead") + "</p>" +
      '<div class="panel mt-4"><div class="form-grid">' +
      '<div class="form-row"><div><label>' + t("jBusiness") + ' (EN)</label><input id="pg-nen" value="' + esc((a.name || {}).en || "") + '"/></div>' +
      "<div><label>" + t("jBusiness") + ' (AR)</label><input id="pg-nar" dir="rtl" value="' + esc((a.name || {}).ar || "") + '"/></div></div>' +
      '<div class="form-row"><div><label>' + t("jCity") + ' (EN)</label><input id="pg-ben" value="' + esc((a.base || {}).en || "") + '"/></div>' +
      "<div><label>" + t("jCity") + ' (AR)</label><input id="pg-bar" dir="rtl" value="' + esc((a.base || {}).ar || "") + '"/></div></div>' +
      "<div><label>" + t("jDesc") + ' (EN)</label><textarea id="pg-den">' + esc((a.description || {}).en || "") + "</textarea></div>" +
      "<div><label>" + t("jDesc") + ' (AR)</label><textarea id="pg-dar" dir="rtl">' + esc((a.description || {}).ar || "") + "</textarea></div>" +
      '<div class="form-row"><div><label>' + t("jWa") + '</label><input id="pg-wa" value="' + esc(a.whatsapp || "") + '"/></div>' +
      "<div><label>" + t("ppPhone") + '</label><input id="pg-ph" value="' + esc(a.phone || "") + '"/></div></div>' +
      '<div class="form-row"><div><label>' + t("ppWebsite") + '</label><input id="pg-web" value="' + esc(a.website || "") + '"/></div>' +
      "<div><label>" + t("ppLangsAg") + '</label><input id="pg-langs" value="' + esc((a.langs || []).join(" ")) + '" placeholder="EN AR"/></div></div>' +
      '<div id="pg-msg" class="form-note"></div>' +
      '<button class="btn btn-primary" id="pg-save">' + t("save") + "</button>" +
      "</div></div>";
    document.getElementById("pg-save").addEventListener("click", async () => {
      const gv = (id) => document.getElementById(id).value;
      const patch = {
        name: { en: gv("pg-nen").trim(), ar: gv("pg-nar").trim() },
        base: { en: gv("pg-ben").trim(), ar: gv("pg-bar").trim() },
        description: { en: gv("pg-den").trim(), ar: gv("pg-dar").trim() },
        whatsapp: gv("pg-wa").trim().replace(/[^\d]/g, ""),
        phone: gv("pg-ph").trim(), website: gv("pg-web").trim(),
        langs: gv("pg-langs").split(/[\s,·]+/).filter(Boolean).map((s) => s.toLowerCase())
      };
      await B.updateAgency(agency.id, patch);
      Object.assign(agency, patch);
      const m = document.getElementById("pg-msg");
      m.textContent = t("ppSavedOk"); m.style.color = "var(--color-accent)";
    });
  }

  TQ.onRender = view;
  TQ.init({ page: "portal-live" });
})();
