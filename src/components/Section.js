// Section Component - For organizing content
import React from 'react'
import '../Styles/Section.css'

function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`content-section ${className}`}>
      {title && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section-content">
        {children}
      </div>
    </section>
  )
}

export default Section
