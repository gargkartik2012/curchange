import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual login logic
    const isValid = emailOrPhone === 'test@example.com' && password === 'password'; 

    if (isValid) {
      // Navigate to the home page on successful login
      navigate('/home'); // Replace '/home' with the route for your home page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value={emailOrPhone} 
          onChange={(e) => setEmailOrPhone(e.target.value)} 
          placeholder="Email or Mobile Number" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <p className="text-center text-gray-600 mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
