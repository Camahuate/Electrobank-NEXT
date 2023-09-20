import React from 'react';
import styles from '../styles/Promociones.module.css'; 
import Image from 'next/image';

function Promociones() {
  return (
    <>
      <section className={styles.promociones}>
        <div className={`${styles.promocion} ${styles.cardIzquierda}`}>
          <h2 className={styles.tituloVioleta}>Promociones y Beneficios</h2>
          <div className={styles.imagenContainer}>
            <Image src='/promocion1.jpeg' alt="Promoción 1" className={styles.promoImg} width={200} height={24} sizes='max-width: 100%' style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className={styles.imagenContainer}>
            <Image src='/promocion3.jpeg' alt="Promocion 3" className={styles.promoImg} width={200} height={24} sizes='max-width: 100%' style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <p className={styles.tituloNaranja}>
            ¡Abre una cuenta hoy y recibe un bono de $1000!
          </p>
        </div>
        <div className={styles.promocion}>
          <Image src='/promocion2.jpeg' alt="Promoción 2" className={styles.promoImg100} width={200} height={24} sizes='margin-bottom: 20px' style={{ left: '260px', width: '100%' }} priority />
          <p className={styles.tituloNaranja} style={{ textAlign: "center" }}>
            Transferencias gratuitas a nivel nacional.
          </p>
        </div>
      </section>
      <br />
      <section className={`${styles.informacion} ${styles.cardIzquierda}`}>
        <h2 className={styles.tituloVioleta}>¿Por qué elegir Electrobank?</h2>
        <p>
          Electrobank es tu banco en línea de confianza, ofreciendo servicios
          bancarios seguros y convenientes. Nuestros beneficios incluyen:
        </p>
        <ul>
          <li className={styles.beneficios}>
            Tasas de interés competitivas en cuentas de ahorro.
          </li>
          <li className={styles.beneficios}>Transferencias rápidas y seguras.</li>
          <li className={styles.beneficios}>
            Acceso a tus cuentas en línea las 24/7.
          </li>
          <li className={styles.beneficios}>Atención al cliente excepcional.</li>
        </ul>
      </section>
    </>
  );
}

export default Promociones;
