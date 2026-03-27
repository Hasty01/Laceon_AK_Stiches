// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

const hostname = 'https://laceon-ak-stiches.vercel.app/';

const sitemap = new SitemapStream({ hostname });

const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/shop', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/feedback', changefreq: 'monthly', priority: 0.6 },
];

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then(data => {
  writeFileSync('./public/sitemap.xml', data.toString());
  console.log('Sitemap generated successfully!');
});