# Graph Report - .  (2026-08-07)

## Corpus Check
- 70 files · ~59,030 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 48 nodes · 8 edges · 40 communities (3 shown, 37 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dark Anime Character
- Next.js & Vercel Ecosystem
- Fonts & App Layout
- Next.js Logo
- Vercel Logo
- Auth Callback API
- Auth Layout
- Auth Login Page
- Auth Login
- Auth Registration Page
- Dashboard UI
- App Icon
- Root Layout Component
- Home Page
- Abort Alert UI
- Success Alert UI
- Facebook Icon
- Twitter Icon
- YouTube Icon
- Logout Icon
- Upload Icon
- Auth Button UI
- Login Form Component
- Register Form Component
- Auth Main Layout
- Footer Component
- Navbar Container
- Image Skeleton Loaders
- Button UI Props
- Input UI Props
- Image Uploader Component
- Supabase Context Provider
- Tailwind Utils
- Image Definitions
- Response Definitions
- Supabase Definitions
- Image Downloader Util
- Blur Placeholder Util
- Cloudinary Loader
- Element Boundary Observer

## God Nodes (most connected - your core abstractions)
1. `Dark Anime Character` - 3 edges
2. `Next.js` - 2 edges
3. `next/font` - 2 edges
4. `Dark Anime Illustration` - 2 edges
5. `create-next-app` - 1 edges
6. `app/MusicHome.tsx` - 1 edges
7. `Inter Google Font` - 1 edges
8. `Vercel Platform` - 1 edges
9. `Fanged Mask` - 1 edges
10. `Demon Horns` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Next.js Ecosystem Tools** — readme_next_js, readme_create_next_app, readme_vercel_platform, readme_next_font [INFERRED 0.75]
- **Character Design Elements** — public_arch_dark_anime_character, public_arch_fanged_mask, public_arch_demon_horns [INFERRED 0.95]

## Communities (40 total, 37 thin omitted)

### Community 0 - "Dark Anime Character"
Cohesion: 0.40
Nodes (5): Dark Anime Character, Demon Horns, Fanged Mask, Dark Anime Illustration, Red Sun Background

### Community 1 - "Next.js & Vercel Ecosystem"
Cohesion: 0.67
Nodes (3): create-next-app, Next.js, Vercel Platform

### Community 2 - "Fonts & App Layout"
Cohesion: 0.67
Nodes (3): Inter Google Font, app/MusicHome.tsx, next/font

## Knowledge Gaps
- **44 isolated node(s):** `GET`, `layout`, `LoginPage`, `Login`, `register` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **37 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `GET`, `layout`, `LoginPage` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._