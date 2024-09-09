import React from 'react';
import Link from 'next/link';

export const BotonReservar = ({ idioma, border_color}) => {

  return (
    <button className={`border ${border_color} bg-black p-2 rounded-md hover:border-2`}>
      {idioma === 'es' ? (
        <Link
        className="text-white"  rel="noopener noreferrer"
        href={'#reservar'} 
        passHref>
            Reservar
        </Link>
      ) : (
        <Link 
        className="text-white" rel="noopener noreferrer"
        href={'#booking'} 
        passHref>
            Book a Table       
        </Link>
      )}
    </button>
  );
};

