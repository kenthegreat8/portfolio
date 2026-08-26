<script setup lang="ts">
import { gsap } from 'gsap'

const techStack = [
  { label: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
  { label: 'Vue', icon: 'simple-icons:vuedotjs' },
  { label: 'TypeScript', icon: 'simple-icons:typescript' },
  { label: 'Python', icon: 'simple-icons:python' },
  { label: 'FastAPI', icon: 'simple-icons:fastapi' },
  { label: 'MongoDB', icon: 'simple-icons:mongodb' },
  { label: 'Docker', icon: 'simple-icons:docker' }
]

const heroRef = ref<HTMLElement | null>(null)
const cardRef = ref<HTMLElement | null>(null)
useReveal(heroRef)

// Subtle parallax tilt on the photo card — desktop pointer only, skipped
// entirely on touch devices where it'd just be dead weight.
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  const card = cardRef.value
  if (!card) return

  const moveX = gsap.quickTo(card, 'rotateY', { duration: 0.6, ease: 'power2.out' })
  const moveY = gsap.quickTo(card, 'rotateX', { duration: 0.6, ease: 'power2.out' })

  function onMove(e: MouseEvent) {
    const rect = card!.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    moveX(px * 10)
    moveY(py * -10)
  }
  function onLeave() {
    moveX(0)
    moveY(0)
  }

  card.addEventListener('mousemove', onMove)
  card.addEventListener('mouseleave', onLeave)
  onBeforeUnmount(() => {
    card.removeEventListener('mousemove', onMove)
    card.removeEventListener('mouseleave', onLeave)
  })
})
</script>

<template>
  <section class="relative overflow-hidden">
    <Starfield class="opacity-70" />
    <div
      class="absolute top-0 left-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/20 blur-[110px]"
      aria-hidden="true"
    />
    <SithMotif class="-right-20 top-8 hidden h-105 w-105 sm:block" />

    <div ref="heroRef" class="relative mx-auto max-w-5xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div
            data-reveal-item
            class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <UIcon name="i-lucide-sparkles" class="size-3.5" />
            Full-Stack Developer
          </div>

          <h1 data-reveal-item class="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Ken <span class="text-primary">Nze</span>
          </h1>

          <p data-reveal-item class="mt-5 max-w-xl text-lg text-muted">
            I build production-ready web apps and backend services — Nuxt/Vue on the
            frontend, FastAPI and async MongoDB on the backend.
          </p>

          <div data-reveal-item class="mt-8 flex flex-wrap gap-3">
            <UButton to="/projects" size="lg">
              View Projects
            </UButton>
            <UButton to="/contact" size="lg" variant="outline" color="neutral">
              Get in Touch
            </UButton>
          </div>

          <div data-reveal-item class="mt-10">
            <p class="text-xs font-medium tracking-widest text-dimmed uppercase">
              Technologies I work with
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <div
                v-for="tech in techStack"
                :key="tech.label"
                class="flex items-center gap-1.5 rounded-lg border border-default bg-elevated/50 px-2.5 py-1.5 text-xs text-toned"
              >
                <UIcon :name="tech.icon" class="size-3.5" />
                {{ tech.label }}
              </div>
            </div>
          </div>
        </div>

        <div data-reveal-item class="mx-auto w-full max-w-sm" style="perspective: 800px">
          <div ref="cardRef" class="relative">
            <div class="aspect-4/5 overflow-hidden rounded-3xl border border-default bg-elevated/50 backdrop-blur-sm">
              <img
                src="/avatar-hero.jpg"
                alt="Ken Nze"
                class="h-full w-full object-cover"
              >
            </div>
            <img
              src="/logo-mark.png"
              alt=""
              class="absolute -bottom-5 -left-5 h-16 w-auto rounded-xl border border-default bg-elevated p-2 shadow-lg shadow-black/40"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
