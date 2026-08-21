<script setup lang="ts">
const year = new Date().getFullYear()

const socials = [
  { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/kenthegreat8' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/ken-nze-b072b827a/' }
]
</script>

<template>
  <footer class="border-t border-default">
    <div class="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
      <p>&copy; {{ year }} Ken Nze <span class="text-charcoal-500">· xKen_t</span>. All rights reserved.</p>
      <div class="flex gap-2">
        <UButton
          v-for="social in socials"
          :key="social.label"
          :to="social.to"
          :icon="social.icon"
          target="_blank"
          variant="ghost"
          color="neutral"
          :aria-label="social.label"
        />
      </div>
    </div>
  </footer>
</template>
