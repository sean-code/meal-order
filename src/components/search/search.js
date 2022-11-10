import './search.css'
import Header from '../header/header';
import Menu from '../menu/menu';
import axios from "axios"

import React, { useState, useEffect} from 'react';
const url = "http://127.0.0.1:8000/meal"



// function Search({ filter, onSetFilter, filter2, onSetFilter2, filter3, onSetFilter3, onClearFilter }) {
function Search() {
  

  const [meal, setMeal] = useState([])

  //const [location, setLocation] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/order")
      .then((r) => r.json())
      .then((meals) => setMeal(meals));
      console.log(meal)
  }, []);

  function Form() {
    function handleSubmit(e) {
      e.preventDefault()
      console.log('You clicked submit')
      
    }
    
  }
  return (
    <>
      <div className="container-fluid movie-app">
          <form className="d-flex" role="search">
       <input className="form-control me-2" type="search" placeholder="Lasagnia" aria-label="Search"/>
       {/* value={meals} onChange= {e => setMeals(e.target.value)}/> */}
      
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
       </div>
       {/* <form onSubmit={handleSubmit}> */}
        {/* <button type="submit">Find Food</button> */}
       {/* </form> */}
{/* <button onClick={onClearFilter}>Clear Filters</button> */}
    </>
  )
}
export default Search










// function Search(){
//   const[meals, setMeals] = useState([]);
//  //const [searchMeal, setSearchMeal] = useState('');

//   const searchMeal = (e) => {
//     if (e.key==="Enter")
//     {
//       // axios.get(`http://127.0.0.1:8000/${item}`)
//       axios.get(`${url}`)
//       .then (res=>setMeals(res.data.meals))
//       .catch(err=>console.log(err))
//     }
//   }
//   let searchTerm = " "
//   let meal = meals.filter((item) => {
//     return item.name===searchTerm
//   })

 
      
  
//   // useEffect(()=> {
//     //   getMealRequest();
//    //}, []);

//   return(
//       <div className="container-fluid movie-app">
//           <form className="d-flex" role="search">
//       <input className="form-control me-2" type="search" placeholder="Lasagnia" aria-label="Search"/>
//       {/* value={meals} onChange= {e => setMeals(e.target.value)}/> */}
      
//       <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>
//       </div>
//   )
// }

// export default Search;



{/* <>
  <select className="form-select-lg mt-3  m-5" value={filter} aria-label=".form-select-lg " onChange={(event) => onSetFilter(event.target.value == 0 ? "" : event.target.value)}>
  <option value={0}>Filter by location</option>
  {Object.keys(location).length > 0 && location.map((locate) => (
    <option key={locate.id} value={locate.name}>{locate.name}</option>
  ))}
  </select>
  <select className="form-select-lg mt-3  m-5" value={filter2} aria-label=".form-select-lg " onChange={(event) => onSetFilter2(event.target.value)}>
  <option selected>Filter by rent</option>
  <option value="10000">Less than 10000</option>
  <option value="20000">Less than 20000</option>
  <option value="30000">Less than 30000</option>
</select>
<select className="form-select-lg mt-3 m-5" value={filter3} aria-label=".form-select-lg " onChange={(event) => onSetFilter3(event.target.value)}>
  <option selected>Filter by rooms</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
<button onClick={onClearFilter}>Clear Filters</button>
    </>
  )
}
export default Search */}


























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

 //const getMealRequest = async() =>{
  //     //const url = url;

       //const response = await fetch(url);
       //const responseJson = await response.json();

  //     if (responseJson.Search){
  //         setMeals(responseJson.Search);
  //     }