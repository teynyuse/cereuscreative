import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
      titleTemplate: '%s - Cereus Creative',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Jouw digitale partner voor unieke merkbelevingen',
        },
        { name: 'author', content: 'Cereus Creative' },
        { name: 'robots', content: 'index, follow' },
        {
          property: 'og:title',
          content: 'Cereus Creative - Unieke Merkbelevingen',
        },
        {
          property: 'og:description',
          content: 'Jouw digitale partner voor branding en webdesign',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: process.env.BASE_URL || 'https://www.cereuscreative.be',
        },
        {
          property: 'og:image',
          content: `${process.env.BASE_URL || 'https://www.cereuscreative.be'}/og-image.jpg`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,600&display=swap',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],
  css: [
    '~/public/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/plausible',
  ],
  plausible: {
    domain: 'www.cereuscreative.be', // Aangepast naar alleen de domeinnaam
  },
  nitro: {
    externals: {
      inline: ['nodemailer'],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.BASE_URL || 'https://www.cereuscreative.be', // Gebruik consistent een siteUrl
    },
    gmailUser: process.env.GMAIL_USER,
    gmailPassword: process.env.GMAIL_PASSWORD,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
});
