import React from 'react';
import Link from 'next/link';

export const ReservarFooter = ({ idioma }) => {

  return (
    <div className="text-white hover:text-black">
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
    </div>
  );
};

