export default function handler(req, res) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ai-engineering-website.vercel.app";
  const pages = [
    "/",
    "/about",
    "/services",
    "/work",
    "/testimonials",
    "/contact",
  ];
  const urls = pages
    .map(
      (p) =>
        `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>${
          p === "/" ? "1.0" : "0.7"
        }</priority></url>`
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  res.setHeader("Content-Type", "application/xml");
  res.send(xml);
}
