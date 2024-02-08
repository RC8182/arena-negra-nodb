import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
} from '@chakra-ui/react'




export const Testimonial = (props) => {
  const { children } = props

  return <Box>{children}</Box>
}

export const TestimonialContent = (props) => {
  const { children } = props

  return (
    <Stack
      bg={'white'}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'white',
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

export const TestimonialHeading = (props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

export const TestimonialText = (props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={'black'}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

export const TestimonialAvatar = (props) => {
    const name= props.name;
    const title= props.title;
    const src= props.src;
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={'white'}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

