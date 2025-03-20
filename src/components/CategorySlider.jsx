import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Chocolates", image: "path_to_chocolates_image" },
  { name: "Grains & Flours", image: "path_to_grains_image" },
  { name: "Pulses", image: "path_to_pulses_image" },
  { name: "Rice and Cereals", image: "path_to_rice_image" },
  { name: "Condiments", image: "path_to_condiments_image" },
  { name: "Vegetables", image: "path_to_vegetables_image" },
  { name: "Fruits", image: "path_to_fruits_image" },
  { name: "Dairy Products", image: "path_to_dairy_image" },
  { name: "Meat and Fish", image: "path_to_meat_image" },
  { name: "Beverages", image: "path_to_beverages_image" },
];

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust based on your design
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
