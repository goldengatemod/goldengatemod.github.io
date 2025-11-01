<template>
  <section id="guilds">
    <div class="container mx-auto">
      <SectionHeader title="goldenGate.guilds.title" />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-4 md:mx-auto">
        <UPageCard
          v-for="(prop, index) in guildProps"
          :key="`guild-${index}`"
          :icon="prop.icon"
          :title="t(prop.title)"
          :description="t(prop.description)"
          :ui="{
            title: 'text-white!',
            leadingIcon: 'size-8',
          }"
        />
      </div>

      <p
        class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto mt-8 text-center"
      >
        {{ t('goldenGate.guilds.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'

const { t } = useI18n()

const guildProps = [
  {
    title: 'goldenGate.guilds.array.paladin.title',
    description: 'goldenGate.guilds.array.paladin.description',
    icon: 'i-lucide-shield',
  },
  {
    title: 'goldenGate.guilds.array.orcMerc.title',
    description: 'goldenGate.guilds.array.orcMerc.description',
    icon: 'i-lucide-hand-fist',
  },
  {
    title: 'goldenGate.guilds.array.waterMage.title',
    description: 'goldenGate.guilds.array.waterMage.description',
    icon: 'i-lucide-droplet',
  },
]
</script>
