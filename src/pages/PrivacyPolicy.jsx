import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: [Insert Date]</p>

      <section>
        <h2>Introduction</h2>
        <p>
          At [Your Company Name], we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data when you visit our
          website or use our services.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, etc., which you provide when signing up or making purchases.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, device
            details, and analytics data.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process transactions and send updates</li>
          <li>Send promotional emails and offers</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties, except
          as required by law or when necessary to provide our services (e.g.,
          payment processing, shipping).
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of receiving promotional communications</li>
          <li>File a complaint regarding data usage</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We use cookies to improve your browsing experience. By using our
          site, you agree to our use of cookies.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy as needed. Please
          review this page periodically for updates.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
