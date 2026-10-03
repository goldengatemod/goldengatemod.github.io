export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) {
    return;
  }

  const nuxtApp = useNuxtApp();
  const { $i18n } = nuxtApp;
  const isSupportedLocale = (
    value: string | null | undefined,
  ): value is (typeof $i18n.availableLocales)[number] =>
    $i18n.availableLocales.some((locale) => locale === value);

  if (isSupportedLocale(to.path.split('/')[1])) {
    return;
  }
  // Prerendered payloads have no query or hash; use the browser URL on hydration.
  const route = nuxtApp.isHydrating
    ? nuxtApp.$router.resolve(
        window.location.pathname +
          window.location.search +
          window.location.hash,
      )
    : to;
  let savedLocale: string | null = null;

  try {
    savedLocale = localStorage.getItem('locale');
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }

  const locale = isSupportedLocale(savedLocale)
    ? savedLocale
    : $i18n.defaultLocale;

  const target = `/${locale}${route.path === '/' ? '' : route.path}${route.fullPath.slice(route.path.length)}`;
  if (nuxtApp.$router.resolve(target).matched.length) {
    if (nuxtApp.isHydrating) {
      // Load HTML in the selected language instead of hydrating another locale.
      window.location.replace(target);
      return;
    }
    return navigateTo(target, { replace: true });
  }
});
