export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: "",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    //pageTransition: { name: "page", mode: "out-in" },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
  },
});