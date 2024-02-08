import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
export const Parallax = ({img , titulo}) => {

  return (
    <Box w={'100%'}>
        <Box 
          className='fondo' 
          minW={{base:'300px', lg:'100vw'}}
          minH={{base:'600px', lg:'600px'}}
          position={'relative'}
          backgroundImage={`url(${img})`}
          backgroundAttachment={'fixed'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundSize={'contain'}
          //m={'50px'}
          >
            <Box 
                className='contenedor-titulo'
                position={'absolute'}
                left={0}
                top={0}
                width={'100%'}
                textAlign={'center'}>
                <Flex 
                  className='titulo'
                  backgroundColor={'black'}
                  justifyContent={'center'}
                  color={'white'}
                  padding={'18px'}
                  fontSize={'25px'}
                  letterSpacing={'10px'}
                >{titulo}</Flex>
            </Box>
        </Box>

        <Flex
             className='seccion'
             height={'auto'}
             alignItems={'center'}
             justifyContent={'center'}
             padding={'0 20'}
             >

        </Flex>
        
    </Box>
  )
}
