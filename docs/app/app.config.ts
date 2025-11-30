export default defineAppConfig({
  socials: {
    x: "https://x.com/nuxt_js",
    discord: "https://discord.com/invite/ps2h6QT",
    nuxt: "https://nuxt.com",
  },
  github: {
    rootDir: "docs",
  },
  toc: {
    bottom: {
      links: [
        {
          icon: "material-symbols:cloud",
          label: "Cloud IAM",
          to: "https://eu1.hubs.ly/H0q0Kbb0",
          target: "_blank",
        },
      ],
    },
  },
  ui: {
    pageHero: {
      slots: {
        title: "font-semibold sm:text-6xl",
        container: "!pb-0",
      },
    },
    pageCard: {
      slots: {
        container: "lg:flex min-w-0",
        wrapper: "flex-none",
      },
    },
  },
});
