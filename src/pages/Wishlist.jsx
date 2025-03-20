import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/">Go Shopping</Link></p>
      ) : (
        wishlist.map((product) => (
          <div key={product.id} className="wishlist-item">
            <img src={product.imageUrl} alt={product.name} width="100" />
            <p>{product.name} - ${product.price}</p>
            <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;