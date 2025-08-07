import React from 'react'
import '../Styles/InfoSection.css'

// Reusable info section component with image and text
function InfoSection({ title, description, buttonText, onButtonClick, imageSrc, imageAlt, reverse = false }) {
  return (
    <div className={`info-section ${reverse ? 'reverse' : ''}`}>
      <div className='info-content'>
        <h2 className='info-title'>{title}</h2>
        <p className='info-description'>{description}</p>
        {buttonText && (
          <button className='info-button' onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
      
      {imageSrc && (
        <div className='info-image'>
          <img src={imageSrc} alt={imageAlt || title} />
        </div>
      )}
    </div>
  )
}

export default InfoSection
