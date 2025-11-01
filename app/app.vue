<template>
  <div>
    <NuxtLayout>
      <UApp>
        <NuxtPage />
      </UApp>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return t('navigation.goldenGate', 'Złote Wrota')
    return `${titleChunk} - ${t('navigation.goldenGate', 'Złote Wrota')}`
  },
  title: `${t('navigation.goldenGate', 'Złote Wrota')}`,
})
</script>

<style lang="css">
body {
  font-family: 'Poppins', 'Roboto', sans-serif;
}
</style>
