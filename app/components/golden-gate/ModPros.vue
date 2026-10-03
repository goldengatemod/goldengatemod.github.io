<template>
  <BenefitsSection :benefits="benefits" accent="gold" />
</template>

<script setup lang="ts">
import BenefitsSection from '~/components/common/BenefitsSection.vue';
import type { Benefit } from '~/types/benefit';

withDefaults(defineProps<{ benefits?: Benefit[] }>(), {
  benefits: () => [
    {
      label: 'goldenGate.pros.0',
      icon: 'i-lucide-clock',
    },
    {
      label: 'goldenGate.pros.1',
      icon: 'i-lucide-book-open',
    },
    {
      label: 'goldenGate.pros.2',
      icon: 'i-lucide-users-round',
    },
    {
      label: 'goldenGate.pros.3',
      icon: 'i-lucide-swords',
    },
    {
      label: 'goldenGate.pros.4',
      icon: 'i-lucide-mic',
    },
  ],
});
</script>
