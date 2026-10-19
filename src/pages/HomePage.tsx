import { motion } from 'framer-motion'
import { pageVariants } from '../lib/animations'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ProjectCardsSection from '../components/ProjectCardsSection'
import AboutSection from '../components/AboutSection'
import SideProjectsSection from '../components/SideProjectsSection'
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
        <AboutSection />
        <ProjectCardsSection />
        <SideProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-caption text-muted border-t border-border">
        © 2026 FPCulcasi
      </footer>
    </motion.div>
  )
}
