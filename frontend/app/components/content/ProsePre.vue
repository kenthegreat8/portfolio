<script setup lang="ts">
// Overrides @nuxtjs/mdc's default code-block renderer (matched by component
// name, not import) so ```mermaid fences render as actual diagrams. Every
// other language falls through to the exact same markup MDC ships by
// default, so normal code blocks are unaffected.
const props = defineProps<{
  code?: string
  language?: string | null
  class?: string | null
}>()

const isMermaid = computed(() => props.language === 'mermaid')
const svg = ref('')

onMounted(async () => {
  if (!isMermaid.value || !props.code) return
  try {
    svg.value = await renderMermaid(props.code)
  } catch {
    // Rendering failed (bad diagram syntax) — leave svg empty so the raw
    // code block below stays visible as a fallback instead of nothing.
  }
})
</script>

<template>
  <div
    v-if="isMermaid && svg"
    class="my-6 flex justify-center overflow-x-auto rounded-xl border border-default bg-elevated/40 p-6"
    v-html="svg"
  />
  <pre v-else :class="$props.class"><slot /></pre>
</template>
