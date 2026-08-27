import { motion, useReducedMotion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fadeUp, fadeUpReduced, staggerContainer } from '../lib/animations'

const LINKS = [
  {
    label: 'Email',
    href: 'mailto:fpculcasi@gmail.com',
    display: 'fpculcasi@gmail.com',
    icon: faEnvelope,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Fpculcasi',
    display: 'GitHub',
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/fpculcasi',
    display: 'LinkedIn',
    icon: faLinkedin,
  },
]

const container = staggerContainer(0.08)

export default function ContactSection() {
  const shouldReduce = useReducedMotion()
  const variant = shouldReduce ? fadeUpReduced : fadeUp
  const containerVar = shouldReduce ? { hidden: {}, visible: {} } : container

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-caption text-accent uppercase tracking-widest mb-8"
          variants={variant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Contact
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LINKS.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-2 text-body text-muted hover:text-accent transition-colors duration-200"
              variants={variant}
            >
              <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
              <span>{link.display}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
