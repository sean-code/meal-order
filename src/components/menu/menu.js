import './menu.css'
import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', height:'70vh'}}>
            {props.chilren}
        </div>
    )
}


function Menu(){
    return(
        <div>
            <h3>This is supposed to show</h3>
        </div>
    )
}

export default Scroll;
//export default Menu;
