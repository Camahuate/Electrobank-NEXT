import './styles/Promociones.css';
import React, { useState, useEffect } from 'react';

function ConversorMoneda() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    convertCurrency();
  }, [fromCurrency, toCurrency, amount, exchangeRates]);

  const fetchExchangeRates = () => {
    const apiEndpoint = 'https://api.exchangerate-api.com/v4/latest/USD';

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos de conversión.', error);
      });
  };

  const convertCurrency = () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue)) {
      setResult('Ingrese una cantidad válida.');
      return;
    }
    if (fromCurrency === toCurrency) {
      setResult('Las monedas son iguales. No es necesario convertir.');
      return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      setResult('No se encontraron tasas de conversión para estas monedas.');
      return;
    }

    const conversionRateFrom = exchangeRates[fromCurrency];
    const conversionRateTo = exchangeRates[toCurrency];
    let convertedAmount = 0;

    if (fromCurrency === 'USD') {
      convertedAmount = (amountValue * conversionRateTo).toFixed(2);
    } else if (toCurrency === 'USD') {
      convertedAmount = (amountValue / conversionRateFrom).toFixed(2);
    } else {
      convertedAmount = ((amountValue / conversionRateFrom) * conversionRateTo).toFixed(2);
    }

    setResult(`Resultado: ${amountValue} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
  };

  return (
    <div className="cardIzquierda">
      <h2 className="tituloVioleta">Conversor de moneda</h2>
      <div className="input-container">
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          id="amount"
          placeholder="Ingrese la cantidad"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <br />
      <br />
      <div className="input-container">
        <label htmlFor="fromCurrency">De:</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <br />
      <br />
      <div className="input-container">
        <label htmlFor="toCurrency">A:</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <br />
      <br />
      
      <p>
        {result && <span id="result">{result}</span>}
      </p>
    </div>
  );
}

export default ConversorMoneda;
