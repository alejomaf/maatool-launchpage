<template>
<nav>
  <ul>
    <HeaderNavItem url="/">
      <template #label>
        {{ $t('home') }}
      </template>
    </HeaderNavItem>
    <HeaderNavItem url="/about-us">
      <template #label>
        {{ $t('aboutUs') }}
      </template>
    </HeaderNavItem>
    <HeaderNavItem url="/contact">
      <template #label>
        {{ $t('contact') }}
      </template>
    </HeaderNavItem>
    <HeaderNavItem url="/WIKI">
      <template #label>
        {{ $t('wiki') }}
      </template>
    </HeaderNavItem>
  </ul>
</nav>
</template>

<script setup lang="ts">
import HeaderNavItem from './HeaderNavItem.vue'
</script>