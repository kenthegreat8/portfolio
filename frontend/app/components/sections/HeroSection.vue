<script setup lang="ts">
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-24 sm:px-6">
    <img src="/logo-mark.png" alt="" class="h-20 w-auto sm:h-24">
    <p class="mt-6 text-sm font-medium text-primary">
      Full-Stack Developer
    </p>
    <h1 class="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
      Ken Nze
    </h1>
    <p class="mt-4 max-w-2xl text-lg text-muted">
      I build production-ready web apps and backend services — Nuxt/Vue on the
      frontend, FastAPI and async MongoDB on the backend.
    </p>
    <div class="mt-8 flex gap-3">
      <UButton to="/projects" size="lg">
        View Projects
      </UButton>
      <UButton to="/contact" size="lg" variant="outline" color="neutral">
        Get in Touch
      </UButton>
    </div>
  </section>
</template>
