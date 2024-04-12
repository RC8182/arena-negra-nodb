import React from 'react';
import Link from 'next/link';

export const Llamar = ({ phone, idioma }) => {
  return (
    <div className="text-white hover:text-gold">
      {(idioma === 'en') ? (
        <Link href={`tel:${phone}`} passHref>
        Call Now
        </Link>
          ) : (
        <Link href={`tel:${phone}`} passHref>
          Llamar
        </Link>
      )}
    </div>
  );
};
