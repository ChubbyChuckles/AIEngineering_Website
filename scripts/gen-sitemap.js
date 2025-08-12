/**
 * Build-time sitemap generator writing to public/sitemap.xml
 * Falls back silently if fs write fails (e.g., read-only environments).
 */
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

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

try {
  const outPath = resolve("public", "sitemap.xml");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, xml, "utf8");
  console.log("sitemap.xml written");
} catch (e) {
  console.warn("Failed to write sitemap.xml", e);
}
