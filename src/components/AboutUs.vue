<template>
  <TextAndPhoto>
    <template #title>
      <h1>{{ $t('whoWeAre') }}</h1>
    </template>
    <template #content>
      <p>{{ $t('maatoolIsDeveloped') }}</p>
    </template>
    <template #photo>
      <img src="@/assets/about-us/about_us.webp" alt="Who We Are" />
    </template>
  </TextAndPhoto>
</template>
<script setup lang="ts">
import TextAndPhoto from '@/components/text-and-photo/TextAndPhoto.vue'
</script>