// src/components/About.tsx
import React from "react";
import "../styles/about.css"; 
import restaurantImage from "../assets/images/restaurant.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Founded by brothers Mario and Adrian, Little Lemon brings Mediterranean
          tradition to life with a modern twist. Our chefs blend old-world recipes
          with local ingredients to create a unique dining experience.
        </p>
      </div>
      <div className="about-images">
        <img src={restaurantImage} alt="Little Lemon" />
      </div>
    </section>
  );
};

export default About;
