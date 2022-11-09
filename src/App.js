import './App.css';
import Allmeals from './components/order/allmeals';
import Cart from './components/order/cart';
import Order from './components/order/order'
import React,{useState,useEffect} from 'react';

function App() {

  const [show,setShow] = useState(true)
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item)
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  console.log(cart)
  return (
    <>
      <Order setShow={setShow}/>
      {
        show? <Allmeals handleClick={handleClick}/> : <Cart setCart={setCart} cart={cart}  handleChange={handleChange}/>      }
      
      {/* <Cart cart={cart} setCart={setCart} />   */}

    </>
  );
}

export default App;
