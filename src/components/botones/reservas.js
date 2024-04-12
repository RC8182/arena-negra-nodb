import React from 'react';
import Link from 'next/link';

export const Reservar = ({ idioma }) => {
  return (
    <button className="border border-gold bg-black p-2 rounded-md hover:border-2">
      {idioma === 'es' ? (
        <Link
        className="text-white"  target="_blank" rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=34648416513" 
        passHref>
            Reservar

        </Link>
      ) : (
        <Link 
        className="text-white" target="_blank" rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=34648416513" 
        passHref>
            Book a Table       
        </Link>
      )}
    </button>
  );
};
