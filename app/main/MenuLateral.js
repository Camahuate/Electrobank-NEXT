import React from 'react';
import './styles/MenuLateral.css';
import Link from 'next/link'; // Importa Link de Next.js

function MenuLateral() {
  return (
    <div className="menu-lateral">
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/transferencias">Transferencias</Link>
        </li>
        <li>
          <Link href="/pagos">Pagos</Link>
        </li>
        <li>
          <Link href="/cuentas">Cuentas</Link>
        </li>
        <li>
          <Link href="/main/tarjetas">Tarjetas</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuLateral;