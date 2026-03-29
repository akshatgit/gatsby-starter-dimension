import React from 'react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const Footer = () => (
  <footer className="border-t border-apple-border dark:border-dark-border py-8 px-6 bg-white dark:bg-dark-bg transition-colors duration-300">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-apple-mid-gray dark:text-dark-muted">
        © {new Date().getFullYear()} Akshat Sinha
      </p>
      <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/akshat-sinha-568765167/" target="_blank" rel="noopener noreferrer" className="text-apple-mid-gray dark:text-dark-muted hover:text-apple-dark-gray dark:hover:text-dark-text transition-colors" aria-label="LinkedIn">
          <FiLinkedin className="w-4 h-4" />
        </a>
        <a href="https://github.com/akshatgit" target="_blank" rel="noopener noreferrer" className="text-apple-mid-gray dark:text-dark-muted hover:text-apple-dark-gray dark:hover:text-dark-text transition-colors" aria-label="GitHub">
          <FiGithub className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
