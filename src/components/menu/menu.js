import React from "react";
import { useState, useEffect } from "react";
import Meal from "./meal";
import "./menu.css";

function Menu({setCart, cart, setWarning}) {
  const [meals, setMeals] = useState([]);
  const baseUrl = "http://localhost:8000";

  useEffect(() => {
    fetch(`${baseUrl}/meals`)
      .then((res) => res.json())
      .then((meals) => setMeals(meals));
  }, []);

  const handleClick = (item)=>{
    console.log(item)
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
      console.log("there")
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

  return (
    <main className="main-menu">
      {" "}
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} handleClick={handleClick} />
      ))}{" "}
    </main>
  );
}

export default Menu;