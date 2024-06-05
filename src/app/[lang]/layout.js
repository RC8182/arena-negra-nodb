import ScrollToTopButton from '@/components/scrollUp';
import './globals.css'
// import { Providers } from './providers'
import GoogleAnalytics from './googleAnalytics';
import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import { HStack } from '@chakra-ui/react';
import FootBar from '@/components/footer/footBar';





export default function RootLayout({ children, params }) {
  const currentLang = params.lang || 'es'; // Default to spanish if no language is specified
  return (
    <html lang={currentLang}>
      <meta name="google-site-verification" content="Rm2sDQs-MVKtHT9LyDkRsSFVTAVbA0OHFvWdRa7I3F8" />
      <meta name="ahrefs-site-verification" content="9b2fa73d05ce4d07c7d774b8479e5f3104effd2df784966626c80a541bb702b7"></meta>
      <meta name="theme-color" content="black" />
      <body>
        {/* <Providers> */}
        <GoogleAnalytics />
        <NavBar idioma={currentLang}/>
          {children}
          <Footer idioma={currentLang}/>
          <HStack display={{ base: 'flex', md: 'none' }}>
            <FootBar idioma={currentLang}/>
          </HStack>
        <ScrollToTopButton/>
        {/* </Providers> */}
      </body>
    </html>
  )
}
