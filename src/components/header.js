import React from "react";
import './header.css';

export default function Header() {

    return (

        <div className="header">
            <h2><span>C</span>G</h2>
            <ul>
               <li><a href="/" data-content="About"><span>A</span>bout</a></li>
               <li><a href="/"  data-content="Skills"><span>S</span>kills</a></li>
               <li><a href="/"  data-content="Projects"><span>P</span>rojects</a></li>
               <li><a href="/"  data-content="Contact"><span>C</span>ontact</a></li> 
            </ul>
        </div>
    )
}