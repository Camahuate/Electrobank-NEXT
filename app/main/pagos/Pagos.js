import React from 'react';
import sube from '../images/SUBE.png'
import fibertel from '../images/FIBERTEL.png'
import personal from '../images/PERSONAL.png'
import visa from '../images/VISA.png'
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
                    <img src={sube} className="servicio" alt="SUBE"/>
                    <h3>SUBE</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={fibertel} className="servicio" alt="Fibertel"/>
                    <h3>Visa</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={personal} className="servicio" alt="Personal"/>
                    <h3>Personal</h3>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={visa} className="servicio" alt="Visa"/>
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