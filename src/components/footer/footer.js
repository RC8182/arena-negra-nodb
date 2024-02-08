import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { Logo } from '../logo';
import { datos } from './db';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer({idioma}) {

  const datosFooter =( idioma==='es') ? datos?.esp : datos?.ing;
  const contacto= datosFooter.pie.contacto;
  const direccion= datosFooter.pie.direccion;
  const horario= datosFooter.pie.horario;
  const siguenos= datosFooter.pie.siguenos;

  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      w={'100%'}
      minW={{base:'300px', lg:'100vw'}}
      minH={{base:'600px', lg:'600px'}}
      >
      <Container as={Stack} maxW={{base:'380px',lg:'7xl'}} py={10} justifyContent={'center'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}  margin={'5%'}>
          <Stack id='contacto' align={'flex-start'}>
            
            <ListHeader >{contacto.titulo}</ListHeader>
            <Box className='telefono'>
                <h2>{contacto.tel}</h2>
            </Box>
            <Box className='email'>
                <h2>restarenanegra@gmail.com</h2>
            </Box>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{direccion.titulo}</ListHeader>
            <Flex className='direccion'
            flexDir={'column'}>
                <h2>{direccion.dir}</h2>
                <h2>{direccion.dir1}</h2>
                <h2>{direccion.dir2}</h2>
                <h2>{direccion.dir3}</h2>
            </Flex>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{horario.titulo}</ListHeader>
            <Flex>
        <UnorderedList>
            <ListItem>{horario.lunes}</ListItem>
            <ListItem>{horario.martes}</ListItem>
            <ListItem>{horario.miercoles}</ListItem>
            <ListItem>{horario.jueves}</ListItem>
            <ListItem>{horario.viernes}</ListItem>
            <ListItem>{horario.sabado}</ListItem>
            <ListItem>{horario.domingo}</ListItem>
        </UnorderedList>
        </Flex>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{siguenos.titulo}</ListHeader>
            <Box as="a" href={'https://www.facebook.com/profile.php?id=61550354287185'}>
              Facebook
            </Box>

            <Box as="a" href={'https://www.instagram.com/arenanegrarestaurant/'}>
              Instagram
            </Box>
            <Box as="a" href={'https://www.tripadvisor.es/Restaurant_Review-g1188716-d23657993-Reviews-Restaurente_Arena_Negra_Taberna_BBQ-Los_Abrigos_Tenerife_Canary_Islands.html'}>
              TripAdvisor
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box paddingBottom={20}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo width={'50px'}/>
        </Flex>
        <Text fontSize={'sm'} textAlign={'center'}>
          © 2023 Arena Negra Restaurante. All rights reserved
        </Text>
      </Box>
    </Box>
  )
}