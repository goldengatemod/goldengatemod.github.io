export const useMediaQuery = (query: string) => {
  const matches = ref(false);
  let mediaQuery: MediaQueryList | undefined;

  const update = () => {
    matches.value = mediaQuery?.matches ?? false;
  };

  onMounted(() => {
    mediaQuery = window.matchMedia(query);
    update();
    mediaQuery.addEventListener('change', update);
  });

  onBeforeUnmount(() => {
    mediaQuery?.removeEventListener('change', update);
  });

  return readonly(matches);
};
