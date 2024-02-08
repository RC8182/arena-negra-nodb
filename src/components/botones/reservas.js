import { Button, Link } from '@chakra-ui/react';


export const Reservar = ({idioma}) => {

  return (
    <Button border={'1px black solid'}>
    {(idioma === 'es')?
      <Link href={`https://api.whatsapp.com/send/?phone=34648416513`} isExternal>Reservar</Link>
      : <Link href={`https://api.whatsapp.com/send/?phone=34648416513`} isExternal>Book a Table</Link>
    }
  </Button>
  )
}
