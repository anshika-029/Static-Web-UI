// Simple Grid Component
import React from 'react'
import '../Styles/SimpleGrid.css'

function SimpleGrid({ children, columns = 3 }) {
  return (
    <div className={`simple-grid grid-${columns}`}>
      {children}
    </div>
  )
}

export default SimpleGrid
