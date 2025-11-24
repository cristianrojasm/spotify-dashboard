import Sidebar from "./componentes/Sidebar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      {/* Barra lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <section className="flex-1 p-10">
        <h2 className="text-3xl font-semibold mb-5 text-green-400">
          Resumen de actividad 🎧
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Tarjeta 1 - Canciones */}
          <Link href="/canciones">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-medium mb-2 text-green-300">
                Canciones más escuchadas
              </h3>
              <p className="text-gray-400">Ver tus temas top...</p>
            </div>
          </Link>

          {/* Tarjeta 2 - Artistas */}
          <Link href="/artistas">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-medium mb-2 text-green-300">
                Artistas favoritos
              </h3>
              <p className="text-gray-400">Descubre tus artistas top...</p>
            </div>
          </Link>

          {/* Tarjeta 3 - Playlists */}
          <Link href="/playlists">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
              <h3 className="text-xl font-medium mb-2 text-green-300">
                Playlists
              </h3>
              <p className="text-gray-400">Explora tus listas...</p>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}
