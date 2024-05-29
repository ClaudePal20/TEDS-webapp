// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Importamos el archivo CSS para estilar

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 id="titulo">CimaTrade</h2>
      <div id="transacciones">
        <h3 >Transacciones</h3>
      </div>
      <h3>Trading</h3>
      <h3>Bolsa</h3>
    </div>
  );
}

export default Sidebar;
