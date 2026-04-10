# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## BridgeUp App (`artifacts/bridgeup`)

Full-stack web application connecting HSG (University of St. Gallen) business students with ETH Zurich technical students for verified cross-disciplinary competition records.

**Design system:** White background, #E4002B red accent, Playfair Display headings, Inter body.

**Tech stack:** React + Vite, wouter (routing), react-hook-form + zod (forms), Tailwind CSS + custom CSS variables.

**Pages:**
- `/` — LandingPage (hero with canvas grid, marquee, stats bar, competitions preview, split CTA)
- `/how-it-works` — HowItWorksPage
- `/competitions` — CompetitionsPage (filterable list)
- `/competitions/:id` — CompetitionDetailPage
- `/for-students` — ForStudentsPage
- `/for-sponsors` — ForSponsorsPage (with express-interest form; `// TODO: integrate EmailJS`)
- `/join/student` — JoinStudentPage (institutional email validation: @student.unisg.ch | @student.ethz.ch; `// TODO: integrate Firebase Auth`)
- `/join/sponsor` — JoinSponsorPage (`// TODO: integrate EmailJS`)
- `/login` — LoginPage (`// TODO: integrate Firebase Auth`)
- `/dashboard` — DashboardPage (student view with sidebar, profile card, entries, timeline)
- `/dashboard/enter` — DashboardEnterPage (4-step wizard: competition → team → details → review)
- `/students` — StudentsPage (sponsor-facing student directory with search/filter)
- `/sponsor` — SponsorDashboardPage
- `/admin` — AdminPage (student approval, competition & sponsor management)

**Data:** Seed data in `src/data/seed.ts` (3 competitions, 12 students, 2 teams).

**DemoRoleSwitcher:** Floating button for demo purposes to switch between student/sponsor/admin views.

**Firebase & EmailJS:** Deferred — `// TODO` comments placed at all integration points.

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

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
