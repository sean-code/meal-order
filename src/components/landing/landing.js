import React from "react"
import { Link } from "react-router-dom";
// const sc = styled.default
// const { css } = styled
const cardContainer = document.querySelector('.card-container')


const Landing = () => {
    
  
    return ( 
        <>
        <div className="container text-center p-3 mt-2">
            <div className="card p-3">
                <h2 className="display-6 mb-3"> Log in as </h2>
                
                <>
                    <button className="btn btn-outline-success btn-md m-2" >Staff</button>
                </>
                
                
                < >
                    <button className="btn btn-outline-success btn-md m-2" >Customer</button>
                </>
            </div>
            
        </div>
        
        <>
          
          
          
        </>
      </>
     )
    };

 
export default Landing;
