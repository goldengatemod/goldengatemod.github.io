<template>
  <section id="locations">
    <div class="container mx-auto">
      <SectionHeader title="Patch 1.2" />

      <p class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto">
        {{ t('goldenGate.patch12.description.0') }}
      </p>

      <ul class="mt-6 space-y-3 list-none text-base md:text-lg mx-4 md:mx-auto">
        <li
          v-for="i in 7"
          :key="`changes-${i}`"
          class="flex items-start gap-3 text-gray-200 p-3"
        >
          <UIcon
            name="i-lucide-check-circle"
            class="w-5 h-5 text-primary shrink-0 mt-0.5"
          />
          <span>{{ t(`goldenGate.patch12.changes.${i - 1}`) }}</span>
        </li>
      </ul>

      <p class="text-gray-200 text-base md:text-lg mx-4 md:mx-auto mt-6">
        {{ t('goldenGate.patch12.description.1') }}
      </p>
    </div>

    <div class="flex justify-center mt-10">
      <IframeWrapper
        src="https://www.youtube.com/embed/ZOpE6UlLHPE?si=XWdHI9igJEXbDVdO"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import IframeWrapper from '~/components/common/IframeWrapper.vue'

const { t } = useI18n()
</script>
