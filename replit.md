# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Steadfast Accessibility Marketing Website (`artifacts/steadfast-site`)
- **Type**: React + Vite (static frontend)
- **Preview path**: `/` (root)
- **Purpose**: Marketing and lead-generation site for Steadfast Accessibility LLC
- **Pages**: Home, Services, About, Contact, Resources (with 3 articles), Accessibility Statement, 404
- **Tech**: React 19, wouter routing, Tailwind CSS, framer-motion, react-helmet-async for SEO
- **Contact form**: POSTs to `/api/contact` using generated `useSubmitContactForm` hook

### API Server (`artifacts/api-server`)
- **Type**: Express 5
- **Preview path**: `/api`
- **Routes**: `GET /api/healthz`, `POST /api/contact`
- **Contact form route**: Validates with Zod, stores to `contact_submissions` table in PostgreSQL

## Database

- **Provider**: Replit PostgreSQL (via DATABASE_URL secret)
- **ORM**: Drizzle
- **Schema**: `lib/db/src/schema/`
  - `contact_submissions` — stores inquiry form submissions (name, email, company, websiteUrl, budgetRange, timeline, message, createdAt)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
