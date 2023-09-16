import React from 'react';
import './styles/Promociones.css';


function Informacion() {
  return (
    <section className="informacion cardIzquierda">
        <h2 className="tituloVioleta">¿Por qué elegir Electrobank?</h2>
        <p>
            Electrobank es tu banco en línea de confianza, ofreciendo servicios
            bancarios seguros y convenientes. Nuestros beneficios incluyen:
        </p>
        <ul>
            <li className="beneficios">
            Tasas de interés competitivas en cuentas de ahorro.
            </li>
            <li className="beneficios">Transferencias rápidas y seguras.</li>
            <li className="beneficios">Acceso a tus cuentas en línea las 24/7.</li>
            <li className="beneficios">Atención al cliente excepcional.</li>
        </ul>
    </section>
    );
}

export default Informacion;
