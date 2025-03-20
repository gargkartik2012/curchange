import React from 'react';
import './Category.css';
import chocolateg from '../assets/images/chocolate.jpg';
import pulse from '../assets/images/pulses.jpg';
import vegetableg from '../assets/images/vegetables.jpg';
import spicesg from '../assets/images/spices.jpg';
import snacksg from '../assets/images/snacks.jpg';
import fruitsg from '../assets/images/fruits.jpg';
import dairyr from '../assets/images/diary.jpg';  // Fixed path
import biscuits from '../assets/images/biscuits.jpg';
import personalcare from '../assets/images/personalcare.jpg';
import household from '../assets/images/household.jpg';
import grains from '../assets/images/wheat flour image.jpg';
import meat from '../assets/images/meat.jpg'
import beverages from '../assets/images/cold_beverages1.jpg'
import rice from '../assets/images/Rice-pouch-design.jpg'

export const Category = () => {
  const categories = [
    { name: "Chocolates", image: chocolateg, items: ["Milk Chocolate", "Dark Chocolate", "White Chocolate"]},
    { name: "Grains & Flours", image: grains },
    { name: "Pulses", image: pulse },
    { name: "Rice and Cereals", image: rice },
    { name: "Condiments", image: spicesg },
    { name: "Vegetables", image: vegetableg },
    { name: "Fruits", image: fruitsg },
    { name: "Dairy Products", image: dairyr },
    { name: "Meat and Fish", image: meat },
    { name: "Beverages", image: beverages },
    { name: "Snacks", image: snacksg },
    { name: "Frozen Foods", image: biscuits },
    { name: "Personal Care", image: personalcare },
    { name: "Household Supplies", image: household },
    
  ];
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div className="category-card" key={index}>
          <img className="category-image" src={category.image} alt={category.name} />
          <h3 className="category-name">{category.name}</h3>
          
        </div>
      ))}
    </div>
  );
};

export default Category;
