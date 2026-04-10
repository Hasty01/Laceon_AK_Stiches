import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync, readFileSync } from 'fs';

const hostname = 'https://laceon-ak-stiches.vercel.app';
const sitemap = new SitemapStream({ hostname });

// Static pages
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },        // Home
  { url: '/collection', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 }
];

// Add static pages
staticPages.forEach(page => sitemap.write(page));

// Read products from JSON
let products = [];
try {
  products = JSON.parse(readFileSync('./src/products.json', 'utf-8'));
} catch (e) {
  console.log('No products.json found or empty. Skipping products.');
}

// Add product pages
products.forEach(product => {
  sitemap.write({
    url: `/collection/${product.slug}`,  // assuming product pages are under /collection/
    changefreq: 'weekly',
    priority: 0.9
  });
});

sitemap.end();

// Output sitemap to public/
streamToPromise(sitemap).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
  console.log('Sitemap generated successfully!');
});