# Recuperatorio Examen Programación 3

Profesor: Lic. Leandro Amaro García.

## Condiciones

- Está totalmente prohibido utilizar herramientas de IA como ChatGPT o Copilot, así como exámenes de años anteriores.
- Sólo se pueden consultar apuntes escritos en papel.
- No se puede consultar Internet, trabajos prácticos, actividades resueltas ni exámenes anteriores.
- Está prohibido usar el celular y conversar con otras personas durante el examen.
- Se aprueba con: 7 (siete)
- Tiempo disponible: 3 hrs

## Consigna
El proyecto consiste en completar una app de personajes de Rick & Morty. La aplicación cuenta con una grilla de personajes, una página de detalle y una página About.

Antes de comenzar ejecutá:

```bash
npm install
npm run dev
```

## Repositorio y entrega

1. Cloná este repositorio.
2. Creá un repositorio público y vacío en GitHub.
3. Cambiá la URL remota:

```bash
git remote -v
git remote set-url origin URL_DE_TU_REPOSITORIO
git remote -v
```

Al terminar:

```bash
git add .
git commit -m "examen prog 3 Apellido"
git push origin main
```

Entregá el enlace de tu repositorio mediante el siguiente formulario:

[Formulario de entrega](https://docs.google.com/forms/d/e/1FAIpQLSdEzp7CWYtmjq2rvQ0xBTyK4oBsAy1uPd3mTfpeh5tssNsFkA/viewform?usp=dialog)

## Puntos

### 1) Fetch de personajes - 3 puntos

La API es pública y no requiere una API key.

- Todos los personajes: `https://rickandmortyapi.com/api/character`
- Un personaje por ID: `https://rickandmortyapi.com/api/character/[ID_CHARACTER]`

Completá las funciones `fetchCharacters` de `CharactersGridContainer.js` y `fetchCharacterDetail` de `CharacterDetail.js`. Usá Axios, `try/catch` y los estados de loading y error que ya están preparados.

Tip: el endpoint del listado devuelve los personajes dentro de `response.data.results`.

### 2) Card de personaje - 2 puntos

- En `CharactersGrid.js`, recorré el array `characters` con `map` y renderizá un componente `Card` por cada personaje.
- En `Card.js`, completá el enlace al detalle usando el `id` y mostrá el nombre (`name`) y la imagen (`image`) recibidos dentro del objeto `character`.
- Usá el `id` como `key` del componente que se repite.

### 3) Página de personaje - 2 puntos

- En `CharacterDetail.js`, mostrá nombre, imagen, estado, especie, género, cantidad de episodios, origen y última ubicación.
- Usá la función provista `obtenerEpisodios` para traer la información completa de los episodios del personaje y guardarla para mostrarla en pantalla.
- Recorré `episodes` con `map` y renderizá un `EpisodeCard` por cada elemento. Usá el `id` como `key`.
- En `EpisodeCard.js`, reemplazá los textos de ejemplo por el código (`episode`), nombre (`name`) y fecha de emisión (`air_date`) recibidos en la prop `episode`.

### 4) Página de About del alumno - 3 puntos

Completá la página `/about` con:

- Tu nombre y apellido.
- Una imagen guardada dentro de `public`. Debe comenzar oculta y ser reemplazada por un botón “Ver imagen”. Usá `useState`, `onClick` y renderizado condicional.
- Un párrafo que te presente como un personaje de Rick & Morty.
- Un enlace a LinkedIn u otra red social.
- Un array de personajes favoritos. Cada objeto debe tener un nombre y la cantidad de veces que viste al personaje.
- Mostrá los personajes con `map`, agregando la palabra “veces”. Antes del `map`, usá `filter` para mostrar solamente los vistos más de 3 veces.
- Convertí el texto About de `Navbar.js` en un enlace a `/about`.
- Usá HTML semántico, Tailwind y un diseño responsive.

Mucha suerte y welcome to the machine!
