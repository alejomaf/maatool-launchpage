<template>
  <li>
    <a :href="url">
      <slot name="label" />
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>