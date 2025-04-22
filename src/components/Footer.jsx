import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Your go-to place for quality products at the best prices. We ensure
            premium quality and the best customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {[
              { href: "/PrivacyPolicy", label: "Privacy Policy" },
              { href: "/contact", label: "Contact Us" },
              { href: "/faq", label: "FAQs" },
              { href: "/shippingreturns", label: "Shipping & Returns" },
              { href: "/termsandconditions", label: "Terms & Conditions" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest deals and offers.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {[
              { href: "#", iconClass: "fab fa-facebook", label: "Facebook" },
              { href: "#", iconClass: "fab fa-instagram", label: "Instagram" },
              { href: "#", iconClass: "fab fa-twitter", label: "Twitter" },
              { href: "#", iconClass: "fab fa-linkedin", label: "LinkedIn" },
            ].map((social, index) => (
              <a key={index} href={social.href} aria-label={social.label}>
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Your E-commerce Site. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
