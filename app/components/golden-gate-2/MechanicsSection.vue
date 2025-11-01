<template>
  <section id="mechanics">
    <div class="container mx-auto">
      <SectionHeader title="goldenGate2.mechanics.title" />

      <p class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        {{ t('goldenGate2.mechanics.description') }}
      </p>

      <ul class="mt-3 space-y-1 list-none text-base md:text-lg">
        <li
          v-for="i in 7"
          :key="`mechanics-${i}`"
          class="flex items-start gap-3 text-gray-200 p-3"
        >
          <UIcon
            name="i-lucide-check-circle"
            class="w-5 h-5 text-error shrink-0 mt-0.5"
          />
          <span>{{ t(`goldenGate2.mechanics.list.${i - 1}`) }}</span>
        </li>
      </ul>

      <div class="flex justify-center mt-10">
        <ResponsiveIframe
          src="https://www.youtube.com/embed/wx3JItpg8ps?si=fGNPwi6wi21BmohG"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import ResponsiveIframe from '~/components/common/ResponsiveIframe.vue'

const { t } = useI18n()
</script>
