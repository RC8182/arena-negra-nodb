import { Box, Flex } from '@chakra-ui/react'
import { About } from './about/about'
import Galeria from './galeria/galeria'
import { Testimonio } from './testimony/testimonio'
import { Especialidades } from './especialidades/especialidades'
import { Welcome } from './vienvenida/welcome'
import Portada from './portada/portada'
export const Body = ({idioma}) => {

  return (
    <Box>    
        <Flex >
        <Portada idioma={idioma}/>
        </Flex> 

        <Flex marginTop={'1%'}>
          <Welcome idioma={idioma}/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Especialidades idioma={idioma}/>
        </Flex>

        <Flex marginTop={'1%'}>
          <Testimonio idioma={idioma}/>
        </Flex>

        <Flex marginTop={'1%'}>
          <About idioma={idioma}/>
        </Flex>
        <Flex marginTop={'1%'}
        marginBottom={'1%'}>
          <Galeria idioma={idioma}/>
        </Flex>

    </Box>
  )
}
