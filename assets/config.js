/* ============================================================
   TooIraq runtime config.
   SUPABASE_ANON_KEY is a *publishable* key (safe in client code —
   security is enforced by Row Level Security in the database).
   NEVER put the service_role key, PayPal secret, or any private
   token in this file.
   Empty values = backend features stay hidden; static site works
   exactly as before.
   ============================================================ */
window.TOOIRAQ_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_ANON_KEY: "",
  PAYPAL_CLIENT_ID: "",          // sandbox or live client id (public)
  PAYPAL_ENV: "sandbox"          // "sandbox" | "live"
};
