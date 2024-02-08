import { Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image';


export const Productos = (props) => {
    const img= props?.img;
    const alt= props?.alt;
    const titulo= props?.titulo;
    const texto= props?.texto;
  return (
    <Card maxW='sm'>
  <CardBody>
    
    <Image
      src={img}
      alt={alt}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      <Text>
        {texto}
      </Text>
    </Stack>
  </CardBody>

</Card>
  )
}
