import './order.css'

 function Order ({setShow}){
    return(
        
              <nav>
                <div className="nav_box">
                  <span className="my_order" onClick={setShow(true)}>
                    My Orders
                  </span>
                  <div className="cart" onClick={setShow(false)}>
                    <span>
                      <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>0</span>
                  </div>
                </div>
              </nav>
            );
        
    
};

export default Order;