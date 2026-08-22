const siteUrl = 'https://keninze.com'

export function useSeo(options: { title: string; description?: string }) {
  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    // Social-preview crawlers need an absolute URL, and render on
    // unpredictable backgrounds — so this uses the flattened white-background
    // logo.jpg rather than the transparent logo-mark.png used on-page.
    ogImage: `${siteUrl}/logo.jpg`,
    twitterCard: 'summary_large_image',
    twitterImage: `${siteUrl}/logo.jpg`
  })
}
