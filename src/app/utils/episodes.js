import axios from 'axios';

// Función provista por la cátedra (NO modificar).
// Recibe las URLs de los episodios y devuelve sus datos completos.
export async function obtenerEpisodios(urls) {
  if (!urls || urls.length === 0) return [];

  const requests = urls.map((url) => axios.get(url));
  const responses = await Promise.all(requests);

  return responses.map((response) => response.data);
}
