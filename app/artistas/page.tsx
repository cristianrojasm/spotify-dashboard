"use client";

import { useEffect, useState } from "react";
import { searchTracks } from "../libb/audius";

export default function ArtistasPage() {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await searchTracks("drake");

      // agrupar por artista
      const grouped = Object.values(
        data.reduce((acc: any, track: any) => {
          const artist = track.user.name;
          if (!acc[artist]) acc[artist] = { artist, count: 0, image: track.artwork['150x150'] };
          acc[artist].count++;
          return acc;
        }, {})
      );

      setArtists(grouped);
      setLoading(false);
    };

    fetchArtists();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">⭐ Artistas favoritos</h1>

      {loading && <p>Cargando...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {artists.map((a: any, i) => (
          <div key={i} className="bg-[#121212] p-4 rounded shadow hover:bg-[#1e1e1e] transition">
            <img src={a.image} alt="" className="rounded mb-2" />
            <h2 className="font-bold">{a.artist}</h2>
            <p className="text-sm text-gray-400">{a.count} canciones</p>
          </div>
        ))}
      </div>
    </div>
  );
}
