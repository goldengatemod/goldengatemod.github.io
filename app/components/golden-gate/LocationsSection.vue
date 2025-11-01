<template>
  <section id="locations">
    <div class="mx-auto">
      <SectionHeader title="goldenGate.world.title" />
      <div class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        <p class="pb-6">{{ t('goldenGate.world.description') }}</p>
        <InteractiveMap
          :map-url="JarkendarMap"
          :original-width="1024"
          :original-height="1024"
          :markers="markers"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import InteractiveMap from '~/components/common/InteractiveMap.vue'
import JarkendarMap from '~/assets/img/golden-gate/gg-jarkendar-map.webp'

const { t } = useI18n()

interface Marker {
  id: string
  x: number
  y: number
  title: string
  description?: string
  icon?: string
  color?: string
}

const markers = ref<Marker[]>([
  {
    id: 'waterMages',
    x: 835,
    y: 595,
    title: 'goldenGate.world.fractions.waterMages.title',
    description: 'goldenGate.world.fractions.waterMages.description',
  },
  {
    id: 'pirates',
    x: 115,
    y: 225,
    title: 'goldenGate.world.fractions.pirates.title',
    description: 'goldenGate.world.fractions.pirates.description',
  },
  {
    id: 'paladins',
    x: 535,
    y: 520,
    title: 'goldenGate.world.fractions.paladins.title',
    description: 'goldenGate.world.fractions.paladins.description',
  },
  {
    id: 'orcs',
    x: 405,
    y: 125,
    title: 'goldenGate.world.fractions.orcs.title',
    description: 'goldenGate.world.fractions.orcs.description',
  },
  {
    id: 'bandits',
    x: 860,
    y: 270,
    title: 'goldenGate.world.fractions.bandits.title',
    description: 'goldenGate.world.fractions.bandits.description',
  },
])
</script>
