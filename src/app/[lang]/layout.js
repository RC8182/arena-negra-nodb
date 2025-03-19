export default function RootLayout({ children, params }) {
  const currentLang = params.lang || 'es'; // Default to Spanish if no language is specified

  return (
    <html lang={currentLang}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/pannellum/build/pannellum.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
