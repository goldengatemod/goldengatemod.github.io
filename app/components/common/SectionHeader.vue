<template>
  <component :is="as" class="gg-section-heading" :class="textClass">
    {{ te(props.title) ? t(props.title) : props.title }}
  </component>
</template>

<script setup lang="ts">
const { te, t } = useI18n();

const props = withDefaults(
  defineProps<{
    title: string;
    as?: 'h1' | 'h2' | 'h3';
    textClass?: string | string[] | Record<string, boolean>;
  }>(),
  { as: 'h2', textClass: undefined },
);
</script>
