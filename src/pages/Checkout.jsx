import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        {/* Add form fields for shipping and payment details */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
