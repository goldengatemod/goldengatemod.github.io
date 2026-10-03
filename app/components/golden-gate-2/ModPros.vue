<template>
  <BenefitsSection :benefits="benefits" accent="red" />
</template>

<script setup lang="ts">
import BenefitsSection from '~/components/common/BenefitsSection.vue';
import type { Benefit } from '~/types/benefit';

withDefaults(defineProps<{ benefits?: Benefit[] }>(), {
  benefits: () => [
    {
      label: 'goldenGate2.pros.0',
      icon: 'i-lucide-clock',
    },
    {
      label: 'goldenGate2.pros.1',
      icon: 'i-lucide-book-open',
    },
    {
      label: 'goldenGate2.pros.4',
      icon: 'i-lucide-globe',
    },
    {
      label: 'goldenGate2.pros.2',
      icon: 'i-lucide-mic',
    },
    {
      label: 'goldenGate2.pros.3',
      icon: 'i-lucide-music',
    },
  ],
});
</script>
