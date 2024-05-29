import React, { useState } from 'react';
import './TransactionForm.css';
import { addBlock, isBlockchainValid } from './Blockchain';

function TransactionForm({ onTransactionSubmit, blockchain, setBlockchain }) {
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [cryptoCoin, setCrypto] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const transaction = {
      wallet: wallet,
      amount: amount,
      cryptoCoin: cryptoCoin,
      timestamp: '',
      prev_hash: '',
      hash: '' 
    };

    const updatedBlockchain = addBlock(blockchain, transaction);
    setBlockchain(updatedBlockchain);
    
    onTransactionSubmit(transaction);

    setWallet('');
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
          onChange={(e) => setWallet(e.target.value)}
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
