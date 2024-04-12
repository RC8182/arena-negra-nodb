import { Productos } from './productos'
import { datos } from './db'

export const Especialidades = ({idioma}) => {

    const datosEspecialidades =( idioma==='es') ? datos?.esp : datos?.ing;
    const titulo= datosEspecialidades.especialidades.titulo
    const productos= datosEspecialidades.especialidades.productos;

    return (
        <div className="bg-black text-black w-full min-w-[300px] lg:min-w-full min-h-[600px] lg:min-h-[600px]">
            <div className="mt-5">
                <div className="flex flex-col items-center space-y-0">
                    <h1 className="text-4xl font-bold text-metal">{titulo}</h1>
                </div>
                <div className="m-5 flex flex-col gap-4 md:flex-row items-center justify-center">
                    {productos.map((e,i)=>{
                        return(
                            <div key={i}>
                                <Productos img={e.img} alt={e.alt} titulo={e.titulo} texto={e.texto}/>
                            </div> 
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}
