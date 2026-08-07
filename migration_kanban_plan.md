# Plan de Migración Arquitectónica - Next.js 14 (Kanban)

Este documento detalla el plan de migración para la refactorización arquitectónica de la galería de imágenes (Next.js 14), aplicando un enfoque de sistemas de diseño (Design Systems), patrones de escalabilidad (App Router best practices) y resolución de deuda técnica evidenciada por el reporte de Graphify (44 nodos aislados, como `GET`, `layout`, `LoginPage`).

La gestión del flujo de trabajo está basada en la metodología **Kanban** y sus políticas de límite de Trabajo en Curso (WIP).

---

## 📋 Tablero Kanban - Backlog Priorizado

Las siguientes tareas se encuentran en la columna **Backlog** y están listas para pasar a **Selected** conforme el límite de WIP lo permita (WIP Máximo por desarrollador en curso: 3).

### 1. Sistema de Diseño y Componentes UI (Design System)

```markdown
### [MIG-FRONT-01] Refactorización del Design System con Shadcn/UI y Tailwind CSS
- **Contexto**: Frontend / Visualización y Arquitectura UI
- **Descripción**: 
  Actualmente existen componentes aislados (`Button UI Props`, `Input UI Props`). Se requiere estandarizar el sistema de diseño migrando a una base sólida con [Shadcn UI](https://ui.shadcn.com/) sobre Tailwind CSS. Esto garantiza coherencia visual, accesibilidad (a11y) y mantenibilidad a largo plazo sin abultar el bundle size.
  
  **Pasos:**
  1. Inicializar `components.json` vía `npx shadcn-ui@latest init`.
  2. Reemplazar los componentes `src/components/ui/button` y `src/components/ui/input` por las versiones optimizadas de Shadcn con Radix UI.
  3. Integrar la utilidad `cn` (clsx + tailwind-merge) que ya está en `src/lib/utils_cn` para manejar colisiones de clases en los nuevos componentes.
  
  **Recursos:**
  - [Next.js Tailwind CSS Guide](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
  - [Shadcn UI Installation](https://ui.shadcn.com/docs/installation/next)
- **Definición de Done (DoD)**:
  - [ ] Shadcn UI inicializado y configurado correctamente con el tema actual (Dark Anime).
  - [ ] Componentes Button e Input migrados y utilizando `cva` (class-variance-authority).
  - [ ] Ninguna regresión visual en la página de inicio o formularios de Auth.
- **Esfuerzo Estimado**: 5 Puntos de Historia (13 Horas)
```

### 2. Optimización del Enrutamiento y Layouts

```markdown
### [MIG-FRONT-02] Reestructuración del App Router y Layouts Globales
- **Contexto**: Frontend / Arquitectura de Navegación
- **Descripción**: 
  El análisis de Graphify reportó nodos desconectados como `layout`, `Root Layout Component` y `Auth Layout`. En Next.js 14, los Layouts deben anidarse correctamente y compartir estado global de UI.
  
  **Pasos:**
  1. Revisar `src/app/layout` para asegurar la inyección correcta de Metadata, `Inter Google Font` y Providers globales (ej. `SupabaseProvider`).
  2. Refactorizar el sistema de rutas de Autenticación agrupando bajo `(auth)` para aislar el layout sin afectar la URL (`src/app/(auth)/login/page`, `src/app/(auth)/register/page`). Esto eliminará la duplicidad y orfandad de los Layouts actuales de Auth.
  
  **Recursos:**
  - [Next.js Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
  - [Route Groups (auth)](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- **Definición de Done (DoD)**:
  - [ ] El directorio `auth` renombrado a `(auth)` con su respectivo `layout.tsx`.
  - [ ] `Inter Google Font` cargada de forma óptima a nivel Root.
  - [ ] Graphify ya no reporta a `layout` como un nodo aislado.
- **Esfuerzo Estimado**: 3 Puntos de Historia (8 Horas)
```

### 3. Módulo de Autenticación y APIs Seguras

```markdown
### [MIG-BACK-01] Refactorización del Flujo de Autenticación y Route Handlers (GET/POST)
- **Contexto**: Backend API (Next.js Route Handlers) / Seguridad
- **Descripción**: 
  Se identificaron nodos aislados correspondientes a endpoints y páginas como `GET` (Auth Callback API), `LoginPage`, `Login` y `register`. La autenticación con Supabase debe operar con los nuevos patrones de *Server Actions* o manejadores en `/api` robustos.
  
  **Pasos:**
  1. Refactorizar la integración de Autenticación (`src/components/auth/main/authenticationlayout`) implementando `@supabase/ssr` (Server-Side Rendering) en lugar del antiguo `@supabase/auth-helpers-nextjs`.
  2. Migrar `src/app/auth/callback/route_get` a un Route Handler estandarizado (`app/auth/callback/route.ts`) validando correctamente el token code de Supabase con manejo de errores robusto.
  3. Vincular las acciones de formulario (`LoginPage` / `RegisterForm`) utilizando Next.js Server Actions para enviar los datos de forma progresiva.
  
  **Recursos:**
  - [Supabase SSR for Next.js App Router](https://supabase.com/docs/guides/auth/server-side/nextjs)
  - [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- **Definición de Done (DoD)**:
  - [ ] `@supabase/ssr` implementado para el manejo de cookies.
  - [ ] Callback del PKCE Flow protegido y funcional en `route.ts`.
  - [ ] Formularios de login y registro conectados a Server Actions (0 JavaScript requerido en cliente para el submit base).
- **Esfuerzo Estimado**: 8 Puntos de Historia (21 Horas)
```

### 4. Gestión de Estado y Galería (Dashboard)

```markdown
### [MIG-FRONT-03] Arquitectura del Dashboard y Carga Diferida de Imágenes
- **Contexto**: Frontend / Visualización y Rendimiento
- **Descripción**: 
  El Dashboard UI y el `Uploader Component` figuran desconectados de la fuente de la verdad en el grafo. Es vital implementar un patrón de carga eficiente (Lazy Loading y Skeleton Screens) para la galería.
  
  **Pasos:**
  1. Integrar los componentes `Image Skeleton Loaders` nativamente usando el archivo `loading.tsx` provisto por Next.js App Router para las transiciones.
  2. Implementar `next/image` con el `Cloudinary Loader` configurado en `src/utils/loader/cloudinaryloader`. 
  3. Refactorizar el `Blur Placeholder Util` usando PLAICEHOLDER o Cloudinary de forma nativa.
  4. Optimizar el `Uploader Component` migrándolo a un Server Action o utilizando `SWR` / `React Query` si el progreso de carga se hace de lado cliente.
  
  **Recursos:**
  - [Next.js Image Component](https://nextjs.org/docs/app/building-your-application/optimizing/images)
  - [Next.js loading.tsx](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- **Definición de Done (DoD)**:
  - [ ] Las imágenes de la galería usan placeholders desenfocados generados al instante (`blurDataURL`).
  - [ ] Transición fluida a `dashboard/page.tsx` cubierta con el `loading.tsx` (Skeleton Layout).
  - [ ] Conexión del uploader finalizada; se actualiza el estado de la galería instantáneamente tras la subida (optimistic UI updates).
- **Esfuerzo Estimado**: 5 Puntos de Historia (13 Horas)
```

### 5. Configuración de Reglas de Calidad

```markdown
### [MIG-FRONT-04] Implementación de Linters y Revisión Estructural (DoD Global)
- **Contexto**: Calidad del Código / Arquitectura Escalable
- **Descripción**: 
  Para evitar futuros "nodos huérfanos" y código desconectado detectado por herramientas como Graphify, se deben establecer reglas estrictas en el CI/CD y dependencias.
  
  **Pasos:**
  1. Configurar ESLint con reglas restrictivas para el App Router de Next.js (`eslint-config-next`).
  2. Aplicar barreras de arquitectura con `eslint-plugin-boundaries` o configurando los "Path Aliases" de TypeScript de forma estricta (`@/components`, `@/lib`, `@/actions`).
  3. Configurar Prettier junto con `prettier-plugin-tailwindcss` para formateo automático.
  
  **Recursos:**
  - [Next.js ESLint Integration](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
  - [Prettier Tailwind Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- **Definición de Done (DoD)**:
  - [ ] Linting y Prettier ejecutan correctamente (`npm run lint`).
  - [ ] Las importaciones relativas (ej. `../../components/`) se refactorizan a Absolute Imports (`@/components/`).
  - [ ] Todos los componentes tienen exportaciones fuertemente tipadas e importadas correctamente, resolviendo las islas de código mostradas en el Grafo.
- **Esfuerzo Estimado**: 2 Puntos de Historia (5 Horas)
```

---

## 📈 Siguientes Pasos (Ejecución Kanban)

1. **Reunión de Replenishment**: El equipo (o tú como desarrollador) debe jalar el ticket `[MIG-FRONT-01]` y moverlo a la columna **In Progress**. 
2. **Respetar el Límite de WIP**: No comenzar con la migración del Dashboard (`[MIG-FRONT-03]`) hasta que los componentes básicos en `[MIG-FRONT-01]` estén revisados y en estado **Done**.
3. **Manejo de Bloqueos**: Si durante `[MIG-BACK-01]` hay un problema con las credenciales de Supabase, marcar el ticket con `[BLOQUEADO]` en rojo y frenar el avance de tickets de Backend hasta resolverlo, enfocando el esfuerzo en destrabarlo (Swarming).
