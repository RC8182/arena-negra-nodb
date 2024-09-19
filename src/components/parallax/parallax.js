'use client'
import React, { useState } from 'react';
import { AltComponent } from './altComponent/altComponent';
import Image from 'next/image';

export const Parallax = ({ img, titulo, alt }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Función para mostrar/ocultar el popup
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className='w-full'>
      <div
        className='fondo relative bg-black bg-fixed bg-center bg-no-repeat bg-cover min-w-[300px] min-h-[500px] md:min-w-full md:min-h-[800px]'
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'contain' }}
        onClick={togglePopup} 
      >
        <AltComponent alt={alt} />
        <div className='contenedor-titulo absolute top-0 left-0 right-0 text-center'>
          <div className='titulo bg-black justify-center text-white py-4 text-lg flex flex-col tracking-widest md:text-base md:py-2'>
            {titulo}
          </div>
        </div>
      </div>

      {/* Modal para mostrar la imagen en grande */}
      {isPopupVisible && (
  <div className='popup fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
          <button
        onClick={togglePopup}
        className='absolute top-2 right-2 text-white text-8xl'
      >
        &times; {/* Botón para cerrar el popup */}
      </button>
    <div className='relative'>
      <Image 
        src={img} 
        alt={alt} 
        width={800} // Cambia esto al tamaño adecuado
        height={600} // Cambia esto al tamaño adecuado
        className='max-w-full max-h-full' 
      />
    </div>
  </div>
)}

    </div>
  );
};
