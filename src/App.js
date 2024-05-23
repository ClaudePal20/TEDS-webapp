import React, { useState } from 'react';
import './App.css';

function App() {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para procesar la transacción usando una API de blockchain
    console.log(`Enviando ${amount} a ${address}`);
  }

  return (
    <div className='main-container'>
      <h1>Blockchain Transaction</h1>
      <form onSubmit={handleSubmit} className='transaction-form'>
        <div className='form-group'>
          <label htmlFor='address'>Dirección del destinatario:</label>
          <input
            type='text'
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Cantidad a enviar:</label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Enviar Transacción</button>
      </form>
    </div>
  );
}

export default App;
