// TransactionList.js
import React from 'react';
import './TransactionList.css';
import CardSlider from './CardSlider';

function TransactionList({ transactions }) {
  const cards = transactions.map((transaction, index) => (
    <div className='card' key={index}>
      <h3>Transaction #{index + 1}</h3>
      <p><strong>Address:</strong> {transaction.address}</p>
      <p><strong>Amount:</strong> {transaction.amount}</p>
      <p><strong>Crypto:</strong> {transaction.cryptoCoin}</p>
      <p><strong>Hash:</strong> {transaction.hash}</p>
    </div>
  ));

  return (
    <div className='transaction-list'>
      <CardSlider cards={cards} />
    </div>
  );
}

export default TransactionList;
