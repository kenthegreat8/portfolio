<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="rounded-lg border border-default bg-elevated/50 p-5">
    <div class="flex items-center gap-2">
      <UIcon name="i-lucide-network" class="size-5 text-primary" />
      <h3 class="font-semibold">
        {{ title ?? 'Architecture Notes' }}
      </h3>
    </div>
    <div class="prose prose-sm mt-3 max-w-none dark:prose-invert">
      <slot />
    </div>
  </div>
</template>
