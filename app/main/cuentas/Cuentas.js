import React from "react";
import Image from 'next/image';
import '../styles/Cuentas.css';
import ConversorMoneda from "../ConversorMoneda";
import Header from '../Header';
import MenuLateral from '../MenuLateral';

export default function Cuentas () {
    return (
        <div>
        <Header/>
        <MenuLateral/>
        <div class="row">
            <div class="column">
                <div class="card">
                    <Image src='/tarjeta1.png' className="tarjeta" alt="Tarjeta bancaria" width={300} height={200}
              priority/>
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
                    <Image src='/tarjeta2.png' className="tarjeta" alt="Tarjeta bancaria" width={300} height={200}
              priority/>
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
                <Image src='/grafico_cuentas.png' className="grafico" alt="grafico cuentas bancarias" width={300} height={200}
              priority/>
                <Image src='/grafico_cuentas2.png' className="grafico" alt="grafico cuentas bancarias" width={300} height={200}
              priority/>
            </div>
        </div>
        <ConversorMoneda />
    </div>
    )
}