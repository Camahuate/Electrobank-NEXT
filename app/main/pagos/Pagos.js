import React from 'react';

import Image from 'next/image';
import '../styles/Pagos.css';
import Header from '../Header';
import MenuLateral from '../MenuLateral';

function Pagos () {
    const pagoExitoso = (event) => {
        event.preventDefault(); 
        alert("Pago realizado con éxito");
        window.location.href = Pagos; 
    }
    return (
    <div>
        <Header/>
        <MenuLateral/>
        <h2>Pago de servicios</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                    <Image src='/SUBE.png' className="servicio" alt="SUBE" width={200} height={24}
              priority/>
                    <h3>SUBE</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <Image src='/FIBERTEL.png' className="servicio" alt="Fibertel" width={200} height={24}
              priority/>
                    <h3>Visa</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <Image src='/PERSONAL.png' className="servicio" alt="Personal" width={200} height={24}
              priority/>
                    <h3>Personal</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <Image src='/VISA.png' className="servicio" alt="Visa" width={200} height={24}
              priority/>
                    <h3>Fibertel</h3>
                </div>
            </div>
        </div>
        <h2>Facturas pendientes</h2>
        <div className="cardIzquierda">
            <ul>
                <li>
                    <span>Número de Factura: 12345</span>
                    <button className="btn-violeta" onclick={pagoExitoso}>Pagar</button>
                </li>
                <br/>
                <li>
                    <span>Número de Factura: 67890</span>
                    <button className="btn-violeta" onclick={pagoExitoso}>Pagar</button>
                </li>
                <br/>
                <li>
                    <span>Número de Factura: 6666</span>
                    <button className="btn-violeta" onclick={pagoExitoso}>Pagar</button>
                </li>
                <br/>
                <li>
                    <span>Número de Factura: 12345</span>
                    <button className="btn-violeta" onclick={pagoExitoso}>Pagar</button>
                </li>
                <br/>
                <li>
                    <span>Número de Factura: 98765</span>
                    <button className="btn-violeta">Pagar</button>
                </li>
                <br/>
                <li>
                    <span>Número de Factura: 76543</span>
                    <button className="btn-violeta">Pagar</button>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Pagos