import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/Pagos.css';
import Header from '../Header';
import MenuLateral from '../MenuLateral';
import {useEffect, useState} from "react";

export default function Pagos () {
    const [pagos, setPagos] = useState([])
    
    const pagoExitoso = (event) => {
        event.preventDefault(); 
        alert("Pago realizado con éxito");
        window.location.href = Pagos; 
    }
    
    const getPagos = ()=>{
        fetch("/statics/pagos.json")
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                setPagos(data)
            })
    }
    useEffect(()=>{
        getPagos()
    }, [])
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
                {pagos.map(p => (
                <li key={`${p.empresa}:${p.numero}`}>
                    <h4>{p.empresa}</h4>
                    <Link href={`/main/pagos/${p.numero}`} >
                        <button className="btn-violeta" onclick={pagoExitoso}>Pagar</button>
                        </Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}
