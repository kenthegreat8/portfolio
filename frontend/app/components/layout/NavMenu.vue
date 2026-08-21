<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <nav class="flex items-center gap-1">
    <UButton
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      variant="ghost"
      color="neutral"
    >
      {{ link.label }}
    </UButton>
  </nav>
</template>
