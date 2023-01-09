import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
 return (
  <Html lang="en">
   <Head>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.css" />
   </Head>
   <body className='bg-msk-800'>
    <Main />
    <NextScript />
    <Script src='src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"'/>
   </body>
  </Html>
 )
}
