// TransactionForm.js
import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';
import './TransactionForm.css';

function TransactionForm({ onTransactionSubmit }) {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [cryptoCoin, setCrypto] = useState(''); // Add state for cryptocurrency selection
  const [hash, setHash] = useState('');


  function generateRandomHash() {
    // Generamos una cadena aleatoria
    const randomString = Math.random().toString(36).substring(2);
    
    // Calculamos el hash SHA-256 de la cadena aleatoria
    const hash = SHA256(randomString).toString();
    
    return hash;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      address: address,
      amount: amount,
      cryptoCoin: cryptoCoin, 
      hash: generateRandomHash()
    };
    onTransactionSubmit(transaction);
    //Reset values after submission
    setAddress('');
    setAmount('');
    setCrypto('');
    setHash('');
  };

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <div className='form-group'>
        <label htmlFor='address'>Recipient Address:</label>
        <input
          type='text'
          id='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='amount'>Amount to Send:</label>
        <input
          type='number'
          id='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='crypto'>Select Cryptocurrency:</label>
        <select
          id='crypto'
          value={cryptoCoin}
          onChange={(e) => setCrypto(e.target.value)}
          required
        >
          <option value=''>Select Cryptocurrency</option>
          <option value='BTC'>Bitcoin</option>
          <option value='ETH'>Ethereum</option>
          <option value='XRP'>Ripple</option>
        </select>
      </div>
      <button type='submit'>Send Transaction</button>
    </form>
  );
}

export default TransactionForm;
