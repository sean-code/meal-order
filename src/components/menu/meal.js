import React from "react";

function Meal({ meal }) {
  const { name, cuisine, price, image } = meal;

  return (
    <div className="food-menu-box">
      <div className="img-food-menu">
        <img src={image} alt="food menu Image" className="img-order" />
      </div>
      <div className="Desc-food-menu">
        <h3 className="food-title">{name}</h3>
        <p>
          <b>{price}</b>
        </p>
        <p className="para-formating">
          {cuisine}
          <br />
          <br />
          <a href="" className="btn order-now">
            Order Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Meal;