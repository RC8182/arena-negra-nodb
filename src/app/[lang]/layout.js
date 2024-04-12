import ScrollToTopButton from '@/components/scrollUp';
import './globals.css'
// import { Providers } from './providers'
import GoogleAnalytics from './googleAnalytics';





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
          {children}
        <ScrollToTopButton/>
        {/* </Providers> */}
      </body>
    </html>
  )
}
