<script setup lang="ts">
useSeo({
  title: 'Projects',
  description: 'Full-stack and backend projects — some public, some shown via architecture notes.'
})
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
    <h1 class="text-3xl font-bold tracking-tight">
      Projects
    </h1>
    <p class="mt-2 max-w-2xl text-muted">
      Public repos link out to GitHub. Private/backend projects are shown
      through architecture notes and API documentation screenshots instead of
      source code.
    </p>
    <div class="mt-8">
      <ProjectGrid />
    </div>
  </section>
</template>
