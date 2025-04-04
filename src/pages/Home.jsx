import React from 'react';
import Banner from '../components/Banner';
import ProductList from './ProductList';
import Category from '../components/Category';
import './Home.css'; // Import the CSS file
import grocery from '../assets/images/groceries-cropped.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <Banner 
        title="Welcome to Online Store" 
        subtitle="Find the best products With best  prices!" 
        image={grocery} 
      />
      <h1 className="centered-title">Categories</h1>

      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
