import "@/styles/globals.css";
import Script from "next/script";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* {process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-KBP0JT1RB7"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBP0JT1RB7');
`}
          </Script>
        </>
      )} */}

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
