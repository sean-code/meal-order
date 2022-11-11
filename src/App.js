import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Order from './components/order/order';
import About from './components/about/about';
import Search from './components/search/search';
import Cart from './components/order/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing/landing';
import Form from './components/form/form'


  function App() {

    const [show, setShow] = useState(true);
    const [cart , setCart] = useState([]);
    const [warning, setWarning] = useState(false);
    const [amount,setAmount] = useState(1)
    
    useEffect(()=>{
  
    })
  
    console.log(amount)
    const handleClick = (item)=>{
      console.log(item.id)
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
  
    const handleChange = (item, amount,d) =>{
      console.log(amount,item)
      let ind = -1;
      amount = amount++
      setAmount(amount)
      cart.forEach((data, index)=>{
        if (data.id === item.id)
          ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount += amount;
      
      if (tempArr[ind].amount === 0)
        tempArr[ind].amount = 1;
      setCart([...tempArr])
    }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} setWarning={setWarning}/>} />
        <Route path="/orders" element={<Cart cart={cart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/form" element={<Form />} />
        <Route exact path="/meal-order/src/components/order/cart.js" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} amount={amount} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

