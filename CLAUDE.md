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
- `provider.html` — provider portal **prototype** (fake login, localStorage only; real backend is a planned phase)
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
