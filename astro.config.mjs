// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace with your actual domain when deployed
  site: 'https://appvintech.com',

  integrations: [
    mdx(),
    sitemap(),
    tailwind()
  ],

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  server: {
    port: 3000
  },

  redirects: {
    '/home': '/',
    '/index.php': '/',
    '/sap-integration-service': '/services/sap-integration',
    '/career': '/careers',
    '/about-us': '/about',
    '/legal/ip': '/',
    '/help/article/5307': '/blog',
    '/feature/osu_main/index.html': '/services',
    '/api/contact': '/contact',
    '/api/newsletter': '/resources/newsletters',
    '/legal/privacy': '/docs',
    '/benefits-of-automotive-mobile-apps/': '/resources/newsletters/innovating-businesses-with-ai-sapintegration--mobile-solutions/',
    '/services/cloud-solutions': '/services',
    '/our-projects-go-trust': '/case-studies/go-trust',
    '/events': '/resources/webinars'
  },
});