import { Body } from "@/components/body/body";
import FootBar from "@/components/footer/footBar";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { HStack } from "@chakra-ui/react";

export const metadata = {
  en: {
    title: 'Restaurant in Los Abrigos - Arena Negra',
    description: 'Enjoy the best paellas, pizzas, and local fish platters in Los Abrigos, Tenerife. Arena Negra Restaurant offers a unique experience with stunning views and unbeatable customer service.',
    keywords: 'Restaurant, Pizzeria, Paella, Seafood, Local Fish, Los Abrigos, Tenerife, Sea Views, Excellent Service, Restaurant in Los Abrigos, Where to eat fish in Los Abrigos, Where to eat paella in Los Abrigos',
  },
  es: {
    title: 'Restaurante en Los Abrigos - Arena Negra',
    description: 'Disfruta de las mejores paellas, pizzas y tablas de pescado local en Los Abrigos, Tenerife. Arena Negra Restaurant ofrece una experiencia única con vistas impresionantes y un servicio al cliente inmejorable.',
    keywords: 'Restaurante, Pizzeria, Arrocería, Paella, Mariscos, Pescado Local, Los Abrigos, Tenerife, Vistas al Mar, Servicio Excelente, Restaurante en los Abrigos, Donde comer pescado en los abrigos, donde comer paella en los abrigos',
  },
};


export default function App({params}){

  const lang= params.lang;
  const currentMetadata = metadata[lang];
    return(
        <div>
          <title>{currentMetadata?.title}</title>
          <meta name="description" content={currentMetadata?.description} />
          <meta name="keywords" content={currentMetadata?.keywords} />
          <NavBar idioma={lang}/>
          <Body idioma={lang}/>
          <Footer idioma={lang}/>
          <HStack display={{ base: 'flex', md: 'none' }}>
            <FootBar idioma={lang}/>
          </HStack>
        </div>
    )
}

