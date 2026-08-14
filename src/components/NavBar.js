import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FiMenu,
  FiX,
  FiLinkedin,
  FiGithub,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiShield,
  FiMail,
} from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'About', href: '#about', Icon: FiUser },
  { label: 'Work', href: '#work', Icon: FiBriefcase },
  { label: 'Publications', href: '#publications', Icon: FiBookOpen },
  { label: 'Service', href: '#service', Icon: FiShield },
  { label: 'Contact', href: '#contact', Icon: FiMail },
]

const NavBar = ({ hideTopBar = false }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const topIconBtn =
    'text-apple-mid-gray hover:text-apple-dark-gray transition-colors'
  const sidebarIconBtn =
    'text-slate-300 hover:text-white transition-colors duration-200'

  return (
    <>
      {/* ── Top bar: always on mobile, hidden on desktop when hideTopBar ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-apple-border transition-colors duration-300 ${hideTopBar ? 'md:hidden' : ''}`}
      >
        <a
          href="#"
          className="flex items-center gap-2 text-apple-dark-gray font-semibold text-sm"
        >
          <StaticImage
            src="../images/logo.png"
            alt=""
            width={30}
            height={30}
            className="shrink-0 rounded-full"
            placeholder="blurred"
          />
          <span>Akshat Sinha</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/akshat-sinha-568765167/"
              target="_blank"
              rel="noopener noreferrer"
              className={topIconBtn}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/akshatgit"
              target="_blank"
              rel="noopener noreferrer"
              className={topIconBtn}
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
          </div>
          <button
            className={`md:hidden ${topIconBtn}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <FiX className="w-5 h-5" />
            ) : (
              <FiMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Desktop sidebar ── */}
      <aside
        className={`hidden md:flex fixed left-0 w-20 flex-col justify-between px-3 pb-10 border-r border-slate-900 bg-slate-950 z-40 ${hideTopBar ? 'top-0' : 'top-14'}`}
        style={{ height: hideTopBar ? '100vh' : 'calc(100vh - 3.5rem)' }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <StaticImage
            src="../images/side.png"
            alt=""
            layout="fullWidth"
            className="h-full w-full"
            imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
            placeholder="blurred"
            quality={88}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/70 to-slate-950/95" />

        <div className="relative z-10">
          <a
            href="#about"
            className="flex items-center justify-center pt-8 text-white"
          >
            <StaticImage
              src="../images/logo.png"
              alt="Akshat Sinha logo"
              width={56}
              height={56}
              className="shrink-0 rounded-full bg-slate-950/50 shadow-lg ring-1 ring-white/30"
              placeholder="blurred"
            />
            <span className="sr-only">Akshat Sinha</span>
          </a>

          <nav className="mt-10">
            <ul className="space-y-1">
              {NAV_LINKS.map(({ label, href, Icon }) => (
                <li key={href} className="group relative">
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    className={`flex items-center justify-center rounded-lg px-0 py-2 text-sm transition-colors duration-150 ${
                      active === href
                        ? 'bg-white/15 text-white font-medium shadow-sm backdrop-blur-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                  </a>
                  <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative z-10 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/akshat-sinha-568765167/"
            target="_blank"
            rel="noopener noreferrer"
            className={sidebarIconBtn}
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/akshatgit"
            target="_blank"
            rel="noopener noreferrer"
            className={sidebarIconBtn}
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* ── Mobile slide-down menu ── */}
      <div
        className={`md:hidden fixed top-14 left-0 right-0 z-40 overflow-hidden transition-all duration-300 bg-white border-b border-apple-border ${open ? 'max-h-96' : 'max-h-0'}`}
      >
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
