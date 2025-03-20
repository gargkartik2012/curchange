import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Add item to Wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        toast.warning(`${product.name} is already in your wishlist!`);
        return prevWishlist;
      }
      toast.success(`${product.name} added to your wishlist!`);
      return [...prevWishlist, product];
    });
  };

  // ✅ Remove item from Wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      toast.info("Item removed from wishlist.");
      return prevWishlist.filter((item) => item.id !== productId);
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;