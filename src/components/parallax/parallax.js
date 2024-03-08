import React from 'react'
import { AltComponent } from './altComponent/altComponent'
export const Parallax = ({img , titulo, alt}) => {

  return (
    <div className='w-full'>
        <div 
          className='fondo relative bg-black bg-fixed bg-center bg-no-repeat bg-cover' 
          style={{minWidth: '300px', minHeight: '600px', backgroundImage: `url(${img})`}}>
            <AltComponent alt={alt}/>
            <div 
                className='contenedor-titulo absolute inset-0 text-center'>
                <div 
                  className='titulo bg-black justify-center text-white py-4 text-lg flex flex-col tracking-widest'>
                  {titulo}
                </div>
            </div>
        </div>

        <div
             className='seccion h-auto items-center justify-center px-5'
             >

        </div>
        
    </div>
  )
}
