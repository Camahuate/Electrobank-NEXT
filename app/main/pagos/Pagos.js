import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/Pagos.css';
import Header from '../Header';
import MenuLateral from '../MenuLateral';

export default function Pagos () {
    
    const [pagos, setPagos] = useState([]);
  
    useEffect(() => {
      getPagos();
    }, []);
  
    const getPagos = () => {
      fetch("/statics/pagos.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPagos(data);
        });
    };
    return (
    <div className='pagos'>
        <Header/>
        <MenuLateral/>
        <h2>Pago de servicios</h2>
          <div className="row"> 
            <div className="column"> 
              <div className="card"> 
                <Image src='/SUBE.png' className="servicio" alt="SUBE" width={300} height={100} priority />
                <h3>SUBE</h3>
              </div>
            </div>
            <div className="column"> 
              <div className="card"> 
                <Image src='/FIBERTEL.png' className="servicio" alt="Fibertel" width={300} height={100} priority />
                <h3>Visa</h3>
              </div>
            </div>
            <div className="column"> 
              <div className="card"> 
                <Image src='/PERSONAL.png' className="servicio" alt="Personal" width={300} height={100} priority />
                <h3>Personal</h3>
              </div>
            </div>
            <div className="column"> 
              <div className="card"> 
                <Image src='/VISA.png' className="servicio" alt="Visa" width={300} height={100} priority />
                <h3>Fibertel</h3>
              </div>
            </div>
        </div>
        <h2>Facturas pendientes</h2>
        <div className="cardIzquierda">
            <ul>
                {pagos.map((p) => (
                <li key={`${p.empresa}:${p.id}`}>
                <h4>{p.empresa}</h4>
                {/* Utiliza la ruta dinámica para la página de detalle */}
                <Link href={`/main/pagos/${p.id}`} target="_blank">
                        <button className="btn-violeta">Pagar</button>
                        </Link>
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}
