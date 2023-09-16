import React from "react";
import tarjeta1 from '../images/tarjeta1.png'
import tarjeta2 from '../images/tarjeta2.png'
import graficocuentas from '../images/grafico_cuentas.png'
import graficocuentas2 from '../images/grafico_cuentas2.png'
import '../styles/Cuentas.css';
import ConversorMoneda from "../ConversorMoneda";
import Header from '../Header';
import MenuLateral from '../MenuLateral';

function Cuentas () {
    return (
        <div>
        <Header/>
        <MenuLateral/>
        <div class="row">
            <div class="column">
                <div class="card">
                    <img src={tarjeta1} className="tarjeta" alt="Tarjeta bancaria"/>
                    <h3>Caja de ahorro</h3>
                    <p>Saldo: $350.000</p>
                    <ul>
                        <li>Compra en supermercadp: -$50.000</li>
                        <li>Depósito en efectivo: +$10.000</li>
                        <li>Retiro en cajero: -$2.000</li>
                        <li><a href="#">Ver más movimientos</a></li>
                    </ul>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <img src={tarjeta2} className="tarjeta" alt="Tarjeta bancaria"/>
                    <h3>Cuenta Corriente</h3>
                    <p>Saldo: $150.700</p>
                    <ul>
                        <li>Transferencia entrante: +$3.000</li>
                        <li>Pago de factura: -$15.000</li>
                        <li>Compra online: -$50.000</li>
                        <li><a href="#">Ver más movimientos</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="row"></div>
        <div class="column">
            <div class="card">
                <img src={graficocuentas} className="grafico" alt="grafico cuentas bancarias"/>
                <img src={graficocuentas2} className="grafico" alt="grafico cuentas bancarias"/>
            </div>
        </div>
        <ConversorMoneda />
    </div>
    )
}

export default Cuentas;