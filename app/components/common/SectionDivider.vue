<template>
  <div class="flex mx-4 md:mx-auto">
    <USeparator class="gg-divider" />
    <GGIcon class="gg-icon h-30 mx-2" />
    <USeparator class="gg-divider" />
  </div>
</template>

<script setup lang="ts">
import GGIcon from '~/assets/img/gg-icon.svg'
</script>

<style lang="scss" scoped>
.gg-icon {
  fill: white;
  filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
}

:deep(.gg-divider > div) {
  border-color: #333;
}
</style>
