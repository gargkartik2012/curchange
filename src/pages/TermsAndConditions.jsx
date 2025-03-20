import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "50px", lineHeight: "1.6", fontFamily: "Arial, sans-serif" }}>
      <h1>Terms and Conditions</h1>
      <p>Welcome to [Your Grocery Website Name]! By using our website, you agree to the following terms and conditions:</p>
      
      <h2>1. Use of the Website</h2>
      <p>
        You must be at least 18 years old to use our website. By using our website, you warrant that you are of legal age and have the legal capacity to agree to these terms and conditions.
      </p>
      
      <h2>2. Product Information</h2>
      <p>
        We strive to provide accurate and up-to-date product descriptions and prices. However, we do not guarantee the completeness or accuracy of the information on our website. Prices are subject to change without notice.
      </p>
      
      <h2>3. User Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account information and password. We are not liable for any unauthorized access to your account.
      </p>

      <h2>4. Orders and Payments</h2>
      <p>
        All orders are subject to availability and confirmation of payment. We reserve the right to cancel any order at our discretion.
      </p>

      <h2>5. Returns and Refunds</h2>
      <p>
        Please refer to our <a href="/shippingreturns">Return Policy</a> for information on returning products and obtaining refunds.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on this website, including text, images, and logos, is the property of [Your Grocery Website Name]. Reproduction or redistribution of this content without permission is prohibited.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        We shall not be held responsible for any damages arising from the use of our website or products purchased through our website.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to update these terms and conditions at any time. Continued use of the website after changes have been made constitutes your acceptance of the new terms.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about these terms and conditions, please contact us at support@[yourwebsite].com.
      </p>
    </div>
  );
};

export default TermsAndConditions;
