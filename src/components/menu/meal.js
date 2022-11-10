import React from "react";
import "./menu.css";

function Meal({ meal }) {
  const { name, cuisine, price, image } = meal;

  return (
    <div className="food-menu-box">
      <div className="img-food-menu">
        <img src={image} alt="food menu" className="img-order" />
      </div>

      <div className="Desc-food-menu">
        <span className="food-info">
          <span className="food-title">{name}</span>
          <span> {cuisine}</span>
        </span>

        <span className="para-formating">
          <span className="price"> Ksh:{price}</span>
          <button className="btn-order-now"> Order Now</button>
        </span>
      </div>
    </div>
  );
}

export default Meal;
