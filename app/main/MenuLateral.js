import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/MenuLateral.module.css'; // Ajusta la ruta según la ubicación real de tu archivo CSS Module

function MenuLateral() {
  return (
    <div className={styles['menu-lateral']}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/transferencias">Transferencias</Link>
        </li>
        <li>
          <Link to="/pagos">Pagos</Link>
        </li>
        <li>
          <Link to="/cuentas">Cuentas</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuLateral;