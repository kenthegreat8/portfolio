<script setup lang="ts">
useSeo({
  title: 'Projects',
  description: 'Full-stack and backend projects — some public, some shown via architecture notes.'
})

const headerRef = ref<HTMLElement | null>(null)
useReveal(headerRef)
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
    <div ref="headerRef">
      <p data-reveal-item class="text-xs font-semibold tracking-widest text-primary uppercase">
        My work
      </p>
      <h1 data-reveal-item class="mt-2 text-3xl font-bold tracking-tight">
        Projects
      </h1>
      <p data-reveal-item class="mt-2 max-w-2xl text-muted">
        Public repos link out to GitHub. Private/backend projects are shown
        through architecture notes and API documentation screenshots instead of
        source code.
      </p>
    </div>
    <div class="mt-8">
      <ProjectGrid />
    </div>
  </section>
</template>
