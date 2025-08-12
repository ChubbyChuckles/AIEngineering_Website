import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", text: /Transforming Ideas/i },
  { path: "/about", text: /about/i },
  { path: "/services", text: /services/i },
  { path: "/work", text: /work/i },
  { path: "/testimonials", text: /testimonials/i },
  { path: "/contact", text: /contact/i },
];

test.describe("Navigation", () => {
  for (const p of pages) {
    test(`visits ${p.path}`, async ({ page }) => {
      await page.goto(p.path);
      const content = await page.content();
      expect(content.toLowerCase()).toContain(p.text.source.replace(/\\/g, ""));
    });
  }
});
