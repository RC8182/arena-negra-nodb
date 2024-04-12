import { About } from './about/about'
import Galeria from './galeria/galeria'
import { Especialidades } from './especialidades/especialidades'
import { Welcome } from './vienvenida/welcome'
import Portada from './portada/portada'
import { Reviews } from './reviews/reviews'

export const Body = ({idioma}) => {
  return (
    <div className="flex flex-col space-y-4">    
        <Portada idioma={idioma}/>

        <Welcome idioma={idioma}/>

        <Especialidades idioma={idioma}/>

        <Reviews idioma={idioma}/>

        <About idioma={idioma}/>

        <Galeria idioma={idioma}/>
    </div>
  )
}
