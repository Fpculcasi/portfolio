import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-surface/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-foreground font-semibold text-body hover:text-accent transition-colors"
          >
            FPCulcasi
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="https://github.com/fpculcasi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-caption hover:text-accent transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-caption hover:text-accent transition-colors"
            >
              CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-muted hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-bg/95 flex flex-col items-center justify-center gap-10 sm:hidden"
          onClick={() => setOpen(false)}
        >
          <a
            href="https://github.com/fpculcasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground text-heading hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground text-heading hover:text-accent transition-colors"
          >
            CV ↗
          </a>
        </div>
      )}
    </>
  )
}
