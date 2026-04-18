import React from "react";
import './../styles/nav.css';
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const items = [
        { name: 'Inicio', link: '/' },
        { name: 'Mapa', link: '/mapa' },
        { name: 'Calculadora', link: '/calculadora' },
        { name: 'Nosotros', link: '/nosotros' },
    ];

    const navigate = useNavigate();

    return (
        <div className="nav-container">
            <nav className="nav-components">
                {items.map((item, index) => (
                    <p
                        key={index}
                        onClick={() => navigate(item.link)}
                        className="nav-components__item"
                    >
                        {item.name}
                    </p>
                ))}
            </nav>
        </div>
    );
}

export { Nav }
