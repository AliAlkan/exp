create extension if not exists pgcrypto;

create table if not exists public.icy_sphere_scores (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  score integer not null,
  created_at timestamptz not null default timezone('utc', now()),
  constraint icy_sphere_scores_name_check check (
    char_length(name) between 1 and 16
    and name ~ '^[A-Za-z0-9 _.\-]+$'
  ),
  constraint icy_sphere_scores_score_check check (
    score between 0 and 1000000
  )
);

create index if not exists icy_sphere_scores_rank_idx
  on public.icy_sphere_scores (score desc, created_at asc);

alter table public.icy_sphere_scores enable row level security;

drop policy if exists "Public read scores" on public.icy_sphere_scores;
create policy "Public read scores"
  on public.icy_sphere_scores
  for select
  to anon
  using (true);

drop policy if exists "Public insert scores" on public.icy_sphere_scores;
create policy "Public insert scores"
  on public.icy_sphere_scores
  for insert
  to anon
  with check (true);

grant select, insert on public.icy_sphere_scores to anon;
