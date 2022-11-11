import './landing.css';
import {useNavigate} from 'react-router-dom';
import React, { useState } from "react";

// import { Link } from "react-router-dom";
const cardContainer = document.querySelector('.card-container')


const Landing = () => {
    const [nav,setN]=useState(false)
    const navigate=useNavigate()

    function handleClick(){
      setN(true)
    }

    function handleClick2(){
        navigate('/home')
      }

    if(nav === true){
        navigate("/form")

    }
    
    return ( 
        <>
            <div id="container text-center p-3 mt-2">
                <h2 className="display-6 mb-3"> Enter as </h2>
                    <div className="card p-5">

                    
                    <button className="btn btn-outline-success btn-md m-2" onClick={handleClick} >
                                Staff
                        
                        </button>
            
                        <button className="btn btn-outline-success btn-md m-2" onClick={handleClick2} >
                                Customer
                        </button>

                    </div>
                
            </div>
      </>
     )
    };

 
export default Landing;