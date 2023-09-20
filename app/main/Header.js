import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.encabezado}>
      <div style={{ display: 'flex' }}>
        <h1>
          <Image
            className={styles.logo}
            src='/ELECTOBANK-logo.png'
            alt="Electrobank Logo"
            sizes='(max-width: 200px)100vw'
            width='300'
            height='24'
          />
        </h1>
      </div>
      <nav>
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} id="bar1" />
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} id="bar2" />
          <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} id="bar3" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
