<template>
  <div class="gg-section-divider" aria-hidden="true">
    <USeparator :ui="{ border: 'border-(--gg-section-border)' }" />
    <GGIcon class="gg-divider-icon" />
    <USeparator :ui="{ border: 'border-(--gg-section-border)' }" />
  </div>
</template>

<script setup lang="ts">
import GGIcon from '~/assets/img/gg-icon.svg';
</script>
