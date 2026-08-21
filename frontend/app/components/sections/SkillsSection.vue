<script setup lang="ts">
const skillGroups = [
  { label: 'Frontend', skills: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Python', 'FastAPI', 'MongoDB (PyMongo Async)', 'Discord Bot (Discord.py)', 'Lua / Luau', 'Javascript','Typescript', 'C++', 'Java', 'Bash'] },
  { label: 'Infrastructure & Tooling', skills: ['Git', 'Docker', 'GitHub Actions', 'DNS & Domain Management', 'Linux'] },
  { label: 'Emergency & Operations', skills: ['Firefighter 1','Fire Officer 1', 'EVOC Certified', 'FEMA IS (100, 200, 700)', 'Incident Command'] }
]
</script>

<template>
  <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6">
    <h2 class="text-2xl font-bold tracking-tight">
      Skills
    </h2>
    <div class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="group in skillGroups" :key="group.label">
        <h3 class="text-sm font-semibold text-muted uppercase tracking-wide">
          {{ group.label }}
        </h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <UBadge
            v-for="skill in group.skills"
            :key="skill"
            variant="subtle"
            color="primary"
          >
            {{ skill }}
          </UBadge>
        </div>
      </div>
    </div>
  </section>
</template>
