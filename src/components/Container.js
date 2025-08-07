import React from 'react'
import '../Styles/Container.css'

// Reusable container component for consistent layout
function Container({ children, className = '', maxWidth = '1200px' }) {
  return (
    <div 
      className={`container ${className}`} 
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}

export default Container
