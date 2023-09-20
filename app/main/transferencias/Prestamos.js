import React, { useState } from 'react';

function Prestamos() {
  const [monto, setMonto] = useState('');
  const [tasa, setTasa] = useState('');
  const [cuotaMensual, setCuotaMensual] = useState('');

  const calcularCuotaMensual = () => {
    const montoNumero = parseFloat(monto);
    const tasaNumero = parseFloat(tasa);

    if (isNaN(montoNumero) || isNaN(tasaNumero)) {
      alert('Por favor, ingrese un monto y una tasa de interés válidos.');
      return;
    }

    const tasaMensual = (tasaNumero / 12) / 100;

    const plazoMeses = 12; 
    const cuota = (montoNumero * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));

    setCuotaMensual(cuota.toFixed(2)); 
  };

  return (
    <div className="cardIzquierda">
      <h2 className="tituloVioleta">Préstamos</h2>
      <div className="input-container">
        <label htmlFor="monto">Monto del préstamo: </label>
        <input
          type="number"
          id="monto"
          placeholder="Ingrese el monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>
      <br />
      <br />
      <div className="input-container">
        <label htmlFor="tasa">Tasa de interés anual (%): </label>
        <input
          type="number"
          id="tasa"
          placeholder="Ingrese la tasa de interés"
          value={tasa}
          onChange={(e) => setTasa(e.target.value)}
        />
      </div>
      <br />
      <br />
      <button className="btn-violeta" onClick={calcularCuotaMensual}>
        Calcular Cuota Mensual
      </button>
      <p>
        {cuotaMensual && (
          <span id="result">Cuota Mensual: {cuotaMensual}</span>
        )}
      </p>
    </div>
  );
}

export default Prestamos;