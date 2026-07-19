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
