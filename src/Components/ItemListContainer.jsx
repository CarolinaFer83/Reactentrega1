import React, { useState } from 'react';
import './ItemListContainer.css';
import ProductoDetalle from './ProductoDetalle';
import { productos } from '../paginas/Productos.js';
import { useCart } from '../context/CartContext';

function ItemListContainer({ greeting, categoriaInicial }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const { addToCart, getAvailableStock } = useCart();

  const productosFiltrados = categoriaInicial === 'todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaInicial);

  const handleAddToCart = (producto) => {
    try {
      const stockDisponible = producto.stock - (getAvailableStock(producto.id) || 0);
      if (stockDisponible > 0) {
        addToCart(producto);
        console.log('Producto agregado:', producto.nombre);
      } else {
        alert('No hay stock disponible');
      }
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      
      <div className="productos-grid">
        {productosFiltrados.map(producto => {
          const stockDisponible = producto.stock - (getAvailableStock(producto.id) || 0);
          return (
            <div key={producto.id} className="producto-card">
              <div className="imagen-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  loading="lazy"
                />
              </div>
              <h3>{producto.nombre}</h3>
              <p className="descripcion">{producto.descripcion.substring(0, 60)}...</p>
              <button 
                className="btn-descripcion"
                onClick={() => setProductoSeleccionado(producto)}
              >
                Ver descripción completa
              </button>
              <p className="precio">${producto.precio}</p>
              <p className="stock-info">Stock disponible: {stockDisponible}</p>
              <button 
                className="btn-comprar"
                onClick={() => handleAddToCart(producto)}
                disabled={stockDisponible <= 0}
              >
                {stockDisponible > 0 ? 'Agregar al carrito' : 'Sin stock'}
              </button>
            </div>
          );
        })}
      </div>

      {productoSeleccionado && (
        <ProductoDetalle 
          producto={productoSeleccionado} 
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </div>
  );
}

export default ItemListContainer;