// Simple Hero Section Component
import React from 'react'
import '../Styles/SimpleHero.css'

function SimpleHero({ title, subtitle, buttonText, buttonLink, backgroundImage }) {
  return (
    <div className="simple-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {buttonText && (
          <a href={buttonLink} className="hero-button">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

export default SimpleHero
