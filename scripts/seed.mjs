/* ============================================================
   TooIraq — one-time seed: mirrors assets/data.js content into
   Supabase so bookings/reviews attach to real rows.
   - agencies + tours get slug = their static data.js id
   - integrity rules preserved: pending operators keep src links,
     zero prices, no invented ratings (rating caches stay null —
     public pages keep showing the static sample ratings for
     sample listings until real reviews exist).
   Usage:
     SUPABASE_URL=https://xxx.supabase.co \
     SUPABASE_SERVICE_ROLE_KEY=eyJ... \
     node scripts/seed.mjs
   ============================================================ */
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const here = dirname(fileURLToPath(import.meta.url));
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY"); process.exit(1); }
const db = createClient(url, key, { auth: { persistSession: false } });

/* load browser-global data.js in a sandbox */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(here, "..", "assets", "data.js"), "utf8"), ctx);
const { CITIES, TYPES, AGENCIES, TOURS } = ctx;
if (!AGENCIES || !TOURS) { console.error("data.js globals not found"); process.exit(1); }

const cancelPolicy = (c) => (c ? "free48" : "nonrefundable");
const cents = (usd) => Math.round((usd || 0) * 100);

const agencyIdMap = {};   // static id → uuid

console.log(`Seeding ${AGENCIES.length} agencies…`);
for (const a of AGENCIES) {
  const row = {
    slug: a.id,
    status: "approved",
    name: a.name, description: a.desc || { en: "", ar: "" }, base: a.base || { en: "", ar: "" },
    initials: a.initials || (a.name && a.name.en ? a.name.en.slice(0, 2).toUpperCase() : "TI"),
    color: a.color || "art-teal",
    phone: a.phone || null, whatsapp: a.wa || null, website: a.site || null,
    langs: a.langs || [], verified: !!a.verified, since: a.since || null,
    src_url: a.src || null, pending_onboarding: !!a.pending
  };
  const { data, error } = await db.from("agencies")
    .upsert(row, { onConflict: "slug" }).select("id, slug").single();
  if (error) { console.error("agency", a.id, error.message); process.exit(1); }
  agencyIdMap[a.id] = data.id;
}

console.log(`Seeding ${TOURS.length} tours…`);
let n = 0;
for (const x of TOURS) {
  const row = {
    slug: x.id,
    agency_id: agencyIdMap[x.agency],
    status: "published",
    title: x.title, description: x.desc || { en: "", ar: "" },
    city_id: x.city, type_id: x.type,
    days: x.days || 1, hours: x.hours || null,
    price_cents: cents(x.price), group_max: x.groupMax || 10,
    langs: x.langs || [], cancel: cancelPolicy(x.cancel),
    highlights: x.highlights || { en: [], ar: [] },
    itinerary: x.itinerary || [],
    meeting: x.meeting || { en: "", ar: "" },
    images: [x.img].filter(Boolean),
    badge: x.badge || null,
    src_url: x.src || null
  };
  const { error } = await db.from("tours").upsert(row, { onConflict: "slug" });
  if (error) { console.error("tour", x.id, error.message); process.exit(1); }
  n++;
}
console.log(`Done: ${Object.keys(agencyIdMap).length} agencies, ${n} tours.`);
console.log("Note: DB rating caches stay null until real approved reviews exist — static sample ratings keep rendering from data.js, which is intended.");
