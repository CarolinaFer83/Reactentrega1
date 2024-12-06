import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CartDetail.css';

function CartDetail({ onClose }) {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity,
    getCartTotal, 
    clearCart 
  } = useCart();

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para guardar el email en una base de datos
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000); // El mensaje desaparece después de 3 segundos
  };

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Tu Carrito</h2>
        
        {cart.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="item-details">
                    <h3>{item.nombre}</h3>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-price">Precio: ${item.precio * item.quantity}</p>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <p className="total">Total: ${getCartTotal()}</p>
              <button className="clear-btn" onClick={clearCart}>Vaciar Carrito</button>
              <button className="checkout-btn">Finalizar Compra</button>
            </div>
          </>
        )}

        <div className="subscribe-section">
          <h3>¡Recibe nuestras ofertas!</h3>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button type="submit">Suscribirse</button>
          </form>
          {isSubscribed && (
            <p className="success-message">
              ¡Gracias por suscribirte! Recibirás nuestras mejores ofertas.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDetail; 