'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  // PUNTO 4: PÁGINA ABOUT
  // Completar la presentación personal, la interacción de la imagen
  // y el listado de personajes favoritos solicitado en la consigna.
  const [showImage, setShowImage] = useState(false);

  const personajes = [
    {nombre:"Rick Sanchez", veces:8},
    {nombre:"Morty Smith", veces:4},
    {nombre:"Jerry Smith", veces:5},
    {nombre:"Añexander", veces:1}
  ];

  const handleImage = () => {
    setShowImage(!showImage)
  }

  return (
    <main className='mx-auto max-w-5xl px-6 py-16'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <section className='min-h-80 rounded-3xl border border-white/10 bg-panel/50 p-8'>
          <h1 className='font-bold text-3xl mb-2'>Camila Zalcman</h1>
          <p className='mb-8'>Tengo 145 años y mi sueño es conocer Saturno. Aparezco en 25 capitulos.</p>
          
          <button className='bg-white text-black px-6 py-2 rounded-[8px] mb-12'>
            <a href='https://www.linkedin.com/in/camilazalcman/' target='_blank' rel='noopener noreferrer'>Mi linkedin</a>
          </button>

          <h3 className='text-xl mb-2 font-bold'>Personajes favoritos</h3>
          <ul>
            {personajes.filter((personaje) => personaje.veces > 3)
              .map((personaje) => (
                <li key={personaje.nombre}>{personaje.nombre}: {personaje.veces} veces</li>
              )
              )
            }
          </ul>
        </section>
        
        <section className='rounded-3xl border border-white/10 bg-panel/50 p-8'>
        {!showImage && (
          <button onClick={handleImage} className='bg-white text-black px-6 py-2 rounded-[8px] mb-4'>Ver imagen</button>
        )}
        {showImage && (
          <div>
            <button onClick={handleImage} className='bg-white text-black px-6 py-2 rounded-[8px] mb-4'>Dejar de ver imagen</button>
            <Image src="/camiFoto.png" width={400} height={500} alt='Foto de Cami' className='rounded-[8px]'/>
          </div>
        )}
        </section>
      </div>
    </main>
  );
}
