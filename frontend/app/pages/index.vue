<script setup lang="ts">
useSeo({
  title: 'Home',
  description: 'Full-stack developer portfolio — Nuxt, Vue, FastAPI, and MongoDB projects.'
})

const { data: featured } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').where('featured', '=', true).order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <HeroSection />
    <SkillsSection />

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <UButton to="/projects" variant="link">
          View all
        </UButton>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
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
