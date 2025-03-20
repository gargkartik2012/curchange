import React from "react";
import "./ShippingReturns.css"; // Import CSS for styling

const ShippingReturns = () => {
  return (
    <div className="shipping-returns-container">
      <h1>Shipping & Returns</h1>

      {/* Shipping Policy Section */}
      <section>
        
        <p>We aim to deliver your orders as quickly and efficiently as possible.</p>

        <h3>Processing Time</h3>
        <p>Orders are processed within <strong>X business days</strong> (excluding weekends and holidays).</p>
        <p>Once shipped, you will receive a confirmation email with tracking details.</p>

        <h3>Shipping Rates & Delivery Estimates</h3>
        <ul>
          <li><strong>Standard Shipping:</strong> Estimated delivery in <strong>X-Y business days</strong> ($X.XX).</li>
          <li><strong>Express Shipping:</strong> Estimated delivery in <strong>X-Y business days</strong> ($X.XX).</li>
          <li><strong>Free Shipping:</strong> Available for orders over <strong>$XX</strong> (Standard Shipping only).</li>
        </ul>

        <h3>International Shipping</h3>
        <p>We currently <strong>do/do not</strong> offer international shipping.</p>
        <p>If applicable, duties and taxes may apply and are the responsibility of the customer.</p>

        <h3>Lost or Delayed Packages</h3>
        <p>If your package is lost or delayed, please contact us at <a href="mailto:support@example.com">support@example.com</a> for assistance.</p>
      </section>

      {/* Returns & Refunds Policy Section */}
      <section>
        <h2>Returns & Refunds Policy</h2>
        <p>We want you to be completely satisfied with your purchase. If you are not happy, you may return your order under the following conditions:</p>

        <h3>Return Eligibility</h3>
        <ul>
          <li>Items must be returned within <strong>X days</strong> of delivery.</li>
          <li>Products must be unused, in original packaging, and in resalable condition.</li>
          <li>Certain items (such as perishable goods, personal care items, or custom-made products) may not be eligible for returns.</li>
        </ul>

        <h3>Return Process</h3>
        <ol>
          <li>Contact our support team at <a href="mailto:support@example.com">support@example.com</a> to initiate a return.</li>
          <li>You will receive return instructions and, if applicable, a prepaid shipping label.</li>
          <li>Ship the item back to us. Once received, we will inspect the product and process your refund or exchange.</li>
        </ol>

        <h3>Refunds</h3>
        <p>Refunds will be issued to the original payment method within <strong>X days</strong> after we receive and inspect the returned item.</p>
        <p>Shipping fees are <strong>non-refundable</strong> unless the return is due to an error on our part.</p>

        <h3>Exchanges</h3>
        <p>If you received a defective or incorrect item, we will gladly exchange it for the correct one at no additional cost.</p>
      </section>

      <p>For any further questions, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
    </div>
  );
};

export default ShippingReturns;