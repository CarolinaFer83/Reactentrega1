import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [stockProducts, setStockProducts] = useState({});

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    const currentStock = product.stock - (existingProduct?.quantity || 0);
    
    if (currentStock <= 0) {
      alert('No hay stock disponible');
      return;
    }
    
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setStockProducts({
      ...stockProducts,
      [product.id]: currentStock - 1
    });
  };

  const removeFromCart = (productId) => {
    const removedItem = cart.find(item => item.id === productId);
    if (removedItem) {
      setStockProducts({
        ...stockProducts,
        [productId]: (stockProducts[productId] || removedItem.stock) + removedItem.quantity
      });
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const item = cart.find(item => item.id === productId);
    if (!item || newQuantity < 1) return;

    const currentStock = stockProducts[productId] ?? item.stock;
    const quantityDiff = item.quantity - newQuantity;

    if (currentStock + quantityDiff < 0) {
      alert('Cantidad no válida');
      return;
    }

    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));

    setStockProducts({
      ...stockProducts,
      [productId]: currentStock + quantityDiff
    });
  };

  const clearCart = () => {
    const restoredStock = {};
    cart.forEach(item => {
      restoredStock[item.id] = (stockProducts[item.id] || item.stock) + item.quantity;
    });
    setStockProducts({...stockProducts, ...restoredStock});
    setCart([]);
  };

  const getCartTotal = () => cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
  const getCartQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);
  const getAvailableStock = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? stockProducts[productId] ?? item.stock : 0;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartQuantity,
      getAvailableStock
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 