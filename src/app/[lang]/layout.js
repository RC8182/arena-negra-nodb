export default function RootLayout({ children, params }) {
    const currentLang = params.lang || 'es'; // Default to Spanish if no language is specified
  
    return (
      <html lang={currentLang}>
        <body>{children}</body>
      </html>
    );
  }
  