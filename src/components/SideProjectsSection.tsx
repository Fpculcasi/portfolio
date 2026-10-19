import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'
import { sideProjects, type SideProjectKind, type SideProjectLinkKind } from '../data/sideProjects'

const GITHUB_PROFILE = 'https://github.com/Fpculcasi'

const LINK_LABELS: Record<SideProjectLinkKind, string> = {
  github: 'Code',
  report: 'Report',
  slides: 'Slides',
  demo: 'Demo',
}

const KIND_LABELS: Record<SideProjectKind, string> = {
  solo: 'Solo',
  team: 'Team',
}

function KindIcon({ kind }: { kind: SideProjectKind }) {
  if (kind === 'solo') {
    return (
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <svg width="14" height="12" viewBox="0 0 20 16" fill="none" aria-hidden="true">
      <circle cx="6" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13.5" cy="5.5" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M1 14c0-2.5 2.2-4.2 5-4.2s5 1.7 5 4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11 11.5c.6-1.1 2-1.9 3.6-1.9 2.4 0 4.4 1.5 4.4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const gridContainer = staggerContainer(0.06)

export default function SideProjectsSection() {
  const shouldReduce = useReducedMotion()
  const labelVar = shouldReduce ? fadeUpReduced : fadeUp
  const container = shouldReduce ? { hidden: {}, visible: {} } : gridContainer

  return (
    <section id="side-projects" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-caption text-accent uppercase tracking-widest mb-2"
          variants={labelVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Side Projects
        </motion.p>
        <motion.p
          className="text-muted text-body max-w-2xl mb-8"
          variants={labelVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          A mix of academic work and open-source experiments (some solo, some built with
          classmates/friends). More on{' '}
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sideProjects.map(p => (
            <motion.article
              key={p.title}
              variants={labelVar}
              className="flex flex-col justify-between p-5 rounded-sm bg-surface/60 border border-border/60 hover:border-accent/60 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-foreground font-semibold text-body">{p.title}</h3>
                  <span
                    className="shrink-0 inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted"
                    title={p.kind === 'solo' ? 'Solo project' : 'Team project'}
                    aria-label={p.kind === 'solo' ? 'Solo project' : 'Team project'}
                  >
                    <KindIcon kind={p.kind} />
                    {KIND_LABELS[p.kind]}
                  </span>
                </div>
                <p className="text-muted text-caption mt-2 leading-relaxed">{p.description}</p>

                {p.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map(t => (
                      <li
                        key={t}
                        className="text-[11px] uppercase tracking-wider text-muted border border-border/60 px-1.5 py-0.5 rounded-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {p.links.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-caption">
                  {p.links.map(l => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      {l.label ?? LINK_LABELS[l.kind]} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
