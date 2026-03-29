import React from 'react'

const Layout = ({ children }) => (
  <div className="min-h-screen bg-white dark:bg-dark-bg pt-14 md:pl-56 transition-colors duration-300">
    {children}
  </div>
)

export default Layout
