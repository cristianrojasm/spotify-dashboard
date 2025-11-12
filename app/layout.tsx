import "./globals.css";

export const metadata = {
  title: "Spotify Dashboard",
  description: "Panel de control de Spotify creado con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white flex min-h-screen">
        {children}
      </body>
    </html>
  );
}
