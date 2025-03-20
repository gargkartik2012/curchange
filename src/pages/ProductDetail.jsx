import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext"; // ✅ Import Wishlist
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);
  const [showLargeImage, setShowLargeImage] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext); // ✅ Use Wishlist Context

  useEffect(() => {
    if (!product) {
      axios
        .get(`/api/product/${id}`)
        .then((response) => setProduct(response.data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id, product]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image-section">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
            onClick={() => setShowLargeImage(true)}
          />
        </div>

        <div className="product-info-section">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description || "No description available"}</p>

          <div className="product-actions">
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>
            <button className="save-later" onClick={() => addToWishlist(product)}>
              ❤️ Save for Later
            </button>
          </div>
        </div>
      </div>

      {showLargeImage && (
        <div className="image-modal" onClick={() => setShowLargeImage(false)}>
          <img src={product.imageUrl} alt={product.name} className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;