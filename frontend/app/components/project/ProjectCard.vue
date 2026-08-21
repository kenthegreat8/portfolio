<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="project.path"
    class="block rounded-lg border border-default p-5 transition-colors hover:border-primary"
  >
    <div class="flex items-start justify-between gap-2">
      <h3 class="font-semibold">
        {{ project.title }}
      </h3>
      <UBadge
        :color="project.visibility === 'private' ? 'warning' : 'success'"
        variant="subtle"
        size="sm"
      >
        {{ project.visibility === 'private' ? 'Architecture overview' : 'Public repo' }}
      </UBadge>
    </div>
    <p class="mt-2 text-sm text-muted">
      {{ project.summary }}
    </p>
    <div class="mt-4 flex flex-wrap gap-1.5">
      <UBadge
        v-for="tech in project.stack"
        :key="tech"
        variant="subtle"
        color="neutral"
        size="sm"
      >
        {{ tech }}
      </UBadge>
    </div>
  </NuxtLink>
</template>
