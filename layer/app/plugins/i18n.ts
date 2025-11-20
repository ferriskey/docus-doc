export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp();

  const i18nConfig = nuxtApp.$config.public.i18n;
  if (!i18nConfig) {
    return;
  }

  addRouteMiddleware((to) => {
    if (to.path === "/") {
      return navigateTo(`/en/getting-started/introduction`);
    }
  });
});
