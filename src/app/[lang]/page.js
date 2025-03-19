import ScrollToTopButton from '@/components/scrollUp';
import './globals.css';
import GoogleAnalytics from './googleAnalytics';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { HStack } from '@chakra-ui/react';
import FootBar from '@/components/footer/footBar';
import Portada from '@/components/body/portada/portada';
import { Welcome } from '@/components/body/vienvenida/welcome';
import { Especialidades } from '@/components/body/especialidades/especialidades';
import { Reviews } from '@/components/body/reviews/reviews';
import { Reservar } from '@/components/reservasForm/reservar';
import { About } from '@/components/body/about/about';
import Galeria from '@/components/body/galeria/galeria';
import { datos } from './portada-db';
import { datosF } from './footer-db';
import { datosE } from '@/components/body/especialidades/arenaDB/db';
import { datosN } from '@/components/navbar/arena/db';
import { datosG } from '@/components/body/galeria/arena/db';
import Menu from '@/components/menu/menu';
import { Awards } from '@/components/footer/awards/awards';
import PanoramaViewer from '@/components/body/virtualTour/panoramaView';
import VirtualTour from '@/components/body/virtualTour/virtualTour';
//import MenuPopup from '@/components/popup/popup';

// Metadata para las diferentes lenguas
const metadata = {
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

export default function Page({ params }) {
  const idioma = params.lang || 'es'; // Default to Spanish if no language is specified
  const currentUrl = `https://arena-negra-restaurant.com/${params.lang}`;
  const currentMetadata = metadata[idioma];
  const metal="#14A8CD";

  return (
    <html lang={idioma}>
      <head>
        {/* Meta tags */}
        <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />
        <meta name="ahrefs-site-verification" content="9b2fa73d05ce4d07c7d774b8479e5f3104effd2df784966626c80a541bb702b7"></meta>
        <meta name="theme-color" content="black" />
        <meta name="description" content={currentMetadata?.description} />
        <meta name="keywords" content={currentMetadata?.keywords} />
        <link rel="canonical" href={currentUrl} />
        <title>{currentMetadata?.title}</title>
      </head>
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics idioma={idioma} />
        {/* <MenuPopup imageUrl="/uploads/popup.jpeg" altText="Pop-up del menú" /> */}
        {/* Navigation bar */}
        <NavBar idioma={idioma} bgcolor="black" textLogoColor={metal} buttonColor="red-500" borderColor="yellow-500" textColor="white" text={"Arena Negra"} datos={datosN} />
        {/* Main content */}
        <div className="flex flex-col space-y-4">    
          <Portada idioma={idioma} datos={datos} logo={datos.logo} border_color={'border-metal'}/>
          {/* <PanoramaViewer/> */}

          <Welcome idioma={idioma}/>

          <Especialidades idioma={idioma} datos={datosE} title_color={'text-metal'}/>

          <VirtualTour idioma={idioma} text_color={'text-metal'}/>

          <Reservar idioma={idioma} pagina={'Arena Negra'} title_color={'text-metal'} highVolume={'false'}/>

          <About idioma={idioma} title_color={'text-metal'}/>

          <Reviews idioma={idioma}/>

          {/* <Menu idioma={idioma}/> */}
      </div>

        {/* Footer */}
        <Footer idioma={idioma} lines={metal} titlecolor={metal} datos={datosF} awards={<Awards idioma={idioma}/>}/>
        
        {/* Mobile Footer */}
        <HStack display={{ base: 'flex', md: 'none' }}>
          <FootBar idioma={idioma}  border_color={'border-metal'}/>
        </HStack>

        {/* Scroll to Top Button */}
        <ScrollToTopButton text_color={'text-metal'} border_color={'border-metal'}/>
      </body>
    </html>
  );
}
