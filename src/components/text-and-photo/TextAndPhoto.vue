<template>
  <div>
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <p>
        <slot name="content" />
      </p>
    </div>
    <div>
      <slot name="photo" />
    </div>
  </div>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
  asc: boolean
}>(), {
  asc: true
})
</script>