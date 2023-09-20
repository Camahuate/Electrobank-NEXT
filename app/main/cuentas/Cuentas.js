import React from "react";
import Image from 'next/image';
import styles from '../../styles/Cuentas.module.css'
import Header from '../Header';
import MenuLateral from '../MenuLateral';

function Cuentas () {
    return (
        <div>
        <Header/>
        <MenuLateral/>
        <div className="row">
            <div className="column">
                <div className={styles.card}>
                    <Image src='/tarjeta1.png' className={styles.tarjeta} alt="Tarjeta bancaria" width={200} height={24} priority/>
                    <h3>Caja de ahorro</h3>
                    <p>Saldo: $350.000</p>
                    <ul>
                        <li>Compra en supermercado: -$50.000</li>
                        <li>Depósito en efectivo: +$10.000</li>
                        <li>Retiro en cajero: -$2.000</li>
                        <li><a href="#">Ver más movimientos</a></li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className={styles.card}> 
                    <Image src='/tarjeta2.png' className={styles.tarjeta} alt="Tarjeta bancaria" width={200} height={24} priority/>
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
        <div className="row"></div>
        <div className="column">
            <div className={styles.card}> 
                <Image src='/grafico_cuentas.png' className={styles.grafico} alt="grafico cuentas bancarias" width={200} height={24} priority/>
                <Image src='/grafico_cuentas2.png' className={styles.grafico} alt="grafico cuentas bancarias" width={200} height={24} priority/>
            </div>
        </div>
        <ConversorMoneda />
    </div>
    )
}

export default Cuentas;