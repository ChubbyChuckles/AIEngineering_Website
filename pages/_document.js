import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:title"
          content="AI Engineering - Innovative Solutions"
        />
        <meta
          property="og:description"
          content="Explore my cutting-edge AI, and engineering solutions transforming ideas into reality."
        />
        <meta
          property="og:url"
          content="https://ai-engineering-website.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://ai-engineering-website.vercel.app/public/og-image.jpg"
        />
        <meta property="og:image:width" content="2464" />
        <meta property="og:image:height" content="1411" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
