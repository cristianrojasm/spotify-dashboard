"use client";

import { useEffect, useState } from "react";
import { searchTracks } from "../libb/audius";

export default function CancionesPage() {
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await searchTracks("top hits");
      setTracks(data);
      setLoading(false);
    };

    fetchTracks();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">🎧 Canciones más escuchadas</h1>

      {loading && <p>Cargando...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tracks.map((track) => (
          <div key={track.id} className="bg-[#121212] p-4 rounded shadow hover:bg-[#1e1e1e] transition">
            <img src={track.artwork['150x150']} alt="" className="rounded mb-2" />
            <h2 className="font-bold">{track.title}</h2>
            <p className="text-sm text-gray-400">{track.user?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
