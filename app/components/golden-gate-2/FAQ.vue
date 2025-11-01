<template>
  <section id="faq">
    <div class="container mx-auto">
      <SectionHeader title="FAQ" />
    </div>
    <div class="container max-w-5xl mx-auto px-2 md:px-0">
      <UAccordion
        type="multiple"
        trailing-icon="i-lucide-plus"
        :items="items"
        :ui="{
          label: 'text-start text-base md:text-lg font-semibold break-words',
          item: 'border-[#333]',
        }"
      >
        <template #default="{ item }">
          {{ t(item.label ?? '') }}
        </template>
        <template #content="{ item }">
          <div class="text-base md:text-lg pb-3.5">
            {{ t(item.content ?? '') }}
          </div>
        </template>
      </UAccordion>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue'
import type { AccordionItem } from '@nuxt/ui'

const { t } = useI18n()

const items = ref<AccordionItem[]>([
  { label: 'goldenGate2.faq.0.question', content: 'goldenGate2.faq.0.answer' },
  { label: 'goldenGate2.faq.1.question', content: 'goldenGate2.faq.1.answer' },
  { label: 'goldenGate2.faq.2.question', content: 'goldenGate2.faq.2.answer' },
  { label: 'goldenGate2.faq.3.question', content: 'goldenGate2.faq.3.answer' },
  { label: 'goldenGate2.faq.4.question', content: 'goldenGate2.faq.4.answer' },
  { label: 'goldenGate2.faq.5.question', content: 'goldenGate2.faq.5.answer' },
  { label: 'goldenGate2.faq.6.question', content: 'goldenGate2.faq.6.answer' },
  { label: 'goldenGate2.faq.7.question', content: 'goldenGate2.faq.7.answer' },
  { label: 'goldenGate2.faq.8.question', content: 'goldenGate2.faq.8.answer' },
  { label: 'goldenGate2.faq.9.question', content: 'goldenGate2.faq.9.answer' },
  {
    label: 'goldenGate2.faq.10.question',
    content: 'goldenGate2.faq.10.answer',
  },
  {
    label: 'goldenGate2.faq.11.question',
    content: 'goldenGate2.faq.11.answer',
  },
  {
    label: 'goldenGate2.faq.12.question',
    content: 'goldenGate2.faq.12.answer',
  },
  {
    label: 'goldenGate2.faq.13.question',
    content: 'goldenGate2.faq.13.answer',
  },
])
</script>

<style lang="scss" scoped>
.container {
  &.max-w-screen-lg {
    @media (max-width: 1024px) {
      max-width: calc(100vw - 2rem);
    }

    @media (max-width: 768px) {
      max-width: calc(100vw - 1.5rem);
    }

    @media (max-width: 480px) {
      max-width: calc(100vw - 1rem);
    }
  }
}
</style>
