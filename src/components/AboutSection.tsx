import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'

const container = staggerContainer(0.08)

export default function AboutSection() {
  const shouldReduce = useReducedMotion()
  const variant = shouldReduce ? fadeUpReduced : fadeUp
  const containerVar = shouldReduce ? { hidden: {}, visible: {} } : container

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="text-caption text-accent uppercase tracking-widest mb-6"
            variants={variant}
          >
            About
          </motion.p>
          <motion.p className="text-body text-foreground leading-relaxed max-w-2xl" variants={variant}>
            I&apos;m a backend engineer with six years building production systems across IoT, distributed
            services, cloud infrastructure, and AI integration — at Reply consultancy, for enterprise
            clients spanning automotive, industrial, and consumer tech. I care about systems that hold
            up under real load, real constraints, and real consequences.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
