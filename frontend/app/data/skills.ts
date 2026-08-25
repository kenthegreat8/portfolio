export interface SkillGroup {
  label: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', icon: 'i-lucide-monitor', skills: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', icon: 'i-lucide-server', skills: ['Python', 'FastAPI', 'MongoDB (PyMongo Async)', 'Discord Bot (Discord.py)', 'Lua / Luau', 'Javascript', 'Typescript', 'C++', 'Java', 'Bash'] },
  { label: 'Infrastructure & Tooling', icon: 'i-lucide-wrench', skills: ['Git', 'Docker', 'GitHub Actions', 'DNS & Domain Management', 'Linux'] },
  { label: 'Emergency & Operations', icon: 'i-lucide-flame', skills: ['Firefighter 1', 'Fire Officer 1', 'EVOC Certified', 'FEMA IS (100, 200, 700)', 'Incident Command'] }
]

export const totalSkillCount = skillGroups.reduce((sum, group) => sum + group.skills.length, 0)
