import React, { useState } from 'react';
import './ProductoDetalle.css';

function ProductoDetalle({ producto, onClose }) {
  return (
    <div className="producto-detalle-overlay">
      <div className="producto-detalle-modal">
        <button className="cerrar-btn" onClick={onClose}>&times;</button>
        <div className="producto-detalle-content">
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="producto-info">
            <h2>{producto.nombre}</h2>
            <p className="descripcion-completa">{producto.descripcion}</p>
            <p className="precio">Precio: ${producto.precio}</p>
            <button className="btn-comprar">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle; 