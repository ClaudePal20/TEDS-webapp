// En el componente Dashboard
import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Sidebar from './Sidebar';
import { addBlock, createGenesisBlock } from './Blockchain'; // Importar las funciones del blockchain
import Blockchain from './Blockchain';
import './Dashboard.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [blockchain, setBlockchain] = useState([createGenesisBlock()]); // Inicializar el blockchain con el bloque génesis

  const addTransaction = (transaction) => {
    // Agregar la transacción al estado local de las transacciones
    setTransactions([...transactions, transaction]);
    // Agregar la transacción al blockchain
    const updatedBlockchain = addBlock(blockchain, transaction);
    setBlockchain(updatedBlockchain);
  };

  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main-content'>
        <h1>Transacciones</h1>
        <div className='transaction-form'>
          <TransactionForm
            onTransactionSubmit={addTransaction}
            blockchain={blockchain} // Pasar el blockchain como prop
            setBlockchain={setBlockchain} // Pasar la función para actualizar el blockchain como prop
          />
        </div>
        <div className='blockchain'>
          <Blockchain blockchain={blockchain} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
