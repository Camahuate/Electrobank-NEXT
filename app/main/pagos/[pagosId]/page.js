'use client'
import { useState, useEffect } from 'react';

export default function Pagos({ params }) {
  const { pagoId } = params;
  const [pago, setPago] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPago = () => {
      fetch(`/statics/pagos.json`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Buscar el pago correspondiente al pagoId
          const pagoEncontrado = data.find((p) => p.id === parseInt(pagoId));

          if (pagoEncontrado) {
            setPago(pagoEncontrado);
          } else {
            // Manejar el caso en que no se encuentra el pago
            setPago(null);
          }

          setLoading(false);
        });
    };

    getPago();
  }, [pagoId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!pago) {
    return <div>Pago no encontrado</div>;
  }

  return (
    <div className="pagosId">
      <h2>Detalles del Pago</h2>
      <ul>
        <li>
          <b>Empresa:</b> {pago.empresa}
        </li>
        <li>
          <b>Monto:</b> ${pago.monto}
        </li>
        
      </ul>
    </div>
  );
}
