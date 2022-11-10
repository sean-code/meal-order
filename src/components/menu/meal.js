import React from "react";

function Meal({ meal, handleClick }) {
  const { name, cuisine, price, image } = meal;


  return (
    <div className="food-menu-box">
      <div className="img-food-menu">
        <img src={image} alt="food menu Image" className="img-order" />
      </div>

      <div className="Desc-food-menu">
        <span>
          <h3 className="food-title">{name}</h3>
          <span> {cuisine}</span>
        </span>
        <p className="para-formating">
          <p>Ksh: {price}</p>
          <button className="btn order-now" onClick={()=> handleClick(meal)}> Order Now</button>
        </p>
      </div>
    </div>
  );
}

export default Meal;