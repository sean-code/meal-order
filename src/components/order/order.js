import './order.css';
import MyCart from './shopping.svg'

 function Order ({setShow,size}){
    return(
        
    <nav>
      <div className="nav_box">
        <span className="my_order" onClick={()=>setShow(true)}>
          My Orders
        </span>
        <div className="cart" onClick={()=>setShow(false)}>
          <span>
            <img src={MyCart} />
          </span>
        </div>
      </div>
    </nav>
  );
        
    
};

export default Order;