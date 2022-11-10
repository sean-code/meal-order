import { useRef } from 'react';

import './form.css'
function Form(){

  const mealUrlref=useRef()
  const mealnameRef= useRef()
  const cuisineRef = useRef()
  const priceRef = useRef()
  const restaurantRef = useRef()

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`localhost:8000/meal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        "image":mealUrlref,
        "name":mealnameRef,
        "restaurant":restaurantRef,
        "price":priceRef,
        "cuisine":cuisineRef

      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }
  return(
    <div className='main-block'>
    <h1 className='Bootstrap heading postmeal'>POST MEAL</h1>
      <form onSubmit={handleSubmit}>
        <div className='info'>
          <input className='fname' type="text" name="name" placeholder="image_url"
          ref={mealUrlref}/>
          <input type="text" name="name" placeholder="mealname"
          ref={mealnameRef}/>
          <input type="text" name="name" placeholder="cuisine"
          ref={cuisineRef}/>
          <input type="text" name="name" placeholder="price" ref={priceRef}/>
          <input type="text" name="name" placeholder="restaurant" ref={restaurantRef}/>
        
          <select>
            <option value="number" disabled selected>Rating</option>
            <option value="10">1</option>
            <option value="20">2</option>
            <option value="30">3</option>
            <option value="40">4</option>
            <option value="50">5</option>
          </select>
         
        </div>
        
        <button href="/" className='btn2'>Submit</button>
      </form>
 
    </div>
  )
}

export default Form;