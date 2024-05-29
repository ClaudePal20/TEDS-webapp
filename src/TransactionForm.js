import React, { useState } from 'react';
import { SHA256 } from 'crypto-js';
import './TransactionForm.css';
import { addBlock, isBlockchainValid } from './Blockchain';

function TransactionForm({ onTransactionSubmit, blockchain, setBlockchain }) {
  const [wallet, setwallet] = useState('');
  const [amount, setAmount] = useState('');
  const [cryptoCoin, setCrypto] = useState('');

  function generateRandomHash() {
    const randomString = Math.random().toString(36).substring(2);
    const hash = SHA256(randomString).toString();
    return hash;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      wallet: wallet,
      amount: amount,
      cryptoCoin: cryptoCoin
    };
    onTransactionSubmit(transaction);

    // Add transaction to the blockchain
    const updatedBlockchain = addBlock(blockchain, transaction);
    setBlockchain(updatedBlockchain);

    //Reset values after submission
    setwallet('');
    setAmount('');
    setCrypto('');
  };

  return (
    <form onSubmit={handleSubmit} className='transaction-form'>
      <div className='form-group'>
        <label htmlFor='wallet'>Cartera del receptor:</label>
        <input
          type='text'
          id='wallet'
          value={wallet}
          onChange={(e) => setwallet(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='amount'>Monto a enviar:</label>
        <input
          type='number'
          id='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className='form-group'>
        <select
          id='crypto'
          value={cryptoCoin}
          onChange={(e) => setCrypto(e.target.value)}
          required
        >
          <option value=''>Elegir criptomoneda</option>
          <option value='BTC'>Bitcoin</option>
          <option value='ETH'>Ethereum</option>
          <option value='XRP'>Ripple</option>
        </select>
      </div>
      <button type='submit'>Enviar transacción</button>
    </form>
  );
}

export default TransactionForm;
