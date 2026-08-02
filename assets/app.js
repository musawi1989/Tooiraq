/* ============================================================
   Iraq Tour — site engine v2 (Rafidain design system)
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
      trendTitle: "Trending destinations", trendSub: "Most searched places on Iraq Tour this month",
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
      ctaText: "Join Iraq Tour during launch for free — a standardized dashboard for your tours, and travelers who reach you directly on WhatsApp.",
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
      poa: "Price on request", onboardingBadge: "Onboarding", newOp: "New on Iraq Tour — onboarding", durVaries: "Duration varies",
      srcBtn: "View original listing ↗",
      srcNote: "Temporary reference link for onboarding — will be removed once this provider approves their Iraq Tour profile.",
      visitSite: "Website ↗",
      aboutTitle: "About this tour", incTitle: "What's included",
      itinTitle: "Itinerary", meetTitle: "Meeting point & pickup",
      revTitle: "Traveler reviews", offeredBy: "Offered by", since: "On Iraq Tour since",
      bbDate: "Date", bbPax: "Travelers", bbName: "Your name", bbWa: "Your WhatsApp number",
      bbLoc: "Where are you located?", bbLocPh: "Hotel name or neighborhood — for pickup",
      bookWa: "Book on WhatsApp", bookReq: "Send booking request",
      bbNote: "No prepayment — you confirm details with the agency and pay them directly.",
      bbSent: "Request sent! The agency will contact you shortly.",
      waBook: "Hello! I would like to book via Iraq Tour:",
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
      portalTitle: "Provider portal", portalSub: "Manage your agency profile and tours on Iraq Tour.",
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
      edHint: "Live preview — this page looks exactly like what travelers will see. Tap any dashed text to edit it; price, destination, duration and photos are all edited right where they appear.",
      edLangHint: "You're editing the English text — switch to عربي (top of page) to edit the Arabic side.",
      edDest: "Destination", edPriceChip: "Price", edDurChip: "Duration", edGroupChip: "Group",
      edLangsChip: "Languages", edPhotos: "Photos", edDepartsChip: "Departs from", edOutbound: "Outbound",
      edTypeChip: "Type", edDone: "Done",
      edNewDest: "➕ New destination", edNameEn: "Name (English)", edNameAr: "Name (Arabic)",
      edCountryEn: "Country (English)", edCountryAr: "Country (Arabic)", edCreate: "Create & select",
      edAddHl: "+ Add highlight", edAddStep: "+ Add itinerary step",
      edPhotosLbl: "Photo URLs — one per line (first becomes the main photo)",
      exTitle: "What's not included", notesTitle: "Know before you go", watchVideo: "Watch video",
      edAddEx: "+ Add exclusion", edAddImg: "＋ Add image", edImgUrl: "Image URL",
      edVideoUrl: "Video link (YouTube, Facebook…)", edApply: "Apply", edRemoveImg: "Remove",
      edGalleryHint: "Tap a photo to replace, reorder or remove it. The order here is the order travelers see.",
      edStepImgAdd: "🖼 Add photo to this step", edStepImgUrl: "Step photo URL",
      edLangsTitle: "Languages offered — tap to toggle",
      edDurD: "days", edDurH: "hours",
      viewProfile: "View profile", agProfTours: "Tours by this agency", ppNone2: "No tours listed yet.",
      durDays: "Days", durHours: "Hours", durUnit: "Duration",
      fcUpTo: "up to", fcDaysBefore: "days before the start",
      fcDaysLbl: "Days notice needed for free cancellation",
      errRequired: "Please fill in the missing information:",
      vTitle: "Tour title", vDesc: "Description", vMeet: "Meeting point", vDur: "Duration (number)", vLangs: "At least one language",
      edUpload: "Upload from gallery", edImgTooBig: "That image is too large to store in the demo — try a smaller one or use a URL.",
      edImgSelectedPre: "Photo", edImgSelectedPost: "what would you like to do?",
      edReplaceUpload: "Replace — upload from gallery", edMoveEarlier: "Move earlier", edMoveLater: "Move later",
      edApplyLink: "Use image link", edAddImgHead: "New photo — upload from your gallery, or paste an image link below:",
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
      joinTitle: "List your business on Iraq Tour",
      joinSub: "Free during launch. Apply below — we review and publish within 48 hours, then you manage everything from the provider portal.",
      joinB1t: "Free listing", joinB1p: "No fees, no commission during launch. Travelers pay you directly.",
      joinB2t: "Bilingual reach", joinB2p: "Your tours are shown in English and Arabic automatically.",
      joinB3t: "WhatsApp bookings", joinB3p: "Every booking lands straight in your WhatsApp — no new tools to learn.",
      jBusiness: "Business name", jCity: "City / base", jWa: "WhatsApp number", jEmail: "Email (optional)",
      jServices: "Services you offer", jDesc: "About your business", jSend: "Submit application",
      joinNote: "We review every application before publishing. We never ask for payment details.",
      contactTitle: "Contact Iraq Tour", contactSub: "Questions, suggestions, or an issue with a listing — we read everything.",
      fName: "Your name", fEmail: "Email", fMsg: "Message", fSendBtn: "Send message", contactDirect: "Prefer email?",
      footAbout: "Iraq Tour is a marketplace connecting travelers with licensed Iraqi tour agencies and travel services — from ancient Babylon to the mountains of Kurdistan. Every booking goes directly to the local provider.",
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
      trendTitle: "الوجهات الرائجة", trendSub: "أكثر الأماكن بحثاً على Iraq Tour هذا الشهر",
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
      ctaText: "انضم إلى Iraq Tour مجاناً خلال فترة الإطلاق — لوحة تحكم موحّدة لجولاتك، ومسافرون يصلونك مباشرة عبر واتساب.",
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
      poa: "السعر عند الطلب", onboardingBadge: "قيد الانضمام", newOp: "جديد على Iraq Tour — قيد الانضمام", durVaries: "مدة متغيرة",
      srcBtn: "عرض الإعلان الأصلي ↗",
      srcNote: "رابط مرجعي مؤقت لغرض الانضمام — سيُزال بعد موافقة المزوّد على ملفه في Iraq Tour.",
      visitSite: "الموقع الإلكتروني ↗",
      aboutTitle: "عن هذه الجولة", incTitle: "ما هو مشمول",
      itinTitle: "برنامج الجولة", meetTitle: "نقطة اللقاء والنقل",
      revTitle: "آراء المسافرين", offeredBy: "مقدَّمة من", since: "على Iraq Tour منذ",
      bbDate: "التاريخ", bbPax: "المسافرون", bbName: "اسمك", bbWa: "رقم واتساب الخاص بك",
      bbLoc: "أين تقيم؟", bbLocPh: "اسم الفندق أو المنطقة — لغرض الاستلام",
      bookWa: "احجز عبر واتساب", bookReq: "أرسل طلب حجز",
      bbNote: "بلا دفع مسبق — تؤكد التفاصيل مع الشركة وتدفع لها مباشرة.",
      bbSent: "تم إرسال الطلب! ستتواصل معك الشركة قريباً.",
      waBook: "مرحباً! أود الحجز عبر Iraq Tour:",
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
      portalTitle: "بوابة المزوّدين", portalSub: "أدر ملف شركتك وجولاتك على Iraq Tour.",
      plEmail: "البريد الإلكتروني", plPass: "كلمة المرور", plAgency: "شركتك (تجريبي)", plBtn: "تسجيل الدخول",
      plUser: "اسم المستخدم", plBad: "اسم المستخدم أو كلمة المرور غير صحيحة.",
      plDemoHint: "مرحلة تجريبية — لكل مزوّد مدرج دخول تجريبي: اسم المستخدم أدناه مع كلمة المرور 123456 (مثال: tooiraq / 123456).",
      plDemoAs: "حساب تجريبي — تدير شركة عينة", plSignedAs: "مسجّل الدخول باسم",
      plDemoList: "عرض جميع أسماء المستخدمين التجريبية",
      pNavProfile: "ملفي", pfEdit: "تعديل", pTapEdit: "اضغط على أي جولة لتعديلها.",
      pfSaveChanges: "تثبيت التحديث", pfSavedLocal: "تم الحفظ ✓ (تظهر التغييرات في هذا المتصفح خلال التجربة)",
      pfSocials: "روابط التواصل الاجتماعي", pfSocialsHint: "تظهر كأزرار في ملفك العام وفي كل صفحة من صفحات جولاتك.",
      pfInstagram: "رابط إنستغرام", pfFacebook: "رابط فيسبوك", pfTiktok: "رابط تيك توك", pfYoutube: "رابط يوتيوب",
      pfWebsite: "الموقع الإلكتروني", pfImgs: "روابط الصور — رابط في كل سطر", pfLangs: "لغات الجولة (مثال: EN AR KU)",
      pfItinEn: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (إنجليزي)", pfItinAr: "البرنامج — خطوة في كل سطر: العنوان | التفاصيل (عربي)",
      pfMeetAr: "نقطة اللقاء (عربي)", pfAbroad: "هذه الجولة خارج العراق (سفر للخارج)", pfDest: "الوجهة خارج العراق",
      pfDeparts: "المدن التي تنطلق منها الجولة", pfBack: "← العودة إلى جولاتي",
      followUs: "تابعنا", socialsTitle: "تابعنا على مواقع التواصل",
      edHint: "معاينة حية — هذه الصفحة تبدو تماماً كما سيراها المسافرون. اضغط على أي نص متقطع الإطار لتعديله؛ السعر والوجهة والمدة والصور تُعدّل جميعها في مكانها مباشرة.",
      edLangHint: "أنت تعدّل النص العربي — بدّل إلى English (أعلى الصفحة) لتعديل النص الإنجليزي.",
      edDest: "الوجهة", edPriceChip: "السعر", edDurChip: "المدة", edGroupChip: "المجموعة",
      edLangsChip: "اللغات", edPhotos: "الصور", edDepartsChip: "تنطلق من", edOutbound: "خارج العراق",
      edTypeChip: "النوع", edDone: "تم",
      edNewDest: "➕ وجهة جديدة", edNameEn: "الاسم (إنجليزي)", edNameAr: "الاسم (عربي)",
      edCountryEn: "الدولة (إنجليزي)", edCountryAr: "الدولة (عربي)", edCreate: "إنشاء واختيار",
      edAddHl: "+ أضف ميزة", edAddStep: "+ أضف خطوة للبرنامج",
      edPhotosLbl: "روابط الصور — رابط في كل سطر (الأول يصبح الصورة الرئيسية)",
      exTitle: "غير مشمول في السعر", notesTitle: "معلومات مهمة قبل الحجز", watchVideo: "شاهد الفيديو",
      edAddEx: "+ أضف بنداً غير مشمول", edAddImg: "＋ أضف صورة", edImgUrl: "رابط الصورة",
      edVideoUrl: "رابط الفيديو (يوتيوب، فيسبوك…)", edApply: "تطبيق", edRemoveImg: "إزالة",
      edGalleryHint: "اضغط على صورة لاستبدالها أو ترتيبها أو إزالتها. الترتيب هنا هو ما يراه المسافرون.",
      edStepImgAdd: "🖼 أضف صورة لهذه الخطوة", edStepImgUrl: "رابط صورة الخطوة",
      edLangsTitle: "اللغات المتوفرة — اضغط للتبديل",
      edDurD: "أيام", edDurH: "ساعات",
      viewProfile: "عرض الملف", agProfTours: "جولات هذه الشركة", ppNone2: "لا توجد جولات مدرجة بعد.",
      durDays: "أيام", durHours: "ساعات", durUnit: "المدة",
      fcUpTo: "حتى", fcDaysBefore: "أيام قبل الانطلاق",
      fcDaysLbl: "عدد أيام الإشعار المطلوبة للإلغاء المجاني",
      errRequired: "يرجى إكمال المعلومات الناقصة:",
      vTitle: "عنوان الجولة", vDesc: "الوصف", vMeet: "نقطة اللقاء", vDur: "المدة (رقم)", vLangs: "لغة واحدة على الأقل",
      edUpload: "رفع من المعرض", edImgTooBig: "الصورة كبيرة جداً للتخزين في التجربة — جرّب صورة أصغر أو استخدم رابطاً.",
      edImgSelectedPre: "الصورة", edImgSelectedPost: "ماذا تريد أن تفعل؟",
      edReplaceUpload: "استبدال — رفع من المعرض", edMoveEarlier: "قدّم", edMoveLater: "أخّر",
      edApplyLink: "استخدام الرابط", edAddImgHead: "صورة جديدة — ارفعها من معرض جهازك أو الصق رابطاً أدناه:",
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
      joinTitle: "أضف نشاطك إلى Iraq Tour",
      joinSub: "مجاناً خلال الإطلاق. قدّم الطلب أدناه — نراجع وننشر خلال ٤٨ ساعة، ثم تدير كل شيء من بوابة المزوّدين.",
      joinB1t: "إدراج مجاني", joinB1p: "بلا رسوم وبلا عمولة خلال الإطلاق. يدفع المسافرون لك مباشرة.",
      joinB2t: "وصول بلغتين", joinB2p: "تُعرض جولاتك بالعربية والإنجليزية تلقائياً.",
      joinB3t: "حجوزات واتساب", joinB3p: "كل حجز يصلك مباشرة على واتساب — دون أدوات جديدة.",
      jBusiness: "اسم النشاط", jCity: "المدينة / المقر", jWa: "رقم الواتساب", jEmail: "البريد (اختياري)",
      jServices: "الخدمات التي تقدمها", jDesc: "عن نشاطك", jSend: "إرسال الطلب",
      joinNote: "نراجع كل طلب قبل النشر ولا نطلب أي بيانات دفع.",
      contactTitle: "تواصل مع Iraq Tour", contactSub: "أسئلة أو اقتراحات أو مشكلة في إعلان — نقرأ كل رسالة.",
      fName: "اسمك", fEmail: "البريد الإلكتروني", fMsg: "الرسالة", fSendBtn: "إرسال", contactDirect: "تفضّل البريد؟",
      footAbout: "Iraq Tour سوق إلكتروني يربط المسافرين بشركات السياحة العراقية المجازة وخدمات السفر — من بابل القديمة إلى جبال كردستان. كل حجز يذهب مباشرة إلى المزوّد المحلي.",
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

  /* image source: http(s)/data URL passes through, otherwise img.js key */
  const SRC = (k) => (typeof k === "string" && /^(https?:|data:)/.test(k)) ? k : IMG(k || "babylon");
  /* cancellation label: plain free-cancel, or "free up to N days before" */
  const cancelLbl = (tour) => t("freeCancel") + (tour.cancelDays ? " " + t("fcUpTo") + " " + tour.cancelDays + " " + t("fcDaysBefore") : "");

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
    /* provider-created destinations first, so overrides/filters can
       reference them; they join CITIES/ABROAD and therefore appear in
       every component that renders destinations (home selectors, tour
       filters, editor chips, admin lists). */
    try {
      const cd = JSON.parse(store.get("tooiraq-custom-dests") || "{}");
      (cd.cities || []).forEach((c) => { if (c && c.id && !CITIES.some((x) => x.id === c.id)) CITIES.push(c); });
      (cd.abroad || []).forEach((d) => { if (d && d.id && !ABROAD.some((x) => x.id === d.id)) ABROAD.push(d); });
    } catch (e) {}
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
      cancel: r.cancel !== "nonrefundable", cancelDays: r.cancel_days || null,
      highlights: r.highlights || { en: [], ar: [] }, itinerary: r.itinerary || [],
      exclusions: r.exclusions || { en: [], ar: [] }, notes: r.notes || { en: "", ar: "" },
      meeting: r.meeting || { en: "", ar: "" }, videoUrl: r.video_url || "",
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
    '<svg class="brand-mark" viewBox="0 0 44 44" fill="none"><rect width="44" height="44" rx="12" fill="#CE1126"/><g stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 33V15M35 33V15"/><path d="M9 19c4-8.5 22-8.5 26 0"/><path d="M18 33v-7c0-4.5 8-4.5 8 0v7"/><path d="M11 25.5l5 5.5M16 25.5l-5 5.5M28 25.5l5 5.5M33 25.5l-5 5.5"/><path d="M7.5 33h29"/></g><circle cx="22" cy="17.5" r="1.6" fill="#fff"/></svg>';

  /* ---------- chrome ---------- */
  function injectChrome(active) {
    const header = document.getElementById("site-header");
    if (header) {
      header.innerHTML =
        '<div class="container header-inner">' +
        '<a class="brand" href="index.html">' + BRAND_MARK + '<span class="brand-name">Iraq <b>Tour</b></span></a>' +
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
        '<div><a class="brand" href="index.html">' + BRAND_MARK + '<span class="brand-name" style="color:#fff">Iraq <b>Tour</b></span></a>' +
        '<p class="footer-about">' + t("footAbout") + "</p></div>" +
        "<div><h4>" + t("footExplore") + "</h4><a href='index.html'>" + t("footHome") + "</a><a href='tours.html'>" + t("footTours") + "</a><a href='agencies.html'>" + t("footAgencies") + "</a></div>" +
        "<div><h4>" + t("footProviders") + "</h4><a href='join.html'>" + t("footJoin") + "</a><a href='provider.html'>" + t("footPortal") + "</a></div>" +
        "<div><h4>" + t("footSupport") + "</h4><a href='contact.html'>" + t("footContact") + "</a><a href='mailto:hello@tooiraq.com'>hello@tooiraq.com</a></div>" +
        "</div><div class='footer-bottom'><span>© " + new Date().getFullYear() + " Iraq Tour — " + t("footRights") + "</span><span>" + t("footSample") + "</span></div></div>";
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
      "<div><h3 style='font-size:17px'><a href='agency.html?id=" + esc(a.id) + "'>" + esc(L(a.name)) + "</a></h3><span class='footnote'>" + esc(L(a.base)) + (a.since ? " · " + t("agSince") + " " + a.since : "") + "</span></div></div>" +
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
      document.title = t("abroadTitle") + " — Iraq Tour";
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
    document.title = L(tour.title) + " — Iraq Tour";
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
      gallery.slice(1).map((g) => '<a><img loading="lazy" alt="" src="' + SRC(g) + '"/></a>').join("") + "</div>" +
      (tour.videoUrl ? '<a class="btn btn-outline btn-sm" style="margin-top:10px" target="_blank" rel="noopener" href="' + esc(tour.videoUrl) + '">▶ ' + t("watchVideo") + "</a>" : "") + "</div>" +

      '<div class="container detail-layout"><div class="detail-main">' +
      '<div class="panel"><h2>' + t("aboutTitle") + "</h2><p>" + esc(L(tour.desc)) + "</p>" +
      '<div class="mt-4" style="display:flex;gap:8px;flex-wrap:wrap">' +
      (tour.cancel ? '<span class="badge badge-save">✓ ' + cancelLbl(tour) + "</span>" : "") +
      '<span class="badge badge-save">🗣 ' + t("langsWord") + ": " + (tour.langs || []).join(" · ") + "</span></div></div>" +
      '<div class="panel"><h2>' + t("incTitle") + '</h2><div class="inc-grid">' +
      L(tour.highlights).map((h) => '<div class="inc-item"><span class="tick">✓</span><span>' + esc(h) + "</span></div>").join("") + "</div></div>" +
      (tour.exclusions && L(tour.exclusions).length
        ? '<div class="panel"><h2>' + t("exTitle") + '</h2><div class="inc-grid">' +
          L(tour.exclusions).map((h) => '<div class="inc-item"><span class="tick cross">✕</span><span>' + esc(h) + "</span></div>").join("") + "</div></div>" : "") +
      '<div class="panel"><h2>' + t("itinTitle") + '</h2><ul class="itin">' +
      (tour.itinerary || []).map((s, i) => '<li><span class="dot">' + (i + 1) + '</span><span class="tx"><b>' + esc(L(s.t)) + "</b><span>" + esc(L(s.d)) + "</span>" +
        (s.img ? '<img class="itin-img" loading="lazy" alt="" src="' + SRC(s.img) + '"/>' : "") + "</span></li>").join("") + "</ul></div>" +
      '<div class="panel"><h2>' + t("meetTitle") + "</h2><p>📍 " + esc(L(tour.meeting)) + "</p></div>" +
      (tour.notes && L(tour.notes)
        ? '<div class="panel"><h2>' + t("notesTitle") + "</h2><p>" + esc(L(tour.notes)) + "</p></div>" : "") +
      (tour.src ? "" :
        '<div class="panel"><h2>' + t("revTitle") + "</h2>" +
        revs.map((r) => '<div class="review"><div class="who"><span class="av">' + esc(r.n.slice(0, 1)) + "</span><div><b>" + esc(r.n) + "</b><br><span>" + esc(L(r.from)) + "</span></div>" +
          '<span style="margin-inline-start:auto">' + starsHTML(r.stars) + "</span></div><p>" + esc(L(r.tx)) + "</p></div>").join("") + "</div>") +
      "</div>" +

      '<aside><div class="panel bookbox">' +
      (tour.price
        ? '<div><span class="from">' + t("from") + '</span><div class="amount">$' + tour.price + " <small>" + t("perPerson") + "</small></div></div>"
        : '<div><div class="amount" style="font-size:22px">' + t("poa") + "</div></div>") +
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
      (a ? '<a class="bb-agency bb-agency-link" href="agency.html?id=' + esc(a.id) + '"><div class="alogo" style="background:#CE1126;width:42px;height:42px;border-radius:10px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center">' + a.initials + '</div><div><span class="footnote">' + t("offeredBy") + "</span><br><b>" + esc(L(a.name)) + "</b> " +
        (a.verified ? '<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : "") +
        '<br><span class="footnote">' + (a.rating ? "★ " + a.rating.toFixed(1) + " · " + t("since") + " " + a.since : t("newOp")) + " · " + t("viewProfile") + " ›</span></div></a>" : "") +
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

  /* ---------- agency profile page ---------- */
  function renderAgencyPage() {
    const wrap = document.getElementById("agency-root");
    if (!wrap) return;
    const params = new URLSearchParams(window.location.search);
    const a = agencyOf(params.get("id")) || AGENCIES[0];
    document.title = L(a.name) + " — Iraq Tour";
    const tours = toursOf(a.id);
    wrap.innerHTML =
      '<div class="container" style="padding:20px 0 64px">' +
      '<div class="crumbs"><a href="index.html">' + t("crumbHome") + '</a> / <a href="agencies.html">' + t("navAgencies") + "</a> / " + esc(L(a.name)) + "</div>" +
      '<div class="panel mt-4">' +
      '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">' +
      '<div class="alogo" style="background:#CE1126;width:64px;height:64px;border-radius:16px;color:#fff;font-weight:700;font-size:24px;display:flex;align-items:center;justify-content:center">' + a.initials + "</div>" +
      '<div style="flex:1;min-width:200px"><h1 class="t2" style="display:inline">' + esc(L(a.name)) + "</h1> " +
      (a.verified ? '<span class="badge badge-verified">✓ ' + t("verified") + "</span>" : (a.pending ? '<span class="badge badge-save">' + t("onboardingBadge") + "</span>" : "")) +
      '<br><span class="footnote">' + esc(L(a.base)) + (a.since ? " · " + t("agSince") + " " + a.since : "") +
      (a.rating ? " · ★ " + a.rating.toFixed(1) + " (" + a.reviews + " " + t("reviewsWord") + ")" : "") + "</span></div></div>" +
      '<p class="subhead mt-4">' + esc(L(a.desc)) + "</p>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">' +
      (a.wa ? '<a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + a.wa + '">' + t("chat") + "</a>" : "") +
      (a.phone ? '<a class="btn btn-outline btn-sm" href="tel:' + a.phone.replace(/\s/g, "") + '">' + t("call") + "</a>" : "") +
      (a.site ? '<a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="' + a.site + '">' + t("visitSite") + "</a>" : "") +
      "</div>" + socialsHTML(a, true) + "</div>" +
      '<div class="section-head mt-4"><h2 class="t2">' + t("agProfTours") + ' <span class="footnote">(' + tours.length + ")</span></h2></div>" +
      (tours.length ? '<div class="card-grid">' + tours.map(tourCard).join("") + "</div>"
        : '<div class="panel subhead">' + t("ppNone2") + "</div>") +
      "</div>";
  }

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

    /* ---- editor view: LIVE PREVIEW (WYSIWYG, fully in-place) ----
       No toolbar — every part of the page edits exactly where the
       traveler sees it: dashed text inline, price typed in the booking
       box, destination/type/duration/group in the facts row, languages
       as preset chips, gallery with add/replace/reorder/remove + video,
       per-step photos, exclusions and know-before-you-go sections. */
    if (portalEdit) {
      if (!portalEdit.w) {
        const sample = {
          title: { en: "Your Tour Name — tap to edit", ar: "اسم جولتك — اضغط للتعديل" },
          desc: { en: "Describe your tour here: what travelers will see, what makes it special, and what is included in the price.", ar: "صف جولتك هنا: ما الذي سيراه المسافرون، وما الذي يميزها، وما المشمول في السعر." },
          city: "baghdad", type: "culture", abroad: false, dest: null, departsFrom: [],
          days: 1, hours: 8, price: 75, groupMax: 10, langs: ["EN", "AR"], cancel: true,
          highlights: { en: ["Licensed local guide", "Transport included", "Entry tickets"], ar: ["مرشد محلي مجاز", "النقل مشمول", "تذاكر الدخول"] },
          exclusions: { en: ["Personal expenses"], ar: ["المصاريف الشخصية"] },
          itinerary: [
            { t: { en: "Morning — departure", ar: "الصباح — الانطلاق" }, d: { en: "Pickup and drive to the first stop.", ar: "الانطلاق والتوجه إلى المحطة الأولى." } },
            { t: { en: "Afternoon — main visit", ar: "بعد الظهر — الزيارة الرئيسية" }, d: { en: "Guided visit and free time.", ar: "جولة مرشدة ووقت حر." } }
          ],
          meeting: { en: "Hotel pickup, 8:00 AM", ar: "النقل من الفندق، ٨:٠٠ صباحاً" },
          notes: { en: "Bring comfortable shoes and sun protection. Tap to edit this note, or leave it empty.", ar: "أحضر حذاءً مريحاً وواقياً من الشمس. اضغط لتعديل هذه الملاحظة أو اتركها فارغة." },
          imgs: [], videoUrl: ""
        };
        const src0 = portalEdit.kind === "new" ? sample
          : portalEdit.kind === "draft" ? (allDrafts[portalEdit.i] || sample)
          : (TOURS.find((z) => z.id === portalEdit.id) || sample);
        portalEdit.w = JSON.parse(JSON.stringify({
          title: src0.title || {}, desc: src0.desc || {},
          city: src0.city || "baghdad", type: src0.type || "culture",
          abroad: !!src0.abroad, dest: src0.dest || null,
          departsFrom: src0.departsFrom || [], days: src0.days || 1, hours: src0.hours || 8,
          price: src0.price || 0, groupMax: src0.groupMax || 10,
          langs: src0.langs && src0.langs.length ? src0.langs : ["EN", "AR"],
          cancel: src0.cancel !== false, cancelDays: src0.cancelDays || null,
          highlights: { en: (src0.highlights && src0.highlights.en) || [], ar: (src0.highlights && src0.highlights.ar) || [] },
          exclusions: { en: (src0.exclusions && src0.exclusions.en) || [], ar: (src0.exclusions && src0.exclusions.ar) || [] },
          itinerary: src0.itinerary || [], meeting: src0.meeting || {},
          notes: src0.notes || { en: "", ar: "" },
          imgs: src0.imgs || [], img: src0.img || null, videoUrl: src0.videoUrl || "",
          rating: src0.rating || 0, reviews: src0.reviews || 0
        }));
      }
      const w = portalEdit.w;
      const side = lang;
      const V2 = (o) => (o && (o[side] || o.en)) || "";
      const LANGS_PRESET = [["AR", "العربية"], ["EN", "English"], ["KU", "کوردی"], ["TR", "Türkçe"], ["FA", "فارسی"], ["UR", "اردو"], ["HI", "हिन्दी"], ["BN", "বাংলা"], ["ZH", "中文"], ["RU", "Русский"], ["FR", "Français"], ["DE", "Deutsch"], ["ES", "Español"], ["IT", "Italiano"], ["PT", "Português"], ["JA", "日本語"], ["KO", "한국어"], ["ID", "Indonesia"], ["NL", "Nederlands"], ["AZ", "Azərbaycan"]];

      const syncText = () => {
        root.querySelectorAll("[data-ed]").forEach((el) => {
          const v = el.textContent.trim(), i = +el.dataset.i, k = el.dataset.ed;
          if (k === "title") w.title[side] = v;
          else if (k === "desc") w.desc[side] = v;
          else if (k === "meet") w.meeting[side] = v;
          else if (k === "notes") w.notes[side] = v;
          else if (k === "hl") w.highlights[side][i] = v;
          else if (k === "ex") w.exclusions[side][i] = v;
          else if (k === "it-t") { if (w.itinerary[i]) w.itinerary[i].t[side] = v; }
          else if (k === "it-d") { if (w.itinerary[i]) w.itinerary[i].d[side] = v; }
        });
        const num = (id, def) => { const el = document.getElementById(id); return el ? (+el.value || def) : def; };
        w.price = num("edv-price", w.price); w.groupMax = num("edv-group", w.groupMax);
        const du = document.getElementById("edv-durunit"), dvEl = document.getElementById("edv-durval");
        if (du && dvEl && +dvEl.value > 0) {
          if (du.value === "days") { w.days = Math.max(1, Math.round(+dvEl.value)); w.hours = null; }
          else { w.days = 1; w.hours = Math.max(1, Math.round(+dvEl.value)); }
        }
        const cdEl = document.getElementById("edv-canceldays"); if (cdEl) w.cancelDays = +cdEl.value > 0 ? Math.round(+cdEl.value) : null;
        const vv = document.getElementById("edv-video"); if (vv) w.videoUrl = vv.value.trim();
        const iu = document.getElementById("edv-imgurl"); if (iu) portalEdit.imgUrlDraft = iu.value.trim();
        const su = document.getElementById("edv-stepimg"); if (su) portalEdit.stepImgDraft = su.value.trim();
      };
      const repaint = () => { syncText(); paintEditor(); };

      const slugify = (s) => (s || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || ("dest-" + (CITIES.length + ABROAD.length + 1));
      const persistCustomDest = (kind, obj) => {
        let cd = { cities: [], abroad: [] };
        try { cd = Object.assign({ cities: [], abroad: [] }, JSON.parse(store.get("tooiraq-custom-dests") || "{}")); } catch (e) {}
        cd[kind].push(obj); store.set("tooiraq-custom-dests", JSON.stringify(cd));
      };
      const galleryList = () => (w.imgs && w.imgs.length ? w.imgs.slice()
        : [w.img, CITY_IMG[w.city], "river", "marsh", "babylon"].filter(Boolean).filter((v, i2, arr) => arr.indexOf(v) === i2));
      const materialize = () => { if (!w.imgs.length) w.imgs = galleryList(); };

      function paintEditor() {
        const wt = { title: w.title, city: w.city, abroad: w.abroad, dest: w.dest, departsFrom: w.departsFrom, days: w.days, hours: w.hours };
        const gal = galleryList().slice(0, 8);
        const sel = portalEdit.selImg;
        const destOpts = w.abroad
          ? ABROAD.map((z) => '<option value="' + z.id + '"' + (w.dest === z.id ? " selected" : "") + ">" + esc(L(z.name) + " — " + L(z.country)) + "</option>").join("")
          : CITIES.map((z) => '<option value="' + z.id + '"' + (w.city === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
        const typeOpts = TYPES.map((z) => '<option value="' + z.id + '"' + (w.type === z.id ? " selected" : "") + ">" + esc(L(z)) + "</option>").join("");
        const mini = (id, val, wch) => '<input class="ed-mini" id="' + id + '" type="number" min="0" value="' + val + '" style="width:' + (wch || 52) + 'px"/>';

        root.innerHTML =
          '<div class="container" style="padding:16px 0 8px">' +
          '<a href="#" id="pf-back" class="footnote">' + t("pfBack") + "</a>" +
          '<div class="notice-proto mt-2">' + t("edHint") + " " + t("edLangHint") + "</div>" +
          '<div id="pf-msg" class="form-note" style="margin-top:6px"></div>' +
          "</div>" +

          '<div class="container detail-top">' +
          '<div class="crumbs">' + t("crumbHome") + " / " + t("crumbTours") + " / " + esc(locLabel(wt)) + "</div>" +
          '<div class="detail-title-row"><div><h1 contenteditable="true" data-ed="title">' + esc(V2(w.title)) + "</h1>" +

          /* facts — every option labeled with what it is */
          '<div class="detail-sub" style="align-items:center;margin-bottom:4px">' +
          (w.rating ? '<span class="rating-row"><b>' + w.rating.toFixed(1) + "</b>" + starsHTML(w.rating) + "<span>(" + w.reviews + " " + t("reviewsWord") + ")</span></span>"
            : '<span class="badge badge-save">' + t("onboardingBadge") + "</span>") + "</div>" +
          '<div class="ed-facts">' +
          '<div class="ed-fact"><label>📍 ' + t("edDest") + '</label><div class="ed-fact-c"><select class="ed-mini-sel" id="edv-dest">' + destOpts + "</select>" +
          '<button type="button" class="ed-plus" id="edv-newdest" title="' + t("edNewDest") + '">＋</button></div></div>' +
          '<div class="ed-fact"><label>🗂 ' + t("edTypeChip") + '</label><div class="ed-fact-c"><select class="ed-mini-sel" id="edv-type">' + typeOpts + "</select></div></div>" +
          '<div class="ed-fact"><label>🕐 ' + t("durUnit") + '</label><div class="ed-fact-c"><select class="ed-mini-sel" id="edv-durunit">' +
          '<option value="days"' + ((w.days || 1) > 1 ? " selected" : "") + ">" + t("durDays") + "</option>" +
          '<option value="hours"' + ((w.days || 1) <= 1 ? " selected" : "") + ">" + t("durHours") + "</option></select>" +
          mini("edv-durval", (w.days || 1) > 1 ? w.days : (w.hours || 8), 56) + "</div></div>" +
          '<div class="ed-fact"><label>👥 ' + t("pfGroup") + '</label><div class="ed-fact-c">' + mini("edv-group", w.groupMax || 10, 56) + "</div></div>" +
          '<div class="ed-fact"><label>🛫 ' + t("edOutbound") + '</label><div class="ed-fact-c"><button type="button" class="ed-chip' + (w.abroad ? " on" : "") + '" id="edv-abroad">' + (w.abroad ? "✓ " : "") + t("edOutbound") + "</button></div></div>" +
          "</div>" +

          /* departs-from as compact pills, right under the facts */
          '<div class="chip-multi" style="margin-top:8px"><span class="footnote" style="align-self:center">🚌 ' + t("edDepartsChip") + ":</span>" +
          CITIES.map((z) => '<button type="button" class="pf-chip' + ((w.departsFrom || []).includes(z.id) ? " on" : "") + '" data-dep="' + z.id + '">' + esc(L(z)) + "</button>").join("") + "</div>" +
          (portalEdit.newDestOpen
            ? '<div class="ed-panel panel" style="margin-top:10px"><label style="color:var(--color-primary)">' + t("edNewDest") + "</label>" +
              '<div class="form-row"><div><label>' + t("edNameEn") + '</label><input id="ednd-en"/></div>' +
              "<div><label>" + t("edNameAr") + '</label><input id="ednd-ar" dir="rtl"/></div></div>' +
              (w.abroad ? '<div class="form-row"><div><label>' + t("edCountryEn") + '</label><input id="ednd-cen"/></div>' +
                "<div><label>" + t("edCountryAr") + '</label><input id="ednd-car" dir="rtl"/></div></div>' : "") +
              '<button type="button" class="ed-add" id="ednd-go">' + t("edCreate") + "</button></div>"
            : "") +
          "</div></div>" +

          /* gallery — tapping a photo opens its action card RIGHT UNDER it */
          '<div class="gallery">' +
          gal.map((g, i2) =>
            ((i2 === 0 ? '<a class="g-main g-tile' : '<a class="g-tile') + (sel === i2 ? " g-sel" : "") + '" data-gi="' + i2 + '"><img alt="" src="' + SRC(g) + '"/>' +
            '<span class="g-badge">' + (i2 + 1) + "</span>" +
            '<span class="g-tools"><button type="button" class="ed-gbtn" data-repl="' + i2 + '" title="' + esc(t("edReplaceUpload")) + '">↻</button>' +
            '<button type="button" class="ed-gbtn" data-delimg="' + i2 + '" title="' + esc(t("edRemoveImg")) + '">✕</button></span></a>') +
            (sel === i2
              ? '<div class="g-actions" id="g-actions">' +
                '<div class="g-actions-head">🖼 ' + t("edImgSelectedPre") + " " + (i2 + 1) + " — " + t("edImgSelectedPost") + "</div>" +
                '<div class="g-actions-btns">' +
                '<button type="button" class="btn btn-primary btn-sm" id="edv-upload">⬆ ' + t("edReplaceUpload") + "</button>" +
                '<button type="button" class="btn btn-outline btn-sm" id="edv-imgdel">✕ ' + t("edRemoveImg") + "</button>" +
                '<button type="button" class="btn btn-outline btn-sm" id="edv-imgleft">◀ ' + t("edMoveEarlier") + "</button>" +
                '<button type="button" class="btn btn-outline btn-sm" id="edv-imgright">▶ ' + t("edMoveLater") + "</button></div>" +
                '<div class="ed-urlrow"><input id="edv-imgurl" placeholder="https://…" value="' + esc(/^https?:/.test(gal[i2] || "") ? gal[i2] : "") + '"/>' +
                '<button type="button" class="btn btn-outline btn-sm" id="edv-imgapply">' + t("edApplyLink") + "</button></div></div>"
              : "")).join("") +
          '<a class="g-tile g-addtile" id="edv-addimg"><span>' + t("edAddImg") + "</span></a>" +
          (portalEdit.addingImg
            ? '<div class="g-actions" id="g-actions">' +
              '<div class="g-actions-head">🖼 ' + t("edAddImgHead") + "</div>" +
              '<div class="g-actions-btns">' +
              '<button type="button" class="btn btn-primary btn-sm" id="edv-upload">⬆ ' + t("edUpload") + "</button></div>" +
              '<div class="ed-urlrow"><input id="edv-imgurl" placeholder="https://…" value="' + esc(portalEdit.imgUrlDraft || "") + '"/>' +
              '<button type="button" class="btn btn-outline btn-sm" id="edv-imgapply">' + t("edApplyLink") + "</button></div></div>"
            : "") +
          "</div>" +
          '<p class="footnote" style="margin-top:6px">' + t("edGalleryHint") + "</p>" +
          '<div class="ed-urlrow"><span class="footnote" style="white-space:nowrap">▶ ' + t("edVideoUrl") + '</span><input id="edv-video" placeholder="https://youtube.com/…" value="' + esc(w.videoUrl || "") + '"/></div>' +
          "</div>" +

          '<div class="container detail-layout"><div class="detail-main">' +
          '<div class="panel"><h2>' + t("aboutTitle") + '</h2><p contenteditable="true" data-ed="desc">' + esc(V2(w.desc)) + "</p>" +
          '<div class="mt-4" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
          '<button type="button" class="ed-chip' + (w.cancel ? " on" : "") + '" id="edv-cancel">↩ ' + t("freeCancel") + "</button>" +
          (w.cancel ? '<span class="footnote" style="display:inline-flex;align-items:center;gap:6px" title="' + esc(t("fcDaysLbl")) + '">' + t("fcUpTo") + ' <input class="ed-mini" id="edv-canceldays" type="number" min="0" placeholder="—" value="' + (w.cancelDays || "") + '" style="width:56px"/> ' + t("fcDaysBefore") + "</span>" : "") + "</div>" +
          '<div class="mt-4"><span class="footnote">🗣 ' + t("edLangsTitle") + '</span><div class="chip-multi" style="margin-top:6px">' +
          LANGS_PRESET.map((p) => '<button type="button" class="pf-chip lang-chip' + ((w.langs || []).includes(p[0]) ? " on" : "") + '" data-lang="' + p[0] + '"><b>' + p[0] + "</b><small>" + p[1] + "</small></button>").join("") +
          "</div></div></div>" +

          '<div class="panel"><h2>' + t("incTitle") + '</h2><div class="inc-grid">' +
          (w.highlights[side] || []).map((h, i2) =>
            '<div class="inc-item"><span class="tick">✓</span><span contenteditable="true" data-ed="hl" data-i="' + i2 + '">' + esc(h) + '</span><button type="button" class="ed-x" data-delhl="' + i2 + '">✕</button></div>').join("") +
          '</div><button type="button" class="ed-add" id="ed-addhl">' + t("edAddHl") + "</button></div>" +

          '<div class="panel"><h2>' + t("exTitle") + '</h2><div class="inc-grid">' +
          (w.exclusions[side] || []).map((h, i2) =>
            '<div class="inc-item"><span class="tick cross">✕</span><span contenteditable="true" data-ed="ex" data-i="' + i2 + '">' + esc(h) + '</span><button type="button" class="ed-x" data-delex="' + i2 + '">✕</button></div>').join("") +
          '</div><button type="button" class="ed-add" id="ed-addex">' + t("edAddEx") + "</button></div>" +

          '<div class="panel"><h2>' + t("itinTitle") + '</h2><ul class="itin">' +
          (w.itinerary || []).map((s, i2) =>
            '<li><span class="dot">' + (i2 + 1) + '</span><span class="tx"><b contenteditable="true" data-ed="it-t" data-i="' + i2 + '">' + esc(V2(s.t)) + '</b><span contenteditable="true" data-ed="it-d" data-i="' + i2 + '">' + esc(V2(s.d)) + "</span>" +
            (s.img ? '<span style="position:relative;display:inline-block"><img class="itin-img" alt="" src="' + SRC(s.img) + '"/><button type="button" class="ed-x" data-delstepimg="' + i2 + '" style="position:absolute;top:2px;inset-inline-end:2px;background:rgba(255,255,255,.85);border-radius:6px">✕</button></span>'
              : '<button type="button" class="ed-add" data-stepimg="' + i2 + '" style="margin-top:6px;padding:5px 10px;font-size:12px">' + t("edStepImgAdd") + "</button>") +
            (portalEdit.stepImgOpen === i2
              ? '<span class="ed-urlrow"><input id="edv-stepimg" placeholder="https://…" value="' + esc(portalEdit.stepImgDraft || "") + '"/><button type="button" class="btn btn-primary btn-sm" id="edv-stepimgapply">' + t("edApply") + '</button><button type="button" class="btn btn-outline btn-sm" id="edv-stepupload">' + t("edUpload") + "</button></span>"
              : "") +
            "</span>" +
            '<button type="button" class="ed-x" data-delit="' + i2 + '">✕</button></li>').join("") +
          '</ul><button type="button" class="ed-add" id="ed-addit">' + t("edAddStep") + "</button></div>" +

          '<div class="panel"><h2>' + t("meetTitle") + '</h2><p>📍 <span contenteditable="true" data-ed="meet">' + esc(V2(w.meeting)) + "</span></p></div>" +
          '<div class="panel"><h2>' + t("notesTitle") + '</h2><p contenteditable="true" data-ed="notes">' + esc(V2(w.notes)) + "</p></div>" +
          "</div>" +

          '<aside><div class="panel bookbox">' +
          '<div><span class="from">' + t("from") + '</span><div class="amount">$<input class="ed-mini ed-price" id="edv-price" type="number" min="0" value="' + (w.price || 0) + '"/> <small>' + t("perPerson") + "</small></div></div>" +
          '<div class="field"><label>' + t("bbDate") + '</label><input type="date" disabled/></div>' +
          '<div class="field"><label>' + t("bbPax") + '</label><select disabled><option>' + t("pax1") + "</option></select></div>" +
          '<button class="btn btn-wa btn-block" disabled>' + t("bookWa") + "</button>" +
          '<button class="btn btn-tint btn-block" disabled>' + t("bookReq") + "</button>" +
          '<p class="bb-note">' + t("bbNote") + "</p>" +
          '<div class="bb-agency"><div class="alogo" style="background:#CE1126;width:42px;height:42px;border-radius:10px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center">' + a.initials + '</div><div><span class="footnote">' + t("offeredBy") + "</span><br><b>" + esc(L(a.name)) + "</b></div></div>" +
          socialsHTML(a, true) +
          "</div></aside></div>" +

          '<div class="ed-savebar"><button class="btn btn-outline" id="pf-back2">' + t("pfBack") + "</button>" +
          '<button class="btn btn-primary" id="pf-save">' + (portalEdit.kind === "new" ? t("pfSave") : t("pfSaveChanges")) + "</button></div>" +
          '<input type="file" id="edv-file" accept="image/*" style="display:none"/>';

        document.body.classList.add("has-edbar");
        const gAct = document.getElementById("g-actions");
        if (gAct && portalEdit.scrollToActions) { gAct.scrollIntoView({ block: "nearest" }); portalEdit.scrollToActions = false; }
        const back = (e) => { e.preventDefault(); portalEdit = null; document.body.classList.remove("has-edbar"); renderPortal(); window.scrollTo(0, 0); };
        document.getElementById("pf-back").addEventListener("click", back);
        document.getElementById("pf-back2").addEventListener("click", back);
        const on = (id, fn, ev) => { const el = document.getElementById(id); if (el) el.addEventListener(ev || "click", fn); };

        /* facts row */
        on("edv-dest", () => { syncText(); const v = document.getElementById("edv-dest").value; if (w.abroad) w.dest = v; else w.city = v; paintEditor(); }, "change");
        on("edv-type", () => { syncText(); w.type = document.getElementById("edv-type").value; paintEditor(); }, "change");
        on("edv-abroad", () => {
          syncText(); w.abroad = !w.abroad;
          if (w.abroad && !w.dest) w.dest = ABROAD[0] && ABROAD[0].id;
          if (!w.abroad && !w.city) w.city = "baghdad";
          paintEditor();
        });
        on("edv-newdest", () => { syncText(); portalEdit.newDestOpen = !portalEdit.newDestOpen; paintEditor(); });
        on("ednd-go", () => {
          const gv2 = (id) => (document.getElementById(id) || {}).value || "";
          const en = gv2("ednd-en"), ar = gv2("ednd-ar");
          if (!en.trim() && !ar.trim()) return;
          syncText();
          const id = slugify(en || ar);
          if (w.abroad) {
            if (!ABROAD.some((z) => z.id === id)) {
              const obj = { id: id, name: { en: en.trim() || ar.trim(), ar: ar.trim() || en.trim() }, country: { en: gv2("ednd-cen").trim(), ar: gv2("ednd-car").trim() || gv2("ednd-cen").trim() }, custom: true };
              ABROAD.push(obj); persistCustomDest("abroad", obj);
            }
            w.dest = id;
          } else {
            if (!CITIES.some((z) => z.id === id)) {
              const obj = { id: id, en: en.trim() || ar.trim(), ar: ar.trim() || en.trim(), motif: "dome", color: "art-teal", custom: true };
              CITIES.push(obj); persistCustomDest("cities", obj);
            }
            w.city = id;
          }
          portalEdit.newDestOpen = false;
          paintEditor();
        });
        root.querySelectorAll("[data-dep]").forEach((b) => b.addEventListener("click", () => {
          syncText();
          const id = b.dataset.dep, ix = (w.departsFrom || []).indexOf(id);
          if (ix >= 0) w.departsFrom.splice(ix, 1); else (w.departsFrom = w.departsFrom || []).push(id);
          paintEditor();
        }));
        root.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
          syncText();
          const lg = b.dataset.lang, ix = (w.langs || []).indexOf(lg);
          if (ix >= 0) w.langs.splice(ix, 1); else (w.langs = w.langs || []).push(lg);
          paintEditor();
        }));
        on("edv-cancel", () => { syncText(); w.cancel = !w.cancel; paintEditor(); });
        on("edv-durunit", () => { syncText(); paintEditor(); }, "change");

        /* gallery management */
        root.querySelectorAll("[data-gi]").forEach((el) => el.addEventListener("click", (e) => {
          e.preventDefault(); syncText();
          portalEdit.addingImg = false; portalEdit.imgUrlDraft = "";
          portalEdit.selImg = portalEdit.selImg === +el.dataset.gi ? null : +el.dataset.gi;
          portalEdit.scrollToActions = portalEdit.selImg != null;
          paintEditor();
        }));
        on("edv-addimg", (e) => { e.preventDefault(); syncText(); portalEdit.addingImg = true; portalEdit.selImg = null; portalEdit.imgUrlDraft = ""; portalEdit.scrollToActions = true; paintEditor(); });
        root.querySelectorAll("[data-repl]").forEach((b) => b.addEventListener("click", (e) => {
          e.preventDefault(); e.stopPropagation(); syncText();
          portalEdit.addingImg = false; portalEdit.imgUrlDraft = "";
          portalEdit.selImg = +b.dataset.repl;
          pickFile({ kind: "repl", i: +b.dataset.repl });
        }));
        root.querySelectorAll("[data-delimg]").forEach((b) => b.addEventListener("click", (e) => {
          e.preventDefault(); e.stopPropagation(); syncText(); materialize();
          w.imgs.splice(+b.dataset.delimg, 1);
          portalEdit.selImg = null; paintEditor();
        }));
        /* upload from device gallery → downscaled JPEG data-URL */
        const fileToDataURL = (file, cb) => {
          const rd = new FileReader();
          rd.onload = () => {
            const im = new Image();
            im.onload = () => {
              const mx = 1280, sc = Math.min(1, mx / Math.max(im.width, im.height));
              const cv = document.createElement("canvas");
              cv.width = Math.max(1, Math.round(im.width * sc)); cv.height = Math.max(1, Math.round(im.height * sc));
              cv.getContext("2d").drawImage(im, 0, 0, cv.width, cv.height);
              cb(cv.toDataURL("image/jpeg", 0.82));
            };
            im.src = rd.result;
          };
          rd.readAsDataURL(file);
        };
        const fileInput = document.getElementById("edv-file");
        const pickFile = (target) => { portalEdit.uploadTarget = target; if (fileInput) { fileInput.value = ""; fileInput.click(); } };
        on("edv-upload", () => { syncText(); pickFile(portalEdit.addingImg ? { kind: "add" } : { kind: "repl", i: portalEdit.selImg }); });
        on("edv-stepupload", () => { syncText(); pickFile({ kind: "step", i: portalEdit.stepImgOpen }); });
        if (fileInput) fileInput.addEventListener("change", () => {
          const f = fileInput.files && fileInput.files[0];
          if (!f) return;
          fileToDataURL(f, (url) => {
            const tg = portalEdit.uploadTarget || { kind: "add" };
            materialize();
            if (tg.kind === "add") w.imgs.push(url);
            else if (tg.kind === "repl" && tg.i != null) w.imgs[tg.i] = url;
            else if (tg.kind === "step" && w.itinerary[tg.i]) { w.itinerary[tg.i].img = url; portalEdit.stepImgOpen = null; }
            portalEdit.addingImg = false; portalEdit.selImg = null; portalEdit.uploadTarget = null;
            paintEditor();
          });
        });
        on("edv-imgapply", () => {
          syncText();
          const url = (document.getElementById("edv-imgurl").value || "").trim();
          if (!url) return;
          materialize();
          if (portalEdit.addingImg) { w.imgs.push(url); portalEdit.addingImg = false; }
          else if (portalEdit.selImg != null) w.imgs[portalEdit.selImg] = url;
          portalEdit.selImg = null; portalEdit.imgUrlDraft = "";
          paintEditor();
        });
        on("edv-imgdel", () => {
          syncText(); materialize();
          if (portalEdit.selImg != null) w.imgs.splice(portalEdit.selImg, 1);
          portalEdit.selImg = null; paintEditor();
        });
        const move = (dir) => {
          syncText(); materialize();
          const i2 = portalEdit.selImg; if (i2 == null) return;
          const j = i2 + dir; if (j < 0 || j >= w.imgs.length) return;
          const tmp = w.imgs[i2]; w.imgs[i2] = w.imgs[j]; w.imgs[j] = tmp;
          portalEdit.selImg = j; paintEditor();
        };
        on("edv-imgleft", () => move(-1));
        on("edv-imgright", () => move(1));

        /* lists */
        on("ed-addhl", () => {
          syncText();
          (w.highlights.en = w.highlights.en || []).push(side === "en" ? "New highlight" : "ميزة جديدة");
          (w.highlights.ar = w.highlights.ar || []).push(side === "ar" ? "ميزة جديدة" : "New highlight");
          paintEditor();
        });
        root.querySelectorAll("[data-delhl]").forEach((b) => b.addEventListener("click", () => {
          syncText(); const i2 = +b.dataset.delhl;
          (w.highlights.en || []).splice(i2, 1); (w.highlights.ar || []).splice(i2, 1);
          paintEditor();
        }));
        on("ed-addex", () => {
          syncText();
          (w.exclusions.en = w.exclusions.en || []).push(side === "en" ? "Not included item" : "بند غير مشمول");
          (w.exclusions.ar = w.exclusions.ar || []).push(side === "ar" ? "بند غير مشمول" : "Not included item");
          paintEditor();
        });
        root.querySelectorAll("[data-delex]").forEach((b) => b.addEventListener("click", () => {
          syncText(); const i2 = +b.dataset.delex;
          (w.exclusions.en || []).splice(i2, 1); (w.exclusions.ar || []).splice(i2, 1);
          paintEditor();
        }));
        on("ed-addit", () => {
          syncText();
          (w.itinerary = w.itinerary || []).push({ t: { en: "New step", ar: "خطوة جديدة" }, d: { en: "Describe this part of the day.", ar: "صف هذا الجزء من اليوم." } });
          paintEditor();
        });
        root.querySelectorAll("[data-delit]").forEach((b) => b.addEventListener("click", () => {
          syncText(); (w.itinerary || []).splice(+b.dataset.delit, 1);
          portalEdit.stepImgOpen = null; paintEditor();
        }));
        root.querySelectorAll("[data-stepimg]").forEach((b) => b.addEventListener("click", () => {
          syncText(); portalEdit.stepImgOpen = +b.dataset.stepimg; portalEdit.stepImgDraft = ""; paintEditor();
        }));
        on("edv-stepimgapply", () => {
          syncText();
          const url = (document.getElementById("edv-stepimg").value || "").trim();
          if (url && w.itinerary[portalEdit.stepImgOpen]) w.itinerary[portalEdit.stepImgOpen].img = url;
          portalEdit.stepImgOpen = null; paintEditor();
        });
        root.querySelectorAll("[data-delstepimg]").forEach((b) => b.addEventListener("click", () => {
          syncText(); const s = w.itinerary[+b.dataset.delstepimg]; if (s) delete s.img;
          paintEditor();
        }));

        /* save */
        document.getElementById("pf-save").addEventListener("click", () => {
          syncText();
          /* required-info validation — block save and name what's missing */
          const missing = [];
          if (!String((w.title.en || "") + (w.title.ar || "")).trim()) missing.push(t("vTitle"));
          if (!String((w.desc.en || "") + (w.desc.ar || "")).trim()) missing.push(t("vDesc"));
          if (!String((w.meeting.en || "") + (w.meeting.ar || "")).trim()) missing.push(t("vMeet"));
          const dvEl2 = document.getElementById("edv-durval");
          if (!dvEl2 || !(+dvEl2.value > 0)) missing.push(t("vDur"));
          if (!(w.langs || []).length) missing.push(t("vLangs"));
          const m0 = document.getElementById("pf-msg");
          if (missing.length) {
            m0.textContent = t("errRequired") + " " + missing.join(" · ");
            m0.style.color = "#8E1020";
            window.scrollTo(0, 0);
            return;
          }
          const patch = {
            title: { en: (w.title.en || w.title.ar || "Untitled tour").trim(), ar: (w.title.ar || w.title.en || "جولة").trim() },
            city: w.abroad ? null : w.city, type: w.type,
            abroad: w.abroad, dest: w.abroad ? w.dest : null,
            departsFrom: w.departsFrom || [],
            days: w.days || 1, hours: w.hours || null,
            price: w.price || 0, groupMax: w.groupMax || 10,
            langs: w.langs || [], cancel: !!w.cancel, cancelDays: w.cancel ? (w.cancelDays || null) : null,
            desc: w.desc, highlights: w.highlights, exclusions: w.exclusions,
            itinerary: w.itinerary, meeting: w.meeting, notes: w.notes,
            imgs: w.imgs, videoUrl: w.videoUrl || ""
          };
          try {
            if (portalEdit.kind === "new") {
              allDrafts.push(Object.assign({ agency: a.id, img: patch.imgs[0] || CITY_IMG[patch.city] || "babylon", rating: 0, reviews: 0 }, patch));
              store.set("tooiraq-drafts", JSON.stringify(allDrafts));
              portalEdit.kind = "draft"; portalEdit.i = allDrafts.length - 1;
            } else if (portalEdit.kind === "draft") {
              Object.assign(allDrafts[portalEdit.i], patch);
              store.set("tooiraq-drafts", JSON.stringify(allDrafts));
            } else {
              let ov = {}; try { ov = JSON.parse(store.get("tooiraq-tour-edits") || "{}"); } catch (e) {}
              ov[portalEdit.id] = Object.assign(ov[portalEdit.id] || {}, patch);
              store.set("tooiraq-tour-edits", JSON.stringify(ov));
              const liveT = TOURS.find((z) => z.id === portalEdit.id);
              if (liveT) Object.assign(liveT, patch);
            }
          } catch (e) {
            m0.textContent = t("edImgTooBig"); m0.style.color = "#8E1020";
            window.scrollTo(0, 0); return;
          }
          const m = document.getElementById("pf-msg");
          m.textContent = t("pfSavedLocal"); m.style.color = "var(--color-accent)";
          window.scrollTo(0, 0);
        });
      }
      paintEditor();
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
    if (page === "agency") renderAgencyPage();
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
