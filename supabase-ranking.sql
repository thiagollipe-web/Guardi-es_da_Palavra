-- Léxico — classificação online
-- Execute no Supabase SQL Editor.
-- Este esquema armazena apenas dados de classificação pública.
create extension if not exists pgcrypto;

create table if not exists public.lexico_ranking (
  id uuid primary key default gen_random_uuid(),
  client_id text not null unique,
  apelido varchar(18) not null,
  ano smallint not null check (ano between 6 and 9),
  pontuacao integer not null check (pontuacao between 0 and 999999),
  acertos smallint not null check (acertos between 0 and 10000),
  erros smallint not null check (erros between 0 and 10000),
  missoes smallint not null check (missoes between 0 and 12),
  selos smallint not null check (selos between 0 and 4),
  hp smallint not null check (hp between 0 and 100),
  finalizado boolean not null default false,
  criado_em timestamptz not null default now()
);

create index if not exists lexico_ranking_score_idx
  on public.lexico_ranking (pontuacao desc, criado_em asc);

create index if not exists lexico_ranking_ano_score_idx
  on public.lexico_ranking (ano, pontuacao desc, criado_em asc);

alter table public.lexico_ranking enable row level security;

drop policy if exists "Léxico ranking - leitura pública" on public.lexico_ranking;
create policy "Léxico ranking - leitura pública"
  on public.lexico_ranking for select to anon, authenticated using (true);

drop policy if exists "Léxico ranking - envio público validado" on public.lexico_ranking;
create policy "Léxico ranking - envio público validado"
  on public.lexico_ranking for insert to anon, authenticated
  with check (
    char_length(trim(apelido)) between 1 and 18
    and ano between 6 and 9
    and pontuacao between 0 and 999999
    and acertos between 0 and 10000
    and erros between 0 and 10000
    and missoes between 0 and 12
    and selos between 0 and 4
    and hp between 0 and 100
  );

revoke update, delete on table public.lexico_ranking from anon, authenticated;
grant select, insert on table public.lexico_ranking to anon, authenticated;
