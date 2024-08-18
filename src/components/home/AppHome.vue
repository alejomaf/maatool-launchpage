<template>
  <TextAndPhoto :asc="false">
    <template #title>
      <h1>{{ $t('whatIsMaatool') }}</h1>
    </template>
    <template #content>
      <p>{{ $t('maatoolIsAWebBasedTool') }}</p>
    </template>
    <template #photo>
      <img src="@/assets/tool/program.webp" alt="MAATool" />
    </template>
  </TextAndPhoto>
</template>
<script setup lang="ts">
import TextAndPhoto from '@/components/text-and-photo/TextAndPhoto.vue'
</script>