import React from "react";
import { useState, useEffect } from "react";
import Meal from "./meal";
import "./menu.css";

function Menu() {
  const [meals, setMeals] = useState([]);
  const baseUrl = "http://localhost:8000";

  useEffect(() => {
    fetch(`${baseUrl}/meals`)
      .then((res) => res.json())
      .then((meals) => setMeals(meals));
  }, []);

  return (
    <main className="main-menu">
      {" "}
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}{" "}
    </main>
  );
}

export default Menu;
