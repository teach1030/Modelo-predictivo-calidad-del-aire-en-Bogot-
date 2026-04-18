import React from 'react'
import "./../styles/airQualityGauge.css"

const AirQualityGauge = ({ total, calidad }) => {

  const getRotation = () => {
    const grados = (total / 400) * 180 - 90  // de 0-400 -> -90° a 90°
    return grados
  }

  return (
    <div className="gauge__wrapper">
      <div className="gauge__circle">
        <div className="gauge__colors"></div>
        <div 
          className="gauge__needle" 
          style={{ transform: `rotate(${getRotation()}deg)` }}
        ></div>
        <div className="gauge__centerText">
          <p>{calidad}</p>
        </div>
      </div>
      <p className="gauge__label">Calidad del aire actual</p>
    </div>
  )
}

export { AirQualityGauge }
