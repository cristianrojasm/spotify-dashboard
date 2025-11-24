"use client";

import { useEffect, useState } from "react";
import { searchTracks } from "../libb/audius";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = await searchTracks("mix");

      // Crear playlists agrupadas por genre
      const grouped = Object.values(
        data.reduce((acc: any, track: any) => {
          const genre = track.genre || "Otros";

          if (!acc[genre]) acc[genre] = { genre, tracks: [] };
          acc[genre].tracks.push(track);
          return acc;
        }, {})
      );

      setPlaylists(grouped);
      setLoading(false);
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">🎶 Playlists</h1>

      {loading && <p>Cargando...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {playlists.map((p: any, i: number) => (
          <div key={i} className="bg-[#121212] p-4 rounded shadow hover:bg-[#1e1e1e] transition">
            <h2 className="text-xl font-bold mb-2">{p.genre}</h2>
            <p className="text-sm text-gray-400">{p.tracks.length} canciones</p>
          </div>
        ))}
      </div>
    </div>
  );
}
