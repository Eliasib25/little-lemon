// src/components/Testimonials.tsx
import React from "react";
import "../styles/testimonials.css";
import alex from "../assets/images/Alex.jpg"
import jhon from "../assets/images/john.jpg"
import maria from "../assets/images/maria.jpg"
import emma from "../assets/images/emma.jpg"

const testimonials = [
  {
    name: "Alex",
    rating: 5,
    comment: "Amazing food! The Greek salad was so fresh and tasty.",
    image: alex,
  },
  {
    name: "Maria",
    rating: 4,
    comment: "Loved the atmosphere. Will definitely come back!",
    image: maria,
  },
  {
    name: "John",
    rating: 5,
    comment: "Quick delivery and delicious desserts.",
    image: jhon,
  },
  {
    name: "Emma",
    rating: 4,
    comment: "Friendly service and great selection of meals.",
    image: emma,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card">
            <div className="testimonial-image">
              <img src={t.image} alt={`${t.name}`} />
            </div>
            <div className="testimonial-info">
              <h3>{t.name}</h3>
              <p className="rating">Rating: {"⭐".repeat(t.rating)}</p>
              <p className="comment">"{t.comment}"</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
