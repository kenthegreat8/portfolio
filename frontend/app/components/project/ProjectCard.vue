<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="project.path"
    data-reveal-item
    class="group relative block overflow-hidden rounded-2xl border border-default bg-elevated/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
  >
    <div class="flex h-28 items-center justify-center border-b border-default bg-linear-to-br from-primary/15 via-transparent to-transparent">
      <UIcon
        name="i-lucide-folder-git-2"
        class="size-9 text-primary/60 transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div class="p-5">
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
    </div>
  </NuxtLink>
</template>
