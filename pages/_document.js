import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
 return (
  <Html lang="en">
   <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
     href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,400;1,600;1,700&display=swap"
     rel="stylesheet"
    />
    <link
     rel="stylesheet"
     href="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.css"
    />
    <script src="https://accounts.google.com/gsi/client" async defer />
   </Head>
   <body className="bg-msk-800">
    <div id="modals"></div>
    <Main />
    <NextScript />
   </body>
  </Html>
 );
}
