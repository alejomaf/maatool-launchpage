<template>
  <IconAndText>
    <template #icon>
      <FlexibleIcon />
    </template>
    <template #text>
      <h3>{{ $t('flexible') }}</h3>
      <p>{{ $t('flexibleDescription') }}</p>
    </template>
  </IconAndText>
  <IconAndText>
    <template #icon>
      <InteractiveIcon />
    </template>
    <template #text>
      <h3>{{ $t('interactive') }}</h3>
      <p>{{ $t('interactiveDescription') }}</p>
    </template>
  </IconAndText>
  <IconAndText>
    <template #icon>
      <UserFriendlyIcon />
    </template>
    <template #text>
      <h3>{{ $t('userFriendly') }}</h3>
      <p>{{ $t('userFriendlyDescription') }}</p>
    </template>
  </IconAndText>
</template>
<script setup lang="ts">
import IconAndText from '@/components/icon-and-text/IconAndText.vue'
import FlexibleIcon from '@/components/icons/FlexibleIcon.vue'
import InteractiveIcon from '@/components/icons/InteractiveIcon.vue'
import UserFriendlyIcon from '@/components/icons/UserFriendlyIcon.vue'
</script>