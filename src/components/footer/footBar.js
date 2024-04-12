import { Llamar } from '../botones/llamar';
import { Idiomas } from '../botones/idiomas';
import { Direccion } from '../botones/direccion';

export default function FootBar({idioma}) {
  return (
    <div className="bg-black fixed bottom-0 w-full h-12 border-t-2 border-metal rounded-t-lg overflow-hidden md:hidden">
      <div className="flex px-10 items-center justify-between">
        <div >
          <Llamar phone={+34648416513} idioma={idioma}/>
        </div>
        <div >
          <Direccion idioma={idioma}/>
        </div>
        <div >
          <Idiomas idioma={idioma}/>
        </div>
      </div>
    </div>
  )
}
