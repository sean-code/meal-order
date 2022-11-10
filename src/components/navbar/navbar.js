import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <>
    <header className="navbar">
      <span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiRHPxIgs-g_ZzEtunaQ_VjnGMcj5KuyvNDBVogJVnw&s" alt="IndiaMeals.in" />
            <i><b>Meal Order</b></i>
        </span>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/order">Order</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/about">About</NavLink>
        <button>
            <NavLink to="/login">Login</NavLink>
        </button>
    </header>
    </>
    )
}

export default Navbar;