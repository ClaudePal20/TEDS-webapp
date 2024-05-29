// TransactionList.js
import React from 'react';
import './TransactionList.css';
import CardSlider from './CardSlider';
function TransactionList({ transactions }) {
  const cards = transactions.map((transaction, index) => (
    <div className='card' key={index}>
      <div className="card-items"> 
        <div className="card-left-square">
          <h5>Transaccion exitosa</h5>
        </div>
        <div className="card-right-square">
          <h3>Transaction #{index + 1}</h3>
          <p><strong>Wallet:</strong> {transaction.wallet}</p>
          <p><strong>Amount:</strong> {transaction.amount}</p>
          <p><strong>Crypto:</strong> {transaction.cryptoCoin}</p>
          <p><strong>Date:</strong> {transaction.timestamp}</p>
          <p className="hash-text"><strong>Hash:</strong> {transaction.hash}</p>
          <p className="hash-text"><strong>Previous hash:</strong> {transaction.prev_hash}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='transaction-list'>
      <CardSlider cards={cards} />
    </div>
  );
}

export default TransactionList;
