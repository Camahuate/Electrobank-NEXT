import React from 'react';
import '../styles/Transferencias.css';
import Header from '../Header';
import MenuLateral from '../MenuLateral';
import Prestamos from "./Prestamos";

function Transferencias () {
    const mostrarMensaje = (event) => {
        event.preventDefault(); 
        alert("Transferencia realizada con éxito");
        window.location.href = Transferencias; 
    }
    return (
    <div>
        <Header/>
        <MenuLateral/>
        <h2 className="tituloVioleta">Elige a quien quieres transferir</h2>
        <div className="destinatario cardIzquierda">
            <form onsubmit={mostrarMensaje}>
                <ul>
                    <li>
                        <label for="monto">Monto <strong>$</strong></label>
                        <input id="monto" type="number"/>
                    </li>
                    <li>
                        <label for="name">Nombre del destinatario</label>
                        <input id="name" type="text"/>
                    </li>
                    <li>
                        <label for="cbu">CBU</label>
                        <input id="cbu" type="text"/>
                    </li>
                    <li>
                        <label for="date">Fecha y hora</label>
                        <input id="date" type="datetime-local"/>
                    </li>
                    <li>
                        <label for="motivo">Motivo y concepto</label>
                        <select id="motivo">
                            <option value="alquiler">Alquileres</option>
                            <option value="haber" selected>Haberes</option>
                            <option value="expensas" selected>Expensas</option>
                            <option value="prestamos">Préstamos</option>
                            <option value="seguros">Seguros</option>
                            <option value="varios">Varios</option>
                        </select>
                    </li>
                    <button className="btn-violeta" type="submit">Transferir</button>
                </ul>
            </form>
            <Prestamos />
        </div>
    </div>
    
    );
}

export default Transferencias;