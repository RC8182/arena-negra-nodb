import { Reservar } from '../../botones/reservas'
import { Logo } from '../../logo'
import { datos } from './db'
import { AltComponent } from '@/components/parallax/altComponent/altComponent';

export default function Portada ({idioma}) {

    const datosPortada =( idioma==='es') ? datos?.esp : datos?.ing;
    const h1= datosPortada.portada.h1
    const h2= datosPortada.portada.h2
    const sub = datosPortada.portada.subtitulo;
    const img= datosPortada.portada.img
    const alt= datosPortada.portada.alt

  return (
    <div className='w-full'>
        <div 
        className='fondo relative bg-black bg-fixed bg-center bg-no-repeat bg-cover' 
        style={{minWidth: '300px', minHeight: '600px', backgroundImage: `url(${img.src})`}}>
             <AltComponent alt={alt} />
            <div 
                className='contenedor-titulo absolute inset-0 bg-gray-700 bg-opacity-50 text-center'>
                <div className='flex flex-col'>
                    <div 
                    className='titulo justify-center text-white py-4 text-lg flex flex-col tracking-widest'
                    style={{margin: '3%', fontSize: '25px'}}>
                    <h2>{h2}</h2>
                    </div>
                    <div className='flex justify-center p-4 text-lg text-white'>
                        <h2>{sub}</h2>
                    </div>

                    <div className='flex flex-col justify-center w-9/10 m-auto'>
                        <Reservar idioma={idioma} />
                    </div>
                    <div 
                        className='titulo justify-center text-white py-2 text-lg flex flex-col tracking-widest'
                        style={{margin: '1%', fontSize: '25px'}}>
                        <h1>{h1}</h1>
                        <Logo width={'150px'}/>
                    </div>
                   
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
