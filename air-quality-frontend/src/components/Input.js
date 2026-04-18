import React from 'react'
import './../styles/input.css'

const Input = ({ label, type }) => {
    return(<div className='inp'>
        <label  className="inp__label">{ label }</label>
        <input className='inp__input' type={ type } />
    </div>);
}

export { Input }