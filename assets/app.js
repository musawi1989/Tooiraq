/* ============================================================
   TooIraq — site engine v2 (Rafidain design system)
   Booking.com-style layouts · EN/AR with RTL · WhatsApp-first
   ============================================================ */

(function () {
  "use strict";

  /* ---------- safe storage ---------- */
  const store = {
    get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { window.localStorage.removeItem(k); } catch (e) {} }
  };

  /* ---------- strings ---------- */
  const STR = {
    en: {
      navHome: "Home", navTours: "Tours", navAgencies: "Agencies", navContact: "Contact",
      langBtn: "عربي", providerLogin: "Provider login", listBusiness: "List your business",
      heroTitle: "Find your tour across Iraq",
      heroLead: "Compare tours from licensed Iraqi agencies, talk to them directly on WhatsApp, and book without prepayment.",
      sDest: "Destination", sDestAll: "All of Iraq", sDate: "Date", sPax: "Travelers", sGo: "Search",
      pax1: "1 traveler", paxN: "travelers",
      chipAll: "All types",
      trendTitle: "Trending destinations", trendSub: "Most searched places on TooIraq this month",
      featTitle: "Top experiences", featSub: "Highest-rated tours from local agencies", seeAll: "See all",
      toursCount: "tours", toursCount1: "1 tour",
      catTitle: "Browse by category", catSub: "Tours and events, organised the way you plan",
      viewAllBtn: "View all tours & activities",
      trust1t: "Book on WhatsApp", trust1p: "Message the agency directly — reply in minutes, in your language.",
      trust2t: "Verified agencies", trust2p: "Licensed Iraqi operators, checked by our team before listing.",
      trust3t: "No prepayment", trust3p: "Reserve first, pay the agency directly. No hidden fees, no markup.",
      trust4t: "Free cancellation", trust4p: "Most tours cancel free up to 48 hours before the start.",
      agTitle: "Featured agencies", agSub: "The local experts behind the tours",
      ctaTitle: "Run tours in Iraq? Get listed free.",
      ctaText: "Join TooIraq during launch for free — a standardized dashboard for your tours, and travelers who reach you directly on WhatsApp.",
      ctaBtn: "Become a provider",
      sampleNotice: "Preview note: agencies, tours, ratings and reviews shown are sample listings while real providers are onboarded.",
      resultsTitle: "Tours & activities in Iraq", filters: "Filters", clearAll: "Clear all",
      fDest: "Destination", fType: "Tour type", fPrice: "Max price", fDuration: "Duration",
      fRating: "Rating", fRatingAny: "Any", fCancel: "Free cancellation only",
      d1: "Day tours", d2: "Multi-day",
      sortBy: "Sort:", sortRec: "Recommended", sortPriceUp: "Price (low to high)", sortPriceDn: "Price (high to low)", sortRating: "Best rated",
      found: "tours found", noResults: "Nothing matches these filters — try clearing some.",
      from: "from", perPerson: "per person", hours: "hours", day: "day", days: "days",
      upTo: "Up to", people: "people", freeCancel: "Free cancellation", seeTour: "See availability",
      reviewsWord: "reviews", langsWord: "Languages",
      crumbHome: "Home", crumbTours: "Tours",
      bestSeller: "Best seller", likelySellOut: "Likely to sell out", verified: "Verified",
      aboutTitle: "About this tour", incTitle: "What's included",
      itinTitle: "Itinerary", meetTitle: "Meeting point & pickup",
      revTitle: "Traveler reviews", offeredBy: "Offered by", since: "On TooIraq since",
      bbDate: "Date", bbPax: "Travelers", bbName: "Your name", bbWa: "Your WhatsApp number",
      bookWa: "Book on WhatsApp", bookReq: "Send booking request",
      bbNote: "No prepayment — you confirm details with the agency and pay them directly.",
      bbSent: "Request sent! The agency will contact you shortly.",
      waBook: "Hello! I would like to book via TooIraq:",
      waTour: "Tour", waDate: "Date", waPax: "Travelers", waName: "Name",
      agenciesTitle: "Tour agencies & providers", agenciesSub: "Verified Iraqi operators you contact directly — no middleman.",
      agTours: "tours", agSince: "Since", chat: "WhatsApp", call: "Call",
      portalTitle: "Provider portal", portalSub: "Manage your agency profile and tours on TooIraq.",
      plEmail: "Email", plPass: "Password", plAgency: "Your agency (demo)", plBtn: "Log in",
      protoNote: "Prototype mode — this portal is a working demo. Real provider accounts with secure login and a live database are the next build step. Anything you add here is saved only in this browser.",
      pNavDash: "Dashboard", pNavTours: "My tours", pNavAdd: "Add a tour", pNavOut: "Log out",
      pViews: "Profile views (30d)", pInq: "WhatsApp inquiries (30d)", pTours: "Live tours",
      pYourTours: "Your tours", pLive: "Live", pPending: "Pending review",
      pAddTitle: "Add a new tour", pAddSub: "Fill the standard form — your tour appears in every search in English and Arabic once approved.",
      pfTitleEn: "Tour title (English)", pfTitleAr: "Tour title (Arabic)", pfCity: "Destination", pfType: "Type",
      pfDays: "Length (days)", pfHours: "Hours (if day tour)", pfPrice: "Price per person (USD)", pfGroup: "Max group size",
      pfWa: "Booking WhatsApp number", pfCancel: "Free cancellation up to 48h", pfDescEn: "Description (English)", pfDescAr: "Description (Arabic)",
      pfHi: "Highlights — one per line (English)", pfHiAr: "Highlights — one per line (Arabic)", pfMeet: "Meeting point / pickup",
      pfSave: "Submit for review", pfSaved: "Tour submitted! It's now pending review below.",
      joinTitle: "List your business on TooIraq",
      joinSub: "Free during launch. Apply below — we review and publish within 48 hours, then you manage everything from the provider portal.",
      joinB1t: "Free listing", joinB1p: "No fees, no commission during launch. Travelers pay you directly.",
      joinB2t: "Bilingual reach", joinB2p: "Your tours are shown in English and Arabic automatically.",
      joinB3t: "WhatsApp bookings", joinB3p: "Every booking lands straight in your WhatsApp — no new tools to learn.",
      jBusiness: "Business name", jCity: "City / base", jWa: "WhatsApp number", jEmail: "Email (optional)",
      jServices: "Services you offer", jDesc: "About your business", jSend: "Submit application",
      joinNote: "We review every application before publishing. We never ask for payment details.",
      contactTitle: "Contact TooIraq", contactSub: "Questions, suggestions, or an issue with a listing — we read everything.",
      fName: "Your name", fEmail: "Email", fMsg: "Message", fSendBtn: "Send message", contactDirect: "Prefer email?",
      footAbout: "TooIraq is a marketplace connecting travelers with licensed Iraqi tour agencies and travel services — from ancient Babylon to the mountains of Kurdistan. Every booking goes directly to the local provider.",
      footExplore: "Explore", footProviders: "For providers", footSupport: "Support",
      footHome: "Home", footTours: "All tours", footAgencies: "Agencies",
      footJoin: "List your business", footPortal: "Provider portal", footContact: "Contact us",
      footRights: "All rights reserved.", footSample: "Sample listings shown during preview."
    },
    ar: {
      navHome: "الرئيسية", navTours: "الجولات", navAgencies: "الشركات", navContact: "اتصل بنا",
      langBtn: "English", providerLogin: "دخول المزوّدين", listBusiness: "أضف نشاطك",
      heroTitle: "اعثر على جولتك في العراق",
      heroLead: "قارن الجولات من شركات عراقية مجازة، وتواصل معها مباشرة عبر واتساب، واحجز دون دفع مسبق.",
      sDest: "الوجهة", sDestAll: "كل العراق", sDate: "التاريخ", sPax: "المسافرون", sGo: "بحث",
      pax1: "مسافر واحد", paxN: "مسافرين",
      chipAll: "كل الأنواع",
      trendTitle: "الوجهات الرائجة", trendSub: "أكثر الأماكن بحثاً على TooIraq هذا الشهر",
      featTitle: "أفضل التجارب", featSub: "الجولات الأعلى تقييماً من الشركات المحلية", seeAll: "عرض الكل",
      toursCount: "جولات", toursCount1: "جولة واحدة",
      catTitle: "تصفح حسب الفئة", catSub: "جولات وفعاليات مرتبة كما تخطط لرحلتك",
      viewAllBtn: "عرض كل الجولات والفعاليات",
      trust1t: "احجز عبر واتساب", trust1p: "راسل الشركة مباشرة — يردّون خلال دقائق وبلغتك.",
      trust2t: "شركات موثّقة", trust2p: "شركات عراقية مجازة يتحقق منها فريقنا قبل النشر.",
      trust3t: "بلا دفع مسبق", trust3p: "احجز أولاً وادفع للشركة مباشرة. لا رسوم خفية ولا عمولة.",
      trust4t: "إلغاء مجاني", trust4p: "معظم الجولات تُلغى مجاناً حتى ٤٨ ساعة قبل الانطلاق.",
      agTitle: "شركات مميزة", agSub: "الخبراء المحليون خلف هذه الجولات",
      ctaTitle: "تنظّم جولات في العراق؟ انضم مجاناً.",
      ctaText: "انضم إلى TooIraq مجاناً خلال فترة الإطلاق — لوحة تحكم موحّدة لجولاتك، ومسافرون يصلونك مباشرة عبر واتساب.",
      ctaBtn: "انضم كمزوّد",
      sampleNotice: "ملاحظة: الشركات والجولات والتقييمات المعروضة نماذج تجريبية ريثما تنضم الشركات الفعلية.",
      resultsTitle: "جولات وفعاليات في العراق", filters: "التصفية", clearAll: "مسح الكل",
      fDest: "الوجهة", fType: "نوع الجولة", fPrice: "أعلى سعر", fDuration: "المدة",
      fRating: "التقييم", fRatingAny: "أي تقييم", fCancel: "إلغاء مجاني فقط",
      d1: "جولات يومية", d2: "عدة أيام",
      sortBy: "ترتيب:", sortRec: "الموصى به", sortPriceUp: "السعر (من الأقل)", sortPriceDn: "السعر (من الأعلى)", sortRating: "الأعلى تقييماً",
      found: "جولة", noResults: "لا نتائج مطابقة — جرّب إزالة بعض الفلاتر.",
      from: "ابتداءً من", perPerson: "للشخص", hours: "ساعات", day: "يوم", days: "أيام",
      upTo: "حتى", people: "أشخاص", freeCancel: "إلغاء مجاني", seeTour: "عرض التفاصيل",
      reviewsWord: "تقييم", langsWord: "اللغات",
      crumbHome: "الرئيسية", crumbTours: "الجولات",
      bestSeller: "الأكثر مبيعاً", likelySellOut: "ينفد سريعاً", verified: "موثّقة",
      aboutTitle: "عن هذه الجولة", incTitle: "ما هو مشمول",
      itinTitle: "برنامج الجولة", meetTitle: "نقطة اللقاء والنقل",
      revTitle: "آراء المسافرين", offeredBy: "مقدَّمة من", since: "على TooIraq منذ",
      bbDate: "التاريخ", bbPax: "المسافرون", bbName: "اسمك", bbWa: "رقم واتساب الخاص بك",
      bookWa: "احجز عبر واتساب", bookReq: "أرسل طلب حجز",
      bbNote: "بلا دفع مسبق — تؤكد التفاصيل مع الشركة وتدفع لها مباشرة.",
      bbSent: "تم إرسال الطلب! ستتواصل معك الشركة قريباً.",
      waBook: "مرحباً! أود الحجز عبر TooIraq:",
      waTour: "الجولة", waDate: "التاريخ", waPax: "المسافرون", waName: "الاسم",
      agenciesTitle: "شركات السياحة ومقدمو الخدمات", agenciesSub: "شركات عراقية موثّقة تتواصل معها مباشرة — بلا وسيط.",
      agTours: "جولات", agSince: "منذ", chat: "واتساب", call: "اتصال",
      portalTitle: "بوابة المزوّدين", portalSub: "أدر ملف شركتك وجولاتك على TooIraq.",
      plEmail: "البريد الإلكتروني", plPass: "كلمة المرور", plAgency: "شركتك (تجريبي)", plBtn: "تسجيل الدخول",
      protoNote: "وضع تجريبي — هذه البوابة نموذج عمل. حسابات المزوّدين الحقيقية مع تسجيل دخول آمن وقاعدة بيانات هي خطوة البناء التالية. ما تضيفه هنا يُحفظ في هذا المتصفح فقط.",
      pNavDash: "لوحة التحكم", pNavTours: "جولاتي", pNavAdd: "أضف جولة", pNavOut: "تسجيل الخروج",
      pViews: "مشاهدات الملف (٣٠ يوماً)", pInq: "استفسارات واتساب (٣٠ يوماً)", pTours: "جولات منشورة",
      pYourTours: "جولاتك", pLive: "منشورة", pPending: "قيد المراجعة",
      pAddTitle: "أضف جولة جديدة", pAddSub: "املأ النموذج الموحّد — تظهر جولتك في كل عمليات البحث بالعربية والإنجليزية بعد الموافقة.",
      pfTitleEn: "عنوان الجولة (إنجليزي)", pfTitleAr: "عنوان الجولة (عربي)", pfCity: "الوجهة", pfType: "النوع",
      pfDays: "المدة (أيام)", pfHours: "الساعات (للجولات اليومية)", pfPrice: "السعر للشخص (دولار)", pfGroup: "أقصى حجم للمجموعة",
      pfWa: "رقم واتساب للحجوزات", pfCancel: "إلغاء مجاني حتى ٤٨ ساعة", pfDescEn: "الوصف (إنجليزي)", pfDescAr: "الوصف (عربي)",
      pfHi: "أبرز النقاط — سطر لكل نقطة (إنجليزي)", pfHiAr: "أبرز النقاط — سطر لكل نقطة (عربي)", pfMeet: "نقطة اللقاء / النقل",
      pfSave: "إرسال للمراجعة", pfSaved: "تم إرسال الجولة! وهي الآن قيد المراجعة أدناه.",
      joinTitle: "أضف نشاطك إلى TooIraq",
      joinSub: "مجاناً خلال الإطلاق. قدّم الطلب أدناه — نراجع وننشر خلال ٤٨ ساعة، ثم تدير كل شيء من بوابة المزوّدين.",
      joinB1t: "إدراج مجاني", joinB1p: "بلا رسوم وبلا عمولة خلال الإطلاق. يدفع المسافرون لك مباشرة.",
      joinB2t: "وصول بلغتين", joinB2p: "تُعرض جولاتك بالعربية والإنجليزية تلقائياً.",
      joinB3t: "حجوزات واتساب", joinB3p: "كل حجز يصلك مباشرة على واتساب — دون أدوات جديدة.",
      jBusiness: "اسم النشاط", jCity: "المدينة / المقر", jWa: "رقم الواتساب", jEmail: "البريد (اختياري)",
      jServices: "الخدمات التي تقدمها", jDesc: "عن نشاطك", jSend: "إرسال الطلب",
      joinNote: "نراجع كل طلب قبل النشر ولا نطلب أي بيانات دفع.",
      contactTitle: "تواصل مع TooIraq", contactSub: "أسئلة أو اقتراحات أو مشكلة في إعلان — نقرأ كل رسالة.",
      fName: "اسمك", fEmail: "البريد الإلكتروني", fMsg: "الرسالة", fSendBtn: "إرسال", contactDirect: "تفضّل البريد؟",
      footAbout: "TooIraq سوق إلكتروني يربط المسافرين بشركات السياحة العراقية المجازة وخدمات السفر — من بابل القديمة إلى جبال كردستان. كل حجز يذهب مباشرة إلى المزوّد المحلي.",
      footExplore: "استكشف", footProviders: "للمزوّدين", footSupport: "الدعم",
      footHome: "الرئيسية", footTours: "كل الجولات", footAgencies: "الشركات",
      footJoin: "أضف نشاطك", footPortal: "بوابة المزوّدين", footContact: "اتصل بنا",
      footRights: "جميع الحقوق محفوظة.", footSample: "تُعرض نماذج تجريبية خلال المعاينة."
    }
  };

  /* ---------- helpers ---------- */
  let lang = store.get("tooiraq-lang") || (document.documentElement.lang === "ar" ? "ar" : "en");
  const t = (k) => (STR[lang] && STR[lang][k]) || STR.en[k] || k;
  const L = (o) => (o && (o[lang] || o.en)) || "";
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const cityOf = (id) => CITIES.find((c) => c.id === id);
  const typeOf = (id) => TYPES.find((x) => x.id === id);
  const agencyOf = (id) => AGENCIES.find((a) => a.id === id);
  const toursOf = (aid) => TOURS.filter((x) => x.agency === aid);
  const starsHTML = (r) => { const f = Math.round(r); let s = ""; for (let i = 1; i <= 5; i++) s += i <= f ? "★" : "☆"; return '<span class="stars">' + s + "</span>"; };
  const durLbl = (tour) => tour.days > 1 ? tour.days + " " + t("days") : (tour.hours || 8) + " " + t("hours");
  const fill = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const badgeHTML = (tour, inline) =>
    tour.badge === "best" ? '<span class="badge badge-hot"' + (inline ? ' style="position:static"' : "") + ">" + t("bestSeller") + "</span>" :
    tour.badge === "likely" ? '<span class="badge badge-hot" style="background:#8E1020' + (inline ? ";position:static" : "") + '">' + t("likelySellOut") + "</span>" : "";

  const BRAND_MARK =
    '<svg class="brand-mark" viewBox="0 0 44 44" fill="none"><rect width="44" height="44" rx="12" fill="#CE1126"/><path d="M13 31h18M15 31v-5h14v5M17 26v-5h10v5M19 21v-4h6v4" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/><circle cx="22" cy="13" r="1.8" fill="#fff"/></svg>';

  /* ---------- chrome ---------- */
  function injectChrome(active) {
    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML =
        '<div class="container header-inner">' +
        '<a class="brand" href="index.html">' + BRAND_MARK + '<span class="brand-name">Too<b>Iraq</b></span></a>' +
        '<nav class="main-nav">' +
        nav("index.html", "navHome", active === "home") + nav("tours.html", "navTours", active === "tours") +
        nav("agencies.html", "navAgencies", active === "agencies") + nav("contact.html", "navContact", active === "contact") +
        "</nav>" +
        '<div class="header-actions">' +
        '<button class="lang-toggle" id="lang-toggle">' + t("langBtn") + "</button>" +
        '<a class="btn btn-outline btn-sm" href="provider.html">' + t("providerLogin") + "</a>" +
        '<a class="btn btn-primary btn-sm" href="join.html">' + t("listBusiness") + "</a>" +
        "</div></div>";
      document.getElementById("lang-toggle").addEventListener("click", () => setLang(lang === "en" ? "ar" : "en"));
    }
    const footer = document.getElementById("site-footer");
    if (footer) {
      footer.innerHTML =
        '<div class="container"><div class="footer-inner">' +
        '<div><a class="brand" href="index.html">' + BRAND_MARK + '<span class="brand-name" style="color:#fff">Too<b>Iraq</b></span></a>' +
        '<p class="footer-about">' + t("footAbout") + "</p></div>" +
        "<div><h4>" + t("footExplore") + "</h4><a href='index.html'>" + t("footHome") + "</a><a href='tours.html'>" + t("footTours") + "</a><a href='agencies.html'>" + t("footAgencies") + "</a></div>" +
        "<div><h4>" + t("footProviders") + "</h4><a href='join.html'>" + t("footJoin") + "</a><a href='provider.html'>" + t("footPortal") + "</a></div>" +
        "<div><h4>" + t("footSupport") + "</h4><a href='contact.html'>" + t("footContact") + "</a><a href='mailto:hello@tooiraq.com'>hello@tooiraq.com</a></div>" +
        "</div><div class='footer-bottom'><span>© " + new Date().getFullYear() + " TooIraq — " + t("footRights") + "</span><span>" + t("footSample") + "</span></div></div>";
    }
  }
  const nav = (href, key, on) => '<a href="' + href + '"' + (on ? ' class="active"' : "") + ">" + t(key) + "</a>";

  function setLang(next) {
    lang = next; store.set("tooiraq-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    applyI18n(); render();
  }
  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
  }

  /* ---------- shared card renderers ---------- */
  function tourCard(tour) {
    const c = cityOf(tour.city);
    return (
      '<article class="tcard">' +
      '<a class="media" href="tour.html?id=' + tour.id + '">' + badgeHTML(tour) +
      '<img loading="lazy" alt="' + esc(L(tour.title)) + '" src="' + IMG(tour.img) + '"/></a>' +
      '<div class="body">' +
      '<span class="place">' + esc(L(c)) + "</span>" +
      '<h3><a href="tour.html?id=' + tour.id + '">' + esc(L(tour.title)) + "</a></h3>" +
      '<div class="rating-row">' + starsHTML(tour.rating) + "<b>" + tour.rating.toFixed(1) + "</b><span>(" + tour.reviews + ")</span></div>" +
      '<div class="meta"><span>🕐 ' + durLbl(tour) + "</span>" + (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") + "</div>" +
      '<div class="foot"><span class="price">' + t("from") + "<b>$" + tour.price + "</b><small>" + t("perPerson") + "</small></span>" +
      '<a class="btn btn-tint btn-sm" href="tour.html?id=' + tour.id + '">' + t("seeTour") + "</a></div>" +
      "</div></article>"
    );
  }

  function resultCard(tour) {
    const c = cityOf(tour.city), ty = typeOf(tour.type), a = agencyOf(tour.agency);
    return (
      '<article class="rcard">' +
      '<a class="media" href="tour.html?id=' + tour.id + '">' + badgeHTML(tour) +
      '<img loading="lazy" alt="' + esc(L(tour.title)) + '" src="' + IMG(tour.img) + '"/></a>' +
      '<div class="mid">' +
      '<h3><a href="tour.html?id=' + tour.id + '">' + esc(L(tour.title)) + "</a></h3>" +
      '<div class="loc"><a href="tours.html?city=' + tour.city + '">' + esc(L(c)) + "</a> · " + esc(L(ty)) + (a ? " · " + esc(L(a.name)) : "") + "</div>" +
      '<div class="feats"><span>🕐 ' + durLbl(tour) + "</span><span>👥 " + t("upTo") + " " + tour.groupMax + " " + t("people") + "</span><span>🗣 " + (tour.langs || []).join(" · ") + "</span></div>" +
      '<p class="subhead">' + esc(L(tour.desc)) + "</p>" +
      (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") +
      "</div>" +
      '<div class="side">' +
      '<div class="rating-row"><b>' + tour.rating.toFixed(1) + "</b>" + starsHTML(tour.rating) + "<span>" + tour.reviews + " " + t("reviewsWord") + "</span></div>" +
      '<div><span class="price">' + t("from") + "<b>$" + tour.price + "</b><small>" + t("perPerson") + "</small></span>" +
      '<a class="btn btn-primary btn-sm btn-block mt-2" href="tour.html?id=' + tour.id + '">' + t("seeTour") + "</a></div>" +
      "</div></article>"
    );
  }

  function agencyCard(a) {
    const n = toursOf(a.id).length;
    return (
      '<article class="tcard"><div class="body">' +
      '<div style="display:flex;gap:12px;align-items:center">' +
      '<div class="alogo" style="background:#CE1126;width:48px;height:48px;border-radius:12px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center">' + a.initials + "</div>" +
      "<div><h3 style='font-size:17px'>" + esc(L(a.name)) + "</h3><span class='footnote'>" + esc(L(a.base)) + " · " + t("agSince") + " " + a.since + "</span></div></div>" +
      '<div class="rating-row">' + starsHTML(a.rating) + "<b>" + a.rating.toFixed(1) + "</b><span>(" + a.reviews + " " + t("reviewsWord") + ")</span>" +
      (a.verified ? '&nbsp;<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : "") + "</div>" +
      '<p class="subhead">' + esc(L(a.desc)) + "</p>" +
      '<div class="foot"><span class="footnote"><b style="color:var(--label-primary)">' + n + "</b> " + t("agTours") + "</span>" +
      '<span style="display:flex;gap:8px"><a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + a.wa + '">' + t("chat") + "</a>" +
      '<a class="btn btn-outline btn-sm" href="tel:' + a.phone.replace(/\s/g, "") + '">' + t("call") + "</a></span></div>" +
      "</div></article>"
    );
  }

  /* ---------- home ---------- */
  function renderHome() {
    const citiesOpts = '<option value="">' + t("sDestAll") + "</option>" + CITIES.map((c) => '<option value="' + c.id + '">' + esc(L(c)) + "</option>").join("");
    const paxOpts = [1, 2, 3, 4, 5, 6, 8, 10].map((n) => '<option value="' + n + '">' + (n === 1 ? t("pax1") : n + " " + t("paxN")) + "</option>").join("");
    fill("searchbox",
      '<div class="seg"><label>' + t("sDest") + '</label><select id="q-city">' + citiesOpts + "</select></div>" +
      '<div class="seg"><label>' + t("sDate") + '</label><input type="date" id="q-date"/></div>' +
      '<div class="seg"><label>' + t("sPax") + '</label><select id="q-pax">' + paxOpts + "</select></div>" +
      '<div class="go"><button class="btn btn-primary" id="q-go">' + t("sGo") + "</button></div>");
    document.getElementById("q-go").addEventListener("click", () => {
      const c = document.getElementById("q-city").value, d = document.getElementById("q-date").value, p = document.getElementById("q-pax").value;
      const qs = new URLSearchParams(); if (c) qs.set("city", c); if (d) qs.set("date", d); if (p && p !== "1") qs.set("pax", p);
      window.location.href = "tours.html" + (qs.toString() ? "?" + qs.toString() : "");
    });
    fill("type-chips", '<a class="chip selected" href="tours.html">' + t("chipAll") + "</a>" +
      TYPES.map((x) => '<a class="chip" href="tours.html?type=' + x.id + '">' + esc(L(x)) + "</a>").join(""));

    const CAT_ICONS = { history: "🏛️", nature: "🌿", religious: "🕌", culture: "🏙️", festival: "🎉" };
    fill("cat-grid", TYPES.map((x) => {
      const n = TOURS.filter((z) => z.type === x.id).length;
      return '<a class="cat-card" href="tours.html?type=' + x.id + '">' +
        '<span class="cat-ic">' + (CAT_ICONS[x.id] || "📍") + "</span>" +
        '<span><span class="cat-name">' + esc(L(x)) + '</span><span class="cat-count">' +
        (n === 1 ? t("toursCount1") : n + " " + t("toursCount")) + "</span></span>" +
        '<span class="cat-arrow">›</span></a>';
    }).join(""));

    const tile = (c) => {
      const n = TOURS.filter((x) => x.city === c.id).length;
      return '<a class="dest-tile" href="tours.html?city=' + c.id + '"><img loading="lazy" alt="' + esc(L(c)) + '" src="' + IMG(CITY_IMG[c.id]) + '"/>' +
        '<span class="scrim"><span class="name">' + esc(L(c)) + "<small>" + (n === 1 ? t("toursCount1") : n + " " + t("toursCount")) + "</small></span></span></a>";
    };
    fill("dest-big", CITIES.slice(0, 2).map(tile).join(""));
    fill("dest-small", CITIES.slice(2, 6).map(tile).join(""));

    const top = TOURS.slice().sort((a, b) => b.rating - a.rating || b.reviews - a.reviews).slice(0, 6);
    fill("featured", top.map(tourCard).join(""));

    fill("trust-row",
      trust("💬", "trust1t", "trust1p") + trust("🛡", "trust2t", "trust2p") +
      trust("💵", "trust3t", "trust3p") + trust("↩", "trust4t", "trust4p"));

    fill("home-agencies", AGENCIES.slice(0, 3).map(agencyCard).join(""));
  }
  const trust = (ic, tt, pp) => '<div class="trust"><div class="ic">' + ic + "</div><div><h4>" + t(tt) + "</h4><p>" + t(pp) + "</p></div></div>";

  /* ---------- tours (results) ---------- */
  function renderToursPage() {
    const root = document.getElementById("results-root");
    if (!root) return;
    const params = new URLSearchParams(window.location.search);
    const maxPrice = Math.max.apply(null, TOURS.map((x) => x.price));
    const state = {
      cities: params.get("city") ? [params.get("city")] : [],
      types: params.get("type") ? [params.get("type")] : [],
      price: maxPrice, dur: [], minRating: 0, cancel: false, sort: "rec"
    };

    function checks(list, key, sel) {
      return list.map((item) => {
        const n = TOURS.filter((x) => x[key] === item.id).length;
        return '<label class="f-check"><input type="checkbox" data-f="' + key + '" value="' + item.id + '"' + (sel.includes(item.id) ? " checked" : "") + "/>" +
          esc(L(item)) + '<span class="cnt">' + n + "</span></label>";
      }).join("");
    }

    root.innerHTML =
      '<div class="results-layout">' +
      '<aside class="filters"><div class="f-head">' + t("filters") + '<button class="f-clear" id="f-clear">' + t("clearAll") + "</button></div>" +
      '<div class="f-group"><h5>' + t("fDest") + "</h5>" + checks(CITIES, "city", state.cities) + "</div>" +
      '<div class="f-group"><h5>' + t("fType") + "</h5>" + checks(TYPES, "type", state.types) + "</div>" +
      '<div class="f-group"><h5>' + t("fPrice") + '</h5><input type="range" id="f-price" min="40" max="' + maxPrice + '" value="' + maxPrice + '" step="5"/><div class="f-price-val">$<span id="f-price-v">' + maxPrice + "</span></div></div>" +
      '<div class="f-group"><h5>' + t("fDuration") + "</h5>" +
      '<label class="f-check"><input type="checkbox" data-dur="1"/>' + t("d1") + "</label>" +
      '<label class="f-check"><input type="checkbox" data-dur="2"/>' + t("d2") + "</label></div>" +
      '<div class="f-group"><h5>' + t("fRating") + '</h5><label class="f-check"><input type="radio" name="fr" data-r="0" checked/>' + t("fRatingAny") + "</label>" +
      '<label class="f-check"><input type="radio" name="fr" data-r="4.5"/>4.5+ ★</label>' +
      '<label class="f-check"><input type="radio" name="fr" data-r="4.8"/>4.8+ ★</label></div>' +
      '<div class="f-group"><label class="f-check"><input type="checkbox" id="f-cancel"/>' + t("fCancel") + "</label></div>" +
      "</aside>" +
      '<div><div class="results-bar"><span class="count" id="r-count"></span>' +
      '<span class="sort">⇅ ' + t("sortBy") + ' <select id="r-sort">' +
      '<option value="rec">' + t("sortRec") + '</option><option value="priceUp">' + t("sortPriceUp") + "</option>" +
      '<option value="priceDn">' + t("sortPriceDn") + '</option><option value="rating">' + t("sortRating") + "</option></select></span></div>" +
      '<div id="r-list"></div></div></div>';

    function apply() {
      let list = TOURS.filter((x) =>
        (!state.cities.length || state.cities.includes(x.city)) &&
        (!state.types.length || state.types.includes(x.type)) &&
        x.price <= state.price &&
        (!state.dur.length || state.dur.includes(x.days > 1 ? "2" : "1")) &&
        x.rating >= state.minRating &&
        (!state.cancel || x.cancel));
      if (state.sort === "priceUp") list.sort((a, b) => a.price - b.price);
      else if (state.sort === "priceDn") list.sort((a, b) => b.price - a.price);
      else if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
      else list.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || b.reviews - a.reviews);
      fill("r-list", list.length ? list.map(resultCard).join("") : '<div class="panel subhead">' + t("noResults") + "</div>");
      fill("r-count", "<b>" + list.length + "</b> " + t("found"));
    }

    const collect = (key) => Array.from(root.querySelectorAll('[data-f="' + key + '"]:checked')).map((x) => x.value);
    root.addEventListener("change", (e) => {
      const el = e.target;
      if (el.dataset.f === "city") state.cities = collect("city");
      if (el.dataset.f === "type") state.types = collect("type");
      if (el.dataset.dur) state.dur = Array.from(root.querySelectorAll("[data-dur]:checked")).map((x) => x.dataset.dur);
      if (el.dataset.r !== undefined) state.minRating = parseFloat(el.dataset.r);
      if (el.id === "f-cancel") state.cancel = el.checked;
      if (el.id === "r-sort") state.sort = el.value;
      apply();
    });
    root.addEventListener("input", (e) => {
      if (e.target.id === "f-price") { state.price = +e.target.value; document.getElementById("f-price-v").textContent = e.target.value; apply(); }
    });
    document.getElementById("f-clear").addEventListener("click", () => { window.location.href = "tours.html"; });
    apply();
  }

  /* ---------- tour detail ---------- */
  function renderTourPage() {
    const wrap = document.getElementById("tour-root");
    if (!wrap) return;
    const params = new URLSearchParams(window.location.search);
    const tour = TOURS.find((x) => x.id === params.get("id")) || TOURS[0];
    const c = cityOf(tour.city), ty = typeOf(tour.type), a = agencyOf(tour.agency);
    document.title = L(tour.title) + " — TooIraq";
    const gallery = [tour.img, CITY_IMG[tour.city], "river", "marsh", "babylon"]
      .filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 5);
    while (gallery.length < 5) gallery.push("baghdad");
    const revs = REVIEWS_POOL.slice(tour.price % 3, (tour.price % 3) + 3);
    const paxOpts = [1, 2, 3, 4, 5, 6, 8, 10].map((n) => '<option value="' + n + '">' + (n === 1 ? t("pax1") : n + " " + t("paxN")) + "</option>").join("");

    wrap.innerHTML =
      '<div class="container detail-top">' +
      '<div class="crumbs"><a href="index.html">' + t("crumbHome") + '</a> / <a href="tours.html">' + t("crumbTours") + '</a> / <a href="tours.html?city=' + tour.city + '">' + esc(L(c)) + "</a></div>" +
      '<div class="detail-title-row"><div><h1>' + esc(L(tour.title)) + "</h1>" +
      '<div class="detail-sub"><span class="rating-row"><b>' + tour.rating.toFixed(1) + "</b>" + starsHTML(tour.rating) + "<span>(" + tour.reviews + " " + t("reviewsWord") + ")</span></span>" +
      "<span>📍 " + esc(L(c)) + "</span><span>🗂 " + esc(L(ty)) + "</span><span>🕐 " + durLbl(tour) + "</span><span>👥 " + t("upTo") + " " + tour.groupMax + "</span></div></div>" +
      (tour.badge ? "<div>" + badgeHTML(tour, true) + "</div>" : "") +
      "</div>" +
      '<div class="gallery"><a class="g-main"><img alt="" src="' + IMG(gallery[0]) + '"/></a>' +
      gallery.slice(1).map((g) => '<a><img loading="lazy" alt="" src="' + IMG(g) + '"/></a>').join("") + "</div></div>" +

      '<div class="container detail-layout"><div class="detail-main">' +
      '<div class="panel"><h2>' + t("aboutTitle") + "</h2><p>" + esc(L(tour.desc)) + "</p>" +
      '<div class="mt-4" style="display:flex;gap:8px;flex-wrap:wrap">' +
      (tour.cancel ? '<span class="badge badge-save">✓ ' + t("freeCancel") + "</span>" : "") +
      '<span class="badge badge-save">🗣 ' + t("langsWord") + ": " + (tour.langs || []).join(" · ") + "</span></div></div>" +
      '<div class="panel"><h2>' + t("incTitle") + '</h2><div class="inc-grid">' +
      L(tour.highlights).map((h) => '<div class="inc-item"><span class="tick">✓</span><span>' + esc(h) + "</span></div>").join("") + "</div></div>" +
      '<div class="panel"><h2>' + t("itinTitle") + '</h2><ul class="itin">' +
      (tour.itinerary || []).map((s, i) => '<li><span class="dot">' + (i + 1) + '</span><span class="tx"><b>' + esc(L(s.t)) + "</b><span>" + esc(L(s.d)) + "</span></span></li>").join("") + "</ul></div>" +
      '<div class="panel"><h2>' + t("meetTitle") + "</h2><p>📍 " + esc(L(tour.meeting)) + "</p></div>" +
      '<div class="panel"><h2>' + t("revTitle") + "</h2>" +
      revs.map((r) => '<div class="review"><div class="who"><span class="av">' + esc(r.n.slice(0, 1)) + "</span><div><b>" + esc(r.n) + "</b><br><span>" + esc(L(r.from)) + "</span></div>" +
        '<span style="margin-inline-start:auto">' + starsHTML(r.stars) + "</span></div><p>" + esc(L(r.tx)) + "</p></div>").join("") + "</div>" +
      "</div>" +

      '<aside><div class="panel bookbox">' +
      '<div><span class="from">' + t("from") + '</span><div class="amount">$' + tour.price + " <small>" + t("perPerson") + "</small></div>" +
      (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") + "</div>" +
      '<div class="field"><label>' + t("bbDate") + '</label><input type="date" id="bb-date"/></div>' +
      '<div class="field"><label>' + t("bbPax") + '</label><select id="bb-pax">' + paxOpts + "</select></div>" +
      '<div class="field"><label>' + t("bbName") + '</label><input type="text" id="bb-name"/></div>' +
      '<div class="field"><label>' + t("bbWa") + '</label><input type="tel" id="bb-wa" placeholder="+964 …"/></div>' +
      '<button class="btn btn-wa btn-block" id="bb-book">' + t("bookWa") + "</button>" +
      '<button class="btn btn-tint btn-block" id="bb-req">' + t("bookReq") + "</button>" +
      '<p class="bb-note">' + t("bbNote") + "</p>" +
      (a ? '<div class="bb-agency"><div class="alogo" style="background:#CE1126;width:42px;height:42px;border-radius:10px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center">' + a.initials + '</div><div><span class="footnote">' + t("offeredBy") + "</span><br><b>" + esc(L(a.name)) + "</b> " +
        (a.verified ? '<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : "") +
        '<br><span class="footnote">★ ' + a.rating.toFixed(1) + " · " + t("since") + " " + a.since + "</span></div></div>" : "") +
      "</div></aside></div>";

    const waMsg = () => {
      const d = document.getElementById("bb-date").value || "—";
      const p = document.getElementById("bb-pax").value;
      const n = document.getElementById("bb-name").value || "—";
      return encodeURIComponent(t("waBook") + "\n• " + t("waTour") + ": " + L(tour.title) + "\n• " + t("waDate") + ": " + d + "\n• " + t("waPax") + ": " + p + "\n• " + t("waName") + ": " + n);
    };
    document.getElementById("bb-book").addEventListener("click", () => {
      window.open("https://wa.me/" + (a ? a.wa : "") + "?text=" + waMsg(), "_blank", "noopener");
    });
    document.getElementById("bb-req").addEventListener("click", () => {
      const f = document.getElementById("booking-form");
      if (f) {
        f.querySelector('[name="tour"]').value = L(tour.title);
        f.querySelector('[name="agency"]').value = a ? L(a.name) : "";
        f.querySelector('[name="date"]').value = document.getElementById("bb-date").value;
        f.querySelector('[name="travelers"]').value = document.getElementById("bb-pax").value;
        f.querySelector('[name="name"]').value = document.getElementById("bb-name").value;
        f.querySelector('[name="whatsapp"]').value = document.getElementById("bb-wa").value;
        try { f.submit(); return; } catch (e) {}
      }
      document.getElementById("bb-req").textContent = "✓ " + t("bbSent");
    });
  }

  /* ---------- agencies ---------- */
  function renderAgenciesPage() { fill("agencies-grid", AGENCIES.map(agencyCard).join("")); }

  /* ---------- provider portal (prototype) ---------- */
  function renderPortal() {
    const root = document.getElementById("portal-root");
    if (!root) return;
    const who = store.get("tooiraq-provider");

    if (!who) {
      const opts = AGENCIES.map((x) => '<option value="' + x.id + '">' + esc(L(x.name)) + "</option>").join("");
      root.innerHTML =
        '<div class="container"><div class="auth-card panel">' +
        '<h1 class="t2">' + t("portalTitle") + '</h1><p class="subhead mt-2">' + t("portalSub") + "</p>" +
        '<div class="notice-proto mt-4">' + t("protoNote") + "</div>" +
        '<div class="form-grid">' +
        "<div><label>" + t("plAgency") + '</label><select id="pl-agency">' + opts + "</select></div>" +
        "<div><label>" + t("plEmail") + '</label><input type="email" id="pl-email" placeholder="you@agency.com"/></div>' +
        "<div><label>" + t("plPass") + '</label><input type="password" id="pl-pass" placeholder="••••••••"/></div>' +
        '<button class="btn btn-primary btn-block" id="pl-go">' + t("plBtn") + "</button></div></div></div>";
      document.getElementById("pl-go").addEventListener("click", () => {
        store.set("tooiraq-provider", document.getElementById("pl-agency").value); renderPortal();
      });
      return;
    }

    const a = agencyOf(who) || AGENCIES[0];
    let drafts = [];
    try { drafts = JSON.parse(store.get("tooiraq-drafts") || "[]").filter((d) => d.agency === a.id); } catch (e) {}
    const live = toursOf(a.id);
    const cityOpts = CITIES.map((x) => '<option value="' + x.id + '">' + esc(L(x)) + "</option>").join("");
    const typeOpts = TYPES.map((x) => '<option value="' + x.id + '">' + esc(L(x)) + "</option>").join("");

    function ptour(x, isLive) {
      return '<div class="ptour"><img alt="" src="' + IMG(x.img || "babylon") + '"/>' +
        '<div class="tx"><b>' + esc(L(x.title)) + "</b><span>" + esc(L(cityOf(x.city) || {})) + " · $" + x.price + " · " +
        (x.days > 1 ? x.days + " " + t("days") : (x.hours || 8) + " " + t("hours")) + "</span></div>" +
        '<span class="pill-status ' + (isLive ? "pill-live" : "pill-pending") + '">' + (isLive ? t("pLive") : t("pPending")) + "</span></div>";
    }

    root.innerHTML =
      '<div class="container portal-shell">' +
      '<aside class="portal-nav">' +
      '<a class="active" href="#dash">📊 ' + t("pNavDash") + "</a>" +
      '<a href="#mytours">🗂 ' + t("pNavTours") + "</a>" +
      '<a href="#add">➕ ' + t("pNavAdd") + "</a>" +
      '<a href="#" id="p-out">↩ ' + t("pNavOut") + "</a></aside>" +
      "<div>" +
      '<div class="notice-proto">' + t("protoNote") + "</div>" +
      '<h1 class="t2" id="dash">' + esc(L(a.name)) + "</h1>" +
      '<div class="stat-row mt-4">' +
      '<div class="stat"><div class="v">1,284</div><div class="l">' + t("pViews") + "</div></div>" +
      '<div class="stat"><div class="v">96</div><div class="l">' + t("pInq") + "</div></div>" +
      '<div class="stat"><div class="v">' + live.length + '</div><div class="l">' + t("pTours") + "</div></div></div>" +
      '<div class="panel" id="mytours"><h2>' + t("pYourTours") + "</h2>" +
      live.map((x) => ptour(x, true)).join("") + drafts.map((x) => ptour(x, false)).join("") + "</div>" +
      '<div class="panel mt-4" id="add"><h2>' + t("pAddTitle") + '</h2><p class="subhead" style="margin-bottom:14px">' + t("pAddSub") + "</p>" +
      '<div class="form-grid">' +
      '<div class="form-row"><div><label>' + t("pfTitleEn") + '</label><input id="pf-ten"/></div><div><label>' + t("pfTitleAr") + '</label><input id="pf-tar" dir="rtl"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfCity") + '</label><select id="pf-city">' + cityOpts + "</select></div><div><label>" + t("pfType") + '</label><select id="pf-type">' + typeOpts + "</select></div></div>" +
      '<div class="form-row"><div><label>' + t("pfDays") + '</label><input id="pf-days" type="number" min="1" value="1"/></div><div><label>' + t("pfHours") + '</label><input id="pf-hours" type="number" min="1" value="8"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfPrice") + '</label><input id="pf-price" type="number" min="1" value="75"/></div><div><label>' + t("pfGroup") + '</label><input id="pf-group" type="number" min="1" value="10"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfWa") + '</label><input id="pf-wa" placeholder="+964 …"/></div>' +
      '<div style="display:flex;align-items:end"><label class="f-check" style="margin-bottom:6px"><input type="checkbox" id="pf-cancel" checked/>' + t("pfCancel") + "</label></div></div>" +
      "<div><label>" + t("pfDescEn") + '</label><textarea id="pf-den"></textarea></div>' +
      "<div><label>" + t("pfDescAr") + '</label><textarea id="pf-dar" dir="rtl"></textarea></div>' +
      '<div class="form-row"><div><label>' + t("pfHi") + '</label><textarea id="pf-hen"></textarea></div><div><label>' + t("pfHiAr") + '</label><textarea id="pf-har" dir="rtl"></textarea></div></div>' +
      "<div><label>" + t("pfMeet") + '</label><input id="pf-meet"/></div>' +
      '<button class="btn btn-primary" id="pf-save">' + t("pfSave") + "</button>" +
      "</div></div></div></div>";

    document.getElementById("p-out").addEventListener("click", (e) => { e.preventDefault(); store.del("tooiraq-provider"); renderPortal(); });
    document.getElementById("pf-save").addEventListener("click", () => {
      const g = (id) => document.getElementById(id).value;
      const d = {
        agency: a.id, img: CITY_IMG[g("pf-city")] || "babylon",
        title: { en: g("pf-ten") || "Untitled tour", ar: g("pf-tar") || g("pf-ten") || "جولة" },
        city: g("pf-city"), type: g("pf-type"),
        days: +g("pf-days") || 1, hours: +g("pf-hours") || 8, price: +g("pf-price") || 0,
        groupMax: +g("pf-group") || 10, wa: g("pf-wa"), cancel: document.getElementById("pf-cancel").checked,
        desc: { en: g("pf-den"), ar: g("pf-dar") },
        highlights: { en: g("pf-hen").split("\n").filter(Boolean), ar: g("pf-har").split("\n").filter(Boolean) },
        meeting: { en: g("pf-meet"), ar: g("pf-meet") }, rating: 0, reviews: 0
      };
      let all = []; try { all = JSON.parse(store.get("tooiraq-drafts") || "[]"); } catch (e) {}
      all.push(d); store.set("tooiraq-drafts", JSON.stringify(all));
      renderPortal(); window.location.hash = "mytours";
    });
  }

  /* ---------- boot ---------- */
  let page = "home";
  function render() {
    injectChrome(page);
    applyI18n();
    if (page === "home") renderHome();
    if (page === "tours") renderToursPage();
    if (page === "tour") renderTourPage();
    if (page === "agencies") renderAgenciesPage();
    if (page === "portal") renderPortal();
  }
  window.TooIraq = {
    init(opts) {
      page = (opts && opts.page) || "home";
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      render();
    }
  };
})();
