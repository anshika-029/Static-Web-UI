// Simple Card Component 
import React from 'react'
import '../Styles/SimpleCard.css'

function SimpleCard({ icon, title, description, buttonText, buttonLink }) {
  return (
    <div className="simple-card">
      {icon && <div className="card-icon">{icon}</div>}
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {buttonText && (
        <a href={buttonLink} className="card-button">
          {buttonText}
        </a>
      )}
    </div>
  )
}

export default SimpleCard
