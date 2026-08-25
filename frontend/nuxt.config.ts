// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  // Dark mode is the brand default; 'fallback' covers browsers/crawlers that
  // don't report a system preference at all.
  colorMode: { preference: 'dark', fallback: 'dark' },
  // Global registration so components used inside markdown (MDC) resolve at
  // runtime — auto-imported local components aren't visible to MDCRenderer.
  // pathPrefix: false preserves the default un-prefixed naming for nested
  // folders (e.g. components/layout/AppHeader.vue -> <AppHeader>).
  components: [{ path: '~/components', pathPrefix: false, global: true }],
  content: {
    // Use Node's built-in sqlite module instead of the native better-sqlite3
    // addon, which requires a C++ build toolchain not present on this machine.
    experimental: { sqliteConnector: 'native' }
  },
  icon: {
    // Icon names referenced dynamically (e.g. via a JS array, not a literal
    // string in a template) aren't caught by the client bundle auto-scan.
    clientBundle: {
      icons: [
        'lucide:mail', 'lucide:network', 'lucide:external-link', 'lucide:hash', 'lucide:user',
        'lucide:monitor', 'lucide:server', 'lucide:wrench', 'lucide:flame',
        'lucide:rocket', 'lucide:layers', 'lucide:award',
        'lucide:sparkles', 'lucide:folder-git-2', 'lucide:arrow-left',
        'simple-icons:github', 'simple-icons:linkedin',
        'simple-icons:nuxtdotjs', 'simple-icons:vuedotjs', 'simple-icons:typescript',
        'simple-icons:python', 'simple-icons:fastapi', 'simple-icons:mongodb', 'simple-icons:docker'
      ]
    }
  },
  app: {
    head: {
      titleTemplate: '%s · Ken Nze',
      htmlAttrs: { lang: 'en' },
      link: [
        // This replaces the Nuxt mountain icon with your new K N logo
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
    // keninze.com is live and pointed at GitHub Pages, so the site now
    // serves from the domain root rather than a /portfolio/ subpath.
    baseURL: '/',
    buildAssetsDir: '_nuxt',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, // Prevents 404 prerender errors from killing the build
      routes: ['/']
    }
  }
})
