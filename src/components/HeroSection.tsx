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
    <section className="relative min-h-[100dvh] w-full bg-surface text-foreground overflow-hidden">
      {/* Background image — only on desktop (lg+): centered, with vertical padding */}
      <div className="hidden lg:flex absolute inset-x-0 top-24 bottom-0 items-end justify-center pointer-events-none select-none">
        <img
          src="/me/me.png"
          alt=""
          aria-hidden="true"
          className="h-full w-auto max-w-none object-contain object-bottom scale-x-[-1]"
        />
      </div>

      {/* Overlay contents */}
      <div className="relative z-10 min-h-[100dvh] w-full px-6 sm:px-10 lg:px-24 xl:px-32 flex flex-col">
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr_1fr] gap-10 lg:gap-6 items-stretch pt-24 pb-14 lg:pt-0 lg:pb-0 lg:h-[100dvh]">

          {/* LX column: title + bio + CTA, stats at the bottom (lg only) */}
          <div className="flex flex-col lg:justify-between h-full text-center lg:text-left lg:pt-32 lg:pb-14 gap-10 lg:gap-0">
            <div>
              <motion.div variants={containerVar} initial="hidden" animate="visible">
                <h1 className="font-bold leading-[1.02] tracking-tight text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.5rem]">
                  <motion.span className="block" variants={lineVar}>
                    Francesco Paolo
                  </motion.span>
                  <motion.span className="block text-accent" variants={lineVar}>
                    Culcasi
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-muted mt-5 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
                variants={subtitleVar}
                initial="hidden"
                animate="visible"
                transition={{ delay: shouldReduce ? 0 : 0.3 }}
              >
                Backend Engineer with a seasoned eye for design <br className="hidden sm:inline" /> I transform complex ideas into elegant distributed systems, IoT and AI-powered products.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-5"
                variants={subtitleVar}
                initial="hidden"
                animate="visible"
                transition={{ delay: shouldReduce ? 0 : 0.5 }}
              >
                <a
                  href="mailto:fpculcasi@gmail.com"
                  className="bg-accent text-bg px-7 py-3.5 font-bold text-sm tracking-wide rounded-sm shadow-lg transition-opacity hover:opacity-90"
                >
                  CHAT WITH ME
                </a>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground text-sm font-semibold tracking-wide hover:text-accent transition-colors py-2 inline-flex items-center gap-2"
                >
                  <span className="text-accent">↗</span> WORKS
                </button>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center lg:justify-start gap-12 sm:gap-16"
              variants={subtitleVar}
              initial="hidden"
              animate="visible"
              transition={{ delay: shouldReduce ? 0 : 0.7 }}
            >
              <div>
                <h3 className="text-[2.5rem] font-bold text-foreground leading-none">25+</h3>
                <p className="text-muted text-sm mt-2">Professional Projects</p>
              </div>
              <div>
                <h3 className="text-[2.5rem] font-bold text-foreground leading-none">6+</h3>
                <p className="text-muted text-sm mt-2">Years of Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Mid column: mobile pfp, empty on desktop */}
          <div className="flex justify-center items-center lg:hidden">
            <img
              src="/me/me.png"
              alt="Francesco Paolo Culcasi"
              className="h-[45vh] max-h-70 w-auto object-contain"
            />
          </div>
          <div aria-hidden="true" className="hidden lg:block" />

          {/* RX column: Services */}
          <div className="flex flex-col justify-center h-full text-center lg:text-left lg:pt-32 lg:pb-14 gap-6 lg:gap-8">
            <div>
              <h3 className="text-accent font-bold text-base tracking-wider">BACKEND &amp; CLOUD</h3>
              <p className="text-muted text-base mt-2 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Robust distributed architectures and scalable cloud infrastructures to power modern products.
              </p>
            </div>

            <div>
              <h3 className="text-accent font-bold text-base tracking-wider">IOT &amp; SMART DEVICES</h3>
              <p className="text-muted text-base mt-2 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Bridging hardware and software to make connected ecosystems feel seamless and reliable.
              </p>
            </div>

            <div>
              <h3 className="text-accent font-bold text-base tracking-wider">AI INTEGRATION</h3>
              <p className="text-muted text-base mt-2 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Embedding intelligent systems and modern AI tools into real-world applications end-to-end.
              </p>
            </div>

            <div>
              <h3 className="text-accent font-bold text-base tracking-wider">MENTORSHIP & PM</h3>
              <p className="text-muted text-base mt-2 leading-relaxed max-w-xs mx-auto lg:mx-0">
                Providing guidance and leadership to drive successful project outcomes.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div
        className="scroll-indicator absolute bottom-3 left-1/2 -translate-x-1/2 text-muted text-sm select-none hidden sm:block z-10"
        aria-hidden="true"
      >
        ↓
      </div>
    </section>
  )
}
