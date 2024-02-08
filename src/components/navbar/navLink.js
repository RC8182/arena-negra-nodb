import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { datos } from "./db";

export const NavLink = ({idioma}) => {

    const Links =( idioma==='es')
    ? datos?.esp.navbar.links
    : datos?.ing.navbar.links;
    
        return (
        <HStack as={'nav'} spacing={4}>
              {Links?.map((e) => (              
                <Box key={e.title}>
                <Link href={e.url}>
                {e.title}
                </Link>
                </Box>
              ))}
        </HStack>
    )
  }