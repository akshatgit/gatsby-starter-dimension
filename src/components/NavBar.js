import React, { useState, useEffect } from 'react'
import { FiTerminal, FiMenu, FiX, FiLinkedin, FiGithub, FiSun, FiMoon } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Publications', href: '#publications' },
  { label: 'Service', href: '#service' },
  { label: 'Contact', href: '#contact' },
]

const useDarkMode = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enabled = stored === 'dark' || (!stored && prefersDark)
    setDark(enabled)
    document.documentElement.classList.toggle('dark', enabled)
  }, [])

  const toggle = () => {
    setDark(d => {
      const next = !d
      document.documentElement.classList.toggle('dark', next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return [dark, toggle]
}

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [dark, toggleDark] = useDarkMode()

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

  const iconBtn = 'text-apple-mid-gray dark:text-dark-muted hover:text-apple-dark-gray dark:hover:text-dark-text transition-colors'

  return (
    <>
      {/* ── Persistent top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-apple-border dark:border-dark-border transition-colors duration-300">
        <a href="#" className="flex items-center gap-2 text-apple-dark-gray dark:text-dark-text font-semibold text-sm">
          <FiTerminal className="w-4 h-4 shrink-0" />
          <span>Akshat Sinha</span>
        </a>

        <div className="flex items-center gap-4">
          <button onClick={toggleDark} className={iconBtn} aria-label="Toggle dark mode">
            {dark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
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
      <aside className="hidden md:flex fixed top-14 left-0 w-56 flex-col justify-between pb-10 px-5 border-r border-apple-border dark:border-dark-border bg-white dark:bg-dark-bg z-40 transition-colors duration-300" style={{ height: 'calc(100vh - 3.5rem)' }}>
        <nav className="pt-8">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                    active === href
                      ? 'bg-apple-gray dark:bg-dark-elevated text-apple-dark-gray dark:text-dark-text font-medium'
                      : 'text-apple-mid-gray dark:text-dark-muted hover:text-apple-dark-gray dark:hover:text-dark-text hover:bg-apple-gray dark:hover:bg-dark-elevated'
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
      <div className={`md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden transition-all duration-300 bg-white dark:bg-dark-bg border-b border-apple-border dark:border-dark-border ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-5 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                  active === href
                    ? 'bg-apple-gray dark:bg-dark-elevated text-apple-dark-gray dark:text-dark-text font-medium'
                    : 'text-apple-mid-gray dark:text-dark-muted hover:text-apple-dark-gray dark:hover:text-dark-text hover:bg-apple-gray dark:hover:bg-dark-elevated'
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
