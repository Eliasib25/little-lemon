import React from "react";
import "../styles/specials.css";
import greekSalad from "../assets/images/greek-salad.jpg";
import lemonDessert from "../assets/images/lemon-dessert.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import oderIcon from "../assets/icons_assets/Dish icon.svg";

const specialsData = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "Fresh salad with tomatoes, cucumbers, olives, feta cheese, and a lemon dressing.",
    image: greekSalad,
  },
  {
    title: "Lemon Dessert",
    price: "$6.00",
    description:
      "Sweet and tangy lemon cake with cream layers, perfect to finish your meal.",
    image: lemonDessert,
  },
  {
    title: "Bruchetta",
    price: "$4.00",
    description:
      "Toasted bread topped with fresh tomatoes, basil, olive oil, and balsamic vinegar.",
    image: bruchetta,
  },
];

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week’s special</h2>
        <button className="online-menu">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map((item) => (
          <article key={item.title} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <div className="card-title">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <div className="order">
                <button aria-label="On click" className="order-button">Order a delivery</button>
                <img src={oderIcon} alt="Order icon" className="icon-order" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
