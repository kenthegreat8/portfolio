<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
    <div data-reveal-item class="rounded-2xl border border-default bg-elevated/40 p-8 sm:p-10">
      <p class="text-xs font-semibold tracking-widest text-primary uppercase">
        Who I am
      </p>
      <h2 class="mt-2 text-3xl font-bold tracking-tight">
        About
      </h2>
      <p class="mt-6 max-w-3xl text-muted">
        I am a full-stack software developer focused on engineering robust backend data
        services, custom APIs, and automated workflow solutions. My work centers around
        building clean, asynchronous architectures using Python, FastAPI, and MongoDB,
        paired with modern, responsive frontends built in Nuxt and TypeScript. I like
        solving data flow and integration challenges, turning repetitive manual tasks
        into efficient, automated systems.
      </p>
      <p class="mt-4 max-w-3xl text-muted">
        Outside of software engineering, I bring strong operational discipline and
        leadership experience from my background in emergency services and public
        safety management.
      </p>
    </div>
  </section>
</template>
