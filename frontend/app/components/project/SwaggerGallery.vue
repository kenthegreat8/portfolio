<script setup lang="ts">
import type { ProjectScreenshot } from '~/types/project'

defineProps<{
  screenshots: ProjectScreenshot[]
}>()

const open = ref(false)
const activeIndex = ref(0)

function openAt(index: number) {
  activeIndex.value = index
  open.value = true
}
</script>

<template>
  <div>
    <div class="grid gap-3 sm:grid-cols-2">
      <button
        v-for="(shot, index) in screenshots"
        :key="shot.src"
        type="button"
        class="overflow-hidden rounded-lg border border-default text-left"
        @click="openAt(index)"
      >
        <img :src="shot.src" :alt="shot.caption ?? 'API screenshot'" class="w-full">
        <p v-if="shot.caption" class="p-2 text-xs text-muted">
          {{ shot.caption }}
        </p>
      </button>
    </div>

    <UModal v-model:open="open">
      <template #content>
        <div class="p-4">
          <img
            :src="screenshots[activeIndex]?.src"
            :alt="screenshots[activeIndex]?.caption ?? 'API screenshot'"
            class="w-full rounded"
          >
          <p v-if="screenshots[activeIndex]?.caption" class="mt-2 text-sm text-muted">
            {{ screenshots[activeIndex]?.caption }}
          </p>
        </div>
      </template>
    </UModal>
  </div>
</template>
