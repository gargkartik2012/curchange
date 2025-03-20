import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartProvider = ({ children }) => {  // ✅ Function name matches export
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        toast.warning(`${product.name} is already in the cart!`);
        return prevCart;
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
 

  return (
    <CartContext.Provider value={{ cart, setCart,addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;  // ✅ Ensure default export
