'use client'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink } from './navLink'
import { Llamar } from '../botones/llamar'
import { Direccion } from '../botones/direccion'
import { Idiomas } from '../botones/idiomas'
import Link from 'next/link'



export default function NavBar({idioma}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Box backgroundColor={'black'} 
            px={4}
            w={'100%'}
            minW={{base:'300px', lg:'100vw'}}
            >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}  textColor={'white'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Link href="/">
              <Box>Arena Negra</Box>
          </Link>
            <HStack display={{ base: 'none', md: 'flex' }}>
              <NavLink idioma={idioma}/>
            </HStack>
          </HStack>

        <Flex alignItems={'center'} margin={'3%'}>

          <Flex gap={'60px'}justifyContent={'space-between'}>
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Llamar phone={+34677397592} idioma={idioma}/>
                </HStack>
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Direccion idioma={idioma} />
                </HStack>
                <HStack display={{ base: 'none', md: 'flex' }} margin={'1%'}>
                  <Idiomas idioma={idioma}/>
                </HStack>
          </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} textColor={'white'}>
          <NavLink/>
          </Box>
        ) : null}
      </Box>
  )
}