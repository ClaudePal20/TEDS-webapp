// Blockchain.js
import React, { useState } from 'react';
import './Blockchain.css';

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
  const str = `${index}${timestamp}${JSON.stringify(data)}${previousHash}`;
  return customHash(str);
};

export const createGenesisBlock = () => {
  return createBlock(0, new Date().toISOString(), 'Genesis Block', '0');
};

export const addBlock = (blockchain, data) => {
  const lastBlock = blockchain[blockchain.length - 1];
  const newBlock = createBlock(
    lastBlock.index + 1,
    new Date().toISOString(),
    data,
    lastBlock.hash
  );
  return [...blockchain, newBlock];
};

export const isBlockchainValid = (blockchain) => {
  for (let i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const previousBlock = blockchain[i - 1];

    if (currentBlock.hash !== calculateBlockHash(currentBlock)) {
      return false;
    }

    if (currentBlock.previousHash !== previousBlock.hash) {
      return false;
    }
  }
  return true;
};

const Blockchain = () => {
  const [blockchain, setBlockchain] = useState([createGenesisBlock()]);
  const [newData, setNewData] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleAddBlock = () => {
    const updatedBlockchain = addBlock(blockchain, { data: newData });
    setBlockchain(updatedBlockchain);
    setIsValid(isBlockchainValid(updatedBlockchain));
    setNewData('');
  };

  return (
    <div className="blockchain-container">
      <h1>Simple Blockchain</h1>
      <div>
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Enter data for new block"
        />
        <button onClick={handleAddBlock}>Add Block</button>
      </div>
      <div>
        <h2>Blockchain</h2>
        <pre>{JSON.stringify(blockchain, null, 2)}</pre>
      </div>
      <div>
        <h3 className={isValid ? '' : 'invalid'}>
          Blockchain Status: {isValid ? 'Valid' : 'Invalid'}
        </h3>
      </div>
    </div>
  );
};

export default Blockchain;
