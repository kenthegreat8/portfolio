<script setup lang="ts">
const route = useRoute()

const { data: project } = await useAsyncData(`project-${route.path}`, () =>
  queryCollection('projects').path(route.path).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeo({
  title: project.value.title,
  description: project.value.summary
})

const articleRef = ref<HTMLElement | null>(null)
useReveal(articleRef)
</script>

<template>
  <article v-if="project" ref="articleRef" class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
    <UButton to="/projects" variant="link" color="neutral" icon="i-lucide-arrow-left" size="sm" class="mb-4 -ml-2">
      Back to projects
    </UButton>

    <div class="flex items-center gap-2">
      <UBadge
        :color="project.visibility === 'private' ? 'warning' : 'success'"
        variant="subtle"
      >
        {{ project.visibility === 'private' ? 'Architecture overview' : 'Public repo' }}
      </UBadge>
    </div>

    <h1 class="mt-3 text-3xl font-bold tracking-tight">
      {{ project.title }}
    </h1>
    <p class="mt-2 text-muted">
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

    <div class="mt-4 flex gap-3">
      <UButton
        v-if="project.repoUrl"
        :to="project.repoUrl"
        target="_blank"
        icon="i-simple-icons-github"
        variant="outline"
        color="neutral"
      >
        View Repo
      </UButton>
      <UButton
        v-if="project.liveUrl"
        :to="project.liveUrl"
        target="_blank"
        icon="i-lucide-external-link"
        variant="outline"
        color="neutral"
      >
        Live Demo
      </UButton>
    </div>

    <div class="prose mt-10 max-w-none dark:prose-invert">
      <ContentRenderer :value="project" />
    </div>

    <SwaggerGallery
      v-if="project.screenshots?.length"
      :screenshots="project.screenshots"
      class="mt-10"
    />
  </article>
</template>
