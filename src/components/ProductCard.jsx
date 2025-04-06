import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
import "./ProductCard.css";
//import defaultImage from '../assets/images/default.jpg'; // Fallback image

const ProductCard = ({ product }) => {
  const [activeButton, setActiveButton] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleButtonClick = (action, product, buttonId) => {
    action(product);
    setActiveButton(buttonId);
    setTimeout(() => setActiveButton(null), 500); // Remove active class after 500ms
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} state={{ product }}>
        <img
          src={product.imageUrl || defaultImage}
          alt={product.name}
          className="product-image"
        />
      </Link>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">
        {product.description || "No description available"}
      </p>

      {/* Calculate discounted price */}
      <p className="product-price">
        <s>Original Price: <sup>₹</sup>{product.price}</s>
        <span className="discount-price">
           (10% off)
        </span>
      </p>
      <p className="product-discounted-price">
        Discounted Price: <sup>₹</sup> {Math.round(product.price * 0.9 * 100) / 100}
       
      </p>
      <div className="product-actions">
        <button
          className={`add-to-cart ${activeButton === "cart" ? "active" : ""}`}
          onClick={() => handleButtonClick(addToCart, product, "cart")}
          aria-label="Add to Cart"
        >
          🛒 Add to Cart
        </button>
        <button
          className={`save-later ${
            activeButton === "wishlist" ? "active" : ""
          }`}
          onClick={() => handleButtonClick(addToWishlist, product, "wishlist")}
          aria-label="Save for Later"
        >
          ❤️ Save for Later
        </button>
      </div>

      <Link to="/wishlist" className="wishlist-link" aria-label="View Wishlist">
        👁️‍🗨️ View Wishlist
      </Link>
    </div>
  );
};

export default ProductCard;
