import './../styles/login.css'
import React from "react";
import { Button } from "./Button";
import { FaGoogle } from "react-icons/fa";
import { Input } from "./Input";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate();
    
    function login(){
        navigate('/mapa');
    }

    return(<div className="login__box">
        <h2>Inciar sesión</h2>
        <form className="login__form">
            <div>
                <Input label={'Correo electrónico'} type={'text'}/>
                <Input label={'Contraseña'} type={'password'}/>
                <a href="/">¿Olivaste tu contraseña?</a>
            </div>
            <div>
                <Button text={'INGRESAR'} action={login}/>
                <Button text={'INGRESAR CON GOOGLE'} icon={<FaGoogle size={20}/>} primary={false} action = {login}/>
            </div>
        </form>
    </div>);
}

export {Login}