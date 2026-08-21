export interface ProjectScreenshot {
  src: string
  caption?: string
}

export interface Project {
  title: string
  summary: string
  stack: string[]
  visibility: 'public' | 'private'
  repoUrl?: string
  liveUrl?: string
  coverImage?: string
  screenshots?: ProjectScreenshot[]
  featured: boolean
  date: string
  path: string
}
