import React from 'react'

const SectionWrapper = ({ id, title, children, gray, className = '' }) => (
  <section
    id={id}
    className={`py-14 px-6 transition-colors duration-300 ${className} ${
      gray
        ? 'bg-apple-gray dark:bg-dark-surface'
        : 'bg-white dark:bg-dark-bg'
    }`}
  >
    <div className="max-w-4xl mx-auto">
      {title && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-apple-dark-gray dark:text-dark-text mb-3">
            {title}
          </h2>
          <div className="section-divider" />
        </div>
      )}
      {children}
    </div>
  </section>
)

export default SectionWrapper
