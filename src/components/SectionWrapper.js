import React from 'react'

const SectionWrapper = ({ id, title, children, gray, inverse, className = '' }) => (
  <section
    id={id}
    className={`py-14 px-6 transition-colors duration-300 ${className} ${
      inverse
        ? 'bg-apple-dark-gray dark:bg-dark-surface'
        : gray
        ? 'bg-apple-gray dark:bg-dark-surface'
        : 'bg-white dark:bg-dark-bg'
    }`}
  >
    <div className="max-w-4xl mx-auto">
      {title && (
        <div className="mb-12 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight mb-3 ${inverse ? 'text-white' : 'text-apple-dark-gray dark:text-dark-text'}`}>
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
