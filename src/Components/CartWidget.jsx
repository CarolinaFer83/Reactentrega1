import React, { useState } from 'react';
import "./navbar.css";
import { BsCart4 } from "react-icons/bs";
import { useCart } from '../context/CartContext';
import CartDetail from './CartDetail';

function CartWidget() {
  const { getCartQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const quantity = getCartQuantity();

  return (
    <>
      <div className="carrito" onClick={() => setIsCartOpen(true)}>
        <BsCart4 size={25} />
        {quantity > 0 && <span className="badge">{quantity}</span>}
      </div>

      {isCartOpen && <CartDetail onClose={() => setIsCartOpen(false)} />}
    </>
  );
}

export default CartWidget; 