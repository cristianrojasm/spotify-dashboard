"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<"login" | "register">("register");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Detectar si ya está logueado
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.push("/dashboard");
    };
    checkSession();
  }, [router]);

  const enviar = async () => {
    if (loading) return;
    setMsg("");
    setLoading(true);

    try {
      if (modo === "register") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
        setMsg("Revisa tu correo para confirmar la cuenta.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        setMsg("Inicio de sesión exitoso. Redirigiendo...");
        setTimeout(() => router.push("/dashboard"), 1200);
      }
    } catch (err: any) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.bg}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          {modo === "register"
            ? "Regístrate para empezar a escuchar contenido"
            : "Inicia sesión en tu cuenta"}
        </h1>

        <input
          style={styles.input}
          placeholder="Dirección de email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.greenBtn} onClick={enviar}>
          {loading
            ? "Cargando..."
            : modo === "register"
            ? "Registrarse"
            : "Iniciar sesión"}
        </button>

        <p style={{ color: "#bbb", marginTop: 10 }}>{msg}</p>

        <button
          style={styles.switch}
          onClick={() =>
            setModo(modo === "register" ? "login" : "register")
          }
        >
          {modo === "register"
            ? "¿Ya tienes una cuenta? Iniciar sesión"
            : "¿No tienes cuenta? Crear una"}
        </button>
      </div>
    </main>
  );
}

const styles: any = {
  bg: {
    background: "#000",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 420,
    background: "#121212",
    padding: 40,
    borderRadius: 14,
    color: "white",
    textAlign: "center",
    boxShadow: "0 0 25px rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    border: "1px solid #333",
    background: "#1f1f1f",
    color: "white",
    marginBottom: 14,
    fontSize: 16,
  },
  greenBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 25,
    background: "#1db954",
    color: "black",
    fontWeight: "bold",
    marginTop: 10,
    cursor: "pointer",
  },
  switch: {
    background: "transparent",
    border: "none",
    color: "#1db954",
    marginTop: 20,
    cursor: "pointer",
    fontSize: 16,
  },
};
