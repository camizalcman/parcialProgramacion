import CharactersGridContainer from '@/app/components/CharactersGridContainer';

export default function Home() {
  return (
    <main className='mx-auto max-w-7xl px-6 py-16 md:py-20'>
      <header className='mb-14 text-center'>
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-portal'>
          Dimensión C-137
        </p>
        <h1 className='portal-text text-5xl font-extrabold tracking-tight md:text-7xl'>
          Rick &amp; Morty
        </h1>
        <p className='mx-auto mt-5 max-w-xl text-balance text-haze'>
          Explorá los personajes del multiverso. Tocá cualquiera para abrir su
          ficha completa con su estado, origen y todos sus episodios.
        </p>
      </header>
      <CharactersGridContainer />
    </main>
  );
}
