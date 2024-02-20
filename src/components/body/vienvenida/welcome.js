import React from 'react';
import { datos } from './db';

export const Welcome = ({idioma}) => {
  const datosAbout =( idioma==='es') ? datos?.esp : datos?.ing;
  const titulo= datosAbout.welcome.titulo;
  const texto= datosAbout.welcome.texto;
  return (
    <div className="bg-black text-white w-full p-5 lg:min-w-[100vw]">
      <div className="m-5">
        <div className="flex flex-col items-center space-y-0">
          <h1 className="text-2xl font-bold" id='sobre-nosotros'>{titulo}</h1>
          <div className="mt-3">
            <p className="text-base">{texto}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
