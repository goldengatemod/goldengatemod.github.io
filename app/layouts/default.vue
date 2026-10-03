<template>
  <div>
    <CommonMenuNavigation />
    <slot />
    <CommonMainFooter />
    <CommonScrollToTop />
  </div>
</template>

<script setup lang="ts">
const localeHead = useLocaleHead({ seo: false });

useHead(() => ({ htmlAttrs: localeHead.value.htmlAttrs }));
</script>
