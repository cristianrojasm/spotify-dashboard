"use client";

import { Home, Music, User, ListMusic } from "lucide-react"; // íconos de lucide-react
import Link from "next/link"; // navegación interna de Next.js

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black text-gray-300 flex flex-col p-6">
      {/* Logo o título principal */}
      <h1 className="text-2xl font-bold text-green-500 mb-10">Spotify Dashboard</h1>

      {/* Enlaces del menú */}
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <Home size={22} /> Inicio
        </Link>

        <Link
          href="/top-songs"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <Music size={22} /> Canciones más escuchadas
        </Link>

        <Link
          href="/artists"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <User size={22} /> Artistas favoritos
        </Link>

        <Link
          href="/playlists"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <ListMusic size={22} /> Playlists
        </Link>
      </nav>

      {/* Pie de barra lateral */}
      <div className="mt-auto pt-10 text-sm text-gray-500">
        <p>© 2025 Spotify Dashboard</p>
      </div>
    </aside>
  );
}
