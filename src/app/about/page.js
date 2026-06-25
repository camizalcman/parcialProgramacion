'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  // PUNTO 4: PÁGINA ABOUT
  // Completar la presentación personal, la interacción de la imagen
  // y el listado de personajes favoritos solicitado en la consigna.
  const [showImage, setShowImage] = useState(false);

  const personajes = [];

  return (
    <main className='mx-auto max-w-5xl px-6 py-16'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <section className='min-h-80 rounded-3xl border border-white/10 bg-panel/50 p-8'></section>
        <section className='rounded-3xl border border-white/10 bg-panel/50 p-8'></section>
      </div>
    </main>
  );
}
