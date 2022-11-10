import React from "react";
import { useState, useEffect } from "react";
import Meal from "./meal";

function Menu() {
  const [meals, setMeals] = useState([]);
  const baseUrl = "http://localhost:8000";

  useEffect(() => {
    fetch(`${baseUrl}/meals`)
      .then((res) => res.json())
      .then((meals) => setMeals(meals));
  }, []);

  return (
    <>
      {" "}
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}{" "}
    </>
  );
}

export default Menu;