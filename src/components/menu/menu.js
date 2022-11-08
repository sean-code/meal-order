import './menu.css'

function Menu(){
    return(
        <div className="container">
            <h2 className="text-center">Food menu</h2>
            <div className="food-menu-box">
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1523982440192-e61efd063acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Food Title</h3>
                        <p><b>Ksh 450</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <a href="#foods.com" className=" btn  order-now">Order Now</a>
                        </p>
                </div>
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1562158074-d16650a22f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENoaW5lZXNlJTIwU3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Food Title</h3>
                        <p><b>Ksh 700</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <a href="#foods.com" className=" btn  order-now">Order Now</a>
                        </p>
                </div>
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1562158074-d16650a22f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENoaW5lZXNlJTIwU3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Food Title</h3>
                        <p><b>Ksh 100</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <a href="#foods.com" className=" btn  order-now">Order Now</a>
                        </p>
                </div>/
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1562158074-d16650a22f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENoaW5lZXNlJTIwU3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Food Title</h3>
                        <p><b>Ksh 500</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <a href="#foods.com" className=" btn  order-now">Order Now</a>
                        </p>
                </div>
            
            </div>
        </div>
        

    )
}

export default Menu;