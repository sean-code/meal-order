import './search.css'
import Header from '../header/header';
import Menu from '../menu/menu';
import axios from "axios"

import React, { useState, useEffect} from 'react';
const url = "http://127.0.0.1:8000/meal"

function Search(){
  const[meals, setMeals] = useState([]);
 //const [searchMeal, setSearchMeal] = useState('');

  const searchMeal = (e) => {
    if (e.key==="Enter")
    {
      axios.get("http://127.0.0.1:8000/meal")
      .then (res=>setMeals(res.data.meals))
      .catch(err=>console.log(err))
    }
  }

  //const getMealRequest = async() =>{
  //     //const url = url;

       //const response = await fetch(url);
       //const responseJson = await response.json();

  //     if (responseJson.Search){
  //         setMeals(responseJson.Search);
  //     }
      
  
  // useEffect(()=> {
    //   getMealRequest();
   //}, []);

  return(
      <div className="container-fluid movie-app">
          <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Lasagnia" aria-label="Search"/>
      {/* value={meals} onChange= {e => setMeals(e.target.value)}/> */}
      
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
  )
}

export default Search;

// const Search = (props) => {


//   const [data, setData] = useState([])
//   const [query, setQuery] = useState("")

//   const fetchData = () => {
//     fetch("API_url")
//     .then((res) => res.json())
//     .then((result) => {
//       setData(result)
//       console.log(result)
//     })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//     return(
//         <div className="AppInput">
            
//             <input type="text" placeholder='Lasagnia'
//             value={props.input} onChange={props.handleInput}/>

//         </div>
//     )
// }
// export default Search
{/* <nav class="navbar bg-light">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}