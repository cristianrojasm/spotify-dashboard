"use client";

import Link from "next/link";
import { Home, Music2, User, ListMusic } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6 border-r border-green-500/20">
      {/* Título */}
      <h2 className="text-2xl font-bold text-green-500 mb-10">
        Spotify <br /> Dashboard
      </h2>

      {/* Navegación */}
      <nav className="space-y-6 text-lg">

        {/* INICIO */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <Home className="w-6 h-6" />
          Inicio
        </Link>

        {/* CANCIONES */}
        <Link
          href="/canciones"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <Music2 className="w-6 h-6" />
          Canciones más escuchadas
        </Link>

        {/* ARTISTAS */}
        <Link
          href="/artistas"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <User className="w-6 h-6" />
          Artistas favoritos
        </Link>

        {/* PLAYLISTS */}
        <Link
          href="/playlists"
          className="flex items-center gap-3 hover:text-green-400 transition"
        >
          <ListMusic className="w-6 h-6" />
          Playlists
        </Link>

      </nav>
    </aside>
  );
}
