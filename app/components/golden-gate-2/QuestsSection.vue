<template>
  <section id="quests">
    <div class="mx-auto">
      <SectionHeader title="goldenGate2.quests.title" />

      <div class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        <p v-for="i in 4" :key="i" :class="{ 'mb-3': i < 4 }">
          {{ t(`goldenGate2.quests.description.${i - 1}`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'

const { t } = useI18n()
</script>
