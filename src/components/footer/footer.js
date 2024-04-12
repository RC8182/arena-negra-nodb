import { Logo } from '../logo';
import { datos } from './db';

const ListHeader = ({ children }) => {
  return (
    <h2 className="font-semibold text-lg text-metal mb-2">
      {children}
    </h2>
  )
}

export default function Footer({idioma}) {

  const datosFooter =( idioma==='es') ? datos?.esp : datos?.ing;
  const contacto= datosFooter.pie.contacto;
  const direccion= datosFooter.pie.direccion;
  const horario= datosFooter.pie.horario;
  const siguenos= datosFooter.pie.siguenos;

  return (
    <div className="bg-black text-white w-full min-w-[300px] lg:min-w-full min-h-[600px]">
      <div className="container mx-auto py-10 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-5">
          <div id='contacto' className="flex flex-col">
            
            <ListHeader>{contacto.titulo}</ListHeader>
            <div className='telefono'>
                <h2>{contacto.tel}</h2>
            </div>
            <div className='email'>
                <h2>restarenanegra@gmail.com</h2>
            </div>

          </div>
          <div className="flex flex-col">
            <ListHeader>{direccion.titulo}</ListHeader>
            <div className='direccion flex flex-col'>
                <h2>{direccion.dir}</h2>
                <h2>{direccion.dir1}</h2>
                <h2>{direccion.dir2}</h2>
                <h2>{direccion.dir3}</h2>
            </div>
          </div>
          <div className="flex flex-col">
            <ListHeader>{horario.titulo}</ListHeader>
            <div className="flex">
              <ul>
                <li>{horario.lunes}</li>
                <li>{horario.martes}</li>
                <li>{horario.miercoles}</li>
                <li>{horario.jueves}</li>
                <li>{horario.viernes}</li>
                <li>{horario.sabado}</li>
                <li>{horario.domingo}</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <ListHeader>{siguenos.titulo}</ListHeader>
            <a href={'https://www.facebook.com/profile.php?id=61550354287185'}>
              Facebook
            </a>

            <a href={'https://www.instagram.com/arenanegrarestaurant/'}>
              Instagram
            </a>
            <a href={'https://www.tripadvisor.es/Restaurant_Review-g1188716-d23657993-Reviews-Restaurente_Arena_Negra_Taberna_BBQ-Los_Abrigos_Tenerife_Canary_Islands.html'}>
              TripAdvisor
            </a>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <div className="flex items-center mx-8 my-8">
          <hr className="flex-grow border-t border-metal" />
          <Logo width={'120px'}/>
          <hr className="flex-grow border-t border-metal" />
        </div>
        <p className="text-sm text-center">
          © 2023 Arena Negra Restaurante. All rights reserved
        </p>
      </div>


    </div>
  )
}
