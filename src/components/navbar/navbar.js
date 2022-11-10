import React from 'react';
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
                        <a href="/" className='site-title'>Home</a>
                    </li>
                    <li className="item">
                        <a href="/order">Order</a>
                    </li>
                    <li className="item">
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;