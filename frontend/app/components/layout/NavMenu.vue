<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <nav class="flex items-center gap-1">
    <UButton
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :variant="isActive(link.to) ? 'soft' : 'ghost'"
      :color="isActive(link.to) ? 'primary' : 'neutral'"
    >
      {{ link.label }}
    </UButton>
  </nav>
</template>
