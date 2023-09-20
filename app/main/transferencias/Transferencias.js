import React from 'react';
import styles from '../../styles/Transferencias.module.css'; // Asegúrate de que la ruta sea correcta
import Header from '../Header';
import MenuLateral from '../MenuLateral';
import Prestamos from "./Prestamos";

function Transferencias() {
    const mostrarMensaje = (event) => {
        event.preventDefault();
        alert("Transferencia realizada con éxito");
    }

    return (
        <div>
            <Header />
            <MenuLateral />
            <h2 className={styles.tituloVioleta}>Elige a quién quieres transferir</h2>
            <div className={`${styles.destinatario} ${styles.cardIzquierda}`}>
                <form onSubmit={mostrarMensaje}>
                    <ul className={styles.myList}>
                        <li className={styles.listItem}>
                            <label className={styles.labelStyle} htmlFor="monto">Monto <strong>$</strong></label>
                            <input className={styles.inputStyle} id="monto" type="number" />
                        </li>
                        <li className={styles.listItem}>
                            <label className={styles.labelStyle} htmlFor="name">Nombre del destinatario</label>
                            <input className={styles.inputStyle} id="name" type="text" />
                        </li>
                        <li className={styles.listItem}>
                            <label className={styles.labelStyle} htmlFor="cbu">CBU</label>
                            <input className={styles.inputStyle} id="cbu" type="text" />
                        </li>
                        <li className={styles.listItem}>
                            <label className={styles.labelStyle} htmlFor="date">Fecha y hora</label>
                            <input className={styles.inputStyle} id="date" type="datetime-local" />
                        </li>
                        <li className={styles.listItem}>
                            <label className={styles.labelStyle} htmlFor="motivo">Motivo y concepto</label>
                            <select className={styles.selectStyle} id="motivo">
                                <option value="alquiler">Alquileres</option>
                                <option value="haber" selected>Haberes</option>
                                <option value="expensas" selected>Expensas</option>
                                <option value="prestamos">Préstamos</option>
                                <option value="seguros">Seguros</option>
                                <option value="varios">Varios</option>
                            </select>
                        </li>
                        <button className={styles.btnVioleta} type="submit">Transferir</button>
                    </ul>
                </form>
                <Prestamos />
            </div>
        </div>
    );
}

export default Transferencias;
