'use client'
import {useState, useEffect} from 'react'

export default function Pagos ({params}){
    const {pagoId} = params
    const [pago,setPago] = useState({})
    const getPago = ()=>{
        fetch(`/statics/pagos/${pagoId}.json`)
            .then(response=>{
                return response.json()
            })
            .then(data=>{
                setPago(data)
            })
    }
    useEffect(()=>{
        getPago()
    }, [])
    return(
        <div className="pagosId">
            <h2>Facturas pendientes</h2>
            <ul>
                <li>
                    <b>Empresa:</b>{pago.empresa}
                </li>
                <li>
                    <b>Factura Nº:</b>{pago.numero}
                </li>
                <li>
                    <b>Fecha de Vencimiento:</b>{pago.fecha}
                </li>
            </ul>
        </div>
    );
}