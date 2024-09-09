import { About } from "@/components/body/about/about";
import { Especialidades } from "@/components/body/especialidades/especialidades";
import Galeria from "@/components/body/galeria/galeria";
import Portada from "@/components/body/portada/portada";
import { Reviews } from "@/components/body/reviews/reviews";
import { Welcome } from "@/components/body/vienvenida/welcome";
import FootBar from "@/components/footer/footBar";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { Reservar } from "@/components/reservasForm/reservar";
import ScrollToTopButton from "@/components/scrollUp";
import { HStack } from "@chakra-ui/react";
import { datos } from "./db/portada-db";
import { datosF } from "./db/footer-db";


export default function Page({params}) {
    const idioma= params.lang;
    const bgcolor= "black";
    const textLogoColor="#f15eb1";
    const rosa="#f15eb1";
    const textColor="white"
  return (
    <div>
    <NavBar idioma={idioma} bgcolor={bgcolor} textLogoColor={textLogoColor} buttonColor="#FFFFFF" borderColor="red-500" textColor={textColor} text={"La Cañita"}/>
      <div className="flex flex-col space-y-4">    
          <Portada idioma={idioma} datos={datos} logo={datos.logo} border_color={'border-pink-500'}/>

          {/* <Welcome idioma={idioma}/> */}

          {/* <Especialidades idioma={idioma}/> */}

          {/* <Reviews idioma={idioma}/> */}
          <Reservar idioma={idioma} pagina={'La Cañita'} title_color={'text-pink-500'} />

          <About idioma={idioma} title_color={'text-pink-500'}/>

          {/* <Galeria idioma={idioma}/> */}
      </div>
      <Footer idioma={idioma} lines={rosa} titlecolor={rosa} datos={datosF}/>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <FootBar idioma={idioma} border_color={'border-pink-500'}/>
      </HStack>
      <ScrollToTopButton text_color={'text-pink-500'} border_color={'border-pink-500'}/>
    </div>
  )
}
