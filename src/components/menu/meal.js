import React from "react";
import "./menu.css";
import image_1 from "./food1.jpg";
import image_2 from "./food2.jpg";
import image_3 from "./food3.jpg";
import image_4 from "./food4.jpg";

const arr = [image_1, image_2, image_3, image_4];
// const images = arr[arr.length % idx];
function Meal({ meal }) {
  const { name, cuisine, price, image } = meal;

  return (
    <div className="food-menu-box">
      <div className="img-food-menu">
        <img
          src={arr[meal.id % arr.length]}
          alt="food menu"
          className="img-order"
        />
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
