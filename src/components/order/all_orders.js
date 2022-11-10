// import Cart from './components/order/cart';
// import Order from './components/order/order';
// import {useState,useEffect} from 'react';

// function AllOrder(){
//     const [show, setShow] = useState(true);
// 	const [cart , setCart] = useState([]);
// 	const [warning, setWarning] = useState(false);
//   const [amount,setAmount] = useState(1)
  
//   useEffect(()=>{

//   })

//   console.log(amount)
	

// 	const handleChange = (item, amount,d) =>{
//     console.log(amount,item)
// 		let ind = -1;
//     amount = amount++
//     setAmount(amount)
// 		cart.forEach((data, index)=>{
// 			if (data.id === item.id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += amount;
		
// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setCart([...tempArr])
// 	}
//     return(
//         <>
     
// 			<Cart cart={cart} setCart={setCart} handleChange={handleChange} amount={amount} />

// 		{
// 			warning && <div className='warning'>Item is already added to your cart</div>
// 		}

//         </>
//     )
// }