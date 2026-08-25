<script setup lang="ts">
useSeo({
  title: 'Home',
  description: 'Full-stack developer portfolio — Nuxt, Vue, FastAPI, and MongoDB projects.'
})

const { data: featured } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').where('featured', '=', true).order('date', 'DESC').all()
)

const featuredRef = ref<HTMLElement | null>(null)
useReveal(featuredRef, { stagger: 0.1 })
</script>

<template>
  <div>
    <HeroSection />
    <StatsSection />
    <SkillsSection />

    <section ref="featuredRef" class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div class="flex items-end justify-between">
        <div data-reveal-item>
          <p class="text-xs font-semibold tracking-widest text-primary uppercase">
            Recent work
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <UButton to="/projects" variant="link">
          View all
        </UButton>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <ProjectCard
          v-for="project in featured"
          :key="project.path"
          :project="project"
        />
      </div>
    </section>

    <ContactSection />
  </div>
</template>
