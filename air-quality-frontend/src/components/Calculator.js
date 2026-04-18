import React, { useState } from 'react';
import "./../styles/calculator.css";
import { InputCalculator } from './InputCalculator.js';
import { ButtonCalculator } from './ButtonCalculator.js';

const Calculator = ({ setTotal, setCalidad }) => {

    const [values, setValues] = useState({
        co2: '',
        pm25: '',
        pm10: '',
        o3: '',
        nox: '',
        temperatura: ''
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { co2, pm25, pm10, o3, nox, temperatura } = values;

        if (!co2 || !pm25 || !pm10 || !o3 || !nox || !temperatura) {
            return;
        }

        const total = parseFloat(co2) + parseFloat(pm25) + parseFloat(pm10) + parseFloat(o3) + parseFloat(nox) + parseFloat(temperatura);

        let calidad = '';

        if (total < 100) calidad = 'Verde - Excelente Aire';
        else if (total < 200) calidad = 'Amarillo - Buen Aire';
        else if (total < 300) calidad = 'Naranja - Aire Aceptable';
        else if (total < 400) calidad = 'Rojo - Aire Malo';
        else calidad = 'Morado - Aire Peligroso';


        setTotal(total);
        setCalidad(calidad);
    };

    return (
        <div className="calculator__main-box">
            <h2 className="calculator__title">Calculadora de riesgos</h2>
            <form onSubmit={handleSubmit} className="calculator__form">

                <div>
                    <label className="calculator__label">CO2 (Dióxido de Carbono)</label>
                    <InputCalculator name="co2" value={values.co2} onChange={handleChange} />
                </div>

                <div>
                    <label className="calculator__label">PM2.5 (Material Particulado Fino)</label>
                    <InputCalculator name="pm25" value={values.pm25} onChange={handleChange} />
                </div>

                <div>
                    <label className="calculator__label">PM10 (Material Particulado Grueso)</label>
                    <InputCalculator name="pm10" value={values.pm10} onChange={handleChange} />
                </div>

                <div>
                    <label className="calculator__label">O3 (Ozono)</label>
                    <InputCalculator name="o3" value={values.o3} onChange={handleChange} />
                </div>

                <div>
                    <label className="calculator__label">NOx (Óxidos de Nitrógeno)</label>
                    <InputCalculator name="nox" value={values.nox} onChange={handleChange} />
                </div>

                <div>
                    <label className="calculator__label">Temperatura</label>
                    <InputCalculator name="temperatura" value={values.temperatura} onChange={handleChange} />
                </div>

                <ButtonCalculator text="Calcular" type="submit" />
            </form>
        </div>
    )
}

export { Calculator }
