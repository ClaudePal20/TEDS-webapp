import React, { useState } from 'react';
import './Blockchain.css';
import { SHA256 } from 'crypto-js';

export const customHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return hash.toString(16);
};

export const createBlock = (index, timestamp, data, previousHash = '') => {
  const block = {
    index,
    timestamp,
    data,
    previousHash,
    hash: '',
  };
  block.hash = calculateBlockHash(block);
  return block;
};

export const calculateBlockHash = (block) => {
  const { index, timestamp, data, previousHash } = block;
  const hashInput = `${index}${timestamp}${JSON.stringify(data)}${previousHash}`;
  return SHA256(hashInput).toString();
};

export const createGenesisBlock = () => {
  return createBlock(0, new Date().toISOString(), 'Genesis Block', '0');
};

export const addBlock = (blockchain, transaction) => {
  if (blockchain.length === 0) {
    return [createGenesisBlock()];
  } else {
    const lastBlock = blockchain[blockchain.length - 1];
    const newBlock = createBlock(
      lastBlock.index + 1,
      new Date().toISOString(),
      transaction,
      lastBlock.hash
    );
    transaction.timestamp = newBlock.timestamp;
    transaction.hash = newBlock.hash;
    transaction.prev_hash = newBlock.previousHash;
    return [...blockchain, newBlock];
  }
};

const Blockchain = ({ blockchain, setBlockchain }) => {
  const [newData, setNewData] = useState('');

  const handleChange = (event) => {
    setNewData(event.target.value);
  };

  return (
    <div className="blockchain-container">
      <div>
        <input
          type="text"
          value={newData}
          onChange={handleChange}
          placeholder="Buscar transacción"
        />
      </div>
      <div>
        <h2>Blockchain</h2>
        <div className="blocks">
          {blockchain.map((block, index) => (
            <div key={index} className="block-card">
              <p><strong>Index:</strong> {block.index}</p>
              <p><strong>Timestamp:</strong> {block.timestamp}</p>
              <p><strong>Data:</strong> {JSON.stringify(block.data)}</p>
              <div className="hash-text">
                <p><strong>Previous Hash:</strong> {block.previousHash}</p>
              </div>
              <p><strong>Hash:</strong> {block.hash}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};


export default Blockchain;
