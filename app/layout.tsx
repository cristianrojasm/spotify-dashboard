"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { supabase } from "./lib/supabaseClient";
import LoginPage from "./login/page";
import Link from "next/link";

// Fuentes
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<any>(null);
  const [mostrarLogin, setMostrarLogin] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    checkSession();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setMostrarLogin(false);
  };

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}>

        {/* HEADER estilo Spotify */}
        <header className="flex items-center justify-between p-4 bg-[#121212] border-b border-[#1DB954]/20">

          {/* BOTÓN INICIO */}
          <Link href="/">
            <button className="bg-[#1DB954] text-black font-semibold px-4 py-2 rounded hover:bg-[#1ed760] transition">
              Inicio
            </button>
          </Link>

          {/* Botón login/cerrar sesión */}
          <button
            onClick={() => {
              if (session) {
                handleSignOut();
              } else {
                setMostrarLogin(true);
              }
            }}
            className="bg-[#1DB954] text-black font-semibold px-4 py-2 rounded hover:bg-[#1ed760] transition"
          >
            {session ? "Cerrar sesión" : "Iniciar sesión"}
          </button>
        </header>

        {/* LOGIN MODAL */}
        {mostrarLogin ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <LoginPage
              onLogin={(s: any) => {
                setSession(s);
                setMostrarLogin(false);
              }}
              onClose={() => setMostrarLogin(false)}
            />
          </div>
        ) : (
          <main className="p-4">{children}</main>
        )}
      </body>
    </html>
  );
}
