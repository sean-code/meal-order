import React from "react";

function Menu() {
  return (
    <div className="Menu">
      <section className="food-menu">
        <div className="container">
          <h2 className="text-center">Food menu</h2>
          {/* <!--********* Box-1 ***************--> */}
          <div className="food-menu-box">
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/L6VKJBys/menu-pizza.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$2.3</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>
          {/* <!--********* Box-2 ***************--> */}
          <div className="food-menu-box">
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/j2HVQztZ/menu-burger.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$2.0</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>

          <div className="food-menu-box">
            {/* <!--********* Box-3 ***************--> */}
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/66nNXNnn/menu-momo.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$1.5</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>
          {/* <!--********* Box-4 ***************--> */}
          <div className="food-menu-box">
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/L6VKJBys/menu-pizza.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$2.3</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>
          {/* <!--********* Box-5 ***************--> */}
          <div className="food-menu-box">
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/j2HVQztZ/menu-burger.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$2.0</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>
          <div className="food-menu-box">
            <div className="img-food-menu">
              <img
                src="https://i.postimg.cc/j2HVQztZ/menu-burger.jpg"
                alt="food menu Image"
                className="img-order"
              />
            </div>
            <div className="Desc-food-menu">
              <h3 className="food-title">Food Title</h3>
              <p>
                <b>$2.0</b>
              </p>
              <p className="para-formating">
                Made with italian Sauce, Chiken, and organice vegetables.
                <br />
                <br />
                <a href="" className="btn order-now">
                  Order Now
                </a>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
