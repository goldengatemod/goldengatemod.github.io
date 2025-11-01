<template>
  <div>
    <MenuNavigation />
    <slot />
    <MainFooter />
    <CommonScrollToTop />
  </div>
</template>

<script setup lang="ts">
import MenuNavigation from '~/components/common/MenuNavigation.vue'
import MainFooter from '~/components/common/MainFooter.vue'
</script>
