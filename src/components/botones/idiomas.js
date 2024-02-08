import { Box} from '@chakra-ui/react';
import Link from 'next/link';

export const Idiomas = ({idioma}) => {


  return (
    <Box textColor={'white'}>
        {(idioma === 'en')?
        <Link href="/es" >Español?</Link>:
        <Link href="/en" >English?</Link>}
    </Box>
  )
}