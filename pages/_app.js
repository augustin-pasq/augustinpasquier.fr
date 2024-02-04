import "@/styles/globals.css"
import "@/styles/mobile.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-blue/theme.css"
import Script from "next/script";

export default function App({Component, pageProps}) {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive"/>
            <Script strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');`}
            </Script>

            <Component {...pageProps} />
        </>
    )
}