import ScrollToTopButton from '@/components/scrollUp';
import './globals.css'
import { Providers } from './providers'



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

export default function RootLayout({ children, params }) {
  const currentLang = params.lang || 'es'; // Default to spanish if no language is specified
  const currentMetadata = metadata[currentLang];

  return (
    <html lang={currentLang}>
      <title>{currentMetadata?.title}</title>
      <meta name="description" content={currentMetadata?.description} />
      <meta name="keywords" content={currentMetadata?.keywords} />
      <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />
      <meta name="theme-color" content="black" />
      <body>
        <Providers>

            {children}
        <ScrollToTopButton/>
        </Providers>
      </body>
    </html>
  )
}
