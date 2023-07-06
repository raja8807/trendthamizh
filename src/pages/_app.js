import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
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
      <script
        async
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      ></script>

      {/* <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
        id="cloudinary"
      ></Script> */}

      {/* <Script
        src="//widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
      <Script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></Script> */}

      <SessionProvider session={pageProps.session}>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </SessionProvider>
    </>
  );
}
