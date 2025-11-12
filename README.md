# 🎧 Spotify Dashboard

Este proyecto es un **dashboard inspirado en Spotify**, desarrollado con **Next.js**, **TypeScript** y **TailwindCSS**.  
Permite visualizar de forma moderna la actividad del usuario: canciones más escuchadas, artistas favoritos y playlists personalizadas.

---

## 🚀 Tecnologías utilizadas

- ⚡ [Next.js 14](https://nextjs.org/) — Framework de React moderno para SSR y SSG.
- 💅 [TailwindCSS](https://tailwindcss.com/) — Framework CSS para un diseño rápido y responsivo.
- 🔤 [TypeScript](https://www.typescriptlang.org/) — Tipado estático para mayor robustez en el código.
- 🎨 [Lucide React](https://lucide.dev/) — Librería de íconos personalizables.
- 💻 [Node.js](https://nodejs.org/) — Entorno de ejecución para el desarrollo local.

---

## 🧩 Estructura del proyecto

```bash
spotify-dashboard/
│
├── app/                  # Páginas principales del dashboard
│   ├── componentes/       # Componentes reutilizables (Sidebar, etc.)
│   ├── canciones/         # Sección de canciones más escuchadas
│   ├── perfil/            # Página del perfil de usuario
│   └── configuracion/     # Página de configuración
│
├── public/               # Imágenes y recursos estáticos
├── styles/               # Archivos de estilo global (Tailwind)
├── package.json          # Dependencias y scripts
├── next.config.ts        # Configuración de Next.js
└── tsconfig.json         # Configuración de TypeScript
