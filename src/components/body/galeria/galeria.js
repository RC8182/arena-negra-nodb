import { Box, Flex, Heading, } from "@chakra-ui/react";
import { Parallax } from "@/components/parallax/parallax";
import { datos } from "./db";




export default async function Galeria({idioma}) {

  const datosGaleria =( idioma=='es') ? datos.es : datos.en;
  const titulo= datosGaleria.galeria.titulo;
  const data = datosGaleria.galeria.imagenes;

  return (
    <Box backgroundColor={'black'} 
    color={'white'} 
    w={'100%'}
    minW={{base:'300px', lg:'100vw'}}
    minH={{base:'600px', lg:'600px'}}>
    <Box >
      <Flex flexDir={'column'} 
        align={'center'}
        flexWrap={'wrap'}>
        <Heading >{titulo}</Heading>        
         {data.map((e,i)=>{
          return <Parallax img={e.url.src} alt={e.alt} key={i} /> 
         })}

      </Flex>
    </Box>
    </Box>
  )
}
