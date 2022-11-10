import React from "react";
import './landing.css';
// import { Link } from "react-router-dom";
const cardContainer = document.querySelector('.card-container')


const Landing = () => {
    
    return ( 
        <>
            <div id="container text-center p-3 mt-2">
                <h2 className="display-6 mb-3"> Enter as </h2>
                    <div className="card p-5">

                    
                        <button className="btn btn-outline-success btn-md m-2" >
                            <a href='http://localhost:3000/about'>
                                Staff
                            </a>
                        </button>
            
                        <button className="btn btn-outline-success btn-md m-2" >
                            <a href='http://localhost:3000/about'>
                                Customer
                            </a>
                        </button>

                    </div>
                
            </div>
      </>
     )
    };

 
export default Landing;