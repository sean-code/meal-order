import './App.css';
import Allmeals from './components/order/allmeals';
import Cart from './components/order/cart';
import Order from './components/order/order';
import Form from './components/form/form.js'
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <React.Fragment>
       
		{/* <Order size={cart.length} setShow={setShow} /> */}
		<Form />
		{
			show ? <Allmeals handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} amount={amount} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
    <Router>
      <Routes>
       <Route exact path="/meal-order/src/components/order/cart.js" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} amount={amount} />} />
             
      </Routes>
  </Router>
	</React.Fragment>
  );
}

export default App;
