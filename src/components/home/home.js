import './home.css'
import SliderShow from './SliderShow';

function Home(){
    return(
        <div>
            {/* Carousel */}
            {/* <div id='slider'>
            <figure>
                <img src='https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img1'/>
                <img src='https://images.unsplash.com/photo-1594998893017-36147cbcae05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80'alt='img2'/>
                <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img1'/>
                <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img1'/>
                <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='img1'/>
            </figure>
            </div> */}

            <SliderShow/>
            
            {/* Food menu */}
            <div className="container">
            <h2 className="text-center">FOOD MENU</h2>
            <div className="food-menu-box">
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1523982440192-e61efd063acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXRhbGlhbiUyMGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Mushroom </h3>
                        <p><b>Ksh 450</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <button className=" btn-order-now">Order Now</button>
                        </p>
                </div>
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1562158074-d16650a22f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENoaW5lZXNlJTIwU3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Greek Dessert</h3>
                        <p><b>Ksh 700</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <button className=" btn-order-now">Order Now</button>
                        </p>
                </div>
                <div className="img-food-menu">
                    <img src="https://media.istockphoto.com/id/1358463108/photo/asian-dumplings-with-soy-sauce.jpg?b=1&s=170667a&w=0&k=20&c=m3jFQhH_ujhjWymz6DbeXh0fteq4i8J3NdORjeaVYJw=" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Chineese Dumplings</h3>
                        <p><b>Ksh 100</b> </p>
                        <p className="para-formating">Made in Indian style with pride<br/>
                        <button className=" btn-order-now">Order Now</button>
                        </p>
                </div>/
                <div className="img-food-menu">
                    <img src="https://images.unsplash.com/photo-1562158074-d16650a22f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fENoaW5lZXNlJTIwU3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='food2' className="img-order" />
                </div>
                <div className="Desc-food-menu">
                        <h3 className="food-title">Food Title</h3>
                        <p><b>Ksh 500</b> </p>
                        <p className="para-formating">Made with italian Sauce, Chiken, and organice vegetables.<br/>
                        <button className=" btn-order-now">Order Now</button>
                        </p>
                </div>
            </div>
        </div>
        <div id="services">
            <h1 className="titleh1" id="services"><strong>RESTAURANTS</strong></h1><br />

        <div className="div1 card11">
          <div className="cards carda cardc innerCard11">
            <div className="front11">
                <div className="card-img">
                    <img  src="https://media.istockphoto.com/id/1331280439/photo/smiling-entrepreneur-holding-a-digital-tablet-in-her-cafe.jpg?b=1&s=170667a&w=0&k=20&c=VyHg4A_c9BJJL0p1C0xRnMODcsRSLMY3nvxiUHY_MVk=" alt="tooth1" />
                </div>
                <div className="card-body">
                    <h5 ><em>Restaurant A</em></h5>
                </div>
                </div>

                <div className="back11">
                    <h2>Restaurant A</h2>
                    <p>We are a renowned restaurant and home for the best Somali and African Continental cuisines</p>
                </div>
            </div>

            <div className="cards cardc innerCard11 ">
                <div className="front11">
                <div className="card-img">
                    <img src="https://media.istockphoto.com/id/1434359678/photo/a-chef-calculating-the-kitchen-expenses.jpg?b=1&s=170667a&w=0&k=20&c=_2UpbPSIvW-0w38DGLDPw8_FAenBFJhA6JcWPI91J1k=" alt="tooth1" />
                </div>
                <div className="card-body">
                    <h5><em>Restaurant B</em></h5>
                </div>
            </div>
            <div className="back11">
              <h2>Restaurant B</h2>
              <p>The ideal venue for breakfast, brunch, lunch and dinner with friends and family, corporate meetings, birthday parties</p>
            </div>
          </div>

            <div class="cards cardc innerCard11 ">
                <div className="front11">
                    <div className="card-img">
                        <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="tooth1" />
                    </div>
                    <div className="card-body">
                        <h5><em>Restaurant C</em></h5>
                    </div>
                </div>

                <div className="back11">
                    <h2>Restaurant C</h2>
                    <p>A fun spot serving homey Kenyan and African cuisine. The decor is hip and funky: bright yellow sofas adorned with colorful kanga cushions, chunky metal lights, and the kitchen set within a shipping container </p>
                </div>
            </div>

            <div className="div2 card11">
                <div className="cards cardc innerCard11">
                    <div className="front11">
                        <div className="card-img">
                            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8UmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="tooth1" />
                        </div>
                        <div className="card-body">
                            <h5><em>Restaurant D</em></h5>
                        </div>
                    </div>

                    <div className="back11">
                        <h2>Restaurant D</h2>

                        <p>The elegant restaurant, located in a converted house, has an outdoor bar and patio seating area as well as a large garden.</p>
                    </div>
                </div>

                <div class="cards cardc innerCard11 ">
                <div className="front11">
                    <div className="card-img">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="tooth1" />
                    </div>
                    <div className="card-body">
                        <h5><em>Restaurant E</em></h5>
                    </div>
                </div>

                <div className="back11">
                    <h2>Restaurant E</h2>
                    <p>Best vegetarian restaurant, serves outrageously tasty dishes from across the Indian subcontinent.</p>
                </div>
            </div>

            <div class="cards cardc innerCard11 ">
                <div className="front11">
                    <div className="card-img">
                        <img src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="tooth1" />
                    </div>
                    <div className="card-body">
                        <h5><em>Restaurant F</em></h5>
                    </div>
                </div>
                <div className="back11">
                    <h2>Restaurant F</h2>
                    <p>Offering he menu offers a wide variety to tempt all kinds of palates.</p>
                </div>
            </div>    
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home;