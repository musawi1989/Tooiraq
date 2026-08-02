# TooIraq — Project Handoff

**Read this first.** This file lets any Claude session (Cowork chat or Claude Code) pick up the project instantly.

## What this is
TooIraq (**tooiraq.netlify.app**) is a tour & activities marketplace for Iraq — travelers compare tours from Iraqi agencies and book directly via WhatsApp. Owner: Max (info@kad3d.com.au, GitHub: musawi1989). Bilingual English/Arabic with full RTL.

## How deployment works — NO manual uploads
- This repo (`musawi1989/Tooiraq`, branch `main`) is linked to Netlify.
- **Any push to `main` auto-deploys to tooiraq.netlify.app within ~1 minute.**
- No build step: plain static site, publish directory is the repo root.
- Checkpoints are git tags (`v3.0`, `v3.1-real-listings`, `v3.2-full-directory`). Create a new annotated tag before/after major changes. Restore = push an old tag's state.
- NEVER commit tokens, passwords, or API keys to this repo.

## Stack & file map
No frameworks, no build tools — intentionally simple and fast:
- `index.html` — home: search box, category browser, big "View all" button, destination tiles, top experiences, trust row, agencies, CTA
- `tours.html` — results: sidebar filters (destination/type/price/duration/rating/cancellation) + sort + horizontal cards (Booking.com layout)
- `tour.html?id=…` — detail: gallery, itinerary, included, reviews (samples only), sticky booking box (WhatsApp booking + Netlify form)
- `agencies.html`, `join.html` (provider application), `contact.html`
- `provider.html` — provider portal **prototype** (localStorage only; real Supabase portal in portal.js takes over when backend keys are configured). Demo credentials (Max, Aug 2, testing phase — these guard only browser-local sample data): **every listed provider** has a demo account — username = its directory id in data.js (e.g. `dijla-journeys`, `almassal`, `babylon-gate`…), password `123456` for all; the login card has a "View all demo usernames" expander. `tooiraq` / `123456` stays as an alias for Dijla Journeys, and admin is `admin` / `123456` (admin.html demo panel: overview stats, draft tour approve/reject from any provider account, agency verify toggles, settings — all localStorage). Typing the admin credentials into the provider login forwards to admin.html. When Supabase goes live, replace these with real Auth accounts and remove the on-page hint.
  - **Tour editing (Aug 2, v5.1 — fully in-place, no toolbar):** every tour row is clickable → a **live-preview editor** rendering the tour exactly like the public page. Everything edits where it appears: dashed `contenteditable` text (title/desc/highlights/exclusions/itinerary/meeting/notes) in the CURRENT language — switch site language to edit the other side; price typed directly in the booking box; destination/type as small inline selects and duration/group as mini number inputs in the facts row; outbound + free-cancel as toggle chips; departs-from and a 20-language preset set (AR EN KU TR FA UR HI BN ZH RU FR DE ES IT PT JA KO ID NL AZ) as tap-to-toggle pills. Gallery: tap a tile to replace (URL) / reorder (◀▶) / remove, "＋ Add image" tile, and a video-link row (renders as a "Watch video" button on the public page — `tours.video_url`). Itinerary steps can each carry an optional photo (`itinerary[].img`), so images run through the tour body. New sections on tours + public page: **What's not included** (`exclusions` jsonb) and **Know before you go** (`notes` jsonb) — public page hides them when empty. "＋" next to the destination select opens the create-destination form (site-wide, as before). New tours still open as a ready-made bilingual sample. Saving: drafts → `tooiraq-drafts`; live catalog tours → `tooiraq-tour-edits` overrides merged at boot. NOTE: the real Supabase portal.js editor is still the older form — port this editor at go-live (schema/seed/adapter already carry all new fields).
  - **Custom destinations (Aug 2):** providers can create new destinations from the editor's Destination panel ("➕ New destination": name EN/AR, plus country EN/AR for outbound). Created entries join CITIES/ABROAD and persist via `tooiraq-custom-dests` (loaded first in `applyLocalEdits()`), so they appear in every component — home selectors, tours filters, badges, admin lists. IDs are slugified from the English name.
  - **Socials (Aug 2):** agencies carry `socials: {instagram, facebook, tiktok, youtube}`. Buttons render via `socialsHTML()` on agency cards (agencies page/home) and in the tour page "Offered by" box. Editable in the demo portal "My profile" panel AND in the real portal.js profile section; `agencies.socials jsonb` was already in schema.sql, now seeded (seed.mjs) and merged (publishedTours select + catalog adapter). Real data: Al Massal's Facebook (facebook.com/MassalCompany, from their own site); Dijla Journeys has placeholder platform-homepage links (no invented handles).
- `assets/rafidain.css` — design system (see below)
- `assets/app.js` — all rendering + EN/AR i18n (STR dict) + pages logic
- `assets/data.js` — ALL content: CITIES, TYPES, AGENCIES, TOURS (+ merged extras)
- `assets/img.js` — inline SVG scene "photos" (placeholder until real photography)

## Design system — Rafidain (do not deviate)
Based on the user's uploaded "Rafidain Design System" doc: **Iraq Red `#CE1126` is the primary** (buttons, brand, active states); **Green `#007A3D` only for positive meaning** (verified, free cancellation, savings, WhatsApp); **yellow `#FFB400` for rating stars only**; iOS-style neutral surfaces (`#F2F2F7` canvas, white cards, 20px radii, Poppins + Noto Naskh Arabic, material blur header). ~88% neutral / 9% red / 3% green.

## Content integrity rules (important)
- Two kinds of listings coexist:
  1. **Sample listings** (fictional agencies like "Dijla Journeys") — clearly covered by the site-wide sample notice.
  2. **Real operators** (Bil Weekend, Untamed Borders, etc.) added for onboarding outreach: they have `pending: true`, `src` (link to their original listing shown as "View original listing ↗" — **to be removed once they approve**), NO invented prices/ratings/reviews (price 0 = "Price on request"), descriptions written in our own words, no copied images.
- Keep it this way until providers approve their profiles. Owner's outreach tracker: `tooiraq-provider-outreach.xlsx` (sent to Max in chat).

## WhatsApp routing
Each agency's chat/booking buttons use that agency's OWN `wa` number from data.js (`https://wa.me/<a.wa>`). A short-lived "route everything to one central number" edit (July 19, 2026, via Netlify Agent Runner) was reverted at Max's request — do not reintroduce a central `WA_NUMBER`. Buttons only render where an agency has `wa` set (currently the sample agencies); real pending agencies have `wa: ""` and show their source link instead.

## v5.2 batch (Aug 2, 2026)
- **Najaf split from Karbala site-wide:** CITIES now has `karbala` ("Karbala"/"كربلاء") and `najaf` ("النجف") as separate cities (CITY_IMG najaf→shrine). Tour NAMES may still say "Karbala & Najaf" (that's just the tour's name, per Max) but no category/filter/selector joins them. `karbala-najaf-ziyara` keeps city `karbala`.
- **Agency profile pages:** new `agency.html?id=…` (renderAgencyPage) — logo, name, verified/pending badge, base, since, rating, description, WA/call/site buttons, socials, and all their tours. The "Offered by" box on tour pages is now one whole tappable link (`.bb-agency-link`) to it; agency-card names link too.
- **Editor:** duration is now an exclusive unit choice (Days OR Hours select + one number); free-cancellation has an optional provider-chosen days-notice (`cancelDays` → public shows "Free cancellation up to N days before", `tours.cancel_days` column, seeded/adapted); language chips show the native name under each code; gallery tiles carry on-image ↻ replace and ✕ delete buttons; **upload from device gallery** (canvas-downscaled to ≤1280px JPEG data-URLs — SRC() passes `data:` through; real storage bucket takes over at go-live); required-info validation blocks save and names missing fields (title/desc/meeting/duration/≥1 language); the add-destination "＋" is a clear beveled box with a red plus (`.ed-plus`). AR save button wording: **تثبيت التحديث**.

## Travel abroad — outbound tours (core feature, added Aug 2, 2026)
Iraqi agencies also sell OUTBOUND packages (Istanbul, Beirut, Mashhad, Dubai…) — a core feature Max requested. **Mobile (≤860px)** shows two symmetric dropdown cards instead of pills (Max, Aug 2): "Traveling from: — / Iraq / Outside Iraq" and "Destination: Inside Iraq / Outside Iraq" — both destination options stay visible to every visitor, including internationals (Max explicitly reversed the earlier hide-it rule for the mobile dropdowns). Picking from=Iraq reveals the Your-city card. **Desktop keeps the original pills** (Traveling within Iraq / Visiting from abroad, then Explore Iraq / Travel abroad inside local mode, where leaving local mode resets the goal so the search box can't get stuck on abroad). Either UI writes the same stored state. Choosing an abroad destination swaps the home search-box list to `ABROAD` destinations (data.js: 8 bilingual dest+country entries) and Search goes to `tours.html?scope=abroad[&dest=…][&depart=…]` (depart only attaches for from=Iraq). The default tours page and all home sections exclude abroad tours entirely.
- **Data:** abroad tours have `abroad: true, dest: <ABROAD id>, city: null`. 4 fictional samples (sample notice covers them) + 2 REAL researched Baghdad agencies added pending: **Al Massal** (almassal.iq — 7 outbound tours, price-on-request, src links) and **Naizak Baghdad** (naizakbaghdad.iq, agency only, no named packages on their site).
- **Departure honesty rule:** real pending outbound tours have `departsFrom: []` (their sites don't state a departure city) → cards show "Departure city: confirm with the agency" and the tour stays visible under ANY depart-city filter rather than falsely matching or silently hiding. Never infer departure from an agency's base city.
- **Rendering:** `locLabel()/locHref()` helpers handle city vs dest+country everywhere (cards, detail breadcrumb/sub); abroad depart badge uses 🛫 and always shows. `resultCard` hides group-size when `groupMax` is 0.
- **Backend:** `tours.abroad boolean` + `dest_id text` + location check constraint (city_id now nullable); portal editor has an outbound checkbox + destination select; seed.mjs + `dbTourAdapt()` carry both fields.

## Local-travel city selector (added July 26, 2026)
Home page has an explicit toggle — "Traveling within Iraq" vs "Visiting from abroad" (`#travel-mode`, `renderTravelMode()` in app.js). No auto-detection from language; the visitor must pick. Choosing "Traveling within Iraq" reveals a "Your city" selector; picking a city and hitting Search carries `?depart=<cityId>` into tours.html, which adds a "Departs from" filter (`state.depart`) and shows an honest empty state with a "Clear this filter" button when no tour departs from that city — never an invented pickup.
- **Data model:** every tour has `departsFrom` (array of CITIES ids). Set explicitly in data.js ONLY where the tour's own meeting/description text names a real second hub — 5 tours today (`babylon-day-trip`, `karbala-najaf-ziyara`, `samarra-malwiya`, `itt-day-tours`, `basra-erbil-crosscountry`). Every other tour falls back to `[tour.city]` via a `forEach` at the end of data.js — deliberately never inferred from an agency's base city, to keep it consistent with the content-integrity rules above. Preserve this rule if extending the feature.
- Cards and the detail page show a "🚌 Departs from: X" badge only when it differs from the destination city (`departBadgeHTML()` in app.js).
- Provider portal (`portal.js` → `secEditor()`) has a "Cities this tour departs from" checkbox group so real agencies can self-report cross-city routes. Backend column is `tours.departs_city_ids text[]` (schema.sql), mirrored by `scripts/seed.mjs`, and merged into the client catalog by `dbTourAdapt()` in app.js (falls back to `[city_id]` when empty).

## Working conventions
- **Testing-phase publishing (Max's standing instruction, July 19, 2026):** every change goes straight to `main` → live, immediately, without waiting for per-push confirmation. Max wants the live site to always reflect the latest state — no local-only mockups. Verify each change locally first (syntax, quick render), push, then confirm the deploy landed (version.txt bump). Revisit this convention when the site becomes presentable/production.
- Every user-visible string exists in `STR.en` and `STR.ar` in app.js (`data-i18n` for static HTML, `t()` in JS). Test both languages; AR flips to RTL.
- Data edits happen in `data.js` only; pages render from it.
- Netlify Forms in use: `booking-request`, `provider-application`, `contact` (static copies exist in HTML for detection — don't remove them).
- Commit style: descriptive message + `Co-Authored-By: Claude <model> <noreply@anthropic.com>`.

## Backend (built July 19, 2026 — see backend/README.md for the full runbook)
- **Stack (Max approved):** Supabase (Postgres + Auth + Storage + Edge Functions) + **PayPal Orders v2** (sandbox → live). Static site stays exactly as-is; backend activates when `assets/config.js` gets `SUPABASE_URL` + `SUPABASE_ANON_KEY` (anon key is publishable; RLS is the security boundary — never commit service keys/PayPal secret).
- **Files:** `backend/schema.sql` (15 tables + RLS + RPCs, money in integer cents, server-side price authority via `create_booking`), `assets/backend.js` (API layer, inert when unconfigured), `assets/pay.js` (PayPal buttons), `assets/account.js|booking.js|portal.js|admin.js` (traveler hub, guest booking manage page, real provider portal, admin panel), `supabase/functions/paypal-*` (order create/capture with amount verification), `scripts/seed.mjs` (mirrors data.js into DB, slug = static id).
- **Catalog merge:** app.js merges published DB tours/agencies into the static arrays at runtime (`mergeBackendCatalog`); static tours tagged `_dbId` book against their seeded DB row. New provider tours appear automatically. Old localStorage portal prototype still renders when backend is off.
- **Status:** all code pushed & dormant. Waiting on Max for: Supabase access token (or URL + anon key), then PayPal sandbox Client ID + Secret. Provisioning steps: backend/README.md.

## Roadmap (agreed with Max)
1. Real photography (licensed or provider-supplied) replacing SVG scenes.
2. Backend go-live: provision Supabase (see above), seed, make Max admin, deploy PayPal edge functions.
3. v1.1 backend: wishlist hearts on tour cards, photo uploads in portal (storage bucket ready), traveler↔provider messaging UI (tables ready), review collection emails.
4. Custom domain + email when Max buys them.
5. Netlify account note: the account's API access returns 403 (support ticket needed); deploys work fine via this Git integration regardless.
