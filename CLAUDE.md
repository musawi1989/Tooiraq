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
All WhatsApp chat/booking buttons route to ONE central number via `WA_NUMBER` in app.js (currently +964 774 014 2909 — Max's number, set via a Netlify Agent Runner edit). Inquiries reach Max, who coordinates with providers during onboarding. Buttons still only show where an agency has `wa` set (sample agencies); real pending agencies show their source link instead.

## Working conventions
- Every user-visible string exists in `STR.en` and `STR.ar` in app.js (`data-i18n` for static HTML, `t()` in JS). Test both languages; AR flips to RTL.
- Data edits happen in `data.js` only; pages render from it.
- Netlify Forms in use: `booking-request`, `provider-application`, `contact` (static copies exist in HTML for detection — don't remove them).
- Commit style: descriptive message + `Co-Authored-By: Claude <model> <noreply@anthropic.com>`.

## Roadmap (agreed with Max)
1. Real photography (licensed or provider-supplied) replacing SVG scenes.
2. Real backend: provider accounts + database + admin panel for Max (approve agencies, manage listings, see bookings). Candidates: Netlify DB/Auth/Functions or Supabase.
3. Custom domain + email when Max buys them.
4. Netlify account note: the account's API access returns 403 (support ticket needed); deploys work fine via this Git integration regardless.
