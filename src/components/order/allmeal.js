import React, { useEffect,useState } from "react";
import Cards from "./card";
import "./allmeals.css";
// import Form from "../form/form"

const Allmeals = ({handleClick}) => {
  const baseUrl ="http://localhost:8000";
  const [meals,setMyMeals]=useState([])
  useEffect(()=>{
    fetch(`${baseUrl}/meals`)
    .then(response => response.json())
    .then(response => setMyMeals(response))
    .catch(error =>alert(error) )

  },[])
  console.log(meals)
  
  return (
    <section>
      {meals.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}

    </section>

  );
};

export default Allmeals;