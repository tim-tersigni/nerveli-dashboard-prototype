import Card from '@/components/card'
import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from "react";

export default function Document() {
  const [isBrowser, setIsBrowser] = useState(false);

useEffect(() => {
 setIsBrowser(typeof window !== "undefined");
}, []);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
