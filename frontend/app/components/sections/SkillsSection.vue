<script setup lang="ts">
import { skillGroups } from '~/data/skills'

const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef, { stagger: 0.12 })
</script>

<template>
  <section ref="sectionRef" class="mx-auto max-w-5xl px-4 py-20 sm:px-6">
    <p class="text-xs font-semibold tracking-widest text-primary uppercase">
      What I work with
    </p>
    <h2 class="mt-2 text-3xl font-bold tracking-tight">
      Skills
    </h2>

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="group in skillGroups"
        :key="group.label"
        data-reveal-item
        class="rounded-2xl border border-default bg-elevated/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
      >
        <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <UIcon :name="group.icon" class="size-5" />
        </div>
        <h3 class="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
          {{ group.label }}
        </h3>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <UBadge
            v-for="skill in group.skills"
            :key="skill"
            variant="subtle"
            color="primary"
            size="sm"
          >
            {{ skill }}
          </UBadge>
        </div>
      </div>
    </div>
  </section>
</template>
