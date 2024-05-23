// Dashboard.js
import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Sidebar from './Sidebar'; 
import './Dashboard.css'; 

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className='dashboard'>
      <Sidebar />
      <h1>Dashboard</h1>
      <div className='main-content'>
        <TransactionForm onTransactionSubmit={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default Dashboard;
