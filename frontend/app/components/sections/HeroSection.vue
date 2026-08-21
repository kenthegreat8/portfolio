<script setup lang="ts">
// TODO: once you have a photo, drop it at public/images/avatar.jpg and set
// src="/images/avatar.jpg" below — the ring/fallback styling already fits it.
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-24 sm:px-6">
    <div class="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
      <UAvatar
        icon="i-lucide-user"
        size="3xl"
        class="ring-4 ring-primary/30 bg-elevated"
      />
      <div>
        <p class="text-sm font-medium text-primary">
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
      </div>
    </div>
  </section>
</template>
