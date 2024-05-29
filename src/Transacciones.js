// En el componente Dashboard
import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Sidebar from './Sidebar';
import { addBlock, createGenesisBlock } from './Blockchain'; 
import Blockchain from './Blockchain';
import './Transacciones.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [blockchain, setBlockchain] = useState([createGenesisBlock()]); 

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    const updatedBlockchain = addBlock(blockchain, transaction);
    setBlockchain(updatedBlockchain);
  };

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main-content'>
        <h1>Transacciones</h1>
        <div className='row-1'>
            <TransactionForm
              onTransactionSubmit={addTransaction}
              blockchain={blockchain}
              setBlockchain={setBlockchain} 
              />
          <div className='blockchain'>
            <Blockchain blockchain={blockchain} />
          </div>
        </div>
        <h1>Mis transacciones</h1>
        <div className='transaction-list'>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
