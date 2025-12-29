export default defineAppConfig({
  socials: {
    discord: "https://discord.com/invite/WVV5rq8ANb",
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
