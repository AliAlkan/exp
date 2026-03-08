# ICY SPHERE Leaderboard Setup

This page supports a shared leaderboard through Supabase.

## 1. Create the table and policies

In Supabase SQL editor, run:

- `icy-sphere/supabase-schema.sql`

## 2. Set public client config

Edit:

- `icy-sphere/leaderboard-config.js`

Set:

- `supabaseUrl`
- `supabaseAnonKey`

The anon key is public and safe for browser use.

## 3. Deploy

Push to `main`. GitHub Pages publishes `icy-sphere/` at:

- `https://alialkan.github.io/exp/icy-sphere/`
