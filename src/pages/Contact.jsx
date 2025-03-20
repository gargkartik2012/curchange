import React, { useState } from "react";
import axios from "axios";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api-endpoint.com/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", contactNumber: "", email: "", comments: "" });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>CONTACT US</h2>
        <p><strong>Address:</strong> C7 Modern Complex near Motibag Chowk, Raipur C.G. 492001</p>
        <p><strong>Phone:</strong> <a href="tel:+918871102000">+91 88711 02000</a></p>
        <p><strong>Email:</strong> <a href="mailto:hello@repeatgud.com">hello@repeatgud.com</a></p>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Enter your email ID" value={formData.email} onChange={handleChange} required />
        <textarea name="comments" placeholder="Give us your message..." value={formData.comments} onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;