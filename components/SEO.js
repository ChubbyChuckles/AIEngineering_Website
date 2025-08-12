import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "AI Engineering Portfolio";
const DEFAULT_TITLE = "AI Engineering Portfolio";
const DEFAULT_DESC =
  "Transforming ideas into digital reality with AI, engineering, and web innovation.";
const DEFAULT_IMAGE = "/og-image.jpg";
const TWITTER = "@yourhandle";

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const { asPath } = useRouter();
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ai-engineering-website.vercel.app";
  const url = base.replace(/\/$/, "") + (asPath === "/" ? "" : asPath);
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | ${SITE_NAME}`;
  const imgUrl = image.startsWith("http")
    ? image
    : base.replace(/\/$/, "") + image;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={TWITTER} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
