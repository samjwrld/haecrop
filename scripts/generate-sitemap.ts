import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base domain - can be configured via env or default site URL
const SITE_URL = process.env.VITE_SITE_URL || 'https://hycrop-grow-hub.vercel.app';

// Static routes defined in App.tsx
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/products', changefreq: 'daily', priority: '0.9' },
  { url: '/ImageGallery', changefreq: 'weekly', priority: '0.7' },
  { url: '/VideosGallary', changefreq: 'weekly', priority: '0.7' },
  { url: '/Careers', changefreq: 'monthly', priority: '0.6' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' },
];

// Product categories from siteConfig
const productCategories = [
  'insects',
  'fungicides',
  'herbicides',
  'pgr',
  'bactericide',
];

const categoryRoutes = productCategories.map((cat) => ({
  url: `/products/${cat}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

const allRoutes = [...staticRoutes, ...categoryRoutes];

const currentDate = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml, 'utf8');

console.log(`[SEO] sitemap.xml successfully generated at: ${outputPath}`);
