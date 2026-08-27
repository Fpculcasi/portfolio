import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'

const SKILL_GROUPS: { label: string; tags: string[] }[] = [
  {
    label: 'Languages',
    tags: ['Java', 'Kotlin', 'C#', 'Python', 'TypeScript'],
  },
  {
    label: 'Cloud & Infrastructure',
    tags: ['AWS IoT Core', 'Azure IoT Hub', 'Azure Service Bus', 'Azure AI Foundry', 'Elasticsearch'],
  },
  {
    label: 'Frameworks & Tools',
    tags: ['Spring Boot', '.NET', 'MQTT', 'Protobuf', 'LangGraph'],
  },
]

const outerContainer = staggerContainer(0.1)
const groupContainer = staggerContainer(0.06)

function TagChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-caption text-accent bg-surface-2 px-3 py-1.5 rounded-sm">
      {label}
    </span>
  )
}

export default function SkillsSection() {
  const shouldReduce = useReducedMotion()
  const variant = shouldReduce ? fadeUpReduced : fadeUp
  const outer = shouldReduce ? { hidden: {}, visible: {} } : outerContainer
  const inner = shouldReduce ? { hidden: {}, visible: {} } : groupContainer

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-caption text-accent uppercase tracking-widest mb-8"
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Tech
        </motion.p>

        <motion.div
          className="flex flex-col gap-10"
          variants={outer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SKILL_GROUPS.map(group => (
            <motion.div key={group.label} variants={variant}>
              <p className="text-caption text-muted mb-3 uppercase tracking-wider">{group.label}</p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={inner}
              >
                {group.tags.map(tag => (
                  <TagChip key={tag} label={tag} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
