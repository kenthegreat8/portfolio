import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        summary: z.string(),
        stack: z.array(z.string()),
        visibility: z.enum(['public', 'private']),
        repoUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        coverImage: z.string().optional(),
        screenshots: z.array(z.object({
          src: z.string(),
          caption: z.string().optional()
        })).optional(),
        featured: z.boolean().default(false),
        date: z.string()
      })
    })
  }
})
