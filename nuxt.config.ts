// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
    // Temporarily disabled for frontend development
    // '@sidebase/nuxt-auth'
  ]
  // Auth configuration temporarily disabled for frontend development
  // auth: {
  //   globalAppMiddleware: false,
  //   origin: process.env.AUTH_ORIGIN
  // },
  // runtimeConfig: {
  //   auth: {
  //     secret: process.env.AUTH_SECRET
  //   },
  //   resend: {
  //     apiKey: process.env.RESEND_API_KEY
  //   },
  //   emailServer: {
  //     host: process.env.EMAIL_SERVER_HOST,
  //     port: process.env.EMAIL_SERVER_PORT,
  //     user: process.env.EMAIL_SERVER_USER,
  //     password: process.env.EMAIL_SERVER_PASSWORD,
  //     from: process.env.EMAIL_FROM
  //   }
  // }
})