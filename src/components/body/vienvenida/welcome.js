import { Box, Flex, Heading, Stack, Text} from '@chakra-ui/react'
import { datos } from './db'

export const Welcome = ({idioma}) => {

  const datosAbout =( idioma==='es') ? datos?.esp : datos?.ing;
  const titulo= datosAbout.welcome.titulo;
  const texto= datosAbout.welcome.texto;
  return (
    <Box backgroundColor={'black'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'300px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box margin={'5%'}>
      <Stack spacing={0} align={'center'}>
        <Heading id='sobre-nosotros'>{titulo}</Heading>
        <Flex marginTop={'3%'}>
          <Text>{texto}</Text>
        </Flex>        
    </Stack>
    </Box>
    </Box>    
  )
}
