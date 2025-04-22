// src/contexts/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [uniqueCount, setUniqueCount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on initial load
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    setUniqueCount(storedCart.length);
  }, []);

  useEffect(() => {
    // Save cart to localStorage on update
    localStorage.setItem('cart', JSON.stringify(cart));
    setUniqueCount(cart.length);
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cart]);

  const addToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
  
    if (isAlreadyInCart) {
      toast.warning(`${product.name} is already in the cart!`);
      // Optionally increase quantity if needed:
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      toast.success(`${product.name} added to cart!`);
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };
  

  


  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setUniqueCount(0);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, uniqueCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
