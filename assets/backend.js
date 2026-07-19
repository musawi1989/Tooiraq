/* ============================================================
   TooIraq backend layer — Supabase client wrapper.
   Loads @supabase/supabase-js from CDN only when configured.
   Every function is safe to call with backend off (returns null).
   ============================================================ */
window.TI_BACKEND = (function () {
  "use strict";
  const cfg = window.TOOIRAQ_CONFIG || {};
  const enabled = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY);
  let sb = null;
  let loading = null;

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  async function client() {
    if (!enabled) return null;
    if (sb) return sb;
    if (!loading) {
      loading = loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js")
        .then(() => {
          sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);
          return sb;
        });
    }
    return loading;
  }

  /* ---------- auth ---------- */
  async function signUp(email, password, fullName) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    return c.auth.signUp({ email, password, options: { data: { full_name: fullName || "" } } });
  }
  async function signIn(email, password) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    return c.auth.signInWithPassword({ email, password });
  }
  async function signInOtp(email) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    return c.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin + "/account.html" } });
  }
  async function signOut() { const c = await client(); if (c) await c.auth.signOut(); }
  async function getUser() {
    const c = await client(); if (!c) return null;
    const { data } = await c.auth.getUser();
    return (data && data.user) || null;
  }
  async function getSession() {
    const c = await client(); if (!c) return null;
    const { data } = await c.auth.getSession();
    return (data && data.session) || null;
  }
  async function getProfile() {
    const c = await client(); if (!c) return null;
    const u = await getUser(); if (!u) return null;
    const { data } = await c.from("profiles").select("*").eq("id", u.id).maybeSingle();
    return data;
  }
  async function updateProfile(patch) {
    const c = await client(); const u = await getUser(); if (!c || !u) return null;
    const { data, error } = await c.from("profiles").update(patch).eq("id", u.id).select().maybeSingle();
    return error ? null : data;
  }

  /* ---------- public data ---------- */
  async function publishedTours() {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("tours")
      .select("*, agencies(id, slug, name, whatsapp, verified, rating, review_count, initials, since)")
      .eq("status", "published").order("created_at", { ascending: false });
    return data || [];
  }
  async function tourSessions(tourId, fromDate) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("tour_sessions").select("*")
      .eq("tour_id", tourId).eq("status", "open")
      .gte("start_date", fromDate || new Date().toISOString().slice(0, 10))
      .order("start_date").limit(60);
    return data || [];
  }
  async function approvedReviews(tourId) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("reviews").select("*")
      .eq("tour_id", tourId).eq("status", "approved")
      .order("created_at", { ascending: false }).limit(30);
    return data || [];
  }
  async function submitReview(fields) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    return c.from("reviews").insert(Object.assign({ status: "pending" }, fields));
  }
  async function submitApplication(fields) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    return c.from("applications").insert(fields);
  }

  /* ---------- bookings ---------- */
  async function createBooking(p) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    const { data, error } = await c.rpc("create_booking", {
      p_tour_id: p.tourId, p_session_id: p.sessionId || null, p_tour_date: p.date,
      p_pax_adults: p.adults, p_pax_children: p.children || 0,
      p_contact_name: p.name, p_contact_whatsapp: p.whatsapp,
      p_contact_email: p.email || null, p_note: p.note || null, p_locale: p.locale || "en"
    });
    return { data, error };
  }
  async function lookupBooking(ref, token) {
    const c = await client(); if (!c) return null;
    const { data } = await c.rpc("lookup_booking", { p_ref: ref, p_token: token });
    return data;
  }
  async function cancelBookingGuest(ref, token) {
    const c = await client(); if (!c) return false;
    const { data } = await c.rpc("cancel_booking_guest", { p_ref: ref, p_token: token });
    return !!data;
  }
  async function myBookings() {
    const c = await client(); if (!c) return [];
    const u = await getUser(); if (!u) return [];
    const { data } = await c.from("bookings")
      .select("*, tours(title, city_id, images), agencies(name, whatsapp)")
      .eq("traveler_id", u.id).order("created_at", { ascending: false });
    return data || [];
  }
  async function setBookingStatus(bookingId, status) {
    const c = await client(); if (!c) return false;
    const { data, error } = await c.rpc("set_booking_status", { p_booking_id: bookingId, p_status: status });
    return !error && !!data;
  }

  /* ---------- wishlist ---------- */
  async function myWishlist() {
    const c = await client(); const u = await getUser(); if (!c || !u) return [];
    const { data } = await c.from("wishlists").select("tour_id, tours(*)").eq("profile_id", u.id);
    return data || [];
  }
  async function toggleWishlist(tourId) {
    const c = await client(); const u = await getUser(); if (!c || !u) return null;
    const { data } = await c.from("wishlists").select("tour_id").eq("profile_id", u.id).eq("tour_id", tourId).maybeSingle();
    if (data) { await c.from("wishlists").delete().eq("profile_id", u.id).eq("tour_id", tourId); return false; }
    await c.from("wishlists").insert({ profile_id: u.id, tour_id: tourId }); return true;
  }

  /* ---------- provider ---------- */
  async function myAgencies() {
    const c = await client(); const u = await getUser(); if (!c || !u) return [];
    const { data } = await c.from("agency_members").select("member_role, agencies(*)").eq("profile_id", u.id);
    return (data || []).map((r) => Object.assign({ member_role: r.member_role }, r.agencies));
  }
  async function agencyTours(agencyId) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("tours").select("*").eq("agency_id", agencyId).order("created_at", { ascending: false });
    return data || [];
  }
  async function saveTour(tour) {
    const c = await client(); if (!c) return { error: { message: "backend off" } };
    if (tour.id) {
      const id = tour.id; const patch = Object.assign({}, tour); delete patch.id;
      patch.updated_at = new Date().toISOString();
      return c.from("tours").update(patch).eq("id", id).select().maybeSingle();
    }
    return c.from("tours").insert(tour).select().maybeSingle();
  }
  async function agencyBookings(agencyId) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("bookings")
      .select("*, tours(title)").eq("agency_id", agencyId)
      .order("created_at", { ascending: false }).limit(200);
    return data || [];
  }
  async function agencyReviews(agencyId) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("reviews").select("*, tours(title)")
      .eq("agency_id", agencyId).order("created_at", { ascending: false }).limit(100);
    return data || [];
  }
  async function replyReview(reviewId, body) {
    const c = await client(); if (!c) return null;
    return c.from("reviews").update({ reply_body: body, reply_at: new Date().toISOString() }).eq("id", reviewId);
  }
  async function saveSessions(tourId, rows) {
    const c = await client(); if (!c) return null;
    return c.from("tour_sessions").upsert(rows.map((r) => Object.assign({ tour_id: tourId }, r)), { onConflict: "tour_id,start_date,start_time" });
  }
  async function deleteSession(id) {
    const c = await client(); if (!c) return null;
    return c.from("tour_sessions").delete().eq("id", id);
  }
  async function listSessions(tourId) {
    const c = await client(); if (!c) return [];
    const { data } = await c.from("tour_sessions").select("*").eq("tour_id", tourId).order("start_date");
    return data || [];
  }
  async function updateAgency(agencyId, patch) {
    const c = await client(); if (!c) return null;
    patch.updated_at = new Date().toISOString();
    return c.from("agencies").update(patch).eq("id", agencyId);
  }
  async function uploadMedia(file, pathPrefix) {
    const c = await client(); if (!c) return null;
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const path = (pathPrefix || "misc") + "/" + Date.now() + "-" + Math.random().toString(36).slice(2, 8) + "." + ext;
    const { error } = await c.storage.from("media").upload(path, file, { upsert: false });
    if (error) return null;
    const { data } = c.storage.from("media").getPublicUrl(path);
    return data ? data.publicUrl : null;
  }
  async function claimApplication(email) {
    const c = await client(); if (!c) return null;
    const { data } = await c.rpc("claim_application", { p_email: email });
    return data;
  }

  /* ---------- admin ---------- */
  async function adminList(table, opts) {
    const c = await client(); if (!c) return [];
    let q = c.from(table).select((opts && opts.select) || "*").order((opts && opts.order) || "created_at", { ascending: false }).limit((opts && opts.limit) || 200);
    if (opts && opts.eq) for (const k in opts.eq) q = q.eq(k, opts.eq[k]);
    const { data } = await q;
    return data || [];
  }
  async function adminUpdate(table, id, patch) {
    const c = await client(); if (!c) return null;
    return c.from(table).update(patch).eq("id", id);
  }
  async function approveApplication(appId, slug) {
    const c = await client(); if (!c) return null;
    return c.rpc("approve_application", { p_app_id: appId, p_slug: slug });
  }
  async function getSetting(key) {
    const c = await client(); if (!c) return null;
    const { data } = await c.from("settings").select("value").eq("key", key).maybeSingle();
    return data ? data.value : null;
  }
  async function setSetting(key, value) {
    const c = await client(); if (!c) return null;
    return c.from("settings").upsert({ key, value, updated_at: new Date().toISOString() });
  }

  /* ---------- payments (edge functions) ---------- */
  async function paypalCreateOrder(ref, token) {
    const c = await client(); if (!c) return null;
    const { data, error } = await c.functions.invoke("paypal-create-order", { body: { ref, token } });
    return error ? null : data;
  }
  async function paypalCapture(ref, token, orderId) {
    const c = await client(); if (!c) return null;
    const { data, error } = await c.functions.invoke("paypal-capture", { body: { ref, token, orderId } });
    return error ? null : data;
  }

  return {
    enabled, client,
    signUp, signIn, signInOtp, signOut, getUser, getSession, getProfile, updateProfile,
    publishedTours, tourSessions, approvedReviews, submitReview, submitApplication,
    createBooking, lookupBooking, cancelBookingGuest, myBookings, setBookingStatus,
    myWishlist, toggleWishlist,
    myAgencies, agencyTours, saveTour, agencyBookings, agencyReviews, replyReview,
    saveSessions, deleteSession, listSessions, updateAgency, uploadMedia, claimApplication,
    adminList, adminUpdate, approveApplication, getSetting, setSetting,
    paypalCreateOrder, paypalCapture
  };
})();
