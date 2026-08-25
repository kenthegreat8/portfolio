<script setup lang="ts">
// Original abstract geometric mark — angular panel lines and a shield-like
// silhouette evoking Sith/Imperial sci-fi design language. Deliberately not
// a reproduction of any copyrighted character likeness.
</script>

<template>
  <svg
    class="pointer-events-none absolute select-none text-primary opacity-[0.07]"
    viewBox="0 0 400 400"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M200 20 L340 100 L340 260 L200 380 L60 260 L60 100 Z"
      stroke="currentColor"
      stroke-width="2"
    />
    <path d="M200 20 L200 380" stroke="currentColor" stroke-width="1" />
    <path d="M60 100 L340 100" stroke="currentColor" stroke-width="1" />
    <path d="M60 260 L340 260" stroke="currentColor" stroke-width="1" />
    <rect x="150" y="140" width="14" height="70" fill="currentColor" />
    <rect x="184" y="140" width="14" height="70" fill="currentColor" />
    <rect x="218" y="140" width="14" height="70" fill="currentColor" />
    <rect x="252" y="140" width="14" height="70" fill="currentColor" />
  </svg>
</template>
