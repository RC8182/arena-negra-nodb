import { Box, Heading, Stack } from '@chakra-ui/react'
import { Productos } from './productos'
import { datos } from './db'



export const Especialidades = ({idioma}) => {

    const datosEspecialidades =( idioma==='es') ? datos?.esp : datos?.ing;
    const titulo= datosEspecialidades.especialidades.titulo
    const productos= datosEspecialidades.especialidades.productos;

    return (
        <Box backgroundColor={'black'} color={'white'} w={'100%'}
        minW={{base:'300px', lg:'100vw'}}
        minH={{base:'600px', lg:'600px'}}>
                <Box margin={'5%'} >
                  <Stack spacing={0} align={'center'}>
                    <Heading>{titulo}</Heading>

                  </Stack>
                  <Stack
                    margin={'3%'}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 12 }}
                    align={'center'}
                    justifyContent={'center'}>
                    
                    {productos.map((e,i)=>{
                        return(
                            <div key={i}>
                            <Productos img={e.img} alt={e.alt} titulo={e.titulo} texto={e.texto}/>
                            </div> 
                            ) 
                            })
                            }
                  </Stack>

                </Box>
              </Box>
            )
}
