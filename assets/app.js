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
      menu: "Menu", bookNow: "Book now", account: "Account",
      modeLocal: "Traveling within Iraq", modeIntl: "Visiting from abroad",
      yourCityLbl: "Your city", yourCityPh: "Select your city",
      departsFromLbl: "Departs from",
      noLocalDepartPre: "No tours currently depart from", noLocalDepartPost: "Try Baghdad, the main transport hub, or clear this filter.",
      clearDepart: "Clear this filter",
      goalIraq: "Explore Iraq", goalAbroad: "Travel abroad",
      abroadAll: "All destinations", abroadTitle: "Trips abroad from Iraq",
      departAsk: "Departure city: confirm with the agency",
      fromLbl: "Traveling from", fromIraq: "Iraq", fromAbroad: "Outside Iraq",
      destIraq: "Inside Iraq", destAbroad: "Outside Iraq",
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
      poa: "Price on request", onboardingBadge: "Onboarding", newOp: "New on TooIraq — onboarding", durVaries: "Duration varies",
      srcBtn: "View original listing ↗",
      srcNote: "Temporary reference link for onboarding — will be removed once this provider approves their TooIraq profile.",
      visitSite: "Website ↗",
      aboutTitle: "About this tour", incTitle: "What's included",
      itinTitle: "Itinerary", meetTitle: "Meeting point & pickup",
      revTitle: "Traveler reviews", offeredBy: "Offered by", since: "On TooIraq since",
      bbDate: "Date", bbPax: "Travelers", bbName: "Your name", bbWa: "Your WhatsApp number",
      bbLoc: "Where are you located?", bbLocPh: "Hotel name or neighborhood — for pickup",
      bookWa: "Book on WhatsApp", bookReq: "Send booking request",
      bbNote: "No prepayment — you confirm details with the agency and pay them directly.",
      bbSent: "Request sent! The agency will contact you shortly.",
      waBook: "Hello! I would like to book via TooIraq:",
      waTour: "Tour", waDate: "Date", waPax: "Travelers", waName: "Name", waLoc: "Location",
      bkCreated: "Booking request sent! Your reference:",
      bkManage: "Track / manage this booking",
      bkFillAll: "Please fill date, name and WhatsApp number.",
      bkErr: "Couldn't create the booking — try again or book via WhatsApp.",
      payNow: "Pay online", bkPayNote: "Pay online now, or arrange payment directly with the agency.",
      signIn: "Sign in", signUp: "Create account", save: "Save changes",
      authErr: "Sign-in failed — check your details and try again.",
      signUpDone: "Account created! Check your email to confirm, then sign in.",
      st_pending: "Pending confirmation", st_confirmed: "Confirmed", st_declined: "Declined",
      st_cancelled_by_traveler: "Cancelled by traveler", st_cancelled_by_agency: "Cancelled by agency",
      st_completed: "Completed", st_no_show: "No-show",
      pay_unpaid: "Unpaid", pay_paid: "Paid", pay_refunded: "Refunded", pay_partially_refunded: "Partially refunded",
      agenciesTitle: "Tour agencies & providers", agenciesSub: "Verified Iraqi operators you contact directly — no middleman.",
      agTours: "tours", agSince: "Since", chat: "WhatsApp", call: "Call",
      portalTitle: "Provider portal", portalSub: "Manage your agency profile and tours on TooIraq.",
      plEmail: "Email", plPass: "Password", plAgency: "Your agency (demo)", plBtn: "Log in",
      plUser: "Username", plBad: "Wrong username or password.",
      plDemoHint: "Testing phase — every listed provider has a demo login: its username below with password 123456 (e.g. tooiraq / 123456).",
      plDemoAs: "Demo account — managing sample agency", plSignedAs: "Signed in as",
      plDemoList: "View all demo usernames",
      pNavProfile: "My profile", pfEdit: "Edit", pTapEdit: "Tap any tour to edit it.",
      pfSaveChanges: "Save changes", pfSavedLocal: "Saved ✓ (changes live in this browser during the demo)",
      pfSocials: "Social links", pfSocialsHint: "Shown as buttons on your public profile and on every one of your tour pages.",
      pfInstagram: "Instagram link", pfFacebook: "Facebook link", pfTiktok: "TikTok link", pfYoutube: "YouTube link",
      pfWebsite: "Website", pfImgs: "Photo URLs — one per line", pfLangs: "Tour languages (e.g. EN AR KU)",
      pfItinEn: "Itinerary — one step per line: Title | detail (English)", pfItinAr: "Itinerary — one step per line: Title | detail (Arabic)",
      pfMeetAr: "Meeting point (Arabic)", pfAbroad: "This tour goes outside Iraq (outbound)", pfDest: "Destination abroad",
      pfDeparts: "Cities this tour departs from", pfBack: "← Back to my tours",
      followUs: "Follow", socialsTitle: "Find us on social media",
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
      menu: "القائمة", bookNow: "احجز الآن", account: "الحساب",
      modeLocal: "أسافر داخل العراق", modeIntl: "أزور من الخارج",
      yourCityLbl: "مدينتك", yourCityPh: "اختر مدينتك",
      departsFromLbl: "تنطلق من",
      noLocalDepartPre: "لا توجد حالياً جولات تنطلق من", noLocalDepartPost: "جرّب بغداد، المحور الرئيسي للنقل، أو امسح هذا الفلتر.",
      clearDepart: "امسح هذا الفلتر",
      goalIraq: "جولات داخل العراق", goalAbroad: "السفر إلى الخارج",
      abroadAll: "كل الوجهات", abroadTitle: "رحلات من العراق إلى الخارج",
      departAsk: "مدينة الانطلاق: تُؤكد مع الشركة",
      fromLbl: "أسافر من", fromIraq: "العراق", fromAbroad: "خارج العراق",
      destIraq: "داخل العراق", destAbroad: "خارج العراق",
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
      poa: "السعر عند الطلب", onboardingBadge: "قيد الانضمام", newOp: "جديد على TooIraq — قيد الانضمام", durVaries: "مدة متغيرة",
      srcBtn: "عرض الإعلان الأصلي ↗",
      srcNote: "رابط مرجعي مؤقت لغرض الانضمام — سيُزال بعد موافقة المزوّد على ملفه في TooIraq.",
      visitSite: "الموقع الإلكتروني ↗",
      aboutTitle: "عن هذه الجولة", incTitle: "ما هو مشمول",
      itinTitle: "برنامج الجولة", meetTitle: "نقطة اللقاء والنقل",
      revTitle: "آراء المسافرين", offeredBy: "مقدَّمة من", since: "على TooIraq منذ",
      bbDate: "التاريخ", bbPax: "المسافرون", bbName: "اسمك", bbWa: "رقم واتساب الخاص بك",
      bbLoc: "أين تقيم؟", bbLocPh: "اسم الفندق أو المنطقة — لغرض الاستلام",
      bookWa: "احجز عبر واتساب", bookReq: "أرسل طلب حجز",
      bbNote: "بلا دفع مسبق — تؤكد التفاصيل مع الشركة وتدفع لها مباشرة.",
      bbSent: "تم إرسال الطلب! ستتواصل معك الشركة قريباً.",
      waBook: "مرحباً! أود الحجز عبر TooIraq:",
      waTour: "الجولة", waDate: "التاريخ", waPax: "المسافرون", waName: "الاسم", waLoc: "الموقع",
      bkCreated: "تم إرسال طلب الحجز! رقم حجزك:",
      bkManage: "تتبّع أو أدر هذا الحجز",
      bkFillAll: "يرجى إدخال التاريخ والاسم ورقم واتساب.",
      bkErr: "تعذر إنشاء الحجز — حاول مجدداً أو احجز عبر واتساب.",
      payNow: "ادفع إلكترونياً", bkPayNote: "ادفع الآن إلكترونياً أو رتّب الدفع مباشرة مع الشركة.",
      signIn: "تسجيل الدخول", signUp: "إنشاء حساب", save: "حفظ التغييرات",
      authErr: "تعذر تسجيل الدخول — تحقق من بياناتك وحاول مجدداً.",
      signUpDone: "تم إنشاء الحساب! أكّد بريدك الإلكتروني ثم سجّل الدخول.",
      st_pending: "بانتظار التأكيد", st_confirmed: "مؤكد", st_declined: "مرفوض",
      st_cancelled_by_traveler: "ألغاه المسافر", st_cancelled_by_agency: "ألغته الشركة",
      st_completed: "مكتمل", st_no_show: "لم يحضر",
      pay_unpaid: "غير مدفوع", pay_paid: "مدفوع", pay_refunded: "مسترجع", pay_partially_refunded: "مسترجع جزئياً",
      agenciesTitle: "شركات السياحة ومقدمو الخدمات", agenciesSub: "شركات عراقية موثّقة تتواصل معها مباشرة — بلا وسيط.",
      agTours: "جولات", agSince: "منذ", chat: "واتساب", call: "اتصال",
      portalTitle: "بوابة المزوّدين", portalSub: "أدر ملف شركتك وجولاتك على TooIraq.",
      plEmail: "البريد الإلكتروني", plPass: "كلمة المرور", plAgency: "شركتك (تجريبي)", plBtn: "تسجيل الدخول",
      plUser: "اسم المستخدم", plBad: "اسم المستخدم أو كلمة المرور غير صحيحة.",
      plDemoHint: "مرحلة تجريبية — لكل مزوّد مدرج دخول تجريبي: اسم المستخدم أدناه مع كلمة المرور 123456 (مثال: tooiraq / 123456).",
      plDemoAs: "حساب تجريبي — تدير شركة عينة", plSignedAs: "مسجّل الدخول باسم",
      plDemoList: "عرض جميع أسماء المستخدمين التجريبية",
      pNavProfile: "ملفي", pfEdit: "تعديل", pTapEdit: "اضغط على أي جولة لتعديلها.",
      pfSaveChanges: "حفظ التغييرات", pfSavedLocal: "تم الحفظ ✓ (تظهر التغييرات في هذا المتصفح خلال التجربة)",
      pfSocials: "روابط التواصل الاجتماعي", pfSocialsHint: "تظهر كأزرار في ملفك العام وفي كل صفحة من صفحات جولاتك.",
      pfInstagram: "رابط إنستغرام", pfFacebook: "رابط فيسبوك", pfTiktok: "رابط تيك توك", pfYoutube: "رابط يوتيوب",
      pfWebsite: "الموقع الإلكتروني", pfImgs: "روابط الصور — رابط في كل سطر", pfLangs: "لغات الجولة (مثال: EN AR KU)",
      pfItinEn: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (إنجليزي)", pfItinAr: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (عربي)",
      pfMeetAr: "نقطة اللقاء (عربي)", pfAbroad: "هذه الجولة خارج العراق (سفر للخارج)", pfDest: "الوجهة خارج العراق",
      pfDeparts: "المدن التي تنطلق منها الجولة", pfBack: "← العودة إلى جولاتي",
      followUs: "تابعنا", socialsTitle: "تابعنا على مواقع التواصل",
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
  const destOf = (id) => (typeof ABROAD !== "undefined" ? ABROAD.find((d) => d.id === id) : null);
  /* location label that works for Iraq tours (city) and abroad tours (dest + country) */
  const locLabel = (tour) => {
    if (!tour.abroad) return L(cityOf(tour.city));
    const d = destOf(tour.dest);
    return d ? L(d.name) + (lang === "ar" ? "، " : ", ") + L(d.country) : "";
  };
  const locHref = (tour) => tour.abroad
    ? "tours.html?scope=abroad&dest=" + tour.dest
    : "tours.html?city=" + tour.city;
  const typeOf = (id) => TYPES.find((x) => x.id === id);
  const agencyOf = (id) => AGENCIES.find((a) => a.id === id);
  const toursOf = (aid) => TOURS.filter((x) => x.agency === aid);
  const starsHTML = (r) => { const f = Math.round(r); let s = ""; for (let i = 1; i <= 5; i++) s += i <= f ? "★" : "☆"; return '<span class="stars">' + s + "</span>"; };
  const durLbl = (tour) => tour.days > 1 ? tour.days + " " + t("days") : (tour.hours ? tour.hours + " " + t("hours") : (tour.days === 1 ? "1 " + t("day") : t("durVaries")));
  /* only surface departsFrom when it names a REAL hub beyond the tour's own destination city */
  const departExtras = (tour) => (tour.departsFrom || [tour.city]).filter((c) => c !== tour.city);
  const departBadgeHTML = (tour) => {
    if (tour.abroad) {
      /* outbound tours: the Iraqi departure city IS the selling point —
         always show it, or an honest "confirm with the agency" when the
         operator's own listing doesn't state one. */
      const from = (tour.departsFrom || []).filter(Boolean);
      return "<span>🛫 " + (from.length
        ? t("departsFromLbl") + ": " + from.map((cid) => esc(L(cityOf(cid)))).join(" · ")
        : t("departAsk")) + "</span>";
    }
    const extra = departExtras(tour);
    return extra.length ? "<span>🚌 " + t("departsFromLbl") + ": " + extra.map((cid) => esc(L(cityOf(cid)))).join(" · ") + "</span>" : "";
  };
  const priceHTML = (tour) => tour.price
    ? '<span class="price">' + t("from") + "<b>$" + tour.price + "</b><small>" + t("perPerson") + "</small></span>"
    : '<span class="price"><b style="font-size:15px;line-height:1.3">' + t("poa") + "</b></span>";
  const fill = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const badgeHTML = (tour, inline) =>
    tour.badge === "best" ? '<span class="badge badge-hot"' + (inline ? ' style="position:static"' : "") + ">" + t("bestSeller") + "</span>" :
    tour.badge === "likely" ? '<span class="badge badge-hot" style="background:#8E1020' + (inline ? ";position:static" : "") + '">' + t("likelySellOut") + "</span>" : "";

  /* image source: http(s) URL passes through, otherwise img.js key */
  const SRC = (k) => (typeof k === "string" && /^https?:/.test(k)) ? k : IMG(k || "babylon");

  /* social links → button row (agency cards, tour pages, portal preview) */
  const SOCIAL_DEFS = [
    ["instagram", "📸", "Instagram"], ["facebook", "📘", "Facebook"],
    ["tiktok", "🎵", "TikTok"], ["youtube", "▶️", "YouTube"]
  ];
  const socialsHTML = (a, small) => {
    const s = (a && a.socials) || {};
    const btns = SOCIAL_DEFS.filter(([k]) => s[k]).map(([k, ic, lbl]) =>
      '<a class="btn btn-outline ' + (small ? "btn-sm" : "") + '" target="_blank" rel="noopener" href="' + esc(s[k]) + '">' + ic + " " + lbl + "</a>").join("");
    return btns ? '<div class="social-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">' + btns + "</div>" : "";
  };

  /* demo-mode local edits (provider portal, testing phase): overrides
     saved in this browser are merged into the static catalog at boot so
     the public pages reflect a provider's edits immediately. Harmless
     when absent; replaced by the real DB once Supabase is live. */
  function applyLocalEdits() {
    try {
      const ov = JSON.parse(store.get("tooiraq-tour-edits") || "{}");
      TOURS.forEach((x) => { if (ov[x.id]) Object.assign(x, ov[x.id]); });
    } catch (e) {}
    try {
      const ao = JSON.parse(store.get("tooiraq-agency-edits") || "{}");
      AGENCIES.forEach((a) => { if (ao[a.id]) Object.assign(a, ao[a.id]); });
    } catch (e) {}
  }

  /* ---------- live catalog merge (Supabase → static arrays) ----------
     Published DB tours/agencies merge into TOURS/AGENCIES so every
     existing render path works unchanged. DB rows whose slug matches a
     static tour id just tag it with _dbId (seeded mirror rows) so
     bookings become real; new provider tours are appended. */
  let catalogMerged = false;
  function dbTourAdapt(r, slug) {
    return {
      id: slug, _dbId: r.id,
      agency: (r.agencies && r.agencies.id) || r.agency_id,
      img: (r.images && r.images[0]) || "babylon", imgs: r.images || [],
      title: r.title || { en: "", ar: "" }, desc: r.description || { en: "", ar: "" },
      city: r.abroad ? null : r.city_id, type: r.type_id,
      abroad: !!r.abroad, dest: r.abroad ? (r.dest_id || null) : null,
      departsFrom: (r.departs_city_ids && r.departs_city_ids.length) ? r.departs_city_ids : (r.abroad ? [] : [r.city_id]),
      days: r.days || 1, hours: r.hours || null,
      price: Math.round((r.price_cents || 0) / 100),
      groupMax: r.group_max || 10, langs: r.langs || [],
      cancel: r.cancel !== "nonrefundable",
      highlights: r.highlights || { en: [], ar: [] }, itinerary: r.itinerary || [],
      meeting: r.meeting || { en: "", ar: "" },
      rating: r.rating ? +r.rating : 0, reviews: r.review_count || 0,
      badge: r.badge || null, src: r.src_url || null
    };
  }
  function mergeBackendCatalog() {
    const B = window.TI_BACKEND;
    if (catalogMerged || !B || !B.enabled) return;
    catalogMerged = true;
    B.publishedTours().then((rows) => {
      if (!rows || !rows.length) return;
      let changed = false;
      rows.forEach((r) => {
        const ag = r.agencies || {};
        if (ag.id && !AGENCIES.some((x) => x.id === ag.id)) {
          AGENCIES.push({
            id: ag.id, name: ag.name || { en: "", ar: "" }, base: { en: "", ar: "" },
            desc: { en: "", ar: "" }, initials: ag.initials || "•", color: "art-teal",
            wa: ag.whatsapp || "", phone: "", site: ag.website || "",
            socials: ag.socials || {},
            verified: !!ag.verified, rating: ag.rating ? +ag.rating : 0,
            reviews: ag.review_count || 0, since: ag.since || null
          });
          changed = true;
        }
        const slug = r.slug || r.id;
        const existing = TOURS.find((x) => x.id === slug);
        if (existing) {
          existing._dbId = r.id;
          if (r.images && r.images.length) existing.imgs = r.images;
        } else { TOURS.push(dbTourAdapt(r, slug)); changed = true; }
      });
      if (changed) render();
    }).catch(function () {});
  }

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
        (backendOn() ? '<a class="btn btn-outline btn-sm" href="account.html">👤 ' + t("account") + "</a>" : "") +
        '<a class="btn btn-outline btn-sm" href="provider.html">' + t("providerLogin") + "</a>" +
        '<a class="btn btn-primary btn-sm" href="join.html">' + t("listBusiness") + "</a>" +
        '<button class="nav-burger" id="nav-burger" aria-label="' + t("menu") + '" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>' +
        "</div></div>" +
        '<nav class="mobile-menu" id="mobile-menu">' +
        mnav("index.html", "navHome", active === "home") + mnav("tours.html", "navTours", active === "tours") +
        mnav("agencies.html", "navAgencies", active === "agencies") + mnav("contact.html", "navContact", active === "contact") +
        (backendOn() ? '<a href="account.html">👤 ' + t("account") + "</a>" : "") +
        '<a href="provider.html">' + t("providerLogin") + "</a>" +
        '<a class="mm-cta" href="join.html">' + t("listBusiness") + "</a>" +
        "</nav>";
      document.getElementById("lang-toggle").addEventListener("click", () => setLang(lang === "en" ? "ar" : "en"));
      const burger = document.getElementById("nav-burger"), mm = document.getElementById("mobile-menu");
      burger.addEventListener("click", () => {
        const open = mm.classList.toggle("open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
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
  const mnav = nav;
  const backendOn = () => !!(window.TOOIRAQ_CONFIG && window.TOOIRAQ_CONFIG.SUPABASE_URL && window.TOOIRAQ_CONFIG.SUPABASE_ANON_KEY);

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
    return (
      '<article class="tcard">' +
      '<a class="media" href="tour.html?id=' + tour.id + '">' + badgeHTML(tour) +
      '<img loading="lazy" alt="' + esc(L(tour.title)) + '" src="' + SRC(tour.img) + '"/></a>' +
      '<div class="body">' +
      '<span class="place">' + esc(locLabel(tour)) + "</span>" +
      '<h3><a href="tour.html?id=' + tour.id + '">' + esc(L(tour.title)) + "</a></h3>" +
      (tour.rating ? '<div class="rating-row">' + starsHTML(tour.rating) + "<b>" + tour.rating.toFixed(1) + "</b><span>(" + tour.reviews + ")</span></div>"
        : '<div class="rating-row"><span class="badge badge-save">' + t("onboardingBadge") + "</span></div>") +
      '<div class="meta"><span>🕐 ' + durLbl(tour) + "</span>" + (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") + "</div>" +
      '<div class="foot">' + priceHTML(tour) +
      '<a class="btn btn-tint btn-sm" href="tour.html?id=' + tour.id + '">' + t("seeTour") + "</a></div>" +
      "</div></article>"
    );
  }

  function resultCard(tour) {
    const ty = typeOf(tour.type), a = agencyOf(tour.agency);
    return (
      '<article class="rcard">' +
      '<a class="media" href="tour.html?id=' + tour.id + '">' + badgeHTML(tour) +
      '<img loading="lazy" alt="' + esc(L(tour.title)) + '" src="' + SRC(tour.img) + '"/></a>' +
      '<div class="mid">' +
      '<h3><a href="tour.html?id=' + tour.id + '">' + esc(L(tour.title)) + "</a></h3>" +
      '<div class="loc"><a href="' + locHref(tour) + '">' + esc(locLabel(tour)) + "</a> · " + esc(L(ty)) + (a ? " · " + esc(L(a.name)) : "") + "</div>" +
      '<div class="feats"><span>🕐 ' + durLbl(tour) + "</span>" + (tour.groupMax ? "<span>👥 " + t("upTo") + " " + tour.groupMax + " " + t("people") + "</span>" : "") + "<span>🗣 " + (tour.langs || []).join(" · ") + "</span>" + departBadgeHTML(tour) + "</div>" +
      '<p class="subhead">' + esc(L(tour.desc)) + "</p>" +
      (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") +
      "</div>" +
      '<div class="side">' +
      (tour.rating ? '<div class="rating-row"><b>' + tour.rating.toFixed(1) + "</b>" + starsHTML(tour.rating) + "<span>" + tour.reviews + " " + t("reviewsWord") + "</span></div>"
        : '<div><span class="badge badge-save">' + t("onboardingBadge") + "</span></div>") +
      "<div>" + priceHTML(tour) +
      (tour.src ? '<a class="footnote" style="display:block;margin-top:6px" target="_blank" rel="noopener" href="' + tour.src + '">' + t("srcBtn") + "</a>" : "") +
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
      "<div><h3 style='font-size:17px'>" + esc(L(a.name)) + "</h3><span class='footnote'>" + esc(L(a.base)) + (a.since ? " · " + t("agSince") + " " + a.since : "") + "</span></div></div>" +
      (a.rating
        ? '<div class="rating-row">' + starsHTML(a.rating) + "<b>" + a.rating.toFixed(1) + "</b><span>(" + a.reviews + " " + t("reviewsWord") + ")</span>" +
          (a.verified ? '&nbsp;<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : "") + "</div>"
        : '<div><span class="badge badge-save">' + t("newOp") + "</span></div>") +
      '<p class="subhead">' + esc(L(a.desc)) + "</p>" +
      '<div class="foot"><span class="footnote"><b style="color:var(--label-primary)">' + n + "</b> " + t("agTours") + "</span>" +
      '<span style="display:flex;gap:8px">' +
      (a.wa ? '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + a.wa + '">' + t("chat") + "</a>" : "") +
      (a.phone ? '<a class="btn btn-outline btn-sm" href="tel:' + a.phone.replace(/\s/g, "") + '">' + t("call") + "</a>" : "") +
      (a.site ? '<a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="' + a.site + '">' + t("visitSite") + "</a>" : "") +
      "</span></div>" +
      socialsHTML(a, true) +
      "</div></article>"
    );
  }

  /* ---------- travel mode (local traveler city selector) ----------
     Explicit, visible toggle — nothing is assumed from language.
     "local" reveals a second choice (Explore Iraq / Travel abroad)
     plus a Your-city picker used to filter tours by departsFrom;
     "intl" (or unset) hides all of it — visitors from abroad only
     ever see tours inside Iraq. */
  function travelMode() { return store.get("tooiraq-travel-mode") || ""; }
  function travelGoal() { return store.get("tooiraq-travel-goal") || "iraq"; }
  function departCity() { return store.get("tooiraq-depart-city") || ""; }
  function renderTravelMode(onChange) {
    const el = document.getElementById("travel-mode");
    if (!el) return;
    const paint = () => {
      const mode = travelMode(), goal = travelGoal(), city = departCity();
      const cityOpts = '<option value="">' + t("yourCityPh") + "</option>" +
        CITIES.map((c) => '<option value="' + c.id + '"' + (city === c.id ? " selected" : "") + ">" + esc(L(c)) + "</option>").join("");
      el.innerHTML =
        /* desktop: the original pill rows (unchanged) */
        '<div class="tm-pills">' +
        '<div class="mode-pills">' +
        '<button type="button" class="mode-pill' + (mode === "local" ? " selected" : "") + '" data-m="local">🇮🇶 ' + t("modeLocal") + "</button>" +
        '<button type="button" class="mode-pill' + (mode === "intl" ? " selected" : "") + '" data-m="intl">✈️ ' + t("modeIntl") + "</button>" +
        "</div>" +
        (mode === "local"
          ? '<div class="mode-pills mode-goals">' +
            '<button type="button" class="mode-pill sub' + (goal === "iraq" ? " selected" : "") + '" data-g="iraq">🏛️ ' + t("goalIraq") + "</button>" +
            '<button type="button" class="mode-pill sub' + (goal === "abroad" ? " selected" : "") + '" data-g="abroad">🛫 ' + t("goalAbroad") + "</button>" +
            "</div>"
          : "") +
        "</div>" +
        /* mobile: two symmetric dropdowns — Traveling from / Destination.
           Both options always visible to everyone (Max, Aug 2). */
        '<div class="mode-selects">' +
        '<div class="mode-city"><label>' + t("fromLbl") + '</label><select id="mode-from-sel">' +
        '<option value=""' + (mode === "" ? " selected" : "") + ">—</option>" +
        '<option value="local"' + (mode === "local" ? " selected" : "") + ">🇮🇶 " + t("fromIraq") + "</option>" +
        '<option value="intl"' + (mode === "intl" ? " selected" : "") + ">✈️ " + t("fromAbroad") + "</option>" +
        "</select></div>" +
        '<div class="mode-city"><label>' + t("sDest") + '</label><select id="mode-goal-sel">' +
        '<option value="iraq"' + (goal === "iraq" ? " selected" : "") + ">🏛️ " + t("destIraq") + "</option>" +
        '<option value="abroad"' + (goal === "abroad" ? " selected" : "") + ">🛫 " + t("destAbroad") + "</option>" +
        "</select></div>" +
        "</div>" +
        (mode === "local"
          ? '<div class="mode-city mode-city-row"><label>' + t("yourCityLbl") + '</label><select id="mode-city-sel">' + cityOpts + "</select></div>"
          : "");
      el.querySelectorAll("[data-m]").forEach((btn) => btn.addEventListener("click", () => {
        const next = btn.dataset.m === mode ? "" : btn.dataset.m;
        store.set("tooiraq-travel-mode", next);
        /* desktop pills have no goal control outside local mode — reset
           so the search box never gets stuck on abroad there */
        if (next !== "local") { store.set("tooiraq-depart-city", ""); store.set("tooiraq-travel-goal", ""); }
        paint();
        if (onChange) onChange();
      }));
      el.querySelectorAll("[data-g]").forEach((btn) => btn.addEventListener("click", () => {
        store.set("tooiraq-travel-goal", btn.dataset.g);
        paint();
        if (onChange) onChange();
      }));
      const fromSel = document.getElementById("mode-from-sel");
      if (fromSel) fromSel.addEventListener("change", () => {
        store.set("tooiraq-travel-mode", fromSel.value);
        if (fromSel.value !== "local") store.set("tooiraq-depart-city", "");
        /* mobile keeps the destination choice visible for everyone — no goal reset */
        paint();
        if (onChange) onChange();
      });
      const goalSel = document.getElementById("mode-goal-sel");
      if (goalSel) goalSel.addEventListener("change", () => {
        store.set("tooiraq-travel-goal", goalSel.value);
        paint();
        if (onChange) onChange();
      });
      const sel = document.getElementById("mode-city-sel");
      if (sel) sel.addEventListener("change", () => store.set("tooiraq-depart-city", sel.value));
    };
    paint();
  }

  /* ---------- home ---------- */
  function renderHome() {
    /* search box adapts to the visitor's choice: local travelers who pick
       "Travel abroad" search outbound destinations; everyone else
       searches Iraqi cities. Rebuilt whenever the pills change. */
    const paxOpts = [1, 2, 3, 4, 5, 6, 8, 10].map((n) => '<option value="' + n + '">' + (n === 1 ? t("pax1") : n + " " + t("paxN")) + "</option>").join("");
    const buildSearch = () => {
      /* abroad search applies whenever "Outside Iraq" is the chosen
         destination — visible to every visitor (Max, Aug 2); desktop
         pills reset the goal outside local mode so this stays local-only
         there. */
      const abroadMode = travelGoal() === "abroad";
      const destOpts = abroadMode
        ? '<option value="">' + t("abroadAll") + "</option>" + ABROAD.map((d) => '<option value="' + d.id + '">' + esc(L(d.name) + (lang === "ar" ? "، " : ", ") + L(d.country)) + "</option>").join("")
        : '<option value="">' + t("sDestAll") + "</option>" + CITIES.map((c) => '<option value="' + c.id + '">' + esc(L(c)) + "</option>").join("");
      fill("searchbox",
        '<div class="seg"><label>' + t("sDest") + '</label><select id="q-city">' + destOpts + "</select></div>" +
        '<div class="seg"><label>' + t("sDate") + '</label><input type="date" id="q-date"/></div>' +
        '<div class="seg"><label>' + t("sPax") + '</label><select id="q-pax">' + paxOpts + "</select></div>" +
        '<div class="go"><button class="btn btn-primary" id="q-go">' + t("sGo") + "</button></div>");
      document.getElementById("q-go").addEventListener("click", () => {
        const c = document.getElementById("q-city").value, d = document.getElementById("q-date").value, p = document.getElementById("q-pax").value;
        const qs = new URLSearchParams();
        if (abroadMode) { qs.set("scope", "abroad"); if (c) qs.set("dest", c); }
        else if (c) qs.set("city", c);
        if (d) qs.set("date", d); if (p && p !== "1") qs.set("pax", p);
        const mode = store.get("tooiraq-travel-mode"), dep = store.get("tooiraq-depart-city");
        if (mode === "local" && dep) qs.set("depart", dep);
        window.location.href = "tours.html" + (qs.toString() ? "?" + qs.toString() : "");
      });
    };
    renderTravelMode(buildSearch);
    buildSearch();
    fill("type-chips", '<a class="chip selected" href="tours.html">' + t("chipAll") + "</a>" +
      TYPES.map((x) => '<a class="chip" href="tours.html?type=' + x.id + '">' + esc(L(x)) + "</a>").join(""));

    const CAT_ICONS = { history: "🏛️", nature: "🌿", religious: "🕌", culture: "🏙️", festival: "🎉" };
    fill("cat-grid", TYPES.map((x) => {
      const n = TOURS.filter((z) => z.type === x.id && !z.abroad).length;
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

    const top = TOURS.filter((x) => !x.abroad).sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.reviews || 0) - (a.reviews || 0)).slice(0, 6);
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
    /* scope: "abroad" (outbound tours from Iraq) only via explicit URL
       param — the regular Tours page always shows Iraq tours. */
    const abroadScope = params.get("scope") === "abroad";
    const base = TOURS.filter((x) => abroadScope ? x.abroad : !x.abroad);
    const maxPrice = Math.max.apply(null, base.map((x) => x.price || 0).concat([100]));
    const localMode = travelMode() === "local" || !!params.get("depart") || abroadScope;
    const state = {
      cities: params.get("city") ? [params.get("city")] : [],
      dests: params.get("dest") ? [params.get("dest")] : [],
      types: params.get("type") ? [params.get("type")] : [],
      price: maxPrice, dur: [], minRating: 0, cancel: false, sort: "rec",
      depart: localMode ? (params.get("depart") || departCity() || "") : ""
    };

    function checks(list, key, sel) {
      return list.map((item) => {
        const n = base.filter((x) => x[key] === item.id).length;
        return '<label class="f-check"><input type="checkbox" data-f="' + key + '" value="' + item.id + '"' + (sel.includes(item.id) ? " checked" : "") + "/>" +
          esc(L(item)) + '<span class="cnt">' + n + "</span></label>";
      }).join("");
    }
    /* abroad destinations flattened to the {id,en,ar} shape checks() expects */
    const ABROAD_OPTS = abroadScope ? ABROAD.map((d) => ({
      id: d.id, en: d.name.en + ", " + d.country.en, ar: d.name.ar + "، " + d.country.ar
    })) : [];
    if (abroadScope) {
      const h1 = document.querySelector('h1[data-i18n="resultsTitle"]');
      if (h1) { h1.textContent = t("abroadTitle"); h1.removeAttribute("data-i18n"); }
      document.title = t("abroadTitle") + " — TooIraq";
    }

    root.innerHTML =
      '<div class="results-layout">' +
      '<aside class="filters"><div class="f-head">' + t("filters") +
      '<span style="display:flex;gap:6px;align-items:center"><button class="f-clear" id="f-clear">' + t("clearAll") + '</button><button class="f-close" id="f-close" aria-label="✕">✕</button></span></div>' +
      (localMode ? '<div class="f-group"><h5>' + t("departsFromLbl") + '</h5><select id="f-depart" style="width:100%;min-height:40px;border:1px solid var(--separator-opaque);border-radius:var(--radius-sm);padding:6px 10px;font-family:inherit;font-size:15px;background:var(--bg-base);color:var(--label-primary)">' +
        '<option value="">' + t("yourCityPh") + "</option>" +
        CITIES.map((c) => '<option value="' + c.id + '"' + (state.depart === c.id ? " selected" : "") + ">" + esc(L(c)) + "</option>").join("") +
        "</select></div>" : "") +
      (abroadScope
        ? '<div class="f-group"><h5>' + t("fDest") + "</h5>" + checks(ABROAD_OPTS, "dest", state.dests) + "</div>"
        : '<div class="f-group"><h5>' + t("fDest") + "</h5>" + checks(CITIES, "city", state.cities) + "</div>") +
      '<div class="f-group"><h5>' + t("fType") + "</h5>" + checks(TYPES, "type", state.types) + "</div>" +
      '<div class="f-group"><h5>' + t("fPrice") + '</h5><input type="range" id="f-price" min="40" max="' + maxPrice + '" value="' + maxPrice + '" step="5"/><div class="f-price-val">$<span id="f-price-v">' + maxPrice + "</span></div></div>" +
      '<div class="f-group"><h5>' + t("fDuration") + "</h5>" +
      '<label class="f-check"><input type="checkbox" data-dur="1"/>' + t("d1") + "</label>" +
      '<label class="f-check"><input type="checkbox" data-dur="2"/>' + t("d2") + "</label></div>" +
      '<div class="f-group"><h5>' + t("fRating") + '</h5><label class="f-check"><input type="radio" name="fr" data-r="0" checked/>' + t("fRatingAny") + "</label>" +
      '<label class="f-check"><input type="radio" name="fr" data-r="4.5"/>4.5+ ★</label>' +
      '<label class="f-check"><input type="radio" name="fr" data-r="4.8"/>4.8+ ★</label></div>' +
      '<div class="f-group"><label class="f-check"><input type="checkbox" id="f-cancel"/>' + t("fCancel") + "</label></div>" +
      '<div class="f-apply"><button class="btn btn-primary btn-block" id="f-done"></button></div>' +
      "</aside>" +
      '<div><div class="results-bar"><span class="count" id="r-count"></span>' +
      '<button class="btn btn-outline btn-sm f-toggle" id="f-toggle" aria-expanded="false">⚙︎ ' + t("filters") + "</button>" +
      '<span class="sort">⇅ ' + t("sortBy") + ' <select id="r-sort">' +
      '<option value="rec">' + t("sortRec") + '</option><option value="priceUp">' + t("sortPriceUp") + "</option>" +
      '<option value="priceDn">' + t("sortPriceDn") + '</option><option value="rating">' + t("sortRating") + "</option></select></span></div>" +
      '<div id="r-list"></div></div></div>';

    function apply() {
      let list = base.filter((x) =>
        (!state.cities.length || state.cities.includes(x.city)) &&
        (!state.dests.length || state.dests.includes(x.dest)) &&
        (!state.types.length || state.types.includes(x.type)) &&
        x.price <= state.price &&
        (!state.dur.length || state.dur.includes(x.days > 1 ? "2" : (x.days === 1 ? "1" : ""))) &&
        (x.rating || 0) >= state.minRating &&
        (!state.cancel || x.cancel) &&
        /* depart filter: abroad tours with NO stated departure stay
           visible under any city (card says "confirm with the agency")
           rather than being silently hidden or falsely matched. */
        (!state.depart || (x.abroad
          ? (!(x.departsFrom || []).length || x.departsFrom.includes(state.depart))
          : (x.departsFrom || [x.city]).includes(state.depart))));
      if (state.sort === "priceUp") list.sort((a, b) => (a.price || 1e9) - (b.price || 1e9));
      else if (state.sort === "priceDn") list.sort((a, b) => (b.price || 0) - (a.price || 0));
      else if (state.sort === "rating") list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      else list.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || (b.reviews || 0) - (a.reviews || 0));
      const emptyHTML = (state.depart && !list.length)
        ? '<div class="panel subhead">' + t("noLocalDepartPre") + " " + esc(L(cityOf(state.depart))) + ". " + t("noLocalDepartPost") +
          '<br><button class="btn btn-tint btn-sm mt-2" id="r-clear-depart">' + t("clearDepart") + "</button></div>"
        : '<div class="panel subhead">' + t("noResults") + "</div>";
      fill("r-list", list.length ? list.map(resultCard).join("") : emptyHTML);
      fill("r-count", "<b>" + list.length + "</b> " + t("found"));
      fill("f-done", list.length + " " + t("found"));
      const clearDepartBtn = document.getElementById("r-clear-depart");
      if (clearDepartBtn) clearDepartBtn.addEventListener("click", () => {
        state.depart = "";
        const sel = document.getElementById("f-depart"); if (sel) sel.value = "";
        apply();
      });
    }

    const collect = (key) => Array.from(root.querySelectorAll('[data-f="' + key + '"]:checked')).map((x) => x.value);
    root.addEventListener("change", (e) => {
      const el = e.target;
      if (el.dataset.f === "city") state.cities = collect("city");
      if (el.dataset.f === "dest") state.dests = collect("dest");
      if (el.dataset.f === "type") state.types = collect("type");
      if (el.dataset.dur) state.dur = Array.from(root.querySelectorAll("[data-dur]:checked")).map((x) => x.dataset.dur);
      if (el.dataset.r !== undefined) state.minRating = parseFloat(el.dataset.r);
      if (el.id === "f-cancel") state.cancel = el.checked;
      if (el.id === "r-sort") state.sort = el.value;
      if (el.id === "f-depart") { state.depart = el.value; store.set("tooiraq-depart-city", el.value); }
      apply();
    });
    root.addEventListener("input", (e) => {
      if (e.target.id === "f-price") { state.price = +e.target.value; document.getElementById("f-price-v").textContent = e.target.value; apply(); }
    });
    document.getElementById("f-clear").addEventListener("click", () => { window.location.href = "tours.html" + (abroadScope ? "?scope=abroad" : ""); });
    const fToggle = document.getElementById("f-toggle"), fPanel = root.querySelector(".filters");
    const setSheet = (open) => {
      fPanel.classList.toggle("open", open);
      fToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    };
    if (fToggle && fPanel) {
      fToggle.addEventListener("click", () => setSheet(!fPanel.classList.contains("open")));
      document.getElementById("f-close").addEventListener("click", () => setSheet(false));
      document.getElementById("f-done").addEventListener("click", () => setSheet(false));
    }
    apply();
  }

  /* ---------- tour detail ---------- */
  function renderTourPage() {
    const wrap = document.getElementById("tour-root");
    if (!wrap) return;
    const params = new URLSearchParams(window.location.search);
    const tour = TOURS.find((x) => x.id === params.get("id")) || TOURS[0];
    const ty = typeOf(tour.type), a = agencyOf(tour.agency);
    document.title = L(tour.title) + " — TooIraq";
    const gallery = (tour.imgs && tour.imgs.length ? tour.imgs.slice(0, 5)
      : [tour.img, CITY_IMG[tour.city], "river", "marsh", "babylon"])
      .filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 5);
    while (gallery.length < 5) gallery.push(gallery[0] || "baghdad");
    const revs = REVIEWS_POOL.slice(tour.price % 3, (tour.price % 3) + 3);
    const paxOpts = [1, 2, 3, 4, 5, 6, 8, 10].map((n) => '<option value="' + n + '">' + (n === 1 ? t("pax1") : n + " " + t("paxN")) + "</option>").join("");

    wrap.innerHTML =
      '<div class="container detail-top">' +
      '<div class="crumbs"><a href="index.html">' + t("crumbHome") + '</a> / <a href="tours.html' + (tour.abroad ? "?scope=abroad" : "") + '">' + t("crumbTours") + '</a> / <a href="' + locHref(tour) + '">' + esc(locLabel(tour)) + "</a></div>" +
      '<div class="detail-title-row"><div><h1>' + esc(L(tour.title)) + "</h1>" +
      '<div class="detail-sub">' +
      (tour.rating ? '<span class="rating-row"><b>' + tour.rating.toFixed(1) + "</b>" + starsHTML(tour.rating) + "<span>(" + tour.reviews + " " + t("reviewsWord") + ")</span></span>"
        : '<span class="badge badge-save">' + t("onboardingBadge") + "</span>") +
      "<span>📍 " + esc(locLabel(tour)) + "</span><span>🗂 " + esc(L(ty)) + "</span><span>🕐 " + durLbl(tour) + "</span>" +
      (tour.groupMax ? "<span>👥 " + t("upTo") + " " + tour.groupMax + "</span>" : "") + departBadgeHTML(tour) + "</div></div>" +
      (tour.badge ? "<div>" + badgeHTML(tour, true) + "</div>" : "") +
      "</div>" +
      '<div class="gallery"><a class="g-main"><img alt="" src="' + SRC(gallery[0]) + '"/></a>' +
      gallery.slice(1).map((g) => '<a><img loading="lazy" alt="" src="' + SRC(g) + '"/></a>').join("") + "</div></div>" +

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
      (tour.src ? "" :
        '<div class="panel"><h2>' + t("revTitle") + "</h2>" +
        revs.map((r) => '<div class="review"><div class="who"><span class="av">' + esc(r.n.slice(0, 1)) + "</span><div><b>" + esc(r.n) + "</b><br><span>" + esc(L(r.from)) + "</span></div>" +
          '<span style="margin-inline-start:auto">' + starsHTML(r.stars) + "</span></div><p>" + esc(L(r.tx)) + "</p></div>").join("") + "</div>") +
      "</div>" +

      '<aside><div class="panel bookbox">' +
      (tour.price
        ? '<div><span class="from">' + t("from") + '</span><div class="amount">$' + tour.price + " <small>" + t("perPerson") + "</small></div>" +
          (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") + "</div>"
        : '<div><div class="amount" style="font-size:22px">' + t("poa") + "</div>" +
          (tour.cancel ? '<span class="freecancel">✓ ' + t("freeCancel") + "</span>" : "") + "</div>") +
      (tour.src ? '<a class="btn btn-outline btn-block" target="_blank" rel="noopener" href="' + tour.src + '">' + t("srcBtn") + "</a>" +
        '<p class="bb-note" style="color:#8E1020">' + t("srcNote") + "</p>" : "") +
      '<div class="field"><label>' + t("bbDate") + '</label><input type="date" id="bb-date"/></div>' +
      '<div class="field"><label>' + t("bbPax") + '</label><select id="bb-pax">' + paxOpts + "</select></div>" +
      '<div class="field"><label>' + t("bbName") + '</label><input type="text" id="bb-name"/></div>' +
      '<div class="field"><label>' + t("bbWa") + '</label><input type="tel" id="bb-wa" placeholder="+964 …"/></div>' +
      '<div class="field"><label>' + t("bbLoc") + '</label><input type="text" id="bb-loc" placeholder="' + esc(t("bbLocPh")) + '"/></div>' +
      (a && a.wa ? '<button class="btn btn-wa btn-block" id="bb-book">' + t("bookWa") + "</button>" : "") +
      '<button class="btn btn-tint btn-block" id="bb-req">' + t("bookReq") + "</button>" +
      '<p class="bb-note">' + t("bbNote") + "</p>" +
      (a ? '<div class="bb-agency"><div class="alogo" style="background:#CE1126;width:42px;height:42px;border-radius:10px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center">' + a.initials + '</div><div><span class="footnote">' + t("offeredBy") + "</span><br><b>" + esc(L(a.name)) + "</b> " +
        (a.verified ? '<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : "") +
        '<br><span class="footnote">' + (a.rating ? "★ " + a.rating.toFixed(1) + " · " + t("since") + " " + a.since : t("newOp")) + "</span></div></div>" : "") +
      (a ? socialsHTML(a, true) : "") +
      "</div></aside></div>" +

      '<div class="bb-mobilebar">' +
      (tour.price
        ? '<span class="price">' + t("from") + "<b>$" + tour.price + "</b><small>" + t("perPerson") + "</small></span>"
        : '<span class="price"><b style="font-size:16px">' + t("poa") + "</b></span>") +
      '<button class="btn btn-primary" id="bb-jump">' + t("bookNow") + "</button></div>";
    document.body.classList.add("has-bbbar");
    document.getElementById("bb-jump").addEventListener("click", () => {
      const bb = wrap.querySelector(".bookbox");
      if (bb) bb.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const waMsg = () => {
      const d = document.getElementById("bb-date").value || "—";
      const p = document.getElementById("bb-pax").value;
      const n = document.getElementById("bb-name").value || "—";
      const loc = document.getElementById("bb-loc").value.trim();
      return encodeURIComponent(t("waBook") + "\n• " + t("waTour") + ": " + L(tour.title) + "\n• " + t("waDate") + ": " + d + "\n• " + t("waPax") + ": " + p + "\n• " + t("waName") + ": " + n + (loc ? "\n• " + t("waLoc") + ": " + loc : ""));
    };
    const bbBook = document.getElementById("bb-book");
    if (bbBook) bbBook.addEventListener("click", () => {
      window.open("https://wa.me/" + (a ? a.wa : "") + "?text=" + waMsg(), "_blank", "noopener");
    });
    document.getElementById("bb-req").addEventListener("click", async () => {
      const btn = document.getElementById("bb-req");
      const B = window.TI_BACKEND;
      const date = document.getElementById("bb-date").value;
      const pax = +document.getElementById("bb-pax").value || 1;
      const name = document.getElementById("bb-name").value.trim();
      const wa = document.getElementById("bb-wa").value.trim();
      const loc = document.getElementById("bb-loc").value.trim();

      /* real booking path (backend configured + tour mirrored in DB) */
      if (B && B.enabled && tour._dbId) {
        let msg = document.getElementById("bb-msg");
        if (!msg) {
          msg = document.createElement("p");
          msg.id = "bb-msg"; msg.className = "bb-note"; msg.style.color = "#8E1020";
          btn.parentNode.insertBefore(msg, btn.nextSibling);
        }
        if (!date || !name || !wa) { msg.textContent = t("bkFillAll"); return; }
        msg.textContent = ""; btn.disabled = true;
        const r = await B.createBooking({
          tourId: tour._dbId, date: date, adults: pax, children: 0,
          name: name, whatsapp: wa, note: loc || null, locale: lang
        });
        btn.disabled = false;
        if (!r || r.error || !r.data) { msg.textContent = t("bkErr"); return; }
        const bk = r.data;
        const manageUrl = "booking.html?ref=" + encodeURIComponent(bk.ref) + "&token=" + encodeURIComponent(bk.manage_token);
        const box = wrap.querySelector(".bookbox");
        box.innerHTML =
          '<div class="freecancel" style="font-size:15px">✓ ' + t("bkCreated") + "</div>" +
          '<div class="amount" style="font-size:24px">' + esc(bk.ref) + "</div>" +
          (bk.total_cents > 0 ? '<div class="from">' + t("waPax") + ": " + pax + " · $" + (bk.total_cents / 100) + "</div>" : "") +
          '<a class="btn btn-outline btn-block" href="' + manageUrl + '">' + t("bkManage") + "</a>" +
          (window.TI_PAY && window.TI_PAY.enabled && bk.total_cents > 0
            ? '<p class="bb-note">' + t("bkPayNote") + '</p><div id="bb-ppbox"></div>' : "") +
          (a && a.wa ? '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="https://wa.me/' + a.wa + "?text=" + waMsg() + '">' + t("bookWa") + "</a>" : "");
        const ppbox = document.getElementById("bb-ppbox");
        if (ppbox) window.TI_PAY.renderButtons(ppbox, bk.ref, bk.manage_token,
          () => { ppbox.outerHTML = '<p class="freecancel">✓</p>'; }, function () {});
        return;
      }

      /* fallback: Netlify form (backend off) */
      const f = document.getElementById("booking-form");
      if (f) {
        f.querySelector('[name="tour"]').value = L(tour.title);
        f.querySelector('[name="agency"]').value = a ? L(a.name) : "";
        f.querySelector('[name="date"]').value = date;
        f.querySelector('[name="travelers"]').value = pax;
        f.querySelector('[name="name"]').value = name;
        f.querySelector('[name="whatsapp"]').value = wa;
        const locField = f.querySelector('[name="location"]');
        if (locField) locField.value = loc;
        try { f.submit(); return; } catch (e) {}
      }
      btn.textContent = "✓ " + t("bbSent");
    });
  }

  /* ---------- agencies ---------- */
  function renderAgenciesPage() { fill("agencies-grid", AGENCIES.map(agencyCard).join("")); }

  /* ---------- provider portal (prototype) ---------- */
  let portalEdit = null;   /* null = list view; {kind:"tour",id} | {kind:"draft",i} | {kind:"new"} */
  function renderPortal() {
    const root = document.getElementById("portal-root");
    if (!root) return;
    const who = store.get("tooiraq-provider");

    if (!who) {
      /* credential-gated demo login (testing phase, Max's sample accounts):
         EVERY listed provider has a demo account — username = its
         directory id, password 123456. "tooiraq" stays as an alias for
         the flagship sample agency, and admin/123456 forwards to the
         admin panel. Real accounts come with Supabase (portal.js takes
         over when configured). */
      const userList = AGENCIES.map((x) =>
        '<div style="display:flex;justify-content:space-between;gap:10px;padding:3px 0;border-bottom:1px solid var(--separator)"><code>' + esc(x.id) + "</code><span>" + esc(L(x.name)) + "</span></div>").join("");
      root.innerHTML =
        '<div class="container"><div class="auth-card panel">' +
        '<h1 class="t2">' + t("portalTitle") + '</h1><p class="subhead mt-2">' + t("portalSub") + "</p>" +
        '<div class="notice-proto mt-4">' + t("protoNote") + "</div>" +
        '<div class="form-grid">' +
        "<div><label>" + t("plUser") + '</label><input id="pl-user" autocomplete="username" placeholder="tooiraq"/></div>' +
        "<div><label>" + t("plPass") + '</label><input type="password" id="pl-pass" autocomplete="current-password" placeholder="••••••"/></div>' +
        '<div id="pl-err" class="form-note hide" style="color:#8E1020"></div>' +
        '<button class="btn btn-primary btn-block" id="pl-go">' + t("plBtn") + "</button>" +
        '<p class="footnote">' + t("plDemoHint") + "</p>" +
        '<details class="footnote"><summary style="cursor:pointer">' + t("plDemoList") + '</summary><div style="max-height:220px;overflow:auto;margin-top:8px">' + userList + "</div></details>" +
        "</div></div></div>";
      const go = () => {
        const u = document.getElementById("pl-user").value.trim().toLowerCase();
        const p = document.getElementById("pl-pass").value;
        const err = () => { const e2 = document.getElementById("pl-err"); e2.textContent = t("plBad"); e2.classList.remove("hide"); };
        if (p !== "123456") return err();
        if (u === "admin") { store.set("tooiraq-admin", "1"); window.location.href = "admin.html"; return; }
        const aid = u === "tooiraq" ? "dijla-journeys" : (AGENCIES.some((x) => x.id === u) ? u : null);
        if (!aid) return err();
        store.set("tooiraq-provider", aid);
        store.set("tooiraq-provider-user", u);
        renderPortal();
      };
      document.getElementById("pl-go").addEventListener("click", go);
      document.getElementById("pl-pass").addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
      return;
    }

    const a = agencyOf(who) || AGENCIES[0];
    let allDrafts = [];
    try { allDrafts = JSON.parse(store.get("tooiraq-drafts") || "[]"); } catch (e) {}
    const drafts = allDrafts.map((d, i) => ({ d: d, i: i })).filter((z) => z.d.agency === a.id);
    const live = toursOf(a.id).filter((x) => !String(x.id).startsWith("draft"));

    /* ---- editor view (add / edit any tour) ---- */
    if (portalEdit) {
      const isDraft = portalEdit.kind === "draft";
      const isNew = portalEdit.kind === "new";
      const x = isNew ? { title: {}, desc: {}, highlights: {}, itinerary: [], meeting: {}, langs: [], imgs: [] }
        : (isDraft ? (allDrafts[portalEdit.i] || {}) : (TOURS.find((z) => z.id === portalEdit.id) || {}));
      const V = (o, side) => (o && o[side]) || "";
      const cityOpts = CITIES.map((z) => '<option value="' + z.id + '"' + (x.city === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
      const typeOpts = TYPES.map((z) => '<option value="' + z.id + '"' + (x.type === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
      const destOpts = ABROAD.map((z) => '<option value="' + z.id + '"' + (x.dest === z.id ? " selected" : "") + ">" + esc(L(z.name) + " — " + L(z.country)) + "</option>").join("");
      const depChecked = (id) => ((x.departsFrom && x.departsFrom.length) ? x.departsFrom.includes(id) : (!x.abroad && id === x.city));
      const depChecks = CITIES.map((z) =>
        '<label class="f-check"><input type="checkbox" class="pf-dep" value="' + z.id + '"' + (depChecked(z.id) ? " checked" : "") + "/>" + esc(L(z)) + "</label>").join("");
      const itinTxt = (side) => (x.itinerary || []).map((s) => V(s.t, side) + " | " + V(s.d, side)).join("\n");

      root.innerHTML =
        '<div class="container" style="padding:24px 0 64px;max-width:760px">' +
        '<a href="#" id="pf-back" class="footnote">' + t("pfBack") + "</a>" +
        '<h1 class="t2 mt-2">' + (isNew ? t("pAddTitle") : t("pfEdit") + " — " + esc(L(x.title))) + "</h1>" +
        '<div class="notice-proto mt-4">' + t("protoNote") + "</div>" +
        '<div class="panel mt-4"><div class="form-grid">' +
        '<div class="form-row"><div><label>' + t("pfTitleEn") + '</label><input id="pf-ten" value="' + esc(V(x.title, "en")) + '"/></div>' +
        "<div><label>" + t("pfTitleAr") + '</label><input id="pf-tar" dir="rtl" value="' + esc(V(x.title, "ar")) + '"/></div></div>' +
        '<div class="form-row"><div><label>' + t("pfCity") + '</label><select id="pf-city">' + cityOpts + "</select></div>" +
        "<div><label>" + t("pfType") + '</label><select id="pf-type">' + typeOpts + "</select></div></div>" +
        '<div class="form-row"><div style="display:flex;align-items:end"><label class="f-check" style="margin-bottom:6px"><input type="checkbox" id="pf-abroad"' + (x.abroad ? " checked" : "") + "/>" + t("pfAbroad") + "</label></div>" +
        '<div id="pf-dest-wrap"' + (x.abroad ? "" : ' style="display:none"') + "><label>" + t("pfDest") + '</label><select id="pf-dest">' + destOpts + "</select></div></div>" +
        "<div><label>" + t("pfDeparts") + '</label><div class="pe-city-checks">' + depChecks + "</div></div>" +
        '<div class="form-row"><div><label>' + t("pfDays") + '</label><input id="pf-days" type="number" min="1" value="' + (x.days || 1) + '"/></div>' +
        "<div><label>" + t("pfHours") + '</label><input id="pf-hours" type="number" min="1" max="24" value="' + (x.hours || 8) + '"/></div></div>' +
        '<div class="form-row"><div><label>' + t("pfPrice") + '</label><input id="pf-price" type="number" min="0" value="' + (x.price || 0) + '"/></div>' +
        "<div><label>" + t("pfGroup") + '</label><input id="pf-group" type="number" min="1" value="' + (x.groupMax || 10) + '"/></div></div>' +
        '<div class="form-row"><div><label>' + t("pfLangs") + '</label><input id="pf-langs" value="' + esc((x.langs || []).join(" ")) + '" placeholder="EN AR"/></div>' +
        '<div style="display:flex;align-items:end"><label class="f-check" style="margin-bottom:6px"><input type="checkbox" id="pf-cancel"' + (x.cancel !== false ? " checked" : "") + "/>" + t("pfCancel") + "</label></div></div>" +
        "<div><label>" + t("pfDescEn") + '</label><textarea id="pf-den">' + esc(V(x.desc, "en")) + "</textarea></div>" +
        "<div><label>" + t("pfDescAr") + '</label><textarea id="pf-dar" dir="rtl">' + esc(V(x.desc, "ar")) + "</textarea></div>" +
        '<div class="form-row"><div><label>' + t("pfHi") + '</label><textarea id="pf-hen">' + esc(((x.highlights || {}).en || []).join("\n")) + "</textarea></div>" +
        "<div><label>" + t("pfHiAr") + '</label><textarea id="pf-har" dir="rtl">' + esc(((x.highlights || {}).ar || []).join("\n")) + "</textarea></div></div>" +
        '<div class="form-row"><div><label>' + t("pfItinEn") + '</label><textarea id="pf-ien">' + esc(itinTxt("en")) + "</textarea></div>" +
        "<div><label>" + t("pfItinAr") + '</label><textarea id="pf-iar" dir="rtl">' + esc(itinTxt("ar")) + "</textarea></div></div>" +
        '<div class="form-row"><div><label>' + t("pfMeet") + ' (EN)</label><input id="pf-men" value="' + esc(V(x.meeting, "en")) + '"/></div>' +
        "<div><label>" + t("pfMeetAr") + '</label><input id="pf-mar" dir="rtl" value="' + esc(V(x.meeting, "ar")) + '"/></div></div>' +
        "<div><label>" + t("pfImgs") + '</label><textarea id="pf-imgs">' + esc((x.imgs || []).join("\n")) + "</textarea></div>" +
        '<div id="pf-msg" class="form-note"></div>' +
        '<button class="btn btn-primary" id="pf-save">' + (isNew ? t("pfSave") : t("pfSaveChanges")) + "</button>" +
        "</div></div></div>";

      document.getElementById("pf-back").addEventListener("click", (e) => { e.preventDefault(); portalEdit = null; renderPortal(); });
      document.getElementById("pf-abroad").addEventListener("change", (e) => {
        document.getElementById("pf-dest-wrap").style.display = e.target.checked ? "" : "none";
      });
      document.getElementById("pf-save").addEventListener("click", () => {
        const g = (id) => document.getElementById(id).value;
        const abroad = document.getElementById("pf-abroad").checked;
        const parseItin = () => {
          const en = g("pf-ien").split("\n").filter((s) => s.trim());
          const ar = g("pf-iar").split("\n").filter((s) => s.trim());
          return en.map((line, i2) => {
            const [te, de] = line.split("|").map((s) => (s || "").trim());
            const [ta, da] = (ar[i2] || "").split("|").map((s) => (s || "").trim());
            return { t: { en: te || "", ar: ta || te || "" }, d: { en: de || "", ar: da || de || "" } };
          });
        };
        const patch = {
          title: { en: g("pf-ten").trim() || "Untitled tour", ar: g("pf-tar").trim() || g("pf-ten").trim() || "جولة" },
          city: abroad ? null : g("pf-city"), type: g("pf-type"),
          abroad: abroad, dest: abroad ? g("pf-dest") : null,
          departsFrom: Array.from(document.querySelectorAll(".pf-dep:checked")).map((cb) => cb.value),
          days: +g("pf-days") || 1, hours: +g("pf-hours") || null,
          price: +g("pf-price") || 0, groupMax: +g("pf-group") || 10,
          langs: g("pf-langs").split(/[\s,·]+/).filter(Boolean).map((s) => s.toUpperCase()),
          cancel: document.getElementById("pf-cancel").checked,
          desc: { en: g("pf-den"), ar: g("pf-dar") },
          highlights: { en: g("pf-hen").split("\n").filter(Boolean), ar: g("pf-har").split("\n").filter(Boolean) },
          itinerary: parseItin(),
          meeting: { en: g("pf-men"), ar: g("pf-mar") || g("pf-men") },
          imgs: g("pf-imgs").split("\n").map((s) => s.trim()).filter(Boolean)
        };
        if (isNew) {
          allDrafts.push(Object.assign({ agency: a.id, img: patch.imgs[0] || CITY_IMG[patch.city] || "babylon", rating: 0, reviews: 0 }, patch));
          store.set("tooiraq-drafts", JSON.stringify(allDrafts));
          portalEdit = null; renderPortal(); return;
        }
        if (isDraft) {
          Object.assign(allDrafts[portalEdit.i], patch);
          store.set("tooiraq-drafts", JSON.stringify(allDrafts));
        } else {
          /* live catalog tour → browser-local override, visible across
             the whole site in this browser during the demo */
          let ov = {}; try { ov = JSON.parse(store.get("tooiraq-tour-edits") || "{}"); } catch (e) {}
          ov[portalEdit.id] = Object.assign(ov[portalEdit.id] || {}, patch);
          store.set("tooiraq-tour-edits", JSON.stringify(ov));
          const liveT = TOURS.find((z) => z.id === portalEdit.id);
          if (liveT) Object.assign(liveT, patch);
        }
        const m = document.getElementById("pf-msg");
        m.textContent = t("pfSavedLocal"); m.style.color = "var(--color-accent)";
      });
      return;
    }

    /* ---- list view (dashboard · tours · profile) ---- */
    function ptour(x, isLive, attrs) {
      return '<div class="ptour p-click" style="cursor:pointer" ' + attrs + '><img alt="" src="' + SRC(x.img) + '"/>' +
        '<div class="tx"><b>' + esc(L(x.title)) + "</b><span>" + esc(locLabel(x)) + " · $" + (x.price || 0) + " · " +
        (x.days > 1 ? x.days + " " + t("days") : (x.hours || 8) + " " + t("hours")) + "</span></div>" +
        '<span class="pill-status ' + (isLive ? "pill-live" : "pill-pending") + '">' + (isLive ? t("pLive") : t("pPending")) + "</span>" +
        '<span class="btn btn-outline btn-sm">' + t("pfEdit") + "</span></div>";
    }
    const soc = a.socials || {};

    root.innerHTML =
      '<div class="container portal-shell">' +
      '<aside class="portal-nav">' +
      '<a class="active" href="#dash">📊 ' + t("pNavDash") + "</a>" +
      '<a href="#mytours">🗂 ' + t("pNavTours") + "</a>" +
      '<a href="#" id="p-new">➕ ' + t("pNavAdd") + "</a>" +
      '<a href="#profile">🏷 ' + t("pNavProfile") + "</a>" +
      '<a href="#" id="p-out">↩ ' + t("pNavOut") + "</a></aside>" +
      "<div>" +
      '<div class="notice-proto">' + t("protoNote") + "</div>" +
      '<h1 class="t2" id="dash">' + esc(L(a.name)) + "</h1>" +
      '<p class="footnote">' + t("plSignedAs") + " <b>" + esc(store.get("tooiraq-provider-user") || "tooiraq") + "</b> · " + t("plDemoAs") + "</p>" +
      '<div class="stat-row mt-4">' +
      '<div class="stat"><div class="v">1,284</div><div class="l">' + t("pViews") + "</div></div>" +
      '<div class="stat"><div class="v">96</div><div class="l">' + t("pInq") + "</div></div>" +
      '<div class="stat"><div class="v">' + live.length + '</div><div class="l">' + t("pTours") + "</div></div></div>" +
      '<div class="panel" id="mytours"><h2>' + t("pYourTours") + '</h2><p class="footnote" style="margin-bottom:10px">' + t("pTapEdit") + "</p>" +
      live.map((x) => ptour(x, true, 'data-tid="' + esc(x.id) + '"')).join("") +
      drafts.map((z) => ptour(z.d, z.d.status === "approved", 'data-didx="' + z.i + '"')).join("") + "</div>" +

      '<div class="panel mt-4" id="profile"><h2>' + t("pNavProfile") + '</h2>' +
      '<p class="subhead" style="margin-bottom:14px">' + t("pfSocialsHint") + "</p>" +
      '<div class="form-grid">' +
      '<div class="form-row"><div><label>📸 ' + t("pfInstagram") + '</label><input id="pg-ig" value="' + esc(soc.instagram || "") + '" placeholder="https://instagram.com/…"/></div>' +
      "<div><label>📘 " + t("pfFacebook") + '</label><input id="pg-fb" value="' + esc(soc.facebook || "") + '" placeholder="https://facebook.com/…"/></div></div>' +
      '<div class="form-row"><div><label>🎵 ' + t("pfTiktok") + '</label><input id="pg-tk" value="' + esc(soc.tiktok || "") + '" placeholder="https://tiktok.com/@…"/></div>' +
      "<div><label>▶️ " + t("pfYoutube") + '</label><input id="pg-yt" value="' + esc(soc.youtube || "") + '" placeholder="https://youtube.com/@…"/></div></div>' +
      '<div class="form-row"><div><label>' + t("pfWebsite") + '</label><input id="pg-site" value="' + esc(a.site || "") + '"/></div>' +
      "<div><label>" + t("pfWa") + '</label><input id="pg-wa" value="' + esc(a.wa || "") + '" placeholder="9647…"/></div></div>' +
      '<div id="pg-msg" class="form-note"></div>' +
      '<button class="btn btn-primary" id="pg-save">' + t("pfSaveChanges") + "</button>" +
      '<div id="pg-preview">' + socialsHTML(a, true) + "</div>" +
      "</div></div>" +
      "</div></div>";

    document.getElementById("p-out").addEventListener("click", (e) => { e.preventDefault(); portalEdit = null; store.del("tooiraq-provider"); store.del("tooiraq-provider-user"); renderPortal(); });
    document.getElementById("p-new").addEventListener("click", (e) => { e.preventDefault(); portalEdit = { kind: "new" }; renderPortal(); });
    root.querySelectorAll("[data-tid]").forEach((el) => el.addEventListener("click", () => { portalEdit = { kind: "tour", id: el.dataset.tid }; renderPortal(); window.scrollTo(0, 0); }));
    root.querySelectorAll("[data-didx]").forEach((el) => el.addEventListener("click", () => { portalEdit = { kind: "draft", i: +el.dataset.didx }; renderPortal(); window.scrollTo(0, 0); }));
    document.getElementById("pg-save").addEventListener("click", () => {
      const g = (id) => document.getElementById(id).value.trim();
      const patch = {
        socials: { instagram: g("pg-ig"), facebook: g("pg-fb"), tiktok: g("pg-tk"), youtube: g("pg-yt") },
        site: g("pg-site"), wa: g("pg-wa").replace(/[^\d]/g, "")
      };
      Object.keys(patch.socials).forEach((k) => { if (!patch.socials[k]) delete patch.socials[k]; });
      let ao = {}; try { ao = JSON.parse(store.get("tooiraq-agency-edits") || "{}"); } catch (e) {}
      ao[a.id] = Object.assign(ao[a.id] || {}, patch);
      store.set("tooiraq-agency-edits", JSON.stringify(ao));
      Object.assign(a, patch);
      const m = document.getElementById("pg-msg");
      m.textContent = t("pfSavedLocal"); m.style.color = "var(--color-accent)";
      document.getElementById("pg-preview").innerHTML = socialsHTML(a, true);
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
    if (page === "portal" && !(window.TI_BACKEND && window.TI_BACKEND.enabled)) renderPortal();
    if (typeof window.TooIraq.onRender === "function") window.TooIraq.onRender();
  }
  window.TooIraq = {
    init(opts) {
      page = (opts && opts.page) || "home";
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      applyLocalEdits();
      render();
      mergeBackendCatalog();
    },
    /* extension points for account/portal/admin/booking page scripts */
    addStrings(en, ar) { Object.assign(STR.en, en || {}); Object.assign(STR.ar, ar || {}); },
    t: t, L: L, esc: esc, IMGx: (k) => IMG(k), store: store,
    getLang: () => lang, setLang: setLang,
    cityOf: cityOf, typeOf: typeOf,
    starsHTML: starsHTML, fill: fill,
    onRender: null
  };
})();
