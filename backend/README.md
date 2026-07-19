# TooIraq backend — provisioning runbook

Architecture: static site (this repo, Netlify) + **Supabase** (Postgres + Auth +
Storage + Edge Functions) + **PayPal** Orders v2 for online payment. The anon
key ships in `assets/config.js` (safe — Row Level Security enforces access);
secrets live only in Supabase.

## 1. Create the Supabase project
supabase.com → New project (region: Frankfurt/Singapore). Then either give the
access token (`sbp_…`, from Account → Access Tokens) to Claude to do the rest,
or continue manually:

## 2. Apply the schema
SQL editor → paste `backend/schema.sql` → Run. Idempotent on a fresh project.

## 3. Configure auth
Authentication → Providers → Email: enable. URL config → Site URL:
`https://tooiraq.netlify.app`, redirect URLs: same + `/account.html`.

## 4. Fill the client config
`assets/config.js` → set `SUPABASE_URL` and `SUPABASE_ANON_KEY`
(Settings → API). Push to main → everything lights up.

## 5. Seed the existing catalog
```
cd repo && npm i @supabase/supabase-js
SUPABASE_URL=… SUPABASE_SERVICE_ROLE_KEY=… node scripts/seed.mjs
```
Mirrors data.js agencies/tours into the DB (slug = static id) so bookings
attach to real rows. Sample ratings keep rendering from data.js.

## 6. Make Max admin
Sign up once via /account.html, then SQL:
`update profiles set role='admin' where email='info@kad3d.com.au';`

## 7. PayPal (sandbox first)
developer.paypal.com → app → sandbox Client ID + Secret.
- `assets/config.js`: `PAYPAL_CLIENT_ID` (public), `PAYPAL_ENV: "sandbox"`
- Supabase → Edge Functions → deploy `paypal-create-order` + `paypal-capture`
  from `supabase/functions/` (CLI: `supabase functions deploy paypal-create-order --no-verify-jwt=false`)
- Secrets: `supabase secrets set PAYPAL_CLIENT_ID=… PAYPAL_SECRET=… PAYPAL_ENV=sandbox`
Go live later by swapping live credentials + `PAYPAL_ENV=live`.

## Security invariants (do not break)
- Prices are computed **server-side** (`create_booking` RPC + edge functions
  verify PayPal capture amounts). Clients never set money fields.
- Providers can never self-publish (`tours` RLS blocks `published`) — admin
  approves. Reviews always insert as `pending`.
- Service role key / PayPal secret never enter this repo or client code.

## Roles covered (Booking.com / Viator / Tripadvisor parity)
Traveler: account, guest or signed-in booking with live price, pay online or
on arrival, manage/cancel via link, wishlist, moderated reviews.
Provider: bilingual listing wizard, availability/capacity, bookings inbox
(confirm/decline/complete/no-show), review replies, earnings, profile.
Admin (Max): application approvals, agency verify/suspend, tour publish,
review moderation, all bookings, settings, audit log.
Deferred (schema-ready): traveler↔provider messaging UI (threads/messages
tables exist), file uploads for tour photos (URL input for now), automated
payouts, coupons.
