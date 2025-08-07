import React from 'react'
import '../Styles/ServiceCard.css'

// Reusable service card component
function ServiceCard({ icon, title, description, buttonText, onButtonClick }) {
  return (
    <div className='service-card'>
      {icon && <div className='service-icon'>{icon}</div>}
      <h3 className='service-title'>{title}</h3>
      <p className='service-description'>{description}</p>
      {buttonText && (
        <button className='service-button' onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default ServiceCard
