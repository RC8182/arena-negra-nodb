import { Parallax } from "@/components/parallax/parallax";
import { datos } from "./db";

export default async function Galeria({idioma}) {

  const datosGaleria =( idioma=='es') ? datos.es : datos.en;
  const titulo= datosGaleria.galeria.titulo;
  const data = datosGaleria.galeria.imagenes;

  return (
    <div className="bg-black text-white w-full p-5 lg:min-w-[100vw]">
      <div className="mt-5">
        <div className="flex flex-col items-center flex-wrap" id="galeria">
          <h1 className="text-4xl font-bold text-metal">{titulo}</h1>        
          {data.map((e,i)=>{
            return <Parallax img={e.url.src} alt={e.alt} key={i} /> 
          })}
        </div>
      </div>
    </div>
  )
}
