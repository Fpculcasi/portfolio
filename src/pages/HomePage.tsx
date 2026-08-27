import { motion } from 'framer-motion'
import { pageVariants } from '../lib/animations'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ProjectCardsSection from '../components/ProjectCardsSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <NavBar />
      <main>
        <HeroSection />
        <ProjectCardsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-caption text-muted border-t border-border">
        © 2026 FPCulcasi · Built with React (<a href="https://github.com/Fpculcasi/portfolio" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Repo</a>)
      </footer>
    </motion.div>
  )
}
