// Lazily loads and initializes mermaid exactly once (it's a sizeable
// dependency only a couple of project pages actually need), themed to match
// the site's ruby/charcoal palette instead of mermaid's stock look.
let mermaidPromise: ReturnType<typeof loadMermaid> | null = null

async function loadMermaid() {
  const { default: mermaid } = await import('mermaid')
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    themeVariables: {
      background: '#1c1817',
      primaryColor: '#2b2524',
      primaryTextColor: '#f7f6f6',
      primaryBorderColor: '#c22a48',
      lineColor: '#c22a48',
      secondaryColor: '#403836',
      secondaryTextColor: '#f7f6f6',
      tertiaryColor: '#1c1817',
      tertiaryTextColor: '#b9b3b0',
      fontFamily: 'inherit'
    }
  })
  return mermaid
}

let counter = 0

export async function renderMermaid(code: string): Promise<string> {
  if (!mermaidPromise) mermaidPromise = loadMermaid()
  const mermaid = await mermaidPromise
  const { svg } = await mermaid.render(`mermaid-diagram-${counter++}`, code)
  return svg
}
