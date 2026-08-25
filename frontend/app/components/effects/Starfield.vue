<script setup lang="ts">
// Static star field everywhere (one-time canvas paint, effectively free).
// The subtle twinkle animation only runs on desktop-class pointers, since a
// continuous rAF loop is the one part of this that actually costs anything.
const canvasRef = ref<HTMLCanvasElement | null>(null)
let rafId = 0

interface Star { x: number, y: number, r: number, baseAlpha: number, phase: number }

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return

  const rect = canvas.getBoundingClientRect()
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  ctx.scale(dpr, dpr)

  const isDesktop = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const count = isDesktop ? 90 : 35

  const stars: Star[] = Array.from({ length: count }, () => ({
    x: Math.random() * rect.width,
    y: Math.random() * rect.height,
    r: Math.random() * 1.2 + 0.3,
    baseAlpha: Math.random() * 0.5 + 0.25,
    phase: Math.random() * Math.PI * 2
  }))

  function paint(t: number) {
    ctx!.clearRect(0, 0, rect.width, rect.height)
    for (const s of stars) {
      const twinkle = isDesktop && !reducedMotion ? Math.sin(t / 1400 + s.phase) * 0.25 : 0
      ctx!.globalAlpha = Math.max(0, Math.min(1, s.baseAlpha + twinkle))
      ctx!.fillStyle = '#fdf2f4'
      ctx!.beginPath()
      ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx!.fill()
    }
  }

  if (isDesktop && !reducedMotion) {
    const loop = (t: number) => {
      paint(t)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
  } else {
    paint(0)
  }
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <canvas ref="canvasRef" class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />
</template>
