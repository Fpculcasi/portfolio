import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const gridContainer = staggerContainer(0.08)

export default function ProjectCardsSection() {
  const shouldReduce = useReducedMotion()
  const labelVar = shouldReduce ? fadeUpReduced : fadeUp
  const container = shouldReduce ? { hidden: {}, visible: {} } : gridContainer

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-caption text-accent uppercase tracking-widest mb-2"
          variants={labelVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Selected Work
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map(p => (
            <ProjectCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              tagline={p.tagline}
              tags={p.tags}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
