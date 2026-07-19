/* ============================================================
   TooIraq — listings data
   NOTE: All agencies, tours, prices and phone numbers below are
   SAMPLE content for the launch preview. Replace with real
   providers as they sign up. To add a tour or agency, copy an
   existing block, edit the fields, and redeploy — nothing else
   needed. Claude can do this for you from a one-line request.
   ============================================================ */

const CITIES = [
  { id: "baghdad",  en: "Baghdad",           ar: "بغداد",            motif: "dome",      color: "art-teal" },
  { id: "erbil",    en: "Erbil",             ar: "أربيل",            motif: "citadel",   color: "art-indigo" },
  { id: "babylon",  en: "Babylon (Hillah)",  ar: "بابل (الحلة)",     motif: "ziggurat",  color: "art-gold" },
  { id: "karbala",  en: "Karbala & Najaf",   ar: "كربلاء والنجف",    motif: "dome",      color: "art-night" },
  { id: "marshes",  en: "The Marshes",       ar: "الأهوار",          motif: "boat",      color: "art-olive" },
  { id: "samarra",  en: "Samarra",           ar: "سامراء",           motif: "malwiya",   color: "art-terracotta" },
  { id: "mosul",    en: "Mosul & Nineveh",   ar: "الموصل ونينوى",    motif: "citadel",   color: "art-terracotta" },
  { id: "basra",    en: "Basra",             ar: "البصرة",           motif: "palm",      color: "art-teal" }
];

const TYPES = [
  { id: "history",   en: "History & Archaeology", ar: "تاريخ وآثار" },
  { id: "nature",    en: "Nature & Adventure",    ar: "طبيعة ومغامرة" },
  { id: "religious", en: "Religious & Pilgrimage", ar: "ديني وزيارات" },
  { id: "culture",   en: "City & Culture",        ar: "مدينة وثقافة" }
];

const AGENCIES = [
  {
    id: "dijla-journeys",
    name: { en: "Dijla Journeys", ar: "رحلات دجلة" },
    base: { en: "Baghdad", ar: "بغداد" },
    color: "art-teal", initials: "DJ",
    desc: {
      en: "Baghdad-based operator running heritage walks, museum tours and custom trips across central Iraq. English and Arabic speaking guides.",
      ar: "شركة سياحية مقرها بغداد تنظم جولات تراثية وزيارات للمتاحف ورحلات مخصصة في وسط العراق، مع مرشدين يتحدثون العربية والإنجليزية."
    },
    phone: "+964 770 000 0001", wa: "9647700000001", verified: true
  },
  {
    id: "babylon-gate",
    name: { en: "Babylon Gate Tours", ar: "بوابة بابل للسياحة" },
    base: { en: "Hillah, Babil", ar: "الحلة، بابل" },
    color: "art-gold", initials: "BG",
    desc: {
      en: "Specialists in the ancient sites of Babil province — Babylon, Borsippa and Kish — with licensed archaeology guides.",
      ar: "متخصصون في المواقع الأثرية بمحافظة بابل — بابل وبورسيبا وكيش — مع مرشدين مجازين في علم الآثار."
    },
    phone: "+964 770 000 0002", wa: "9647700000002", verified: true
  },
  {
    id: "marshland-voyages",
    name: { en: "Marshland Voyages", ar: "رحلات الأهوار" },
    base: { en: "Chibayish, Dhi Qar", ar: "الجبايش، ذي قار" },
    color: "art-olive", initials: "MV",
    desc: {
      en: "Family-run mashoof boat trips through the UNESCO-listed Mesopotamian Marshes, with village lunches and birdwatching.",
      ar: "رحلات عائلية بقوارب المشحوف عبر أهوار بلاد الرافدين المدرجة لدى اليونسكو، مع غداء في القرى ومراقبة الطيور."
    },
    phone: "+964 770 000 0003", wa: "9647700000003", verified: true
  },
  {
    id: "zagros-trails",
    name: { en: "Zagros Trails", ar: "دروب زاغروس" },
    base: { en: "Erbil, Kurdistan", ar: "أربيل، كردستان" },
    color: "art-indigo", initials: "ZT",
    desc: {
      en: "Adventure operator for the Kurdistan region: mountain drives, waterfalls, canyons and citadel walking tours.",
      ar: "شركة مغامرات في إقليم كردستان: جولات جبلية وشلالات ووديان وجولات مشي في القلعة."
    },
    phone: "+964 770 000 0004", wa: "9647700000004", verified: false
  },
  {
    id: "noor-pilgrim",
    name: { en: "Noor Pilgrim Services", ar: "نور لخدمات الزائرين" },
    base: { en: "Karbala", ar: "كربلاء" },
    color: "art-night", initials: "NP",
    desc: {
      en: "Complete pilgrimage support in Karbala and Najaf — transport, accommodation near the shrines, and multilingual guides.",
      ar: "خدمات زيارة متكاملة في كربلاء والنجف — نقل وإقامة قرب العتبات المقدسة ومرشدون بعدة لغات."
    },
    phone: "+964 770 000 0005", wa: "9647700000005", verified: true
  },
  {
    id: "basra-breeze",
    name: { en: "Basra Breeze Travel", ar: "نسيم البصرة للسفر" },
    base: { en: "Basra", ar: "البصرة" },
    color: "art-terracotta", initials: "BB",
    desc: {
      en: "River cruises on the Shatt al-Arab, old Basra heritage walks and date-palm countryside visits in Iraq's south.",
      ar: "جولات نهرية في شط العرب وجولات تراثية في البصرة القديمة وزيارات لبساتين النخيل في جنوب العراق."
    },
    phone: "+964 770 000 0006", wa: "9647700000006", verified: false
  }
];

const TOURS = [
  {
    id: "babylon-day-trip",
    city: "babylon", type: "history", agency: "babylon-gate",
    motif: "ziggurat", color: "art-gold",
    days: 1, price: 95,
    title: { en: "Babylon & the Lion: Full-Day Ancient City Tour", ar: "بابل والأسد: جولة يوم كامل في المدينة الأثرية" },
    desc: {
      en: "Walk the Processional Way, stand before the Ishtar Gate reconstruction and meet the Lion of Babylon on a guided day trip from Baghdad or Hillah.",
      ar: "امشِ في شارع الموكب وقف أمام بوابة عشتار وشاهد أسد بابل في جولة يوم كامل بصحبة مرشد من بغداد أو الحلة."
    },
    highlights: {
      en: ["Licensed archaeology guide", "Ishtar Gate & Processional Way", "Lion of Babylon", "Hotel pickup from Baghdad or Hillah"],
      ar: ["مرشد آثار مجاز", "بوابة عشتار وشارع الموكب", "أسد بابل", "نقل من الفندق في بغداد أو الحلة"]
    }
  },
  {
    id: "ur-ziggurat",
    city: "marshes", type: "history", agency: "marshland-voyages",
    motif: "ziggurat", color: "art-terracotta",
    days: 1, price: 110,
    title: { en: "Ziggurat of Ur & Nasiriyah Heritage Day", ar: "زقورة أور ويوم تراثي في الناصرية" },
    desc: {
      en: "Climb the great Ziggurat of Ur, visit the traditional house said to be of Prophet Abraham, and end at Nasiriyah's riverside corniche.",
      ar: "اصعد زقورة أور العظيمة وزر بيت النبي إبراهيم التقليدي واختم جولتك على كورنيش الناصرية."
    },
    highlights: {
      en: ["Ziggurat of Ur entry", "Royal Cemetery area", "Local lunch included", "English or Arabic guide"],
      ar: ["دخول زقورة أور", "منطقة المقبرة الملكية", "غداء محلي مشمول", "مرشد بالعربية أو الإنجليزية"]
    }
  },
  {
    id: "marshes-mashoof",
    city: "marshes", type: "nature", agency: "marshland-voyages",
    motif: "boat", color: "art-olive",
    days: 1, price: 75,
    title: { en: "Mesopotamian Marshes Mashoof Boat Safari", ar: "جولة بقارب المشحوف في أهوار بلاد الرافدين" },
    desc: {
      en: "Glide through reed canals by traditional mashoof, share tea with Marsh Arab families and watch water buffalo swim at golden hour.",
      ar: "انسَب بين قنوات القصب على متن مشحوف تقليدي، وتناول الشاي مع أهل الأهوار، وشاهد الجاموس يسبح عند الغروب."
    },
    highlights: {
      en: ["UNESCO World Heritage wetlands", "Traditional mashoof boat", "Village visit & tea", "Best light: afternoon departure"],
      ar: ["أهوار مدرجة في التراث العالمي", "قارب مشحوف تقليدي", "زيارة قرية وضيافة شاي", "انطلاق بعد الظهر لأجمل إضاءة"]
    }
  },
  {
    id: "baghdad-heritage-walk",
    city: "baghdad", type: "culture", agency: "dijla-journeys",
    motif: "dome", color: "art-teal",
    days: 1, price: 60,
    title: { en: "Baghdad Heritage Walk: Mutanabbi Street to the Iraq Museum", ar: "جولة تراث بغداد: من شارع المتنبي إلى المتحف العراقي" },
    desc: {
      en: "Booksellers, Ottoman-era alleys, Shabandar Café stories and the treasures of the Iraq Museum — Baghdad in one unforgettable day.",
      ar: "الوراقون وأزقة العهد العثماني وحكايات مقهى الشابندر وكنوز المتحف العراقي — بغداد في يوم لا يُنسى."
    },
    highlights: {
      en: ["Mutanabbi Street & Qishla", "Iraq Museum entry", "Tigris-side lunch", "Small groups (max 8)"],
      ar: ["شارع المتنبي والقشلة", "دخول المتحف العراقي", "غداء على ضفاف دجلة", "مجموعات صغيرة (٨ كحد أقصى)"]
    }
  },
  {
    id: "karbala-najaf-ziyara",
    city: "karbala", type: "religious", agency: "noor-pilgrim",
    motif: "dome", color: "art-night",
    days: 2, price: 140,
    title: { en: "Karbala & Najaf: Two-Day Ziyara Package", ar: "كربلاء والنجف: برنامج زيارة ليومين" },
    desc: {
      en: "A respectful, fully organised two-day visit to the shrines of Imam Hussein, Abbas and Imam Ali, with hotel near the haram and all transfers.",
      ar: "زيارة منظمة ليومين إلى مراقد الإمام الحسين والعباس والإمام علي، مع فندق قرب الحرم وجميع التنقلات."
    },
    highlights: {
      en: ["Hotel 5 min from the shrine", "All transfers included", "Wadi al-Salam visit", "Guides in AR / EN / FA / UR"],
      ar: ["فندق على بعد ٥ دقائق من الحرم", "جميع التنقلات مشمولة", "زيارة وادي السلام", "مرشدون بالعربية والإنجليزية والفارسية والأردية"]
    }
  },
  {
    id: "erbil-citadel-bazaar",
    city: "erbil", type: "culture", agency: "zagros-trails",
    motif: "citadel", color: "art-indigo",
    days: 1, price: 55,
    title: { en: "Erbil Citadel, Qaysari Bazaar & Tea Houses", ar: "قلعة أربيل وقيصرية البازار وبيوت الشاي" },
    desc: {
      en: "Explore one of the world's oldest continuously inhabited citadels, haggle in the Qaysari bazaar and finish with kunafa and tea at Machko.",
      ar: "استكشف واحدة من أقدم القلاع المأهولة في العالم، وساوم في قيصرية البازار، واختم بالكنافة والشاي في مقهى مجكو."
    },
    highlights: {
      en: ["Citadel guided visit", "Kurdish textile museum", "Bazaar food tastings", "Evening fountain square"],
      ar: ["جولة مرشدة في القلعة", "متحف المنسوجات الكردية", "تذوق مأكولات البازار", "ساحة النوافير مساءً"]
    }
  },
  {
    id: "kurdistan-mountains",
    city: "erbil", type: "nature", agency: "zagros-trails",
    motif: "mountains", color: "art-indigo",
    days: 2, price: 180,
    title: { en: "Kurdistan Mountains: Rawanduz, Bekhal & Gali Ali Beg", ar: "جبال كردستان: راوندوز وبيخال وكلي علي بيك" },
    desc: {
      en: "Waterfalls, canyon viewpoints and the Hamilton Road's hairpin bends on a two-day mountain escape with an overnight lodge stay.",
      ar: "شلالات وإطلالات على الوديان ومنعطفات طريق هاملتون في رحلة جبلية ليومين مع مبيت في نُزُل جبلي."
    },
    highlights: {
      en: ["Bekhal & Gali Ali Beg waterfalls", "Rawanduz canyon", "Mountain lodge overnight", "4x4 transport"],
      ar: ["شلالا بيخال وكلي علي بيك", "وادي راوندوز", "مبيت في نُزُل جبلي", "نقل بسيارة دفع رباعي"]
    }
  },
  {
    id: "samarra-malwiya",
    city: "samarra", type: "history", agency: "dijla-journeys",
    motif: "malwiya", color: "art-gold",
    days: 1, price: 85,
    title: { en: "Samarra & the Spiral Minaret Day Tour", ar: "جولة يوم إلى سامراء والملوية" },
    desc: {
      en: "Stand beneath the legendary Malwiya spiral minaret and explore the vast Abbasid capital that once ruled half the world.",
      ar: "قف تحت المئذنة الملوية الشهيرة واستكشف عاصمة العباسيين الشاسعة التي حكمت نصف العالم يوماً."
    },
    highlights: {
      en: ["Malwiya spiral minaret", "Great Mosque of Samarra", "Abbasid palace ruins", "Round trip from Baghdad"],
      ar: ["المئذنة الملوية", "جامع سامراء الكبير", "أطلال القصور العباسية", "ذهاب وعودة من بغداد"]
    }
  },
  {
    id: "mosul-nineveh",
    city: "mosul", type: "history", agency: "dijla-journeys",
    motif: "citadel", color: "art-terracotta",
    days: 1, price: 100,
    title: { en: "Mosul Rising: Old City & Nineveh Walls", ar: "الموصل تنهض: المدينة القديمة وأسوار نينوى" },
    desc: {
      en: "Witness the rebirth of Mosul's old city, the rebuilt al-Nouri mosque and leaning minaret, and the ancient gates of Nineveh.",
      ar: "شاهد نهضة الموصل القديمة وجامع النوري ومئذنته الحدباء المعاد بناؤها وبوابات نينوى الأثرية."
    },
    highlights: {
      en: ["Al-Nouri Mosque & al-Hadba", "Nineveh's Mashki & Adad gates", "Old souq & church quarter", "Local storyteller guide"],
      ar: ["جامع النوري والحدباء", "بوابتا مشكي ونركال في نينوى", "السوق القديم وحي الكنائس", "مرشد من أهل المدينة"]
    }
  },
  {
    id: "basra-shatt-cruise",
    city: "basra", type: "culture", agency: "basra-breeze",
    motif: "palm", color: "art-teal",
    days: 1, price: 65,
    title: { en: "Basra Evening: Shatt al-Arab Cruise & Old City", ar: "أمسية بصراوية: جولة في شط العرب والبصرة القديمة" },
    desc: {
      en: "Cruise the Shatt al-Arab at sunset, wander old Basra's shanasheel balconies and dine on grilled fish by the corniche.",
      ar: "أبحر في شط العرب وقت الغروب، وتجول بين شناشيل البصرة القديمة، وتعشَّ سمكاً مسكوفاً على الكورنيش."
    },
    highlights: {
      en: ["Sunset river cruise", "Shanasheel old quarter", "Masgouf fish dinner", "Corniche promenade"],
      ar: ["جولة نهرية عند الغروب", "حي الشناشيل القديم", "عشاء سمك مسكوف", "نزهة على الكورنيش"]
    }
  }
];

/* ---------- v2 enrichment: imagery, ratings, booking details ---------- */

const CITY_IMG = {
  baghdad: "baghdad", erbil: "citadel", babylon: "babylon", karbala: "shrine",
  marshes: "marsh", samarra: "malwiya", mosul: "citadel", basra: "basra"
};

const TOUR_EXTRAS = {
  "babylon-day-trip":     { img: "babylon",  rating: 4.8, reviews: 126, hours: 8,  groupMax: 12, langs: ["EN","AR"], cancel: true,  badge: "likely",
    meeting: { en: "Hotel pickup in Baghdad or Hillah, 8:00 AM", ar: "النقل من الفندق في بغداد أو الحلة، ٨:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Ishtar Gate & museum", ar: "بوابة عشتار والمتحف" }, d: { en: "Guided walk through the reconstructed gate and site museum.", ar: "جولة مرشدة عبر البوابة المعاد بناؤها ومتحف الموقع." } },
      { t: { en: "Processional Way & palaces", ar: "شارع الموكب والقصور" }, d: { en: "The heart of ancient Babylon with your archaeologist guide.", ar: "قلب بابل القديمة برفقة مرشد آثاري." } },
      { t: { en: "Lion of Babylon & lunch", ar: "أسد بابل والغداء" }, d: { en: "Photo stop at the basalt lion, then a local lunch before return.", ar: "توقف للتصوير عند الأسد ثم غداء محلي قبل العودة." } }
    ] },
  "ur-ziggurat":          { img: "ur",       rating: 4.9, reviews: 74,  hours: 9,  groupMax: 10, langs: ["EN","AR"], cancel: true,
    meeting: { en: "Nasiriyah city center, 8:30 AM", ar: "مركز مدينة الناصرية، ٨:٣٠ صباحاً" },
    itinerary: [
      { t: { en: "Ziggurat of Ur", ar: "زقورة أور" }, d: { en: "Climb the great stairway of the 4,000-year-old ziggurat.", ar: "اصعد الدرج العظيم للزقورة البالغة من العمر ٤٠٠٠ عام." } },
      { t: { en: "Royal Cemetery & house of Abraham", ar: "المقبرة الملكية وبيت إبراهيم" }, d: { en: "Walk the excavations with stories of Woolley's discoveries.", ar: "تجول بين التنقيبات مع قصص اكتشافات وولي." } },
      { t: { en: "Nasiriyah corniche", ar: "كورنيش الناصرية" }, d: { en: "Sunset tea on the Euphrates riverside.", ar: "شاي الغروب على ضفاف الفرات." } }
    ] },
  "marshes-mashoof":      { img: "marsh",    rating: 4.9, reviews: 203, hours: 6,  groupMax: 8,  langs: ["EN","AR"], cancel: true,  badge: "best",
    meeting: { en: "Chibayish boat landing, 2:00 PM", ar: "مرسى الجبايش، ٢:٠٠ ظهراً" },
    itinerary: [
      { t: { en: "Mashoof departure", ar: "الانطلاق بالمشحوف" }, d: { en: "Glide into the reed canals on a traditional boat.", ar: "انطلق بين قنوات القصب على قارب تقليدي." } },
      { t: { en: "Marsh village & tea", ar: "قرية الأهوار والشاي" }, d: { en: "Visit a reed house (mudhif) and share tea with a local family.", ar: "زر بيت القصب (المضيف) وتناول الشاي مع عائلة محلية." } },
      { t: { en: "Golden hour & buffalo", ar: "الغروب والجاموس" }, d: { en: "Watch water buffalo swim home as the sun sets.", ar: "شاهد الجاموس يعود سابحاً مع غروب الشمس." } }
    ] },
  "baghdad-heritage-walk": { img: "baghdad", rating: 4.7, reviews: 158, hours: 7,  groupMax: 8,  langs: ["EN","AR"], cancel: true,
    meeting: { en: "Shabandar Café, Mutanabbi Street, 9:00 AM", ar: "مقهى الشابندر، شارع المتنبي، ٩:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Mutanabbi Street & Qishla", ar: "شارع المتنبي والقشلة" }, d: { en: "Booksellers, calligraphers and the Ottoman clock tower.", ar: "الوراقون والخطاطون وبرج ساعة القشلة العثماني." } },
      { t: { en: "Iraq Museum", ar: "المتحف العراقي" }, d: { en: "Treasures of Sumer, Akkad, Babylon and Assyria with your guide.", ar: "كنوز سومر وأكد وبابل وآشور برفقة مرشدك." } },
      { t: { en: "Tigris lunch", ar: "غداء على دجلة" }, d: { en: "Masgouf lunch overlooking the river.", ar: "غداء مسكوف بإطلالة على النهر." } }
    ] },
  "karbala-najaf-ziyara": { img: "shrine",   rating: 4.9, reviews: 312, hours: 48, groupMax: 15, langs: ["EN","AR","FA","UR"], cancel: true, badge: "best",
    meeting: { en: "Najaf or Baghdad airport pickup, any time", ar: "الاستقبال من مطار النجف أو بغداد، في أي وقت" },
    itinerary: [
      { t: { en: "Day 1 — Karbala", ar: "اليوم الأول — كربلاء" }, d: { en: "Ziyara of Imam Hussein and al-Abbas shrines; overnight near the haram.", ar: "زيارة مرقدي الإمام الحسين والعباس؛ مبيت قرب الحرم." } },
      { t: { en: "Day 2 — Najaf", ar: "اليوم الثاني — النجف" }, d: { en: "Ziyara of Imam Ali shrine and Wadi al-Salam.", ar: "زيارة مرقد الإمام علي ووادي السلام." } },
      { t: { en: "Farewell & transfer", ar: "الوداع والتوصيل" }, d: { en: "Return transfer to your airport or hotel.", ar: "توصيل العودة إلى المطار أو الفندق." } }
    ] },
  "erbil-citadel-bazaar": { img: "citadel",  rating: 4.6, reviews: 98,  hours: 6,  groupMax: 10, langs: ["EN","AR","KU"], cancel: true,
    meeting: { en: "Citadel main gate, 10:00 AM", ar: "البوابة الرئيسية للقلعة، ١٠:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Erbil Citadel", ar: "قلعة أربيل" }, d: { en: "One of the oldest continuously inhabited places on earth.", ar: "واحدة من أقدم الأماكن المأهولة باستمرار في العالم." } },
      { t: { en: "Qaysari Bazaar", ar: "قيصرية البازار" }, d: { en: "Spices, textiles, gold and honey — with tastings.", ar: "بهارات ومنسوجات وذهب وعسل — مع تذوق." } },
      { t: { en: "Machko tea house", ar: "مقهى مجكو" }, d: { en: "Kunafa and tea at the century-old cliffside café.", ar: "كنافة وشاي في المقهى العريق تحت سور القلعة." } }
    ] },
  "kurdistan-mountains":  { img: "mountains", rating: 4.8, reviews: 145, hours: 48, groupMax: 8, langs: ["EN","AR","KU"], cancel: false, badge: "likely",
    meeting: { en: "Erbil hotel pickup, 8:00 AM", ar: "النقل من فندقك في أربيل، ٨:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Day 1 — Hamilton Road", ar: "اليوم الأول — طريق هاملتون" }, d: { en: "Gali Ali Beg and Bekhal waterfalls, canyon viewpoints, lodge dinner.", ar: "شلالا كلي علي بيك وبيخال وإطلالات الوادي وعشاء في النُزُل." } },
      { t: { en: "Day 2 — Rawanduz", ar: "اليوم الثاني — راوندوز" }, d: { en: "Canyon rim walk and mountain villages before return.", ar: "مشي على حافة الوادي وقرى جبلية قبل العودة." } }
    ] },
  "samarra-malwiya":      { img: "malwiya",  rating: 4.7, reviews: 66,  hours: 8,  groupMax: 12, langs: ["EN","AR"], cancel: true,
    meeting: { en: "Baghdad hotel pickup, 8:00 AM", ar: "النقل من فندقك في بغداد، ٨:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Malwiya minaret", ar: "المئذنة الملوية" }, d: { en: "The famous 52-metre spiral of the Abbasid Great Mosque.", ar: "اللولب الشهير بارتفاع ٥٢ متراً لجامع سامراء الكبير." } },
      { t: { en: "Great Mosque walls", ar: "أسوار الجامع الكبير" }, d: { en: "Walk the vast 9th-century mosque enclosure.", ar: "تجول في حرم الجامع الشاسع من القرن التاسع." } },
      { t: { en: "Abbasid palaces", ar: "القصور العباسية" }, d: { en: "Dar al-Khilafa ruins and lunch before return.", ar: "أطلال دار الخلافة وغداء قبل العودة." } }
    ] },
  "mosul-nineveh":        { img: "citadel",  rating: 4.8, reviews: 89,  hours: 9,  groupMax: 10, langs: ["EN","AR"], cancel: true,
    meeting: { en: "Mosul old city gate, 9:00 AM", ar: "بوابة الموصل القديمة، ٩:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Al-Nouri Mosque", ar: "جامع النوري" }, d: { en: "The rebuilt mosque and its leaning al-Hadba minaret.", ar: "الجامع المعاد إعماره ومئذنته الحدباء." } },
      { t: { en: "Old souq & churches", ar: "السوق القديم والكنائس" }, d: { en: "Rebirth of the old city's markets and church quarter.", ar: "نهضة أسواق المدينة القديمة وحي الكنائس." } },
      { t: { en: "Nineveh walls", ar: "أسوار نينوى" }, d: { en: "Mashki and Adad gates of the ancient Assyrian capital.", ar: "بوابتا مشكي ونركال لعاصمة الآشوريين." } }
    ] },
  "basra-shatt-cruise":   { img: "basra",    rating: 4.5, reviews: 54,  hours: 5,  groupMax: 14, langs: ["EN","AR"], cancel: true,
    meeting: { en: "Basra corniche, 4:00 PM", ar: "كورنيش البصرة، ٤:٠٠ عصراً" },
    itinerary: [
      { t: { en: "Shanasheel quarter", ar: "حي الشناشيل" }, d: { en: "Old Basra's wooden balconies and canal lanes.", ar: "شرفات البصرة القديمة الخشبية وأزقة الأنهر." } },
      { t: { en: "Sunset cruise", ar: "جولة الغروب" }, d: { en: "Boat trip on the Shatt al-Arab as the palms turn gold.", ar: "جولة نهرية في شط العرب وقت اصفرار النخيل." } },
      { t: { en: "Corniche dinner", ar: "عشاء الكورنيش" }, d: { en: "Grilled fish dinner by the water.", ar: "عشاء سمك مشوي على ضفاف الشط." } }
    ] }
};

const AGENCY_EXTRAS = {
  "dijla-journeys":    { rating: 4.7, reviews: 341, since: 2018 },
  "babylon-gate":      { rating: 4.8, reviews: 152, since: 2020 },
  "marshland-voyages": { rating: 4.9, reviews: 265, since: 2016 },
  "zagros-trails":     { rating: 4.7, reviews: 198, since: 2019 },
  "noor-pilgrim":      { rating: 4.9, reviews: 420, since: 2014 },
  "basra-breeze":      { rating: 4.5, reviews: 87,  since: 2021 }
};

const REVIEWS_POOL = [
  { n: "Sarah M.",  from: { en: "United Kingdom", ar: "المملكة المتحدة" }, stars: 5, tx: { en: "Organised perfectly from the first WhatsApp message. Our guide's knowledge was incredible and we always felt safe and welcome.", ar: "تنظيم مثالي من أول رسالة واتساب. معرفة المرشد كانت مذهلة وشعرنا دائماً بالأمان والترحيب." } },
  { n: "Ali H.",    from: { en: "Baghdad, Iraq", ar: "بغداد، العراق" }, stars: 5, tx: { en: "As an Iraqi I still learned so much. Fair price, honest agency, zero hassle. Highly recommended.", ar: "كعراقي تعلمت الكثير رغم ذلك. سعر عادل وشركة صادقة وبلا أي عناء. أنصح بشدة." } },
  { n: "Yusuf K.",  from: { en: "Türkiye", ar: "تركيا" }, stars: 4, tx: { en: "Wonderful day — pickup was 20 minutes late but the rest was flawless and the lunch was excellent.", ar: "يوم رائع — تأخر النقل ٢٠ دقيقة لكن ما تبقى كان مثالياً والغداء ممتازاً." } },
  { n: "Fatima Z.", from: { en: "Australia", ar: "أستراليا" }, stars: 5, tx: { en: "Booked over WhatsApp in minutes. They answered every question before we paid anything. The experience itself? Unforgettable.", ar: "حجزنا عبر واتساب خلال دقائق وأجابوا عن كل سؤال قبل أن ندفع شيئاً. التجربة نفسها؟ لا تُنسى." } },
  { n: "Omar S.",   from: { en: "UAE", ar: "الإمارات" }, stars: 5, tx: { en: "Professional guide, clean car, flexible timing. This is how tourism in Iraq should be done.", ar: "مرشد محترف وسيارة نظيفة ومرونة في المواعيد. هكذا يجب أن تكون السياحة في العراق." } },
  { n: "Nadia R.",  from: { en: "Canada", ar: "كندا" }, stars: 5, tx: { en: "The photos don't do it justice. Communication was fast and clear in English the whole time.", ar: "الصور لا توفيها حقها. كان التواصل سريعاً وواضحاً بالإنجليزية طوال الوقت." } }
];

/* merge extras into TOURS/AGENCIES */
TOURS.forEach(t => Object.assign(t, TOUR_EXTRAS[t.id] || {}));
AGENCIES.forEach(a => Object.assign(a, AGENCY_EXTRAS[a.id] || {}));

/* ---------- categories update: events ---------- */
TYPES.push({ id: "festival", en: "Festivals & Events", ar: "مهرجانات وفعاليات" });

TOURS.push(
  {
    id: "babylon-festival-night",
    city: "babylon", type: "festival", agency: "babylon-gate",
    motif: "ziggurat", color: "art-gold", img: "babylon",
    days: 1, hours: 4, price: 45, rating: 4.6, reviews: 41, groupMax: 20,
    langs: ["EN", "AR"], cancel: true,
    title: { en: "Babylon Festival Night: Music on Ancient Stones", ar: "ليلة مهرجان بابل: موسيقى على الحجارة القديمة" },
    desc: {
      en: "An evening event at the Babylon Festival grounds — live Iraqi music and folklore performances beside the ancient city, with transfers and reserved seating.",
      ar: "أمسية في مهرجان بابل — موسيقى عراقية حية وعروض فلكلورية بجوار المدينة الأثرية، مع النقل ومقاعد محجوزة."
    },
    highlights: {
      en: ["Reserved festival seating", "Live music & folklore show", "Evening transfers included", "Optional site walk before the show"],
      ar: ["مقاعد محجوزة في المهرجان", "موسيقى حية وعروض فلكلورية", "نقل مسائي مشمول", "جولة اختيارية في الموقع قبل العرض"]
    },
    meeting: { en: "Hillah center pickup, 5:00 PM", ar: "النقل من مركز الحلة، ٥:٠٠ مساءً" },
    itinerary: [
      { t: { en: "Sunset arrival", ar: "الوصول عند الغروب" }, d: { en: "Optional walk by the ancient walls before the gates open.", ar: "جولة اختيارية قرب الأسوار الأثرية قبل فتح الأبواب." } },
      { t: { en: "The show", ar: "العرض" }, d: { en: "Live performances under the stars beside Babylon.", ar: "عروض حية تحت النجوم بجوار بابل." } }
    ]
  },
  {
    id: "nawroz-kurdistan",
    city: "erbil", type: "festival", agency: "zagros-trails",
    motif: "mountains", color: "art-indigo", img: "mountains",
    days: 1, hours: 10, price: 70, rating: 4.9, reviews: 58, groupMax: 15,
    langs: ["EN", "AR", "KU"], cancel: true,
    title: { en: "Nawroz in Kurdistan: Fire Festival Day Trip", ar: "نوروز في كردستان: رحلة يوم عيد النار" },
    desc: {
      en: "Join the Kurdish New Year celebrations — torch processions up the hillsides, dancing in traditional dress, and picnic feasts in the spring mountains (March seasonal event).",
      ar: "شارك في احتفالات رأس السنة الكردية — مواكب المشاعل على التلال والدبكات بالأزياء التقليدية وموائد الربيع في الجبال (فعالية موسمية في آذار)."
    },
    highlights: {
      en: ["Akre torch procession viewpoint", "Traditional dance & dress", "Kurdish picnic lunch", "Seasonal: March 20–21"],
      ar: ["إطلالة على مواكب مشاعل عقرة", "دبكات وأزياء تقليدية", "غداء كردي في الطبيعة", "موسمية: ٢٠–٢١ آذار"]
    },
    meeting: { en: "Erbil hotel pickup, 9:00 AM", ar: "النقل من فندقك في أربيل، ٩:٠٠ صباحاً" },
    itinerary: [
      { t: { en: "Spring mountains", ar: "جبال الربيع" }, d: { en: "Drive into the celebrating villages with photo stops.", ar: "انطلاق نحو القرى المحتفلة مع توقفات للتصوير." } },
      { t: { en: "Torch procession", ar: "موكب المشاعل" }, d: { en: "Watch the famous fire lines climb the hillside at dusk.", ar: "شاهد خطوط النار الشهيرة تصعد التلال عند الغسق." } }
    ]
  }
);

/* ============================================================
   REAL operators & tours found online — FOR ONBOARDING OUTREACH.
   Facts (names, routes, durations) from public listings; all
   descriptions written by us. Each tour carries `src` — a clear
   link to the original listing, TO BE REMOVED once the provider
   approves. No prices/ratings are invented: price 0 = on request.
   ============================================================ */

const REAL_AGENCIES = [
  { id: "bilweekend", name: { en: "Bil Weekend", ar: "بالعطلة Bil Weekend" }, base: { en: "Baghdad", ar: "بغداد" },
    color: "art-teal", initials: "BW", wa: "", phone: "", pending: true, site: "https://www.bilweekend.com/",
    desc: { en: "Iraq's pioneering local tour company (since 2016) — group expeditions, private tours and heritage experiences across the country.",
            ar: "شركة السياحة العراقية الرائدة (منذ ٢٠١٦) — رحلات جماعية وخاصة وتجارب تراثية في عموم العراق." } },
  { id: "babel-tours", name: { en: "Babel Tours", ar: "Babel Tours" }, base: { en: "Erbil (Ankawa) & Nasiriyah", ar: "أربيل (عنكاوا) والناصرية" },
    color: "art-gold", initials: "BT", wa: "", phone: "+964 781 045 1045", pending: true, site: "https://babel-tours.com/",
    desc: { en: "Long-running Iraqi operator for tours, hotels, transport and pilgrimages across Iraq and Kurdistan.",
            ar: "شركة عراقية عريقة للجولات والفنادق والنقل والزيارات الدينية في العراق وكردستان." } },
  { id: "iraq-travel-tours", name: { en: "Iraq Travel and Tours", ar: "Iraq Travel and Tours" }, base: { en: "Baghdad & Erbil", ar: "بغداد وأربيل" },
    color: "art-terracotta", initials: "IT", wa: "", phone: "", pending: true, site: "https://iraqtravelandtours.com/",
    desc: { en: "Operator with 35 years of experience running English-guided packages from Baghdad and Erbil — Babylon, Ur, Sulaymaniyah and beyond.",
            ar: "شركة بخبرة ٣٥ عاماً تنظم برامج بمرشدين بالإنجليزية من بغداد وأربيل — بابل وأور والسليمانية وغيرها." } },
  { id: "aknaf-alsawary", name: { en: "Aknaf Alsawary", ar: "Aknaf Alsawary" }, base: { en: "Iraq", ar: "العراق" },
    color: "art-olive", initials: "AA", wa: "", phone: "", pending: true, site: "https://aknafalsawary.com/",
    desc: { en: "Iraqi travel agency running monthly fixed-departure group tours plus private itineraries, including the Mesopotamian Marshes.",
            ar: "وكالة سفر عراقية تنظم رحلات جماعية شهرية بمواعيد ثابتة وبرامج خاصة تشمل الأهوار." } },
  { id: "iraqi-guide", name: { en: "Iraqi Guide", ar: "Iraqi Guide" }, base: { en: "Baghdad", ar: "بغداد" },
    color: "art-indigo", initials: "IG", wa: "", phone: "", pending: true, site: "https://www.iraqiguide.com/",
    desc: { en: "Private guided tours across Iraq — Baghdad city breaks, Basra and the Marshes, and Baghdad-to-Erbil journeys.",
            ar: "جولات خاصة بمرشدين في العراق — بغداد والبصرة والأهوار ورحلات من بغداد إلى أربيل." } },
  { id: "untamed-borders", name: { en: "Untamed Borders", ar: "Untamed Borders" }, base: { en: "International (UK)", ar: "دولية (بريطانيا)" },
    color: "art-night", initials: "UB", wa: "", phone: "", pending: true, site: "https://untamedborders.com/destinations/iraq/",
    desc: { en: "Adventure travel specialist running Iraq group trips — Cradle of Civilisation, Kurdistan treks, Ski Iraq and the Erbil Marathon.",
            ar: "شركة مغامرات دولية تنظم رحلات جماعية إلى العراق — مهد الحضارات وكردستان والتزلج وماراثون أربيل." } },
  { id: "rj-travel", name: { en: "RJ Travel Agency", ar: "RJ Travel Agency" }, base: { en: "International", ar: "دولية" },
    color: "art-teal", initials: "RJ", wa: "", phone: "", pending: true, site: "https://www.rjtravelagency.com/tours-in-iraq/",
    desc: { en: "Tour operator selling small-group and private Iraq packages for 2026–27, Baghdad to Erbil.",
            ar: "منظم رحلات يقدم باقات جماعية صغيرة وخاصة إلى العراق لموسم ٢٠٢٦–٢٧ من بغداد إلى أربيل." } },
  { id: "gyg-local", name: { en: "Local operator (GetYourGuide)", ar: "مشغّل محلي (GetYourGuide)" }, base: { en: "Baghdad / Nasiriyah", ar: "بغداد / الناصرية" },
    color: "art-olive", initials: "GY", wa: "", phone: "", pending: true, site: "https://www.getyourguide.com/baghdad-l152664/",
    desc: { en: "Iraqi operators selling bookable day tours and marsh overnights through the GetYourGuide marketplace.",
            ar: "مشغّلون عراقيون يبيعون جولات يومية ومبيتاً في الأهوار عبر منصة GetYourGuide." } }
];

const REAL_TOURS = [
  { id: "bw-central-iraq-5d", agency: "bilweekend", city: "babylon", type: "history", img: "babylon", motif: "ziggurat", color: "art-gold",
    days: 5, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: false,
    src: "https://www.bilweekend.com/packages/view/25", srcName: "bilweekend.com",
    title: { en: "Central Iraq in 5 Days (Bil Weekend)", ar: "وسط العراق في ٥ أيام (بالعطلة)" },
    desc: { en: "Bil Weekend's five-day journey through central Iraq's heritage cities — details and dates on the original listing.",
            ar: "رحلة خمسة أيام من بالعطلة عبر مدن وسط العراق التراثية — التفاصيل والمواعيد في الإعلان الأصلي." },
    highlights: { en: ["Local Iraqi operator (since 2016)", "Central Iraq heritage route", "Group departure format", "English & Arabic"],
                  ar: ["شركة عراقية محلية (منذ ٢٠١٦)", "مسار تراثي في وسط العراق", "رحلة جماعية", "بالعربية والإنجليزية"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "bw-unesco", agency: "bilweekend", city: "babylon", type: "history", img: "ur", motif: "ziggurat", color: "art-terracotta",
    days: 2, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: false,
    src: "https://bilweekend.com/packages/view/26", srcName: "bilweekend.com",
    title: { en: "UNESCO World Heritage Tour (Bil Weekend)", ar: "جولة مواقع التراث العالمي (بالعطلة)" },
    desc: { en: "Bil Weekend's package visiting Iraq's UNESCO World Heritage sites — see the original listing for the current route and dates.",
            ar: "برنامج بالعطلة لزيارة مواقع التراث العالمي في العراق — راجع الإعلان الأصلي للمسار والمواعيد." },
    highlights: { en: ["UNESCO-listed sites", "Local Iraqi operator", "Group departures"], ar: ["مواقع مدرجة لدى اليونسكو", "شركة عراقية محلية", "رحلات جماعية"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "itt-ultimate-13d", agency: "iraq-travel-tours", city: "baghdad", type: "history", img: "baghdad", motif: "dome", color: "art-teal",
    days: 13, price: 0, groupMax: 0, langs: ["EN"], cancel: false,
    src: "https://iraqtravelandtours.com/tours/13-day-ultimate-iraq-adventure-from-baghdad-to-erbil/", srcName: "iraqtravelandtours.com",
    title: { en: "13-Day Ultimate Iraq Adventure: Baghdad to Erbil", ar: "مغامرة العراق الشاملة في ١٣ يوماً: من بغداد إلى أربيل" },
    desc: { en: "Iraq Travel and Tours' full-country route from Baghdad to Erbil with English-speaking guides — full itinerary on the original listing.",
            ar: "مسار شامل من بغداد إلى أربيل مع مرشدين بالإنجليزية من Iraq Travel and Tours — البرنامج الكامل في الإعلان الأصلي." },
    highlights: { en: ["Full Baghdad-to-Erbil route", "35 years' operating experience", "English-speaking guides"], ar: ["مسار كامل من بغداد إلى أربيل", "خبرة ٣٥ عاماً", "مرشدون بالإنجليزية"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "aknaf-ancient-7d", agency: "aknaf-alsawary", city: "baghdad", type: "history", img: "malwiya", motif: "malwiya", color: "art-gold",
    days: 7, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: false,
    src: "https://aknafalsawary.com/tours/ancient-iraq-tour/", srcName: "aknafalsawary.com",
    title: { en: "7-Day Ancient Iraq Tour: Baghdad & Erbil (Aknaf Alsawary)", ar: "جولة العراق القديم في ٧ أيام: بغداد وأربيل (Aknaf Alsawary)" },
    desc: { en: "Aknaf Alsawary's week-long ancient-Iraq circuit between Baghdad and Erbil — details on the original listing.",
            ar: "برنامج أسبوع عبر مواقع العراق القديم بين بغداد وأربيل من Aknaf Alsawary — التفاصيل في الإعلان الأصلي." },
    highlights: { en: ["Baghdad & Erbil combined", "Monthly fixed departures", "Iraqi agency"], ar: ["بغداد وأربيل معاً", "انطلاقات شهرية ثابتة", "وكالة عراقية"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "aknaf-unesco-9d", agency: "aknaf-alsawary", city: "mosul", type: "history", img: "citadel", motif: "citadel", color: "art-terracotta",
    days: 9, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: false,
    src: "https://aknafalsawary.com/tours/iraq-unesco-tour/", srcName: "aknafalsawary.com",
    title: { en: "9-Day Iraq UNESCO Tour: Babylon, Hatra, Nasiriyah & Erbil", ar: "جولة يونسكو العراق في ٩ أيام: بابل والحضر والناصرية وأربيل" },
    desc: { en: "Nine days across Iraq's UNESCO sites — Babylon, Hatra, Ur and Erbil's citadel — by Aknaf Alsawary; see the original listing.",
            ar: "تسعة أيام عبر مواقع اليونسكو — بابل والحضر وأور وقلعة أربيل — من Aknaf Alsawary؛ راجع الإعلان الأصلي." },
    highlights: { en: ["Babylon, Hatra, Ur, Erbil", "UNESCO-focused route", "Group format"], ar: ["بابل والحضر وأور وأربيل", "مسار مواقع اليونسكو", "رحلة جماعية"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "rj-baghdad-erbil-9d", agency: "rj-travel", city: "baghdad", type: "culture", img: "river", motif: "dome", color: "art-teal",
    days: 9, price: 0, groupMax: 0, langs: ["EN"], cancel: false,
    src: "https://www.rjtravelagency.com/product/travel-to-iraq/", srcName: "rjtravelagency.com",
    title: { en: "9-Day Baghdad to Erbil Group Tour (RJ Travel)", ar: "جولة جماعية ٩ أيام من بغداد إلى أربيل (RJ Travel)" },
    desc: { en: "RJ Travel's nine-day 2026/27 group departure from Baghdad north to Erbil — itinerary and dates on the original listing.",
            ar: "رحلة جماعية تسعة أيام لموسم ٢٠٢٦/٢٧ من بغداد شمالاً إلى أربيل من RJ Travel — البرنامج في الإعلان الأصلي." },
    highlights: { en: ["2026/27 fixed departures", "Baghdad to Erbil", "Small group"], ar: ["مواعيد ثابتة ٢٠٢٦/٢٧", "من بغداد إلى أربيل", "مجموعة صغيرة"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "ub-cradle-10d", agency: "untamed-borders", city: "baghdad", type: "history", img: "ur", motif: "ziggurat", color: "art-night",
    days: 10, price: 0, groupMax: 0, langs: ["EN"], cancel: false,
    src: "https://untamedborders.com/itinerary/travel-to-iraq/", srcName: "untamedborders.com",
    title: { en: "10-Day Iraq: Cradle of Civilisation (Untamed Borders)", ar: "العراق في ١٠ أيام: مهد الحضارات (Untamed Borders)" },
    desc: { en: "Untamed Borders' flagship ten-day Iraq expedition through the heart of Mesopotamia — full details on the original itinerary page.",
            ar: "رحلة استكشافية عشرة أيام عبر قلب بلاد الرافدين من Untamed Borders — التفاصيل الكاملة في صفحة البرنامج الأصلية." },
    highlights: { en: ["Flagship Mesopotamia route", "Experienced expedition leaders", "Small group"], ar: ["مسار بلاد الرافدين الرئيسي", "قادة رحلات ذوو خبرة", "مجموعة صغيرة"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "ub-kurdistan-7d", agency: "untamed-borders", city: "erbil", type: "nature", img: "mountains", motif: "mountains", color: "art-indigo",
    days: 7, price: 0, groupMax: 0, langs: ["EN"], cancel: false,
    src: "https://untamedborders.com/itinerary/iraqi-kurdistan/", srcName: "untamedborders.com",
    title: { en: "7-Day Iraqi Kurdistan Trip (Untamed Borders)", ar: "رحلة كردستان العراق في ٧ أيام (Untamed Borders)" },
    desc: { en: "A week in the mountains, citadels and bazaars of Iraqi Kurdistan with Untamed Borders — see the original itinerary.",
            ar: "أسبوع بين جبال كردستان وقلاعها وأسواقها مع Untamed Borders — راجع البرنامج الأصلي." },
    highlights: { en: ["Erbil, mountains & canyons", "Kurdish culture focus", "Small group"], ar: ["أربيل والجبال والوديان", "تركيز على الثقافة الكردية", "مجموعة صغيرة"] },
    meeting: { en: "See the original listing for dates and meeting details.", ar: "راجع الإعلان الأصلي للمواعيد وتفاصيل اللقاء." }, itinerary: [] },
  { id: "gyg-marsh-overnight", agency: "gyg-local", city: "marshes", type: "nature", img: "marsh", motif: "boat", color: "art-olive",
    days: 2, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: true,
    src: "https://www.getyourguide.com/baghdad-l152664/marshlands-full-day-tour-with-overnight-stay-in-the-marshes-t1235522/", srcName: "getyourguide.com",
    title: { en: "Marshlands Full-Day Tour with Overnight Stay", ar: "جولة يوم كامل في الأهوار مع مبيت" },
    desc: { en: "A bookable local experience: full day in the Mesopotamian Marshes with an overnight stay — live availability on GetYourGuide.",
            ar: "تجربة محلية قابلة للحجز: يوم كامل في الأهوار مع مبيت — التوفر المباشر على GetYourGuide." },
    highlights: { en: ["Overnight in the marshes", "Bookable online today", "Local operator via marketplace"], ar: ["مبيت في الأهوار", "قابلة للحجز فوراً", "مشغّل محلي عبر منصة"] },
    meeting: { en: "See the original listing for meeting details.", ar: "راجع الإعلان الأصلي لتفاصيل اللقاء." }, itinerary: [] },
  { id: "gyg-ur-marshes", agency: "gyg-local", city: "marshes", type: "history", img: "ur", motif: "ziggurat", color: "art-gold",
    days: 2, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: true,
    src: "https://www.getyourguide.com/baghdad-l152664/ziggurat-of-ur-marshes-overnight-stay-tour-t1070184/", srcName: "getyourguide.com",
    title: { en: "Ziggurat of Ur, Marshes & Overnight Stay Tour", ar: "زقورة أور والأهوار مع مبيت" },
    desc: { en: "Combines the Ziggurat of Ur with the Marshes and an overnight stay — a live, bookable listing by a local operator on GetYourGuide.",
            ar: "تجمع زقورة أور والأهوار مع مبيت — إعلان مباشر قابل للحجز لمشغّل محلي على GetYourGuide." },
    highlights: { en: ["Ur + Marshes combined", "Overnight included", "Bookable online today"], ar: ["أور والأهوار معاً", "يشمل المبيت", "قابلة للحجز فوراً"] },
    meeting: { en: "See the original listing for meeting details.", ar: "راجع الإعلان الأصلي لتفاصيل اللقاء." }, itinerary: [] },
  { id: "ig-baghdad-3d", agency: "iraqi-guide", city: "baghdad", type: "culture", img: "baghdad", motif: "dome", color: "art-indigo",
    days: 3, price: 0, groupMax: 0, langs: ["EN", "AR"], cancel: false,
    src: "https://iraqiguide.com/tour/tour-of-baghdad-3-days", srcName: "iraqiguide.com",
    title: { en: "Tour of Baghdad in 3 Days (Iraqi Guide)", ar: "جولة بغداد في ٣ أيام (Iraqi Guide)" },
    desc: { en: "Three private days in the capital with Iraqi Guide — museums, old city and the Tigris; details on the original listing.",
            ar: "ثلاثة أيام خاصة في العاصمة مع Iraqi Guide — المتاحف والمدينة القديمة ودجلة؛ التفاصيل في الإعلان الأصلي." },
    highlights: { en: ["Private city break", "Baghdad in depth", "Local guides"], ar: ["رحلة خاصة", "بغداد بعمق", "مرشدون محليون"] },
    meeting: { en: "See the original listing for meeting details.", ar: "راجع الإعلان الأصلي لتفاصيل اللقاء." }, itinerary: [] }
];

REAL_AGENCIES.forEach(a => AGENCIES.push(a));
REAL_TOURS.forEach(t2 => TOURS.push(t2));

/* ---------- full onboarding directory: every researched operator & listing ---------- */
function refAgency(o) {
  return Object.assign({ wa: "", phone: "", pending: true, color: "art-teal", verified: false }, o);
}
function refTour(o) {
  return Object.assign({
    price: 0, groupMax: 0, langs: ["EN"], cancel: false, days: 0, hours: 0,
    motif: "dome", color: "art-teal", itinerary: [],
    meeting: { en: "See the original listing for details and dates.", ar: "راجع الإعلان الأصلي للتفاصيل والمواعيد." },
    highlights: { en: ["Details on the original listing", "Added during onboarding"], ar: ["التفاصيل في الإعلان الأصلي", "أُضيفت أثناء الانضمام"] }
  }, o);
}

[
  refAgency({ id: "rocky-road", name: { en: "Rocky Road Travel", ar: "Rocky Road Travel" }, base: { en: "Berlin (runs Iraq tours)", ar: "برلين (تنظم رحلات للعراق)" }, initials: "RR", color: "art-terracotta", site: "https://rockyroadtravel.com/iraq-tours/",
    desc: { en: "International operator running Iraq and Iraqi-Kurdistan group tours.", ar: "منظم رحلات دولي ينظم جولات جماعية إلى العراق وكردستان." } }),
  refAgency({ id: "lupine", name: { en: "Lupine Travel", ar: "Lupine Travel" }, base: { en: "UK", ar: "بريطانيا" }, initials: "LT", color: "art-indigo", site: "https://lupinetravel.co.uk/federal-iraq-holidays-and-tours/",
    desc: { en: "UK operator offering Federal Iraq holidays and tours.", ar: "منظم بريطاني يقدم رحلات إلى العراق الاتحادي." } }),
  refAgency({ id: "atc-expeditions", name: { en: "Against the Compass Expeditions", ar: "Against the Compass Expeditions" }, base: { en: "International", ar: "دولية" }, initials: "AC", color: "art-night", site: "https://expeditions.againstthecompass.com/destinations/federal-iraq/",
    desc: { en: "Expeditions arm of the influential Against the Compass travel blog, running Iraq group trips.", ar: "الذراع الاستكشافية لمدونة السفر المعروفة Against the Compass، تنظم رحلات جماعية للعراق." } }),
  refAgency({ id: "ypt", name: { en: "Young Pioneer Tours", ar: "Young Pioneer Tours" }, base: { en: "International", ar: "دولية" }, initials: "YP", color: "art-olive", site: "https://www.youngpioneertours.com/iraqi-kurdistan/",
    desc: { en: "Budget adventure operator with Iraqi Kurdistan departures.", ar: "منظم رحلات مغامرة اقتصادي مع انطلاقات إلى كردستان العراق." } }),
  refAgency({ id: "surfiran", name: { en: "SURFIRAN", ar: "SURFIRAN" }, base: { en: "Region (Iran focus)", ar: "إقليمية (تركيز على إيران)" }, initials: "SF", color: "art-gold", site: "https://surfiran.com/iraq-tours/",
    desc: { en: "Regional specialist selling Iraq tours and travel packages for 2026/27.", ar: "متخصص إقليمي يبيع جولات وباقات سفر إلى العراق لموسم ٢٠٢٦/٢٧." } }),
  refAgency({ id: "alnenava", name: { en: "AlNenava Travel and Tours", ar: "AlNenava Travel and Tours" }, base: { en: "Pilgrimage specialist", ar: "متخصص بالزيارات" }, initials: "AN", color: "art-night", site: "https://www.alnenavatravelandtours.com/",
    desc: { en: "Ziyarat packages to the holy cities — Karbala, Najaf and beyond.", ar: "باقات زيارة إلى المدن المقدسة — كربلاء والنجف وغيرهما." } }),
  refAgency({ id: "waytokarbala", name: { en: "Way to Karbala", ar: "Way to Karbala" }, base: { en: "Pilgrimage specialist", ar: "متخصص بالزيارات" }, initials: "WK", color: "art-night", site: "https://waytokarbala.com/",
    desc: { en: "Specialist in ziyarat tour packages to Iraq's holy sites.", ar: "متخصص في باقات الزيارة إلى العتبات المقدسة في العراق." } }),
  refAgency({ id: "kbm", name: { en: "KBM Tours", ar: "KBM Tours" }, base: { en: "International pilgrimage", ar: "زيارات دولية" }, initials: "KB", color: "art-night", site: "https://kbmtours.com/",
    desc: { en: "Pilgrimage services covering Iraq, Iran and Saudi Arabia.", ar: "خدمات زيارة تشمل العراق وإيران والسعودية." } }),
  refAgency({ id: "ikg-haval", name: { en: "Iraqi Kurdistan Guide (Haval Qaraman)", ar: "Iraqi Kurdistan Guide (هاوال قره مان)" }, base: { en: "Erbil", ar: "أربيل" }, initials: "HQ", color: "art-indigo", site: "https://www.iraqikurdistanguide.com/",
    desc: { en: "Well-reviewed private guide for the Kurdistan region.", ar: "مرشد خاص حاصل على تقييمات ممتازة في إقليم كردستان." } }),
  refAgency({ id: "karwan", name: { en: "Karwan Wahed — Iraqi Kurdistan Tours", ar: "Karwan Wahed — جولات كردستان" }, base: { en: "Erbil (via tourHQ)", ar: "أربيل (عبر tourHQ)" }, initials: "KW", color: "art-olive", site: "https://www.tourhq.com/guide/iq60278/karwan-wahed-iraqi-kurdistan-tours",
    desc: { en: "Private tour operator in Erbil, bookable through tourHQ.", ar: "منظم جولات خاص في أربيل يمكن حجزه عبر tourHQ." } })
].forEach(a => AGENCIES.push(a));

[
  refTour({ id: "bw-original-tour", agency: "bilweekend", city: "baghdad", type: "culture", img: "baghdad",
    src: "https://www.bilweekend.com/packages/view/34", srcName: "bilweekend.com",
    title: { en: "The Original Tour 2025/26 (Bil Weekend)", ar: "الجولة الأصلية ٢٠٢٥/٢٦ (بالعطلة)" },
    desc: { en: "Bil Weekend's signature group trip — route and dates on the original listing.", ar: "رحلة بالعطلة الجماعية المميزة — المسار والمواعيد في الإعلان الأصلي." } }),
  refTour({ id: "bw-all-iraq", agency: "bilweekend", city: "baghdad", type: "history", img: "river", motif: "ziggurat", color: "art-gold",
    src: "https://bilweekend.com/packages/view/31", srcName: "bilweekend.com",
    title: { en: "All Iraq Tour (Bil Weekend)", ar: "جولة كل العراق (بالعطلة)" },
    desc: { en: "Bil Weekend's country-wide package — full details on the original listing.", ar: "باقة بالعطلة الشاملة لعموم العراق — التفاصيل في الإعلان الأصلي." } }),
  refTour({ id: "itt-day-tours", agency: "iraq-travel-tours", city: "baghdad", type: "culture", img: "baghdad",
    src: "https://iraqtravelandtours.com/day-tours/", srcName: "iraqtravelandtours.com",
    title: { en: "Day Tours Collection (Iraq Travel and Tours)", ar: "مجموعة الجولات اليومية (Iraq Travel and Tours)" },
    desc: { en: "A catalogue of English-guided day tours from Baghdad and Erbil.", ar: "مجموعة جولات يومية بمرشدين بالإنجليزية من بغداد وأربيل." } }),
  refTour({ id: "aknaf-monthly-groups", agency: "aknaf-alsawary", city: "baghdad", type: "history", img: "malwiya", motif: "malwiya", color: "art-gold",
    src: "https://aknafalsawary.com/2026-monthly-group-tours-to-iraq/", srcName: "aknafalsawary.com",
    title: { en: "2026 Monthly Group Tours (Aknaf Alsawary)", ar: "الرحلات الجماعية الشهرية ٢٠٢٦ (Aknaf Alsawary)" },
    desc: { en: "Fixed monthly departures across Iraq through 2026 — schedule on the original page.", ar: "انطلاقات شهرية ثابتة عبر العراق خلال ٢٠٢٦ — الجدول في الصفحة الأصلية." } }),
  refTour({ id: "aknaf-marshes", agency: "aknaf-alsawary", city: "marshes", type: "nature", img: "marsh", motif: "boat", color: "art-olive",
    src: "https://aknafalsawary.com/mesopotamian-marshes/", srcName: "aknafalsawary.com",
    title: { en: "Mesopotamian Marshes Program (Aknaf Alsawary)", ar: "برنامج الأهوار (Aknaf Alsawary)" },
    desc: { en: "Marshes experiences by Aknaf Alsawary — details on the original page.", ar: "تجارب الأهوار من Aknaf Alsawary — التفاصيل في الصفحة الأصلية." } }),
  refTour({ id: "ub-newroz", agency: "untamed-borders", city: "erbil", type: "festival", img: "mountains", motif: "mountains", color: "art-indigo",
    src: "https://untamedborders.com/itinerary/iraqi-kurdistan-newroz/", srcName: "untamedborders.com",
    title: { en: "Kurdistan & Newroz Festival Trip (Untamed Borders)", ar: "رحلة كردستان ومهرجان نوروز (Untamed Borders)" },
    desc: { en: "Seasonal group trip timed for the Newroz fire festival in Kurdistan.", ar: "رحلة جماعية موسمية تتزامن مع مهرجان نوروز في كردستان." } }),
  refTour({ id: "ub-ski-iraq", agency: "untamed-borders", city: "erbil", type: "nature", img: "mountains", motif: "mountains", color: "art-night",
    src: "https://untamedborders.com/itinerary/ski-iraq/", srcName: "untamedborders.com",
    title: { en: "Ski Iraq (Untamed Borders)", ar: "التزلج في العراق (Untamed Borders)" },
    desc: { en: "Winter ski touring in the mountains of Iraqi Kurdistan.", ar: "تزلج شتوي في جبال كردستان العراق." } }),
  refTour({ id: "ub-erbil-marathon", agency: "untamed-borders", city: "erbil", type: "festival", img: "citadel", motif: "citadel", color: "art-terracotta",
    src: "https://untamedborders.com/itinerary/erbil-marathon/", srcName: "untamedborders.com",
    title: { en: "Erbil Marathon Trip (Untamed Borders)", ar: "رحلة ماراثون أربيل (Untamed Borders)" },
    desc: { en: "Run the Erbil Marathon with a supported group trip around the event.", ar: "شارك في ماراثون أربيل ضمن رحلة جماعية منظمة حول الحدث." } }),
  refTour({ id: "ig-basra-2d", agency: "iraqi-guide", city: "basra", type: "nature", img: "basra", motif: "palm", days: 2,
    src: "https://www.iraqiguide.com/tour/tour-in-basra-2-days", srcName: "iraqiguide.com",
    title: { en: "Tour in Basra (2 Days): City & Marshes", ar: "جولة البصرة (يومان): المدينة والأهوار" },
    desc: { en: "Two private days covering Basra and the nearby marshes.", ar: "يومان خاصان يشملان البصرة والأهوار القريبة." } }),
  refTour({ id: "ig-baghdad-erbil-8d", agency: "iraqi-guide", city: "baghdad", type: "culture", img: "river", days: 8,
    src: "https://www.iraqiguide.com/tour/paris-vacation-travel", srcName: "iraqiguide.com",
    title: { en: "Baghdad to Erbil (8 Days) — Iraqi Guide", ar: "من بغداد إلى أربيل (٨ أيام) — Iraqi Guide" },
    desc: { en: "An eight-day private journey from the capital to Kurdistan.", ar: "رحلة خاصة ثمانية أيام من العاصمة إلى كردستان." } }),
  refTour({ id: "rr-iraq-tours", agency: "rocky-road", city: "baghdad", type: "history", img: "ur", motif: "ziggurat", color: "art-terracotta",
    src: "https://rockyroadtravel.com/iraq-tours/", srcName: "rockyroadtravel.com",
    title: { en: "Iraq Group Tours (Rocky Road Travel)", ar: "جولات العراق الجماعية (Rocky Road Travel)" },
    desc: { en: "Rocky Road's catalogue of Iraq group departures.", ar: "دليل رحلات Rocky Road الجماعية إلى العراق." } }),
  refTour({ id: "rr-kurdistan", agency: "rocky-road", city: "erbil", type: "nature", img: "mountains", motif: "mountains", color: "art-indigo",
    src: "https://rockyroadtravel.com/tours-to-iraqi-kurdistan/", srcName: "rockyroadtravel.com",
    title: { en: "Iraqi Kurdistan Tours (Rocky Road Travel)", ar: "جولات كردستان العراق (Rocky Road Travel)" },
    desc: { en: "Group tours across the Kurdistan region.", ar: "جولات جماعية في إقليم كردستان." } }),
  refTour({ id: "lupine-federal-iraq", agency: "lupine", city: "baghdad", type: "history", img: "malwiya", motif: "malwiya", color: "art-gold",
    src: "https://lupinetravel.co.uk/federal-iraq-holidays-and-tours/", srcName: "lupinetravel.co.uk",
    title: { en: "Federal Iraq Holidays & Tours (Lupine Travel)", ar: "رحلات العراق الاتحادي (Lupine Travel)" },
    desc: { en: "Lupine Travel's Iraq holidays catalogue.", ar: "دليل رحلات Lupine Travel إلى العراق." } }),
  refTour({ id: "atc-federal-iraq", agency: "atc-expeditions", city: "baghdad", type: "history", img: "babylon", motif: "ziggurat", color: "art-gold",
    src: "https://expeditions.againstthecompass.com/destinations/federal-iraq/", srcName: "expeditions.againstthecompass.com",
    title: { en: "Federal Iraq Expeditions (Against the Compass)", ar: "رحلات العراق الاتحادي (Against the Compass)" },
    desc: { en: "Group expeditions to Federal Iraq from the Against the Compass team.", ar: "رحلات جماعية إلى العراق الاتحادي من فريق Against the Compass." } }),
  refTour({ id: "ypt-kurdistan", agency: "ypt", city: "erbil", type: "culture", img: "citadel", motif: "citadel", color: "art-olive",
    src: "https://www.youngpioneertours.com/iraqi-kurdistan/", srcName: "youngpioneertours.com",
    title: { en: "Iraqi Kurdistan Tours (Young Pioneer Tours)", ar: "جولات كردستان العراق (Young Pioneer Tours)" },
    desc: { en: "YPT's budget group departures to Iraqi Kurdistan.", ar: "رحلات YPT الجماعية الاقتصادية إلى كردستان العراق." } }),
  refTour({ id: "surfiran-iraq", agency: "surfiran", city: "baghdad", type: "history", img: "ur", motif: "ziggurat",
    src: "https://surfiran.com/iraq-tours/", srcName: "surfiran.com",
    title: { en: "Iraq Tours & Travel Packages (SURFIRAN)", ar: "جولات وباقات العراق (SURFIRAN)" },
    desc: { en: "SURFIRAN's Iraq tour packages for 2026/27.", ar: "باقات SURFIRAN لجولات العراق لموسم ٢٠٢٦/٢٧." } }),
  refTour({ id: "alnenava-ziyarat", agency: "alnenava", city: "karbala", type: "religious", img: "shrine", motif: "dome", color: "art-night",
    src: "https://www.alnenavatravelandtours.com/", srcName: "alnenavatravelandtours.com",
    title: { en: "Ziyarat Packages (AlNenava Travel)", ar: "باقات الزيارة (AlNenava Travel)" },
    desc: { en: "Pilgrimage packages to Karbala, Najaf and Iraq's holy sites.", ar: "باقات زيارة إلى كربلاء والنجف والعتبات المقدسة." } }),
  refTour({ id: "wtk-ziyarat", agency: "waytokarbala", city: "karbala", type: "religious", img: "shrine", motif: "dome", color: "art-night",
    src: "https://waytokarbala.com/", srcName: "waytokarbala.com",
    title: { en: "Ziyarat Tour Packages (Way to Karbala)", ar: "باقات جولات الزيارة (Way to Karbala)" },
    desc: { en: "Dedicated ziyarat tour packages to the holy cities.", ar: "باقات زيارة مخصصة إلى المدن المقدسة." } }),
  refTour({ id: "kbm-ziyarat", agency: "kbm", city: "karbala", type: "religious", img: "shrine", motif: "dome", color: "art-night",
    src: "https://kbmtours.com/", srcName: "kbmtours.com",
    title: { en: "Iraq Ziyarat Packages (KBM Tours)", ar: "باقات زيارة العراق (KBM Tours)" },
    desc: { en: "Pilgrimage services to Iraq, Iran and Saudi Arabia.", ar: "خدمات زيارة إلى العراق وإيران والسعودية." } }),
  refTour({ id: "ikg-private-kurdistan", agency: "ikg-haval", city: "erbil", type: "nature", img: "mountains", motif: "mountains", color: "art-indigo",
    src: "https://www.iraqikurdistanguide.com/", srcName: "iraqikurdistanguide.com",
    title: { en: "Private Kurdistan Tours (Haval Qaraman)", ar: "جولات كردستان الخاصة (هاوال قره مان)" },
    desc: { en: "Custom private guiding across the Kurdistan region.", ar: "إرشاد خاص مخصص في إقليم كردستان." } }),
  refTour({ id: "karwan-private-kurdistan", agency: "karwan", city: "erbil", type: "culture", img: "citadel", motif: "citadel", color: "art-olive",
    src: "https://www.tourhq.com/guide/iq60278/karwan-wahed-iraqi-kurdistan-tours", srcName: "tourhq.com",
    title: { en: "Private Kurdistan Tours (Karwan Wahed)", ar: "جولات كردستان الخاصة (Karwan Wahed)" },
    desc: { en: "Private tours in and around Erbil, bookable via tourHQ.", ar: "جولات خاصة في أربيل وما حولها، تُحجز عبر tourHQ." } })
].forEach(t2 => TOURS.push(t2));
