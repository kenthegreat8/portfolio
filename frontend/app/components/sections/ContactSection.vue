<script setup lang="ts">
const email = 'knze2006@gmail.com'

const links = [
  { label: 'Email', icon: 'i-lucide-mail', to: `mailto:${email}` },
  { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/kenthegreat8' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/ken-nze-b072b827a/' }
]

const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
    <div data-reveal-item class="relative overflow-hidden rounded-2xl border border-default bg-elevated/40 p-8 text-center sm:p-12">
      <div class="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" aria-hidden="true" />
      <p class="text-xs font-semibold tracking-widest text-primary uppercase">
        Get in touch
      </p>
      <h2 class="mt-2 text-3xl font-bold tracking-tight">
        Contact
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-muted">
        Best way to reach me is email — happy to talk about roles, freelance
        work, or the projects below.
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
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
    </div>
  </section>
</template>
