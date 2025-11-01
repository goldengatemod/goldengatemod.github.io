<template>
  <h1
    class="text-3xl md:text-5xl text-white font-bebas-neue flex justify-center pb-6 tracking-wide gg-header-text"
    :class="textClass"
  >
    {{ te(props.title) ? t(props.title) : props.title }}
  </h1>
</template>

<script setup lang="ts">
const { te, t } = useI18n()

const props = defineProps<{
  title: string
  textClass?: string | string[] | Record<string, boolean>
}>()
</script>
