import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes
                served with a modern twist.
            </p>
            <Link to="/BookingPage" ><button className="cta-button">Book a Table</button></Link>
            </div>
            <div className="hero-image">
            <img src={heroImage} alt="Delicious Mediterranean food" />
            </div>
      </section>
    );
}

export default Hero;