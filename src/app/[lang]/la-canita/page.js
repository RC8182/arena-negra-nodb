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
import { datosE } from "@/components/body/especialidades/canitaDB/db";
import { datosN } from "@/components/navbar/canita/db";
import { datosG } from "@/components/body/galeria/canita/db";
import GoogleAnalytics from "../googleAnalytics";


export default function Page({params}) {
    const idioma= params.lang;
    const bgcolor= "black";
    const textLogoColor="#f15eb1";
    const rosa="#f15eb1";
    const textColor="white"
  return (
    <div>
      <GoogleAnalytics idioma={idioma}/>
    <NavBar idioma={idioma} bgcolor={bgcolor} textLogoColor={textLogoColor} buttonColor="#FFFFFF" borderColor="red-500" textColor={textColor} text={"La Cañita"} datos={datosN}/>
      <div className="flex flex-col space-y-4">    
          <Portada idioma={idioma} datos={datos} logo={datos.logo} border_color={'border-pink-500'}/>

          {/* <Welcome idioma={idioma}/> */}

          <Especialidades idioma={idioma} datos={datosE} title_color={'text-pink-500'}/>

          {/* <Reviews idioma={idioma}/> */}
          <Reservar idioma={idioma} pagina={'La Cañita'} title_color={'text-pink-500'} />

          <About idioma={idioma} title_color={'text-pink-500'}/>

          <Galeria idioma={idioma} datos={datosG} text_color={'text-pink-500'}/>
      </div>
      <Footer idioma={idioma} lines={rosa} titlecolor={rosa} datos={datosF}/>
      <HStack display={{ base: 'flex', md: 'none' }}>
        <FootBar idioma={idioma} border_color={'border-pink-500'}/>
      </HStack>
      <ScrollToTopButton text_color={'text-pink-500'} border_color={'border-pink-500'}/>
    </div>
  )
}
