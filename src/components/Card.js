import React from 'react'

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-dark-elevated border border-apple-border dark:border-dark-border rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-200 ${className}`}>
    {children}
  </div>
)

export default Card
