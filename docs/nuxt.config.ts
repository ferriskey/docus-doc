export default defineNuxtConfig({
  extends: ["docus"],
  modules: ["@nuxtjs/plausible", "@nuxtjs/i18n", "nuxt-studio"],
  css: ["~/assets/css/main.css"],
  devServer: {
    port: 2000,
  },
  site: {
    name: "FerrisKey",
  },
  compatibilityDate: "2025-07-18",
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
    ],
  },
  routeRules: {
    "/": { redirect: "/en/getting-started/introduction" },
    "/en": { redirect: "/en/getting-started/introduction" },
  },
  llms: {
    domain: "https://docus.dev",
    title: "Docus",
    description: "Write beautiful docs with Markdown.",
    full: {
      title: "Docus",
      description: "Write beautiful docs with Markdown.",
    },
  },
  studio: {
    route: "/admin",
    repository: {
      owner: "nuxt-content",
      repo: "docus",
      branch: "main",
      rootDir: "docs",
    },
  },
});
