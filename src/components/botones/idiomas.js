'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const Idiomas = ({ idioma }) => {
  const pathname = usePathname()
  const dividir= pathname.split('/')
  const ruta = dividir[2] ? `/${dividir[2]}` : '';

  return (
    <div className='text-white hover:text-gold'>
      {(idioma === 'en') ?
        <Link href={`/es/${ruta}`}>Español?</Link> :
        <Link href={`/en/${ruta}`}>English?</Link> 
      }
    </div>
  );
};

