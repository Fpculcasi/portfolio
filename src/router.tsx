import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:slug" element={<CaseStudyPage />} />
      </Routes>
    </HashRouter>
  )
}
