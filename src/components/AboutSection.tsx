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
            MSc in <a href="https://computer.ing.unipi.it/en/masters-degree-in-computer-engineering/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Computer Engineering (LM-32)</a>, University of Pisa, Italy, specializing in Computers
            and Sensors Networks. Graduated with a score of 110/110, defending a thesis on the design
            and implementation of a deep learning-based system for sleep quality assessment from using
            patients' sleep ballistocardiography data series.
          </motion.p>
          <motion.p className="text-body text-foreground leading-relaxed max-w-2xl mt-6" variants={variant}>
            Working at <a href="https://www.reply.com/concept-reply/en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Concept Engineering Reply</a> since 2019, shipping production systems for clients across
            automotive, industrial, and consumer tech, contexts where a bad deploy stops a factory
            line, grounds a device, or quietly costs a company its users. That shaped how I work:
            I care about systems that hold up under real load, real constraints, and real
            consequences (not just to look clean in a slide deck 😉).
          </motion.p>
          <motion.p className="text-body text-foreground leading-relaxed max-w-2xl mt-6" variants={variant}>
            The design eye came first, actually. Years spent studying Clean Code/Architecture and 
            obsessing over craft before I touched a backend. That instinct still shows up in how
            I shape APIs, name things, and decide what to leave out.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
