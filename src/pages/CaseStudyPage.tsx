import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageVariants, fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'
import { useReducedMotion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'

const container = staggerContainer(0.08)

function TagChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-caption text-accent bg-surface-2 px-3 py-1.5 rounded-sm">
      {label}
    </span>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const shouldReduce = useReducedMotion()

  const project = getProjectBySlug(slug ?? '')
  const { prev, next } = getAdjacentProjects(slug ?? '')

  const variant = shouldReduce ? fadeUpReduced : fadeUp
  const containerVar = shouldReduce ? { hidden: {}, visible: {} } : container

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-foreground font-sans flex items-center justify-center">
        <p className="text-muted">Case study not found.</p>
      </div>
    )
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar />

      <main className="pt-16">
        <div className="max-w-[760px] mx-auto px-6 py-16">

          {/* Back link */}
          <Link
            to="/"
            className="text-muted text-caption hover:text-accent transition-colors inline-block mb-10"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <motion.div
            variants={containerVar}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <motion.p className="text-caption text-muted mb-3" variants={variant}>
              {project.industry} · {project.year}
            </motion.p>
            <motion.h1
              className="text-heading font-semibold text-foreground mb-6"
              variants={variant}
            >
              {project.title}
            </motion.h1>
            <motion.div className="flex flex-wrap gap-2 mb-8" variants={variant}>
              {project.tags.map(tag => (
                <TagChip key={tag} label={tag} />
              ))}
            </motion.div>
            <motion.hr className="border-border" variants={variant} />
          </motion.div>

          {/* Challenge */}
          {project.challenge && (
            <section className="py-8">
              <h2 className="text-sub font-semibold text-foreground mb-4">Challenge</h2>
              <p className="text-body text-muted">{project.challenge}</p>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section className="py-8">
              <h2 className="text-sub font-semibold text-foreground mb-4">Architecture</h2>
              <div className="bg-surface-2 rounded-lg p-8 font-mono text-caption text-muted overflow-x-auto">
                <pre>{project.architecture}</pre>
              </div>
            </section>
          )}

          {/* Approach */}
          {project.approach.length > 0 && (
            <section className="py-8">
              <h2 className="text-sub font-semibold text-foreground mb-6">Approach</h2>
              <div className="flex flex-col gap-6">
                {project.approach.map(section => (
                  <div key={section.heading}>
                    <h3 className="text-body font-semibold text-foreground mb-2">{section.heading}</h3>
                    <p className="text-body text-muted">{section.content}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          {project.outcomes.length > 0 && (
            <section className="py-8">
              <h2 className="text-sub font-semibold text-foreground mb-4">Outcomes</h2>
              <ul className="flex flex-col gap-3">
                {project.outcomes.map((item, i) => (
                  <li key={i} className="text-body text-foreground flex gap-3">
                    <span className="text-accent select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Empty state while M5 content is pending */}
          {!project.challenge && !project.architecture && project.approach.length === 0 && project.outcomes.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted text-body">Full case study coming soon.</p>
            </div>
          )}

          {/* Prev / Next navigation */}
          <div className="flex justify-between items-center pt-16 mt-8 border-t border-border">
            {prev ? (
              <Link
                to={`/case/${prev.slug}`}
                className="text-muted text-caption hover:text-accent transition-colors"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/case/${next.slug}`}
                className="text-muted text-caption hover:text-accent transition-colors"
              >
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </main>
    </motion.div>
  )
}
