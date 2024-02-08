import { Box, Flex, Heading, Link, Stack, Text} from '@chakra-ui/react'
import { Usuarios } from './usuarios'
import { datos } from './db'


export const Testimonio = ({idioma}) => {

    const datosTestimonio =( idioma==='es') ? datos?.esp : datos?.ing;
    const titulo= datosTestimonio.resenias.titulo
    const sub1= datosTestimonio.resenias.subtitulo
    const Users= datosTestimonio.resenias.usuarios;

    return (
        <Box backgroundColor={'black'}
         color={'white'} 
         w={'100%'}
         minW={{base:'300px', lg:'100vw'}}
         minH={{base:'600px', lg:'600px'}}>
                <Box margin={'5%'} >
                  <Stack spacing={0} align={'center'}>
                    <Heading>{titulo}</Heading>
                    <Text>{sub1}</Text>
                  </Stack>
                  <Stack
                    margin={'3%'}
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 12 }}
                    align={'center'}>
                    
                    {Users.map((e,i)=>{
                        return(
                            <div key={i}>
                            <Usuarios  text={e.texto} name={e.nombre} title={e.profesion} avatar={e.img} />
                            </div> 
                            ) 
                            })
                            }
                  </Stack>
                  <Flex
                      flexDir={{ base: 'column', lg: 'row' }}
                      justifyContent={'center'}
                      alignItems={'center'}  // Agregado para centrar verticalmente
                      gap={{ base: '5%', lg: '5%' }}
                      w="full"              // Agregado para ocupar todo el ancho
                    >
                    <Box
                      mb={{ base: '5%', lg: 0 }}
                      mr={{ base: 0, lg: '5%' }}
                    >
                      {(idioma === 'es') ?
                        <button
                          className="rounded-lg p-2 bg-black text-white border-white border outline-none ">
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>
                            Escribe un comentario
                          </Link>
                        </button> :
                        <button
                          className="rounded-lg p-2 bg-black text-white border-white border outline-none transition-opacity duration-200"
                          >
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,3,,,,'} isExternal>
                            Write a comment
                          </Link>
                        </button>
                      }
                      </Box>
                      <Box
                        mb={{ base: '5%', lg: 0 }}
                        mr={{ base: 0, lg: '5%' }}
                      >
                      {(idioma === 'es')?
                        <button
                        className="rounded-lg p-2 bg-black text-white border-white border outline-none ">
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                              Todos los comentarios
                          </Link>
                        </button> :
                        <button
                        className="rounded-lg p-2 bg-black text-white border-white border outline-none ">
                          <Link href={'https://www.google.com/search?q=arena+negra+los+abrigos&oq=arena+negra+los+abrigos&aqs=chrome.0.0i355i512j46i175i199i512j0i512l2j69i61j69i60.8087j0j7&sourceid=chrome&ie=UTF-8#lrd=0xc6a9ff939f59e7d:0x45d033e243f2aad0,1,,,,'} isExternal>
                              All Comments
                          </Link>
                          </button>
                      }
          
                      </Box>
                  </Flex>
                </Box>
              </Box>
            )
}
