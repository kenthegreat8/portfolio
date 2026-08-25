<script setup lang="ts">
// A binary shrink-on-scroll toggle is cheap enough as a plain scroll
// listener — GSAP is reserved for actual motion (reveals, hero timeline).
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="sticky top-0 z-50 px-4 pt-4 sm:px-6">
    <div
      class="mx-auto flex items-center justify-between rounded-full border border-default/60 bg-elevated/80 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-300"
      :class="scrolled ? 'max-w-3xl px-4 py-2' : 'max-w-4xl px-5 py-3'"
    >
      <NuxtLink to="/" class="flex items-center">
        <img src="/logo-mark.png" alt="Ken Nze" class="h-8 w-auto">
      </NuxtLink>
      <NavMenu />
    </div>
  </header>
</template>
