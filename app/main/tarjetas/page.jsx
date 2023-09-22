import React from "react";
import Image from 'next/image';
import '../styles/Tarjetas.css'; 
import MenuLateral from '../MenuLateral';
import Header from '../Header';
import Link from 'next/link';

const tarjetasData = [
    {
        id: 1,
        nombre: "Tarjeta de Crédito Oro",
        imagen: "/tarjeta_oro.png",
        limiteCredito: "$5,000",
        saldoDisponible: "$3,000",
    },
    {
        id: 2,
        nombre: "Tarjeta de Débito Clásica",
        imagen: "/tarjeta_debito.png",
        limiteCredito: "N/A",
        saldoDisponible: "$1,500",
    },
    {
        id: 3,
        nombre: "Tarjeta de Crédito Platino",
        imagen: "/tarjeta_platino.png",
        limiteCredito: "$10,000",
        saldoDisponible: "$8,500",
    },
    {
        id: 4,
        nombre: "Tarjeta de Débito Premium",
        imagen: "/tarjeta_premium.png",
        limiteCredito: "N/A",
        saldoDisponible: "$2,000",
    },
];

function Tarjetas() {
    return (
        <div>
            <h1>Tarjetas Disponibles</h1>
            <div className="tarjetas-container">
                {tarjetasData.map((tarjeta) => (
                    <div key={tarjeta.id} className="card">
                        <Image src={tarjeta.imagen} className="tarjeta" alt={`Tarjeta ${tarjeta.nombre}`} width={200} height={24} priority />
                        <h3>{tarjeta.nombre}</h3>
                        <p>Límite de Crédito: {tarjeta.limiteCredito}</p>
                        <p>Saldo Disponible: {tarjeta.saldoDisponible}</p>
                        <button onClick={() => handleSeleccionarTarjeta(tarjeta.id)}>Seleccionar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tarjetas;
