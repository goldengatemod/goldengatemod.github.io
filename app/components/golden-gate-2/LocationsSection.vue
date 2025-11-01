<template>
  <section id="locations">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.world.title" />
      <div class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        <p class="pb-6">{{ t('goldenGate2.world.description') }}</p>
        <InteractiveMap
          :map-url="SamoaMap"
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
import SamoaMap from '~/assets/img/golden-gate-2/gg2-samoa-map.webp'

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
    id: 'town',
    x: 535,
    y: 225,
    title: 'goldenGate2.world.locations.town.title',
    description: 'goldenGate2.world.locations.town.description',
  },
  {
    id: 'hunters',
    x: 640,
    y: 450,
    title: 'goldenGate2.world.locations.huntersCamp.title',
    description: 'goldenGate2.world.locations.huntersCamp.description',
  },
  {
    id: 'bandits',
    x: 785,
    y: 575,
    title: 'goldenGate2.world.locations.banditsCamp.title',
    description: 'goldenGate2.world.locations.banditsCamp.description',
  },
  {
    id: 'hasis',
    x: 500,
    y: 650,
    title: 'goldenGate2.world.locations.hasisRuins.title',
    description: 'goldenGate2.world.locations.hasisRuins.description',
  },
  {
    id: 'gereza',
    x: 415,
    y: 600,
    title: 'goldenGate2.world.locations.gereza.title',
    description: 'goldenGate2.world.locations.gereza.description',
  },
  {
    id: 'lumberjacks',
    x: 375,
    y: 375,
    title: 'goldenGate2.world.locations.lumberjackCamp.title',
    description: 'goldenGate2.world.locations.lumberjackCamp.description',
  },
  {
    id: 'swamps',
    x: 600,
    y: 620,
    title: 'goldenGate2.world.locations.swamps.title',
    description: 'goldenGate2.world.locations.swamps.description',
  },
])
</script>

<style lang="css" scoped>
:deep(.marker-icon) {
  color: white !important;

  .map-marker:hover & {
    color: white !important;
  }
}
</style>
