import React from 'react';

import Promo1 from './images/promocion1.jpeg';
import Promo2 from './images/promocion2.jpeg';
import Promo3 from './images/promocion3.jpeg';

function Promociones() {
  return (
    <>
      <section className="promociones">
        <div className="promocion cardIzquierda">
          <h2 className="tituloVioleta">Promociones y Beneficios</h2>
          <div className="imagen-container">
            <img src={Promo1} alt="Promoción 1" className="promo-img" />
          </div>
          <div className="imagen-container">
            <img src={Promo3} alt="Promocion 3" className="promo-img" />
          </div>
          <p className="tituloNaranja">
            ¡Abre una cuenta hoy y recibe un bono de $1000!
          </p>
        </div>
        <div className="promocion">
          <img src={Promo2} alt="Promoción 2" className="promo-img-100" />
          <p className="tituloNaranja" style={{ textAlign: "center" }}>
            Transferencias gratuitas a nivel nacional.
          </p>
        </div>
      </section>
      <br />
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
          <li className="beneficios">
            Acceso a tus cuentas en línea las 24/7.
          </li>
          <li className="beneficios">Atención al cliente excepcional.</li>
        </ul>
      </section>
    </>
  );
}

export default Promociones;