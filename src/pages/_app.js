import "@/styles/globals.css";
import Script from "next/script";



export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id=""
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KBP0JT1RB7"
      >
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KBP0JT1RB7');
       `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
