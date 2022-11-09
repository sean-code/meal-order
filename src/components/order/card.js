import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, cuisine, price, image } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{cuisine}</p>
        <p>Price - {price}Ksh</p>
        <button onClick={() => handleClick(item)}>Order now</button>
      </div>
    </div>
  );
};

export default Cards;