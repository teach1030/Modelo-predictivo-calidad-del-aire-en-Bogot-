import React from 'react';
import './../styles/us.css';

const integrantes = [
  {
    nombre: 'Juan Esteban Guerrero Vera',
    rol: 'Estudiante de Ingeniería de Sistemas - 6to Semestre',
  },
  {
    nombre: 'Jan Diego Sánchez Rodríguez',
    rol: 'Estudiante de Ingeniería de Sistemas - 6to Semestre',
  },
];

const Us = () => {
  return (
    <div className="us-container">
      <h1>Semillero de Investigación - Universidad Libre</h1>
      <p>
        Este proyecto es desarrollado dentro del semillero de investigación Sensorama de la Facultad de Ingeniería
        de la Universidad Libre sede Bogota. Bajo la tutoría del Ingeniero Ricardo Santa, buscamos crear un modelo predictivo que permita
        estimar la calidad del aire en diferentes zonas. Actualmente, nos encontramos desarrollando la plataforma web del proyecto.
      </p>

      <h2>Integrantes del Semillero</h2>

      <div className="us-cards">
        {integrantes.map((item, index) => (
          <div className="us-card" key={index}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="avatar"
              className="us-avatar"
            />
            <h3>{item.nombre}</h3>
            <p>{item.rol}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Us };