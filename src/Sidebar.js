// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Importamos el archivo CSS para estilar

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2>CimaTrade</h2>
      <ul>
        <li>Transacciones</li>
        <li>Trading</li>
        <li>Bolsa</li>
      </ul>
    </div>
  );
}

export default Sidebar;
