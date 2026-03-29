import React, { useState, useEffect } from 'react'
import { FiTerminal, FiMenu, FiX, FiLinkedin, FiGithub } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Publications', href: '#publications' },
  { label: 'Service', href: '#service' },
  { label: 'Contact', href: '#contact' },
]

const NavBar = ({ hideTopBar = false }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const iconBtn = 'text-apple-mid-gray hover:text-apple-dark-gray transition-colors'

  return (
    <>
      {/* ── Top bar: always on mobile, hidden on desktop when hideTopBar ── */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-apple-border transition-colors duration-300 ${hideTopBar ? 'md:hidden' : ''}`}>
        <a href="#" className="flex items-center gap-2 text-apple-dark-gray font-semibold text-sm">
          <FiTerminal className="w-4 h-4 shrink-0" />
          <span>Akshat Sinha</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.linkedin.com/in/akshat-sinha-568765167/" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="LinkedIn">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/akshatgit" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="GitHub">
              <FiGithub className="w-4 h-4" />
            </a>
          </div>
          <button className={`md:hidden ${iconBtn}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Desktop sidebar ── */}
      <aside className={`hidden md:flex fixed left-0 w-56 flex-col justify-between pb-10 px-5 border-r border-apple-border bg-white z-40 transition-colors duration-300 ${hideTopBar ? 'top-0' : 'top-14'}`} style={{ height: hideTopBar ? '100vh' : 'calc(100vh - 3.5rem)' }}>
        <nav className="pt-20 px-2">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                    active === href
                      ? 'bg-apple-gray text-apple-dark-gray font-medium'
                      : 'text-apple-mid-gray hover:text-apple-dark-gray hover:bg-apple-gray'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/akshat-sinha-568765167/" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="LinkedIn">
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/akshatgit" target="_blank" rel="noopener noreferrer" className={iconBtn} aria-label="GitHub">
            <FiGithub className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* ── Mobile slide-down menu ── */}
      <div className={`md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden transition-all duration-300 bg-white border-b border-apple-border ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                  active === href
                    ? 'bg-apple-gray text-apple-dark-gray font-medium'
                    : 'text-apple-mid-gray hover:text-apple-dark-gray hover:bg-apple-gray'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavBar
