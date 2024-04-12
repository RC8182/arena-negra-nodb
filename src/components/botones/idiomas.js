import { Box} from '@chakra-ui/react';
import Link from 'next/link';

export const Idiomas = ({idioma}) => {


  return (
    <div className='text-white hover:text-gold'>
        {(idioma === 'en')?
        <Link href="/es" >Español?</Link>:
        <Link href="/en" >English?</Link>}
    </div>
  )
}