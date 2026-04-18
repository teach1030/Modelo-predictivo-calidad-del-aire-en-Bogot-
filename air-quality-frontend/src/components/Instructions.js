import React from "react";
import "./../styles/instructions.css"

const Instructions = () =>{
    return(
        <div className="instructions__container">

            <h2 className="instructions__title"><strong>Instrucciones</strong></h2>
            <p>1. Ingrese solo los valores numéricos para cada parámetro:</p>
            <ul className="instructions__list">
                <li>PM2.5</li>
                <li>PM10</li>
                <li>Ozono (O<sub>3</sub>)</li>
                <li>Óxidos de Nitrógeno (NOx)</li>
                <li>Dióxido de Carbono (CO<sub>2</sub>)</li>
                <li>Temperatura</li>
                <li>Humedad</li>
                <li>Velocidad del viento</li>
            </ul>
            <p>(La calculadora agregará automáticamente las unidades correspondientes).</p>
            <p>2. Presione el botón "Calcular Calidad del Aire".</p>
            <p>3. Revise los resultados:</p>
            <ul className="instructions__list">
                <li>Se mostrará un índice de calidad del aire basado en los valores ingresados.</li>
                <li>Una descripción del estado del aire y recomendaciones según la calidad detectada.</li>
            </ul>
            <p>5. Interprete los colores:</p>
            <ul className="instructions__colors">
                <li><span className="color-box green"></span> Verde: Buena calidad del aire, sin riesgos para la salud.</li>
                <li><span className="color-box yellow"></span> Amarillo: Moderada, puede afectar a personas sensibles.</li>
                <li><span className="color-box orange"></span> Naranja: No saludable para grupos sensibles.</li>
                <li><span className="color-box red"></span> Rojo: No saludable para la población en general.</li>
                <li><span className="color-box purple"></span> Morado: Muy perjudicial, se recomienda evitar actividades al aire libre.</li>
            </ul>
            <p>6. Para un nuevo cálculo, modifique los valores y vuelva a presionar "Calcular".</p>
    </div>  
    )
}

export {Instructions}