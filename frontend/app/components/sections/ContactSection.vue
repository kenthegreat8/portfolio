<script setup lang="ts">
// TODO: replace with your real contact email and social links
const email = 'knze2006@gmail.com'

const links = [
  { label: 'Email', icon: 'i-lucide-mail', to: `mailto:${email}` },
  { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/kenthegreat8' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/ken-nze-b072b827a/' }
]
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
    <h2 class="text-2xl font-bold tracking-tight">
      Contact
    </h2>
    <p class="mt-4 max-w-2xl text-muted">
      Best way to reach me is email — happy to talk about roles, freelance
      work, or the projects below.
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <UButton
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        :icon="link.icon"
        target="_blank"
        variant="outline"
        color="neutral"
      >
        {{ link.label }}
      </UButton>
    </div>
  </section>
</template>
