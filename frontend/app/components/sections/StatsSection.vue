<script setup lang="ts">
import { gsap } from 'gsap'
import { skillGroups, totalSkillCount } from '~/data/skills'

const { data: projects } = await useAsyncData('stats-projects', () => queryCollection('projects').all())
const projectCount = computed(() => projects.value?.length ?? 0)
const certCount = skillGroups.find(g => g.label === 'Emergency & Operations')?.skills.length ?? 0

const stats = computed(() => [
  { label: 'Projects Shipped', value: projectCount.value, icon: 'i-lucide-rocket' },
  { label: 'Technologies Used', value: totalSkillCount, icon: 'i-lucide-layers' },
  { label: 'Certifications', value: certCount, icon: 'i-lucide-award' }
])

const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef)

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const numberEls = sectionRef.value?.querySelectorAll<HTMLElement>('[data-stat-value]')
  if (!numberEls) return

  numberEls.forEach((el, i) => {
    const target = stats.value[i]?.value ?? 0
    if (reducedMotion) {
      el.textContent = String(target)
      return
    }
    const counter = { val: 0 }
    gsap.to(counter, {
      val: target,
      duration: 1.2,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => { el.textContent = String(Math.round(counter.val)) }
    })
  })
})
</script>

<template>
  <section ref="sectionRef" class="border-y border-default bg-elevated/30">
    <div class="mx-auto grid max-w-5xl grid-cols-3 gap-6 px-4 py-12 sm:px-6">
      <div v-for="stat in stats" :key="stat.label" data-reveal-item class="text-center">
        <UIcon :name="stat.icon" class="mx-auto size-6 text-primary" />
        <p class="mt-3 text-3xl font-bold tracking-tight">
          <span data-stat-value>0</span>
        </p>
        <p class="mt-1 text-sm text-muted">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
