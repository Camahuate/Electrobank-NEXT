import React from 'react';
import './styles/MenuLateral.css';
import { Link } from "react-router-dom";
export default function MenuLateral() {
  return (
    <div className="menu-lateral">
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