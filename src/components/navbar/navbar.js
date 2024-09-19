'use client';
import { useState } from 'react';
import Link from 'next/link';
import { NavLink } from './navLink';
import { Llamar } from '../botones/llamar';
import { Direccion } from '../botones/direccion';
import { Idiomas } from '../botones/idiomas';

export default function NavBar({ idioma, bgcolor, textLogoColor, buttonColor, borderColor, textColor, text, datos }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: bgcolor }} className="px-4 w-full min-w-[300px] lg:min-w-full">
      <div style={{ color: textColor }} className="h-16 flex items-center justify-between">
        <button
          style={{ color: textColor, borderColor: borderColor }}
          className="p-1 rounded-md border-2 md:hidden"
          aria-label="Open Menu"
          onClick={handleToggle}
        >
          {isOpen ? 'X' : '☰'}
        </button>
        <div className="flex space-x-8 items-center">
          <Link style={{ color: textLogoColor, borderColor: borderColor }} className="text-2xl font-bold" href={idioma === 'es' ? '/' : '/en'}>
            {text}
          </Link>
          <div className="hidden md:flex">
            <NavLink idioma={idioma} datos={datos}/>
          </div>
        </div>

        <div className="flex items-center space-x-16">
          <div className="hidden md:flex space-x-4">
            <Llamar phone={+34648416513} idioma={idioma} buttonColor={buttonColor} textColor={textColor} />
            <Direccion idioma={idioma} buttonColor={buttonColor} textColor={textColor} />
            <Idiomas idioma={idioma} buttonColor={buttonColor} textColor={textColor} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div style={{ color: textColor }} className="pb-4 md:hidden">
          <NavLink idioma={idioma} />
        </div>
      )}
    </div>
  );
}
