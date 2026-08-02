/* ============================================================
   Iraq Tour — admin panel (role: admin only).
   Applications · agencies · tour review · bookings · reviews ·
   settings · audit. English-first UI (Max), still lang-aware.
   ============================================================ */
(function () {
  "use strict";
  const B = window.TI_BACKEND;
  const TQ = window.TooIraq;

  TQ.addStrings({
    adTitle: "Iraq Tour Admin", adLead: "Approvals, moderation, bookings and settings.",
    adNotAdmin: "This account doesn't have admin access.",
    adOff: "Backend not configured yet.",
    adApps: "Applications", adAgencies: "Agencies", adTours: "Tour review", adBookings: "Bookings",
    adReviews: "Review moderation", adSettings: "Settings", adAudit: "Audit log",
    adApprove: "Approve", adReject: "Reject", adPublish: "Publish", adUnpublish: "Unpublish",
    adVerify: "Verify ✓", adUnverify: "Remove verified", adSuspend: "Suspend", adRestore: "Restore",
    adNone: "Nothing here.", adSlugAsk: "URL slug for the new agency (letters/dashes):",
    adWaSetting: "Central contact WhatsApp (footer/contact page)", adRate: "USD → IQD display rate",
    adSaved: "Saved ✓", adPendingRev: "pending review", adNew: "new",
    adDemoNote: "Demo admin (testing phase) — sample data, and changes save only in this browser. The real admin panel activates automatically once the Supabase keys are added (see backend/README.md).",
    adUser: "Username", adBad: "Wrong username or password.",
    adOverview: "Overview", adStatAgencies: "Agencies listed", adStatTours: "Tours listed",
    adStatPending: "Real operators pending onboarding", adStatAbroad: "Outbound (abroad) tours",
    adStatDrafts: "Provider drafts awaiting review",
    adDraftBy: "Draft by", adDemoVerify: "Verified (demo)", adLogout: "Log out"
  }, {
    adTitle: "إدارة Iraq Tour", adLead: "الموافقات والإشراف والحجوزات والإعدادات.",
    adNotAdmin: "هذا الحساب لا يملك صلاحية الإدارة.",
    adOff: "قاعدة البيانات غير مفعّلة بعد.",
    adApps: "الطلبات", adAgencies: "الشركات", adTours: "مراجعة الجولات", adBookings: "الحجوزات",
    adReviews: "إشراف التقييمات", adSettings: "الإعدادات", adAudit: "سجل التدقيق",
    adApprove: "موافقة", adReject: "رفض", adPublish: "نشر", adUnpublish: "إلغاء النشر",
    adVerify: "توثيق ✓", adUnverify: "إزالة التوثيق", adSuspend: "تعليق", adRestore: "استعادة",
    adNone: "لا شيء هنا.", adSlugAsk: "معرّف الرابط للشركة الجديدة (أحرف/شرطات):",
    adWaSetting: "واتساب التواصل المركزي (التذييل/صفحة الاتصال)", adRate: "سعر التحويل دولار → دينار",
    adSaved: "تم الحفظ ✓", adPendingRev: "قيد المراجعة", adNew: "جديد",
    adDemoNote: "إدارة تجريبية (مرحلة اختبار) — بيانات عينة، وتغييراتك تُحفظ في هذا المتصفح فقط. لوحة الإدارة الفعلية تتفعّل تلقائياً عند إضافة مفاتيح Supabase (راجع backend/README.md).",
    adUser: "اسم المستخدم", adBad: "اسم المستخدم أو كلمة المرور غير صحيحة.",
    adOverview: "نظرة عامة", adStatAgencies: "الشركات المدرجة", adStatTours: "الجولات المدرجة",
    adStatPending: "شركات حقيقية بانتظار الانضمام", adStatAbroad: "جولات السفر للخارج",
    adStatDrafts: "مسودات المزوّدين بانتظار المراجعة",
    adDraftBy: "مسودة من", adDemoVerify: "موثقة (تجريبي)", adLogout: "تسجيل الخروج"
  });

  const t = TQ.t, esc = TQ.esc, L = TQ.L;
  const money = (c) => "$" + ((c || 0) / 100).toFixed(2).replace(/\.00$/, "");
  let section = "apps";

  /* ---------- demo admin (backend off — Max's testing credentials) ---------- */
  const S = TQ.store;
  function demoAuthView(el) {
    el.innerHTML =
      '<div class="container"><div class="auth-card panel">' +
      '<h1 class="t2">' + t("adTitle") + '</h1><p class="subhead mt-2">' + t("adLead") + "</p>" +
      '<div class="form-grid mt-4">' +
      "<div><label>" + t("adUser") + '</label><input id="ad-user" autocomplete="username" placeholder="admin"/></div>' +
      "<div><label>" + t("plPass") + '</label><input type="password" id="ad-pass" autocomplete="current-password" placeholder="••••••"/></div>' +
      '<div id="ad-err" class="form-note hide" style="color:#8E1020"></div>' +
      '<button class="btn btn-primary btn-block" id="ad-go">' + t("plBtn") + "</button>" +
      "</div></div></div>";
    const go = () => {
      const u = document.getElementById("ad-user").value.trim().toLowerCase();
      const p = document.getElementById("ad-pass").value;
      if (u === "admin" && p === "123456") { S.set("tooiraq-admin", "1"); demoView(); }
      else { const e2 = document.getElementById("ad-err"); e2.textContent = t("adBad"); e2.classList.remove("hide"); }
    };
    document.getElementById("ad-go").addEventListener("click", go);
    document.getElementById("ad-pass").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  }

  function demoView() {
    const el = document.getElementById("admin-root"); if (!el) return;
    if (S.get("tooiraq-admin") !== "1") return demoAuthView(el);

    let drafts = [];
    try { drafts = JSON.parse(S.get("tooiraq-drafts") || "[]"); } catch (e) {}
    let verified = {};
    try { verified = JSON.parse(S.get("tooiraq-admin-verify") || "{}"); } catch (e) {}
    const pendingDrafts = drafts.filter((d) => d.status !== "approved");
    const agencyName = (id) => { const a = AGENCIES.find((x) => x.id === id); return a ? L(a.name) : id; };

    const stat = (v, k) => '<div class="stat"><div class="v">' + v + '</div><div class="l">' + t(k) + "</div></div>";
    el.innerHTML =
      '<div class="container" style="padding:24px 0 64px">' +
      '<h1 class="t2">' + t("adTitle") + '</h1>' +
      '<div class="notice-proto mt-4">' + t("adDemoNote") + "</div>" +
      '<h2 class="mt-4">' + t("adOverview") + "</h2>" +
      '<div class="stat-row mt-2">' +
      stat(AGENCIES.length, "adStatAgencies") + stat(TOURS.length, "adStatTours") +
      stat(AGENCIES.filter((a) => a.pending).length, "adStatPending") + "</div>" +
      '<div class="stat-row mt-2">' +
      stat(TOURS.filter((x) => x.abroad).length, "adStatAbroad") + stat(pendingDrafts.length, "adStatDrafts") + "</div>" +

      '<div class="panel mt-4"><h2>' + t("adTours") + '</h2><div id="ad-drafts">' +
      (drafts.length ? drafts.map((d, i) =>
        '<div class="ptour"><div class="tx"><b>' + esc(L(d.title)) + "</b>" +
        "<span>" + t("adDraftBy") + " " + esc(agencyName(d.agency)) + " · $" + (d.price || 0) + "</span></div>" +
        '<span class="pill-status ' + (d.status === "approved" ? "pill-live" : "pill-pending") + '">' + (d.status === "approved" ? t("adPublish") + "ed" : t("adPendingRev")) + "</span>" +
        (d.status !== "approved" ? '<button class="btn btn-green btn-sm ad-appr" data-i="' + i + '">' + t("adApprove") + "</button>" : "") +
        '<button class="btn btn-outline btn-sm ad-rej" data-i="' + i + '">' + t("adReject") + "</button></div>").join("")
        : '<p class="subhead">' + t("adNone") + "</p>") + "</div></div>" +

      '<div class="panel mt-4"><h2>' + t("adAgencies") + "</h2>" +
      AGENCIES.map((a) =>
        '<div class="ptour"><div class="tx"><b>' + esc(L(a.name)) + "</b>" +
        "<span>" + esc(L(a.base)) + " · " + TOURS.filter((x) => x.agency === a.id).length + " " + t("adStatTours").toLowerCase() + "</span></div>" +
        '<span class="pill-status ' + ((verified[a.id] !== undefined ? verified[a.id] : a.verified) ? "pill-live" : "pill-pending") + '">' +
        ((verified[a.id] !== undefined ? verified[a.id] : a.verified) ? t("adDemoVerify") : (a.pending ? t("adPendingRev") : t("adNew"))) + "</span>" +
        '<button class="btn btn-outline btn-sm ad-ver" data-id="' + a.id + '">' +
        ((verified[a.id] !== undefined ? verified[a.id] : a.verified) ? t("adUnverify") : t("adVerify")) + "</button></div>").join("") +
      "</div>" +

      '<div class="panel mt-4"><h2>' + t("adSettings") + '</h2><div class="form-grid">' +
      "<div><label>" + t("adWaSetting") + '</label><input id="ad-wa" value="' + esc((S.get("tooiraq-admin-wa") || "")) + '"/></div>' +
      "<div><label>" + t("adRate") + '</label><input id="ad-rate" type="number" value="' + esc(S.get("tooiraq-admin-rate") || "1310") + '"/></div>' +
      '<div id="ad-smsg" class="form-note"></div>' +
      '<button class="btn btn-primary" id="ad-ssave">' + t("adSaved").replace(" ✓", "") + "</button></div></div>" +

      '<button class="btn btn-outline mt-4" id="ad-out">↩ ' + t("adLogout") + "</button>" +
      "</div>";

    el.querySelectorAll(".ad-appr").forEach((b) => b.addEventListener("click", () => {
      drafts[+b.dataset.i].status = "approved"; S.set("tooiraq-drafts", JSON.stringify(drafts)); demoView();
    }));
    el.querySelectorAll(".ad-rej").forEach((b) => b.addEventListener("click", () => {
      drafts.splice(+b.dataset.i, 1); S.set("tooiraq-drafts", JSON.stringify(drafts)); demoView();
    }));
    el.querySelectorAll(".ad-ver").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.id, a = AGENCIES.find((x) => x.id === id);
      verified[id] = !(verified[id] !== undefined ? verified[id] : (a && a.verified));
      S.set("tooiraq-admin-verify", JSON.stringify(verified)); demoView();
    }));
    document.getElementById("ad-ssave").addEventListener("click", () => {
      S.set("tooiraq-admin-wa", document.getElementById("ad-wa").value.trim());
      S.set("tooiraq-admin-rate", document.getElementById("ad-rate").value);
      const m = document.getElementById("ad-smsg"); m.textContent = t("adSaved"); m.style.color = "var(--color-accent)";
    });
    document.getElementById("ad-out").addEventListener("click", () => { S.del("tooiraq-admin"); demoView(); });
  }

  async function view() {
    const el = document.getElementById("admin-root"); if (!el) return;
    if (!B.enabled) { demoView(); return; }
    const user = await B.getUser();
    if (!user) return viewAuth(el);
    const prof = await B.getProfile();
    if (!prof || prof.role !== "admin") {
      el.innerHTML = shellMsg(t("adNotAdmin") + "<br><button class='btn btn-outline mt-4' id='ad-out'>↩</button>");
      const o = document.getElementById("ad-out");
      if (o) o.addEventListener("click", async () => { await B.signOut(); view(); });
      return;
    }
    viewShell(el);
  }
  const shellMsg = (m) => '<div class="container"><div class="auth-card panel center"><h1 class="t2">' + t("adTitle") + '</h1><p class="subhead mt-4">' + m + "</p></div></div>";

  function viewAuth(el) {
    el.innerHTML =
      '<div class="container"><div class="auth-card panel">' +
      '<h1 class="t2">' + t("adTitle") + '</h1><p class="subhead mt-2">' + t("adLead") + "</p>" +
      '<div class="form-grid mt-4">' +
      "<div><label>" + t("plEmail") + '</label><input type="email" id="ad-email"/></div>' +
      "<div><label>" + t("plPass") + '</label><input type="password" id="ad-pass"/></div>' +
      '<div id="ad-err" class="form-note hide" style="color:#8E1020"></div>' +
      '<button class="btn btn-primary btn-block" id="ad-go">' + t("signIn") + "</button></div></div></div>";
    document.getElementById("ad-go").addEventListener("click", async () => {
      const r = await B.signIn(document.getElementById("ad-email").value.trim(), document.getElementById("ad-pass").value);
      if (r.error) { const e = document.getElementById("ad-err"); e.textContent = r.error.message; e.classList.remove("hide"); return; }
      view();
    });
  }

  function viewShell(el) {
    const item = (id, ic, key) => '<a href="#' + id + '" data-sec="' + id + '"' + (section === id ? ' class="active"' : "") + ">" + ic + " " + t(key) + "</a>";
    el.innerHTML =
      '<div class="container portal-shell">' +
      '<aside class="portal-nav">' +
      item("apps", "📨", "adApps") + item("agencies", "🏢", "adAgencies") +
      item("tours", "🗂", "adTours") + item("bookings", "📥", "adBookings") +
      item("reviews", "⭐", "adReviews") + item("settings", "⚙️", "adSettings") +
      item("audit", "📜", "adAudit") +
      '<a href="#" id="ad-out">↩</a></aside><div id="ad-content"></div></div>';
    el.querySelectorAll("[data-sec]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); section = a.dataset.sec; viewShell(el); }));
    document.getElementById("ad-out").addEventListener("click", async (e) => { e.preventDefault(); await B.signOut(); view(); });
    const c = document.getElementById("ad-content");
    ({ apps: secApps, agencies: secAgencies, tours: secTours, bookings: secBookings, reviews: secReviews, settings: secSettings, audit: secAudit }[section] || secApps)(c);
  }

  const pill = (txt, ok) => '<span class="pill-status ' + (ok ? "pill-live" : "pill-pending") + '">' + esc(txt) + "</span>";

  async function secApps(c) {
    const rows = await B.adminList("applications");
    c.innerHTML = '<h1 class="t2">' + t("adApps") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map((r) =>
        '<div class="ptour"><div class="tx"><b>' + esc(r.business_name) + "</b>" +
        "<span>" + esc(r.city || "") + " · " + esc(r.whatsapp) + (r.email ? " · " + esc(r.email) : "") + "</span>" +
        (r.description ? '<span class="footnote">' + esc(r.description).slice(0, 160) + "</span>" : "") + "</div>" +
        pill(r.status, r.status === "approved") +
        (r.status === "new" || r.status === "reviewing"
          ? '<button class="btn btn-green btn-sm aa-ok" data-id="' + r.id + '" data-name="' + esc(r.business_name) + '">' + t("adApprove") + "</button>" +
            '<button class="btn btn-outline btn-sm aa-no" data-id="' + r.id + '">' + t("adReject") + "</button>" : "") +
        "</div>").join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
    c.querySelectorAll(".aa-ok").forEach((b) => b.addEventListener("click", async () => {
      const slug = window.prompt(t("adSlugAsk"), b.dataset.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
      if (!slug) return;
      await B.approveApplication(b.dataset.id, slug);
      secApps(c);
    }));
    c.querySelectorAll(".aa-no").forEach((b) => b.addEventListener("click", async () => { await B.adminUpdate("applications", b.dataset.id, { status: "rejected" }); secApps(c); }));
  }

  async function secAgencies(c) {
    const rows = await B.adminList("agencies");
    c.innerHTML = '<h1 class="t2">' + t("adAgencies") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map((a) =>
        '<div class="ptour"><div class="tx"><b>' + esc(L(a.name)) + (a.verified ? " ✓" : "") + "</b>" +
        "<span>" + esc(a.slug) + " · " + esc(a.whatsapp || "—") + " · ★" + (a.rating || "—") + "</span></div>" +
        pill(a.status, a.status === "approved") +
        (a.verified
          ? '<button class="btn btn-outline btn-sm ag-act" data-id="' + a.id + '" data-p=\'{"verified":false}\'>' + t("adUnverify") + "</button>"
          : '<button class="btn btn-green btn-sm ag-act" data-id="' + a.id + '" data-p=\'{"verified":true}\'>' + t("adVerify") + "</button>") +
        (a.status === "approved"
          ? '<button class="btn btn-outline btn-sm ag-act" data-id="' + a.id + '" data-p=\'{"status":"suspended"}\'>' + t("adSuspend") + "</button>"
          : '<button class="btn btn-tint btn-sm ag-act" data-id="' + a.id + '" data-p=\'{"status":"approved"}\'>' + t("adRestore") + "</button>") +
        "</div>").join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
    c.querySelectorAll(".ag-act").forEach((b) => b.addEventListener("click", async () => {
      await B.adminUpdate("agencies", b.dataset.id, JSON.parse(b.dataset.p)); secAgencies(c);
    }));
  }

  async function secTours(c) {
    const rows = await B.adminList("tours", { select: "*, agencies(name)" });
    const pend = rows.filter((x) => x.status === "pending_review");
    const rest = rows.filter((x) => x.status !== "pending_review");
    const row = (x) =>
      '<div class="ptour"><div class="tx"><b>' + esc(L(x.title)) + "</b>" +
      "<span>" + esc(x.agencies ? L(x.agencies.name) : "") + " · " + esc(x.city_id) + " · " +
      (x.price_cents ? money(x.price_cents) : "POA") + "</span></div>" +
      pill(x.status, x.status === "published") +
      (x.status === "pending_review" || x.status === "paused" || x.status === "draft"
        ? '<button class="btn btn-green btn-sm at-act" data-id="' + x.id + '" data-st="published">' + t("adPublish") + "</button>" : "") +
      (x.status === "published"
        ? '<button class="btn btn-outline btn-sm at-act" data-id="' + x.id + '" data-st="paused">' + t("adUnpublish") + "</button>" : "") +
      "</div>";
    c.innerHTML = '<h1 class="t2">' + t("adTours") + "</h1>" +
      '<div class="panel mt-4"><h2>' + pend.length + " " + t("adPendingRev") + "</h2>" +
      (pend.length ? pend.map(row).join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>" +
      '<div class="panel mt-4">' + (rest.length ? rest.map(row).join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
    c.querySelectorAll(".at-act").forEach((b) => b.addEventListener("click", async () => {
      await B.adminUpdate("tours", b.dataset.id, { status: b.dataset.st }); secTours(c);
    }));
  }

  async function secBookings(c) {
    const rows = await B.adminList("bookings", { select: "*, tours(title), agencies(name)" });
    c.innerHTML = '<h1 class="t2">' + t("adBookings") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map((bk) =>
        '<div class="ptour"><div class="tx"><b>' + bk.ref + " · " + esc(bk.tours ? L(bk.tours.title) : "") + "</b>" +
        "<span>" + esc(bk.agencies ? L(bk.agencies.name) : "") + " · " + bk.tour_date + " · " +
        (bk.pax_adults + bk.pax_children) + "👤 · " + money(bk.total_cents) + " · " + t("pay_" + bk.payment) +
        " · " + esc(bk.contact_name) + " (" + esc(bk.contact_whatsapp) + ")" +
        (bk.note ? " · 📍 " + esc(bk.note) : "") + "</span></div>" +
        pill(t("st_" + bk.status), ["confirmed", "completed"].includes(bk.status)) +
        "</div>").join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
  }

  async function secReviews(c) {
    const rows = await B.adminList("reviews", { select: "*, tours(title)" });
    const row = (r) =>
      '<div class="review"><div class="who"><span class="av">' + esc((r.author_name || "?")[0]) + "</span>" +
      "<div><b>" + esc(r.author_name) + "</b><br><span>" + esc(r.tours ? L(r.tours.title) : "") + "</span></div>" +
      '<span style="margin-inline-start:auto">' + TQ.starsHTML(r.rating) + " " + pill(r.status, r.status === "approved") + "</span></div>" +
      "<p>" + esc(r.body) + "</p>" +
      '<div style="display:flex;gap:8px;margin-top:8px">' +
      (r.status !== "approved" ? '<button class="btn btn-green btn-sm ar-act" data-id="' + r.id + '" data-st="approved">' + t("adApprove") + "</button>" : "") +
      (r.status !== "rejected" ? '<button class="btn btn-outline btn-sm ar-act" data-id="' + r.id + '" data-st="rejected">' + t("adReject") + "</button>" : "") +
      "</div></div>";
    c.innerHTML = '<h1 class="t2">' + t("adReviews") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map(row).join("") : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
    c.querySelectorAll(".ar-act").forEach((b) => b.addEventListener("click", async () => {
      await B.adminUpdate("reviews", b.dataset.id, { status: b.dataset.st }); secReviews(c);
    }));
  }

  async function secSettings(c) {
    const rate = (await B.getSetting("iqd_display_rate")) || { usd_to_iqd: 1310 };
    c.innerHTML = '<h1 class="t2">' + t("adSettings") + '</h1><div class="panel mt-4"><div class="form-grid">' +
      "<div><label>" + t("adRate") + '</label><input type="number" id="as-rate" value="' + (rate.usd_to_iqd || 1310) + '"/></div>' +
      '<div id="as-msg" class="form-note"></div>' +
      '<button class="btn btn-primary" id="as-save">' + t("save") + "</button></div></div>";
    document.getElementById("as-save").addEventListener("click", async () => {
      await B.setSetting("iqd_display_rate", { usd_to_iqd: +document.getElementById("as-rate").value || 1310 });
      const m = document.getElementById("as-msg"); m.textContent = t("adSaved"); m.style.color = "var(--color-accent)";
    });
  }

  async function secAudit(c) {
    const rows = await B.adminList("audit_log", { order: "created_at", limit: 100 });
    c.innerHTML = '<h1 class="t2">' + t("adAudit") + '</h1><div class="panel mt-4">' +
      (rows.length ? rows.map((r) =>
        '<div class="ptour"><div class="tx"><b>' + esc(r.action) + "</b><span>" + esc(r.entity) + " " + esc(r.entity_id || "") +
        " · " + new Date(r.created_at).toLocaleString() + "</span></div></div>").join("")
        : '<p class="subhead">' + t("adNone") + "</p>") + "</div>";
  }

  TQ.onRender = view;
  TQ.init({ page: "admin" });
})();
