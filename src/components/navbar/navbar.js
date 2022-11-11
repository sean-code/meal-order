import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';
import MyImage from './shopping.svg';

function Navbar(){
    return(
        <>
    <header className="navbar">
      <span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiRHPxIgs-g_ZzEtunaQ_VjnGMcj5KuyvNDBVogJVnw&s" alt="IndiaMeals.in" />
            <i><b>Meal Order</b></i>
        </span>

      <NavLink to="/"> </NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/orders">Orders<img src={MyImage}/></NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/form">form</NavLink>

        <button>
            <NavLink to="/login">Login</NavLink>
        </button>
    </header>
    </>
    )
}

export default Navbar;