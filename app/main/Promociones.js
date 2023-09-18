import React from 'react';

import Image from 'next/image';


function Promociones() {
  return (
    <>
      <section className="promociones">
        <div className="promocion cardIzquierda">
          <h2 className="tituloVioleta">Promociones y Beneficios</h2>
          <div className="imagen-container">
            <Image src='/promocion1.jpeg' alt="Promoción 1" className="promo-img" width={200} height={24}
              priority/>
          </div>
          <div className="imagen-container">
            <Image src='/promocion3.jpeg' alt="Promocion 3" className="promo-img" width={200} height={24}
              priority/>
          </div>
          <p className="tituloNaranja">
            ¡Abre una cuenta hoy y recibe un bono de $1000!
          </p>
        </div>
        <div className="promocion">
          <Image src='/promocion2.jpeg' alt="Promoción 2" className="promo-img-100" width={200} height={24}
              priority/>
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