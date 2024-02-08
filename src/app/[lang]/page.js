import { Body } from "@/components/body/body";
import FootBar from "@/components/footer/footBar";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { HStack } from "@chakra-ui/react";

export default function App({params}){

  const lang= params.lang;
    return(
        <div>
        <NavBar idioma={lang}/>
        <Body idioma={lang}/>
        <Footer idioma={lang}/>
        <HStack display={{ base: 'flex', md: 'none' }}>
          <FootBar idioma={lang}/>
        </HStack>
        </div>
    )
}

