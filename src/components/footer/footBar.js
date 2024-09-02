import { Idiomas } from '../botones/idiomas';
import { Direccion } from '../botones/direccion';
import { ReservarFooter } from '../botones/reservasFootbar';

export default function FootBar({idioma}) {
  return (
    <div className="bg-black fixed bottom-0 w-full h-12 border-t-2 border-metal rounded-t-lg overflow-hidden md:hidden">
      <div className="flex px-10 items-center justify-between">
        <div >
          <ReservarFooter idioma={idioma}/>
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
