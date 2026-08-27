import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, fadeUpReduced } from '../lib/animations'
import { useReducedMotion } from 'framer-motion'

interface Props {
  slug: string
  title: string
  tagline: string
  tags: string[]
}

export default function ProjectCard({ slug, title, tagline, tags }: Props) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.article
      variants={shouldReduce ? fadeUpReduced : fadeUp}
      className="bg-surface border border-border rounded-sm p-6 flex flex-col gap-4
                 hover:border-accent hover:[box-shadow:0_0_0_1px_#64ffda,0_8px_32px_rgba(100,255,218,0.08)]
                 transition-[border-color,box-shadow] duration-200 ease-in-out"
    >
      <h3 className="text-sub text-foreground font-semibold">{title}</h3>
      <p className="text-body text-muted flex-1">{tagline}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-caption text-accent bg-surface-2 px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={`/case/${slug}`}
        className="text-accent text-caption font-medium hover:underline self-start"
      >
        Read Case →
      </Link>
    </motion.article>
  )
}
