// Page Container Component - Wraps all pages
import React from 'react'
import '../Styles/PageContainer.css'

function PageContainer({ children }) {
  return (
    <div className="page-container">
      <div className="page-content">
        {children}
      </div>
    </div>
  )
}

export default PageContainer
