import React from "react"
import "./../styles/prediction.css"
import { AirQualityGauge } from "./AirQualityGauge"

const Prediction = ({ total, calidad }) => {

    const getRecommendation = () => {
        if (!total) return "Por favor, realiza un cálculo para ver las recomendaciones."
        if (total < 50) return "Excelente calidad del aire. Puedes realizar actividades al aire libre sin problema."
        if (total < 100) return "Muy buena calidad del aire. Actividades al aire libre recomendadas."
        if (total < 150) return "Buena calidad del aire. Las actividades al aire libre son seguras para la mayoría."
        if (total < 200) return "Calidad del aire aceptable. Personas sensibles deben limitar su exposición."
        if (total < 250) return "Calidad del aire regular. Es recomendable reducir las actividades al aire libre."
        if (total < 300) return "Calidad del aire mala. Limita las actividades al aire libre."
        if (total < 350) return "Calidad del aire muy mala. Evita actividades al aire libre."
        return "Calidad del aire peligrosa. Mantente en interiores y toma precauciones."

    }

    return (
        <div className="prediction__container">
            <h2 className="prediction__title">
                Índice de Calidad del Aire (AQI): {total ? total : 'Sin calcular'} <br />
                <span className="aqi-status">({calidad ? calidad : "Esperando datos..."})</span>
            </h2>

            <div className="prediction__gauge">
                <AirQualityGauge total={total} calidad={calidad} />
            </div>

            <p className="prediction__description">
                {getRecommendation()}
            </p>
        </div>
    )
}

export { Prediction }
