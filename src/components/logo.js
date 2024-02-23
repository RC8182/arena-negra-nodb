import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/LogoArena.png';

export const Logo = (props) => {
    const width= props.width
  return (
    <Flex
    margin={'3%'}  
    width={width}
    alignSelf={'center'}>
    <Image
        src={logo}
        alt="Picture of the author"
        //width="100%" height="100%" layout="responsive" objectFit="contain"
        />
</Flex>
  )
}
