'use client'
import { useState } from 'react';
import Link from 'next/link';
import { NavLink } from './navLink';
import { Llamar } from '../botones/llamar';
import { Direccion } from '../botones/direccion';
import { Idiomas } from '../botones/idiomas';

export default function NavBar({ idioma }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black px-4 w-full min-w-[300px] lg:min-w-full">
      <div className="h-16 flex items-center justify-between text-white">
        <button
          className=" text-white p-1 rounded-md border-2  border-metal md:hidden"
          aria-label="Open Menu"
          onClick={handleToggle}
        >
          {isOpen ? 'X' : '☰'}
        </button>
        <div className="flex space-x-8 items-cente">
          <Link className='text-2xl font-bold text-metal border-metal'href="/">
            Arena Negra
          </Link>
          <div className="hidden md:flex">
            <NavLink idioma={idioma} />
          </div>
        </div>

        <div className="flex items-center space-x-16">
          <div className="hidden md:flex space-x-4">
            <Llamar phone={+34677397592} idioma={idioma} />
            <Direccion idioma={idioma} />
            <Idiomas idioma={idioma} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="pb-4 md:hidden text-white">
          <NavLink idioma={idioma} />
        </div>
      )}
    </div>
  );
}
