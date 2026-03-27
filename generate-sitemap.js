import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const hostname = "https://laceon-ak-stiches.vercel.app";

// List of static pages
const staticPages = [
  { url: "/", priority: 1.0 },
  { url: "/about-us", priority: 0.8 },
  { url: "/shop", priority: 0.9 },
  { url: "/contact", priority: 0.7 },
  { url: "/feedback", priority: 0.6 },
];

// If you later add products, list them here
const products = [
  { slug: "victorian-lace-dress" },
  { slug: "edwardian-silk-blouse" },
  { slug: "1920s-vintage-black-gown" },
];

const sitemap = new SitemapStream({ hostname });

// Add static pages
staticPages.forEach((page) =>
  sitemap.write({
    url: page.url,
    changefreq: "weekly",
    priority: page.priority,
  })
);

// Add product pages
products.forEach((product) =>
  sitemap.write({
    url: `/shop/${product.slug}`,
    changefreq: "weekly",
    priority: 0.9,
  })
);

sitemap.end();

// Output sitemap.xml to the public folder
streamToPromise(sitemap).then((data) => {
  writeFileSync("./public/sitemap.xml", data.toString());
  console.log("Sitemap generated successfully!");
});