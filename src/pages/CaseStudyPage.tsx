import { useParams } from 'react-router-dom'

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <main className="min-h-screen bg-bg text-foreground font-sans p-8">
      <p className="text-muted text-caption">Case study — placeholder</p>
      <h1 className="text-heading font-semibold mt-2">{slug}</h1>
    </main>
  )
}
