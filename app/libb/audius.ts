export async function searchTracks(query: string) {
  const url = `https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}&app_name=spotify-dashboard`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error en la API de Audius");

  const data = await res.json();
  return data.data; // Audius always returns data.data
}
