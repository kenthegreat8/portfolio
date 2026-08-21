export function useSeo(options: { title: string; description?: string }) {
  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description
  })
}
