<div align="center">
  <!-- Puedes reemplazar el src por un banner del proyecto real cuando lo tengas -->
  <img src="public/next.svg" alt="Next.js Logo" width="120" />
  
  <h1>✨ Cloudinary Images Gallery ✨</h1>
  <p><strong>A Cyberpunk / Neon Futuristic Image Management Platform</strong></p>
  
  [![Next.js 14](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Shadcn/UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
  [![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
  [![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
</div>

---

## 🚀 Vision Overview

This project is an advanced, highly-scalable image gallery built on the absolute edge of modern web technologies. 
Styled with a **Dark Anime / Neon Cyberpunk aesthetic**, it provides a visually immersive, premium experience for uploading, viewing, and managing images through Cloudinary, all authenticated seamlessly via Supabase SSR.

## 🏗️ Architecture & Tech Stack

Our architecture heavily relies on Next.js 14 features like the App Router, Server Actions, and Route Groups to achieve millimeter precision in state, performance, and layout management.

- **Framework**: Next.js 14 (App Router)
- **Design System**: Tailwind CSS v4 + Shadcn/UI (Radix Primitives)
- **Authentication**: `@supabase/ssr` (Server-Side Auth via secure cookies)
- **Database / Backend**: Supabase (PostgreSQL)
- **Storage / CDN**: Cloudinary
- **Package Manager**: Bun 🥟

---

## 🎨 Design System: "Neon Futures"

We've stepped away from the default white/blue layouts and fully embraced the shadows to deliver a *WOW factor*:
- **Background Base**: Deep Space (`#020817`)
- **Primary Highlights**: Cyan Neon (`#00f0ff`)
- **Accent Glow**: Emerald Neon (`#00ff8f`)
- **UI Paradigm**: Glassmorphism with neon border glows natively configured via Tailwind v4's `@theme` CSS-first directive.

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed locally on your machine for ultra-fast dependency resolution.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KEVIN-117/cloudinary-images-gallery.git
   cd cloudinary-images-gallery
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Environment Setup:**
   Create a `.env` (or `.env.local`) file in the root directory based on `.env.example` and add your secure keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   CLOUDINARY_URL=your_cloudinary_url
   ```

4. **Run the development server:**
   ```bash
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) to witness the gallery.

---

## 🗂️ Project Structure

- `src/app/(auth)/`: Route Group containing the login and register flows, insulated from global layouts.
- `src/app/dashboard/`: Protected gallery layout relying on Lazy Loading (`loading.tsx`) and Next.js Server Components.
- `src/components/ui/`: Centralized Shadcn primitives enhanced with our custom Neon CVA variants.
- `planning/`: Migration Tickets & Kanban Backlog ensuring long-term scalability and strict Definition of Done (DoD).

---

<div align="center">
  <i>Developed with architectural precision and uncompromising aesthetic intent.</i>
</div>
