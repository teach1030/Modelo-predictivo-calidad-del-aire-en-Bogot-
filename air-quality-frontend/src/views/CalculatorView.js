import React, { useState } from "react";
import { Prediction } from './../components/Prediction';
import { Instructions } from './../components/Instructions';
import { Calculator } from "../components/Calculator";
import './../styles/calculatorview.css'
import { Nav } from "../components/Nav";

const CalculatorView = () => {

    const [total, setTotal] = useState(0);
    const [calidad, setCalidad] = useState('');

    return (
        <>
    <Nav />
    <div className="calculator-view__container">
        <div className="calculator-view__top-content">
            <Calculator setTotal={setTotal} setCalidad={setCalidad} />
            <Prediction total={total} calidad={calidad} />
        </div>
        <Instructions />
    </div>
</>
    )
}

export { CalculatorView }
