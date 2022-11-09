import './navbar.css';

function Navbar(){
    return(
        <>
            <nav id="navbar">
                <div id="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiRHPxIgs-g_ZzEtunaQ_VjnGMcj5KuyvNDBVogJVnw&s" alt="IndiaMeals.in" />
                        <h2>Meal Order</h2>
                </div>
                <ul>
                    <li className="item">
                        <a href="#home.com">Home</a>
                    </li>
                    <li className="item">
                        <a href="#services.com">Restaurants</a>
                    </li>
                    <li className="item">
                        <a href="#client-section.com">About Us</a>
                    </li>
                    <li className="item">
                        <a href="#contact-box.com"></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;