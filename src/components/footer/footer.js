import { Logo } from '../logo';
import Link from 'next/link';

const ListHeader = ({ children, textColor }) => {
  return (
    <h2 className="font-semibold text-lg mb-2" style={{color:textColor}}>
      {children}
    </h2>
  )
}

export default function Footer({idioma, lines, titlecolor, datos, awards}) {

  const datosFooter =( idioma==='es') ? datos?.esp : datos?.ing;
  const contacto= datosFooter.pie.contacto;
  const direccion= datosFooter.pie.direccion;
  const horario= datosFooter.pie.horario;
  const siguenos= datosFooter.pie.siguenos;
  const grupo= datosFooter.pie.grupo;



  return (
    <div className="bg-black text-white w-full min-w-[300px] lg:min-w-full min-h-[600px]">
      <div className="container mx-auto py-10 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-5">
          <div id='contacto' className="flex flex-col">
            
            <ListHeader textColor={titlecolor}>{contacto.titulo}</ListHeader>
            <div className='telefono'>
                <h2>{contacto.tel}</h2>
            </div>
            <div className='email'>
                <h2>restarenanegra@gmail.com</h2>
            </div>

          </div>
          <div className="flex flex-col">
            <ListHeader textColor={titlecolor}>{direccion.titulo}</ListHeader>
            <div className='direccion flex flex-col'>
                <h2>{direccion.dir}</h2>
                <h2>{direccion.dir1}</h2>
                <h2>{direccion.dir2}</h2>
                <h2>{direccion.dir3}</h2>
            </div>
          </div>
          <div className="flex flex-col">
            <ListHeader textColor={titlecolor}>{horario.titulo}</ListHeader>
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
            <ListHeader textColor={titlecolor}>{siguenos.titulo}</ListHeader>
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
          <div className="flex flex-col">
            <ListHeader textColor={titlecolor}>{grupo.titulo}</ListHeader>
            <a href={grupo.arena.url} target='blank'>
              {grupo.arena.nombre}
            </a>

            <a href={grupo.paella.url} target='blank'>
            {grupo.paella.nombre}
            </a>
            <a href={grupo.nina.url} target='blank'>
            {grupo.nina.nombre}
            </a>
            <a href={grupo.canita.url} target='blank'>
            {grupo.canita.nombre}
            </a>
          </div>
          <div className="flex flex-col">
            <ListHeader textColor={titlecolor}>{awards}</ListHeader>

          </div>
        </div>
      </div>
      <div className="pb-20">
        <div className="flex items-center mx-8 my-8">
          <hr className="flex-grow border-t" style={{borderColor:lines}}/>
          <Logo width={'120px'} img={datosFooter.logo}/>
          <hr className="flex-grow border-t" style={{borderColor:lines}}/>
        </div>
        <p className="text-sm text-center">
          © 2023 Arena Negra Restaurante. All rights reserved - Powered by <Link href={'https://jv-digital.com'}> JV-Digital</Link>
        </p>
      </div>


    </div>
  )
}
