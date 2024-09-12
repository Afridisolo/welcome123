import React from "react";
import "./Style.css";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Brands from "./Brands";
import Body from "./Body";
import Read from "./Read";
import Final from "./Final";
import Footer from "./Footer";
// import Navigation from "./navigation";

function Header(){
    return(
    <div className="header-container">
        <div className="navbar-container">
            <h2>REPEAT</h2>
        {/* <navbar>
                <Navigation />
                
            
        </navbar> */}
        <div className="button-demo-1">
           <span className="demo-2">BOOK A DEMO</span>
         </div>
        </div>
        <h2>SUPERCHARGED<br/>
            LIFECYCLE MARKETING
        </h2>
            <p>Repeat boosts repurchase rate by automatically delivering personalized <br/>
             messaging at high-leverage Moments</p>
            <div className="button-demo">
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>BOOK A DEMO</span>
            </div>
            <div className="para">
            <p>or get started</p>
            </div>
            
     </div>
 );
    
};
export default Header;