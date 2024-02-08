import { Flex, Link } from '@chakra-ui/react';


export const Direccion = ({idioma}) => {

    return (
      <Flex textColor={'white'}>
        {(idioma === 'en') ?
          <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal>Direction</Link>
          : <Link href={`https://www.google.es/maps/dir//28.0289615,-16.5932594/@28.0289197,-16.5930625,20.75z?entry=ttu`} isExternal><span style={{whiteSpace: 'nowrap'}}>Cómo Llegar</span></Link>
        }
      </Flex>
    )
      }    