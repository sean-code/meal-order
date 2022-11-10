import './cart.css'
import React, { useState, useEffect } from "react";
// import {NavLink} from "react-router-dom"

const Cart = ({ cart, setCart, handleChange }) => {

  const [price, setPrice] = useState(0);
  let [amount, setAmount] = useState(1);
  
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += amount*item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

    function handleClick(item){
      setAmount(amount++)
    }

    function handleMinus(item){
      cart.forEach((data)=>{
        if (data.id === item.id)
        setAmount(amount--)
      });
      
    }

  return(
      
    <article>
       {cart.map((item)=>(
         <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
                <p>{item.name}</p>
          </div>
          <div className='btn'>
            <button onClick={()=>handleClick(item)}>+</button>
            <button>{amount}</button>
            <button onClick={()=>handleMinus(item)}> - </button>
          </div>
          <div className='.btn'>
            <span>Ksh:{item.price}</span>
              <button className='remove' onClick={()=>handleRemove(item.id)} >Remove</button>
              </div>
             </div>
            ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Ksh {price}</span>
      </div>
      <div>
      {/* <NavLink
        to="/meal-order/src/components/menu/menu.js"
        exact="true"> 
      </NavLink> */}
      <button className='checkout'>checkout</button>
      </div>
      
    </article>
      
     
      
  )
  
};



export default Cart;

