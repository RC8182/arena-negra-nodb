import '../globals.css';

export const metadata = {
  title: 'La Cañita Cocktail Bar | Los Abrigos',
  description: {
    es: 'La Cañita Cocktail Bar es un bar ubicado en el paseo marítimo de Los Abrigos. Nuestra terraza ofrece vistas increíbles al mar y al muelle de Los Abrigos. Nos especializamos en cócteles y cafés, con un reconocido barman cubano. ¡Nuestros cócteles son los mejores de Tenerife!',
    en: 'La Cañita Cocktail Bar is a bar located on the seafront promenade of Los Abrigos. Our terrace offers incredible views of the sea and the Los Abrigos pier. We specialize in cocktails and coffees, with a renowned Cuban bartender. Our cocktails are the best in Tenerife!',
  },
};

export default function CanitaLayout({ children, params }) {
  const currentLang = params.lang || 'es'; // Default to Spanish if no language is specified
  const description = metadata.description[currentLang];

  return (
    <html lang={currentLang}>
      <head>
        <meta name="theme-color" content="black" />
        <meta name="description" content={description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
