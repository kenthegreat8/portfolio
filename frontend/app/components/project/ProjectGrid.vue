<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('date', 'DESC').all()
)
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <ProjectCard
      v-for="project in projects"
      :key="project.path"
      :project="project"
    />
  </div>
</template>
