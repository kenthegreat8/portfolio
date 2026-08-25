import type { Ref } from 'vue'
import { gsap } from 'gsap'

// ScrollTrigger is registered once, globally, by app/plugins/gsap.client.ts —
// this file only needs the `scrollTrigger` option object gsap.to() accepts.

export interface RevealOptions {
  /** Vertical offset (px) animated from. Reduced automatically on mobile. */
  y?: number
  delay?: number
  /** Stagger between children matching `[data-reveal-item]`, if any exist. */
  stagger?: number
  /** Re-play every time it scrolls into view instead of once. */
  repeat?: boolean
}

/**
 * Fades/slides an element (or its `[data-reveal-item]` children) in as it
 * enters the viewport. No-ops entirely under `prefers-reduced-motion`, and
 * uses a shorter/cheaper animation on small/touch viewports rather than
 * skipping motion there entirely.
 */
export function useReveal(target: Ref<HTMLElement | null | undefined>, options: RevealOptions = {}) {
  if (import.meta.server) return

  onMounted(() => {
    const el = target.value
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const items = el.querySelectorAll<HTMLElement>('[data-reveal-item]')
    const targets = items.length ? Array.from(items) : [el]

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y: isMobile ? Math.min(options.y ?? 24, 16) : (options.y ?? 32) })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.4 : 0.7,
        ease: 'power2.out',
        delay: options.delay ?? 0,
        stagger: isMobile ? Math.min(options.stagger ?? 0.08, 0.06) : (options.stagger ?? 0.1),
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: options.repeat ? 'play reset play reset' : 'play none none none'
        }
      })
    }, el)

    onBeforeUnmount(() => ctx.revert())
  })
}
