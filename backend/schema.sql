-- ============================================================
-- TooIraq marketplace schema · Supabase (Postgres 15)
-- Roles: traveler · provider (agency member) · admin
-- Money: integer cents, USD. Times: UTC in DB, Asia/Baghdad in UI.
-- Run order: this file top-to-bottom in the Supabase SQL editor
-- (or via management API). Idempotent-ish: uses IF NOT EXISTS
-- where possible; safe to re-run on a fresh project.
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- enums ----------
do $$ begin
  create type user_role as enum ('traveler','provider','admin');
exception when duplicate_object then null; end $$;

do $$ begin
  create type agency_status as enum ('pending','approved','suspended');
exception when duplicate_object then null; end $$;

do $$ begin
  create type tour_status as enum ('draft','pending_review','published','paused','archived');
exception when duplicate_object then null; end $$;

do $$ begin
  create type cancel_policy as enum ('free48','free24','nonrefundable');
exception when duplicate_object then null; end $$;

do $$ begin
  create type booking_status as enum
    ('pending','confirmed','declined','cancelled_by_traveler','cancelled_by_agency','completed','no_show');
exception when duplicate_object then null; end $$;

do $$ begin
  create type payment_status as enum ('unpaid','paid','refunded','partially_refunded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type review_status as enum ('pending','approved','rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type application_status as enum ('new','reviewing','approved','rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type session_status as enum ('open','closed','cancelled');
exception when duplicate_object then null; end $$;

-- ---------- profiles (1:1 with auth.users) ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role user_role not null default 'traveler',
  full_name text,
  phone text,
  whatsapp text,
  email text,
  preferred_lang text not null default 'en' check (preferred_lang in ('en','ar')),
  country text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name',''))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- agencies ----------
create table if not exists public.agencies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status agency_status not null default 'pending',
  name jsonb not null default '{"en":"","ar":""}',          -- {en,ar}
  description jsonb not null default '{"en":"","ar":""}',
  base jsonb not null default '{"en":"","ar":""}',          -- home city label
  city_id text,                                             -- data.js CITIES id
  initials text,
  color text default 'art-teal',
  phone text, whatsapp text, website text, email text,
  socials jsonb not null default '{}',                      -- {instagram,tiktok,facebook}
  langs text[] not null default '{}',
  verified boolean not null default false,
  since int,
  license_no text,
  logo_url text,
  src_url text,                                             -- onboarding reference link
  pending_onboarding boolean not null default false,        -- mirrors data.js pending flag
  rating numeric(3,2),
  review_count int not null default 0,
  payout_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.agency_members (
  agency_id uuid not null references public.agencies(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  member_role text not null default 'owner' check (member_role in ('owner','manager','staff')),
  created_at timestamptz not null default now(),
  primary key (agency_id, profile_id)
);

create index if not exists idx_agency_members_profile on public.agency_members(profile_id);

-- helper: is caller a member of agency?
create or replace function public.is_agency_member(aid uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from agency_members m where m.agency_id = aid and m.profile_id = auth.uid());
$$;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from profiles p where p.id = auth.uid() and p.role = 'admin');
$$;

-- ---------- tours ----------
create table if not exists public.tours (
  id uuid primary key default gen_random_uuid(),
  agency_id uuid not null references public.agencies(id) on delete cascade,
  slug text unique,
  status tour_status not null default 'draft',
  title jsonb not null default '{"en":"","ar":""}',
  description jsonb not null default '{"en":"","ar":""}',
  city_id text not null,
  type_id text not null,
  days int not null default 1 check (days >= 1),
  hours int check (hours between 1 and 24),
  price_cents int not null default 0 check (price_cents >= 0),  -- 0 = price on request
  currency text not null default 'USD',
  group_max int check (group_max >= 1),
  langs text[] not null default '{}',
  cancel cancel_policy not null default 'free48',
  highlights jsonb not null default '{"en":[],"ar":[]}',
  itinerary jsonb not null default '[]',                    -- [{t:{en,ar}, d:{en,ar}}]
  meeting jsonb not null default '{"en":"","ar":""}',
  pickup boolean not null default false,
  images text[] not null default '{}',                      -- storage paths or img.js keys
  video_url text,
  src_url text,
  badge text check (badge in ('best','likely')),
  featured boolean not null default false,
  rating numeric(3,2),
  review_count int not null default 0,
  rejection_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_tours_agency on public.tours(agency_id);
create index if not exists idx_tours_status on public.tours(status);
create index if not exists idx_tours_city on public.tours(city_id);
create index if not exists idx_tours_type on public.tours(type_id);

-- ---------- sessions / availability ----------
create table if not exists public.tour_sessions (
  id uuid primary key default gen_random_uuid(),
  tour_id uuid not null references public.tours(id) on delete cascade,
  start_date date not null,
  start_time time,
  capacity int not null default 10 check (capacity >= 1),
  booked int not null default 0 check (booked >= 0),
  price_override_cents int check (price_override_cents >= 0),
  status session_status not null default 'open',
  created_at timestamptz not null default now(),
  unique (tour_id, start_date, start_time)
);

create index if not exists idx_sessions_tour_date on public.tour_sessions(tour_id, start_date);

-- ---------- bookings ----------
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  ref text unique not null,                                 -- human code e.g. TI-8F3K2Q
  tour_id uuid not null references public.tours(id),
  session_id uuid references public.tour_sessions(id),
  agency_id uuid not null references public.agencies(id),
  traveler_id uuid references public.profiles(id),          -- null = guest booking
  status booking_status not null default 'pending',
  tour_date date not null,
  pax_adults int not null default 1 check (pax_adults >= 0),
  pax_children int not null default 0 check (pax_children >= 0),
  unit_price_cents int not null default 0,
  total_cents int not null default 0,
  currency text not null default 'USD',
  payment payment_status not null default 'unpaid',
  payment_provider text not null default 'none' check (payment_provider in ('none','paypal')),
  paypal_order_id text,
  contact_name text not null,
  contact_whatsapp text not null,
  contact_email text,
  note text,
  locale text not null default 'en',
  manage_token uuid not null default gen_random_uuid(),     -- guest booking management
  timeline jsonb not null default '[]',                     -- [{at,ev,by}]
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (pax_adults + pax_children >= 1)
);

create index if not exists idx_bookings_agency on public.bookings(agency_id, status);
create index if not exists idx_bookings_traveler on public.bookings(traveler_id);
create index if not exists idx_bookings_tour on public.bookings(tour_id);

-- ---------- payments ledger ----------
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  provider text not null default 'paypal',
  provider_order_id text,
  provider_capture_id text,
  amount_cents int not null,
  currency text not null default 'USD',
  status text not null,                                     -- created|captured|refunded|failed
  raw jsonb,
  created_at timestamptz not null default now()
);

-- ---------- reviews ----------
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  tour_id uuid not null references public.tours(id) on delete cascade,
  agency_id uuid not null references public.agencies(id) on delete cascade,
  booking_id uuid references public.bookings(id),
  author_id uuid references public.profiles(id),
  author_name text not null,
  author_from jsonb default '{"en":"","ar":""}',
  rating int not null check (rating between 1 and 5),
  body text not null,
  lang text not null default 'en',
  status review_status not null default 'pending',
  reply_body text,
  reply_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_reviews_tour on public.reviews(tour_id, status);

-- keep cached rating counters fresh
create or replace function public.refresh_tour_rating()
returns trigger language plpgsql security definer set search_path = public as $$
declare tid uuid; aid uuid;
begin
  tid := coalesce(new.tour_id, old.tour_id);
  aid := coalesce(new.agency_id, old.agency_id);
  update tours t set
    rating = (select round(avg(rating)::numeric, 2) from reviews r where r.tour_id = t.id and r.status = 'approved'),
    review_count = (select count(*) from reviews r where r.tour_id = t.id and r.status = 'approved')
  where t.id = tid;
  update agencies a set
    rating = (select round(avg(r.rating)::numeric, 2) from reviews r where r.agency_id = a.id and r.status = 'approved'),
    review_count = (select count(*) from reviews r where r.agency_id = a.id and r.status = 'approved')
  where a.id = aid;
  return null;
end $$;

drop trigger if exists trg_reviews_rating on public.reviews;
create trigger trg_reviews_rating
  after insert or update or delete on public.reviews
  for each row execute function public.refresh_tour_rating();

-- ---------- wishlists ----------
create table if not exists public.wishlists (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  tour_id uuid not null references public.tours(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (profile_id, tour_id)
);

-- ---------- messaging (booking-scoped threads) ----------
create table if not exists public.threads (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references public.bookings(id) on delete cascade,
  traveler_id uuid references public.profiles(id),
  agency_id uuid not null references public.agencies(id),
  subject text,
  last_msg_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.threads(id) on delete cascade,
  sender_id uuid references public.profiles(id),
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_thread on public.messages(thread_id, created_at);

-- ---------- provider applications ----------
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  city text,
  whatsapp text not null,
  email text,
  services text,
  description text,
  status application_status not null default 'new',
  profile_id uuid references public.profiles(id),
  admin_note text,
  created_at timestamptz not null default now()
);

-- ---------- notifications ----------
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  kind text not null,
  payload jsonb not null default '{}',
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_notifications_profile on public.notifications(profile_id, read_at);

-- ---------- audit ----------
create table if not exists public.audit_log (
  id bigint generated always as identity primary key,
  actor_id uuid,
  action text not null,
  entity text not null,
  entity_id text,
  meta jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- ---------- settings ----------
create table if not exists public.settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

insert into public.settings (key, value) values
  ('iqd_display_rate', '{"usd_to_iqd": 1310}'),
  ('booking_hold_hours', '48')
on conflict (key) do nothing;

-- ============================================================
-- Row Level Security
-- ============================================================
alter table public.profiles enable row level security;
alter table public.agencies enable row level security;
alter table public.agency_members enable row level security;
alter table public.tours enable row level security;
alter table public.tour_sessions enable row level security;
alter table public.bookings enable row level security;
alter table public.payments enable row level security;
alter table public.reviews enable row level security;
alter table public.wishlists enable row level security;
alter table public.threads enable row level security;
alter table public.messages enable row level security;
alter table public.applications enable row level security;
alter table public.notifications enable row level security;
alter table public.audit_log enable row level security;
alter table public.settings enable row level security;

-- profiles
drop policy if exists "profiles self read" on public.profiles;
create policy "profiles self read" on public.profiles for select
  using (id = auth.uid() or public.is_admin());
drop policy if exists "profiles self update" on public.profiles;
create policy "profiles self update" on public.profiles for update
  using (id = auth.uid() or public.is_admin())
  with check (
    (id = auth.uid() and role = (select p.role from public.profiles p where p.id = auth.uid()))  -- can't self-elevate
    or public.is_admin()
  );

-- agencies
drop policy if exists "agencies public read" on public.agencies;
create policy "agencies public read" on public.agencies for select
  using (status = 'approved' or public.is_agency_member(id) or public.is_admin());
drop policy if exists "agencies member update" on public.agencies;
create policy "agencies member update" on public.agencies for update
  using (public.is_agency_member(id) or public.is_admin())
  with check (public.is_agency_member(id) or public.is_admin());
drop policy if exists "agencies admin insert" on public.agencies;
create policy "agencies admin insert" on public.agencies for insert
  with check (public.is_admin());
drop policy if exists "agencies admin delete" on public.agencies;
create policy "agencies admin delete" on public.agencies for delete
  using (public.is_admin());

-- agency_members
drop policy if exists "members read own" on public.agency_members;
create policy "members read own" on public.agency_members for select
  using (profile_id = auth.uid() or public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "members admin write" on public.agency_members;
create policy "members admin write" on public.agency_members for all
  using (public.is_admin()) with check (public.is_admin());

-- tours
drop policy if exists "tours public read" on public.tours;
create policy "tours public read" on public.tours for select
  using (status = 'published' or public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "tours member insert" on public.tours;
create policy "tours member insert" on public.tours for insert
  with check (
    (public.is_agency_member(agency_id) and status in ('draft','pending_review'))
    or public.is_admin()
  );
drop policy if exists "tours member update" on public.tours;
create policy "tours member update" on public.tours for update
  using (public.is_agency_member(agency_id) or public.is_admin())
  with check (
    public.is_admin()
    or (public.is_agency_member(agency_id) and status in ('draft','pending_review','paused','archived'))
    -- providers cannot set 'published' — admin approves
  );
drop policy if exists "tours admin delete" on public.tours;
create policy "tours admin delete" on public.tours for delete using (public.is_admin());

-- tour_sessions
drop policy if exists "sessions public read" on public.tour_sessions;
create policy "sessions public read" on public.tour_sessions for select
  using (
    exists (select 1 from public.tours t where t.id = tour_id
            and (t.status = 'published' or public.is_agency_member(t.agency_id) or public.is_admin()))
  );
drop policy if exists "sessions member write" on public.tour_sessions;
create policy "sessions member write" on public.tour_sessions for all
  using (
    exists (select 1 from public.tours t where t.id = tour_id
            and (public.is_agency_member(t.agency_id) or public.is_admin()))
  )
  with check (
    exists (select 1 from public.tours t where t.id = tour_id
            and (public.is_agency_member(t.agency_id) or public.is_admin()))
  );

-- bookings: inserts ONLY via create_booking() RPC (security definer)
drop policy if exists "bookings traveler read" on public.bookings;
create policy "bookings traveler read" on public.bookings for select
  using (traveler_id = auth.uid() or public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "bookings agency update" on public.bookings;
create policy "bookings agency update" on public.bookings for update
  using (public.is_agency_member(agency_id) or traveler_id = auth.uid() or public.is_admin())
  with check (public.is_agency_member(agency_id) or traveler_id = auth.uid() or public.is_admin());

-- payments
drop policy if exists "payments read" on public.payments;
create policy "payments read" on public.payments for select
  using (
    public.is_admin()
    or exists (select 1 from public.bookings b where b.id = booking_id
               and (b.traveler_id = auth.uid() or public.is_agency_member(b.agency_id)))
  );

-- reviews
drop policy if exists "reviews public read" on public.reviews;
create policy "reviews public read" on public.reviews for select
  using (status = 'approved' or author_id = auth.uid() or public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "reviews insert" on public.reviews;
create policy "reviews insert" on public.reviews for insert
  with check (status = 'pending');                          -- guests + users; always moderated
drop policy if exists "reviews reply" on public.reviews;
create policy "reviews reply" on public.reviews for update
  using (public.is_agency_member(agency_id) or public.is_admin())
  with check (public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "reviews admin delete" on public.reviews;
create policy "reviews admin delete" on public.reviews for delete using (public.is_admin());

-- wishlists
drop policy if exists "wishlists own" on public.wishlists;
create policy "wishlists own" on public.wishlists for all
  using (profile_id = auth.uid()) with check (profile_id = auth.uid());

-- threads + messages
drop policy if exists "threads own" on public.threads;
create policy "threads own" on public.threads for select
  using (traveler_id = auth.uid() or public.is_agency_member(agency_id) or public.is_admin());
drop policy if exists "threads insert" on public.threads;
create policy "threads insert" on public.threads for insert
  with check (traveler_id = auth.uid() or public.is_agency_member(agency_id));
drop policy if exists "messages in my threads" on public.messages;
create policy "messages in my threads" on public.messages for select
  using (exists (select 1 from public.threads th where th.id = thread_id
                 and (th.traveler_id = auth.uid() or public.is_agency_member(th.agency_id) or public.is_admin())));
drop policy if exists "messages send" on public.messages;
create policy "messages send" on public.messages for insert
  with check (
    sender_id = auth.uid()
    and exists (select 1 from public.threads th where th.id = thread_id
                and (th.traveler_id = auth.uid() or public.is_agency_member(th.agency_id)))
  );
drop policy if exists "messages mark read" on public.messages;
create policy "messages mark read" on public.messages for update
  using (exists (select 1 from public.threads th where th.id = thread_id
                 and (th.traveler_id = auth.uid() or public.is_agency_member(th.agency_id))))
  with check (true);

-- applications
drop policy if exists "applications public insert" on public.applications;
create policy "applications public insert" on public.applications for insert with check (true);
drop policy if exists "applications admin read" on public.applications;
create policy "applications admin read" on public.applications for select
  using (public.is_admin() or profile_id = auth.uid());
drop policy if exists "applications admin update" on public.applications;
create policy "applications admin update" on public.applications for update
  using (public.is_admin()) with check (public.is_admin());

-- notifications
drop policy if exists "notifications own" on public.notifications;
create policy "notifications own" on public.notifications for select using (profile_id = auth.uid());
drop policy if exists "notifications own update" on public.notifications;
create policy "notifications own update" on public.notifications for update
  using (profile_id = auth.uid()) with check (profile_id = auth.uid());

-- audit
drop policy if exists "audit admin read" on public.audit_log;
create policy "audit admin read" on public.audit_log for select using (public.is_admin());

-- settings
drop policy if exists "settings public read" on public.settings;
create policy "settings public read" on public.settings for select using (true);
drop policy if exists "settings admin write" on public.settings;
create policy "settings admin write" on public.settings for all
  using (public.is_admin()) with check (public.is_admin());

-- ============================================================
-- RPCs — server-side price authority
-- ============================================================

-- human booking ref
create or replace function public.gen_booking_ref()
returns text language sql volatile as $$
  select 'TI-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
$$;

-- Create a booking (guest or logged-in). Price is read server-side.
create or replace function public.create_booking(
  p_tour_id uuid,
  p_session_id uuid,
  p_tour_date date,
  p_pax_adults int,
  p_pax_children int,
  p_contact_name text,
  p_contact_whatsapp text,
  p_contact_email text,
  p_note text,
  p_locale text default 'en'
) returns jsonb
language plpgsql security definer set search_path = public as $$
declare
  v_tour tours%rowtype;
  v_sess tour_sessions%rowtype;
  v_unit int; v_total int; v_ref text;
  v_booking bookings%rowtype;
  v_pax int;
begin
  select * into v_tour from tours where id = p_tour_id and status = 'published';
  if not found then raise exception 'TOUR_NOT_AVAILABLE'; end if;

  v_pax := coalesce(p_pax_adults,0) + coalesce(p_pax_children,0);
  if v_pax < 1 then raise exception 'PAX_REQUIRED'; end if;
  if p_tour_date < current_date then raise exception 'DATE_PAST'; end if;
  if p_contact_name is null or length(trim(p_contact_name)) < 2 then raise exception 'NAME_REQUIRED'; end if;
  if p_contact_whatsapp is null or length(trim(p_contact_whatsapp)) < 6 then raise exception 'WHATSAPP_REQUIRED'; end if;

  v_unit := v_tour.price_cents;

  if p_session_id is not null then
    select * into v_sess from tour_sessions
      where id = p_session_id and tour_id = p_tour_id and status = 'open'
      for update;
    if not found then raise exception 'SESSION_NOT_AVAILABLE'; end if;
    if v_sess.booked + v_pax > v_sess.capacity then raise exception 'SESSION_FULL'; end if;
    v_unit := coalesce(v_sess.price_override_cents, v_unit);
    update tour_sessions set booked = booked + v_pax where id = v_sess.id;
  end if;

  v_total := v_unit * v_pax;
  v_ref := gen_booking_ref();

  insert into bookings
    (ref, tour_id, session_id, agency_id, traveler_id, tour_date,
     pax_adults, pax_children, unit_price_cents, total_cents,
     contact_name, contact_whatsapp, contact_email, note, locale, timeline)
  values
    (v_ref, p_tour_id, p_session_id, v_tour.agency_id, auth.uid(), p_tour_date,
     coalesce(p_pax_adults,0), coalesce(p_pax_children,0), v_unit, v_total,
     trim(p_contact_name), trim(p_contact_whatsapp), nullif(trim(coalesce(p_contact_email,'')),''),
     nullif(trim(coalesce(p_note,'')),''), p_locale,
     jsonb_build_array(jsonb_build_object('at', now(), 'ev', 'created', 'by', 'traveler')))
  returning * into v_booking;

  insert into audit_log (actor_id, action, entity, entity_id, meta)
  values (auth.uid(), 'booking.create', 'booking', v_booking.id::text,
          jsonb_build_object('ref', v_ref, 'total_cents', v_total));

  return jsonb_build_object(
    'id', v_booking.id, 'ref', v_booking.ref, 'manage_token', v_booking.manage_token,
    'status', v_booking.status, 'total_cents', v_booking.total_cents,
    'unit_price_cents', v_booking.unit_price_cents, 'currency', v_booking.currency);
end $$;

-- Guest booking lookup (ref + whatsapp OR manage token)
create or replace function public.lookup_booking(p_ref text, p_token uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v bookings%rowtype; t tours%rowtype; a agencies%rowtype;
begin
  select * into v from bookings where ref = upper(trim(p_ref)) and manage_token = p_token;
  if not found then return null; end if;
  select * into t from tours where id = v.tour_id;
  select * into a from agencies where id = v.agency_id;
  return jsonb_build_object(
    'ref', v.ref, 'status', v.status, 'payment', v.payment, 'tour_date', v.tour_date,
    'pax_adults', v.pax_adults, 'pax_children', v.pax_children,
    'total_cents', v.total_cents, 'currency', v.currency,
    'contact_name', v.contact_name, 'created_at', v.created_at,
    'tour', jsonb_build_object('id', t.id, 'title', t.title, 'city_id', t.city_id),
    'agency', jsonb_build_object('name', a.name, 'whatsapp', a.whatsapp, 'phone', a.phone));
end $$;

-- Guest cancel via manage token
create or replace function public.cancel_booking_guest(p_ref text, p_token uuid)
returns boolean language plpgsql security definer set search_path = public as $$
declare v bookings%rowtype; v_pax int;
begin
  select * into v from bookings
    where ref = upper(trim(p_ref)) and manage_token = p_token
      and status in ('pending','confirmed')
    for update;
  if not found then return false; end if;
  update bookings set
    status = 'cancelled_by_traveler', updated_at = now(),
    timeline = timeline || jsonb_build_object('at', now(), 'ev', 'cancelled_by_traveler', 'by', 'guest')
  where id = v.id;
  if v.session_id is not null then
    v_pax := v.pax_adults + v.pax_children;
    update tour_sessions set booked = greatest(0, booked - v_pax) where id = v.session_id;
  end if;
  return true;
end $$;

-- Agency/traveler status transition with timeline + seat release
create or replace function public.set_booking_status(p_booking_id uuid, p_status booking_status)
returns boolean language plpgsql security definer set search_path = public as $$
declare v bookings%rowtype; v_pax int; allowed boolean := false; actor text;
begin
  select * into v from bookings where id = p_booking_id for update;
  if not found then return false; end if;

  if public.is_admin() then
    allowed := true; actor := 'admin';
  elsif public.is_agency_member(v.agency_id) then
    allowed := p_status in ('confirmed','declined','cancelled_by_agency','completed','no_show')
               and v.status in ('pending','confirmed');
    actor := 'agency';
  elsif v.traveler_id = auth.uid() then
    allowed := p_status = 'cancelled_by_traveler' and v.status in ('pending','confirmed');
    actor := 'traveler';
  end if;
  if not allowed then raise exception 'NOT_ALLOWED'; end if;

  update bookings set
    status = p_status, updated_at = now(),
    timeline = timeline || jsonb_build_object('at', now(), 'ev', p_status::text, 'by', actor)
  where id = v.id;

  if p_status in ('declined','cancelled_by_traveler','cancelled_by_agency') and v.session_id is not null then
    v_pax := v.pax_adults + v.pax_children;
    update tour_sessions set booked = greatest(0, booked - v_pax) where id = v.session_id;
  end if;

  insert into audit_log (actor_id, action, entity, entity_id, meta)
  values (auth.uid(), 'booking.status', 'booking', v.id::text,
          jsonb_build_object('to', p_status::text, 'by', actor));
  return true;
end $$;

-- Provider onboarding: approve application → create agency + membership (admin only)
create or replace function public.approve_application(p_app_id uuid, p_slug text)
returns uuid language plpgsql security definer set search_path = public as $$
declare app applications%rowtype; aid uuid;
begin
  if not public.is_admin() then raise exception 'NOT_ALLOWED'; end if;
  select * into app from applications where id = p_app_id for update;
  if not found then raise exception 'NOT_FOUND'; end if;

  insert into agencies (slug, status, name, base, whatsapp, email, description, initials)
  values (
    p_slug, 'approved',
    jsonb_build_object('en', app.business_name, 'ar', app.business_name),
    jsonb_build_object('en', coalesce(app.city,''), 'ar', coalesce(app.city,'')),
    app.whatsapp, app.email,
    jsonb_build_object('en', coalesce(app.description,''), 'ar', ''),
    upper(substr(app.business_name, 1, 2)))
  returning id into aid;

  if app.profile_id is not null then
    insert into agency_members (agency_id, profile_id, member_role)
    values (aid, app.profile_id, 'owner') on conflict do nothing;
    update profiles set role = 'provider' where id = app.profile_id and role = 'traveler';
  end if;

  update applications set status = 'approved' where id = p_app_id;
  insert into audit_log (actor_id, action, entity, entity_id)
  values (auth.uid(), 'application.approve', 'agency', aid::text);
  return aid;
end $$;

-- Link a signed-up provider to their approved application by email (self-service claim)
create or replace function public.claim_application(p_email text)
returns uuid language plpgsql security definer set search_path = public as $$
declare app applications%rowtype;
begin
  select * into app from applications
    where lower(email) = lower(trim(p_email)) and profile_id is null
    order by created_at desc limit 1;
  if not found then return null; end if;
  update applications set profile_id = auth.uid() where id = app.id;
  return app.id;
end $$;

-- ============================================================
-- Storage: public bucket for tour/agency media
-- (run after schema; bucket policies)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "media public read" on storage.objects;
create policy "media public read" on storage.objects for select
  using (bucket_id = 'media');
drop policy if exists "media member write" on storage.objects;
create policy "media member write" on storage.objects for insert
  with check (bucket_id = 'media' and auth.uid() is not null);
drop policy if exists "media owner update" on storage.objects;
create policy "media owner update" on storage.objects for update
  using (bucket_id = 'media' and (owner = auth.uid() or public.is_admin()));
drop policy if exists "media owner delete" on storage.objects;
create policy "media owner delete" on storage.objects for delete
  using (bucket_id = 'media' and (owner = auth.uid() or public.is_admin()));
