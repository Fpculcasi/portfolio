import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, fadeUpReduced, heroLine, heroContainer } from '../lib/animations'

export default function HeroSection() {
  const shouldReduce = useReducedMotion()

  const lineVar = shouldReduce ? fadeUpReduced : heroLine
  const subtitleVar = shouldReduce ? fadeUpReduced : fadeUp
  const containerVar = shouldReduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : heroContainer

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative">
      <div className="max-w-3xl w-full">
        <motion.div variants={containerVar} initial="hidden" animate="visible">
          <h1 className="text-hero font-bold leading-tight">
            <motion.span className="block text-foreground" variants={lineVar}>
              Smart devices feel like magic...
            </motion.span>
            <motion.span className="block text-accent" variants={lineVar}>
              I study, design &amp; build what&apos;s behind them
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-sub text-muted mt-8 max-w-xl"
          variants={subtitleVar}
          initial="hidden"
          animate="visible"
          transition={{ delay: shouldReduce ? 0 : 0.3 }}
        >
          Backend Engineer · IoT · Distributed Systems · Cloud · AI Integration
        </motion.p>

        <motion.div
          className="mt-10"
          variants={subtitleVar}
          initial="hidden"
          animate="visible"
          transition={{ delay: shouldReduce ? 0 : 0.5 }}
        >
          <a
            href="#projects"
            className="inline-block border border-accent text-accent px-6 py-3 text-body font-medium
                       hover:bg-accent/10 transition-colors duration-200"
          >
            View Projects ↓
          </a>
        </motion.div>
      </div>

      <div
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-muted text-caption select-none"
        aria-hidden="true"
      >
        ↓
      </div>
    </section>
  )
}
