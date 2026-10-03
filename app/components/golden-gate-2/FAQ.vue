<template>
  <section id="faq">
    <div class="container mx-auto">
      <SectionHeader title="FAQ" />
    </div>
    <div class="mx-auto">
      <UAccordion
        type="multiple"
        trailing-icon="i-lucide-plus"
        :items="items"
        :ui="{
          root: 'text-(--gg-text)',
          trigger: 'text-(--gg-text)',
          label:
            'text-(--gg-text) text-start text-base md:text-lg font-semibold break-words',
          content: 'text-(--gg-text)',
        }"
      >
        <template #default="{ item }">
          {{ t(item.label ?? '') }}
        </template>
        <template #content="{ item }">
          <div
            class="text-(--gg-text) text-base md:text-lg leading-relaxed pb-3.5"
          >
            {{ t(item.content ?? '') }}
          </div>
        </template>
      </UAccordion>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '~/components/common/SectionHeader.vue';
import type { AccordionItem } from '@nuxt/ui';

const { t } = useI18n();

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
]);
</script>
