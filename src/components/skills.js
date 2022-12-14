import React from "react";
import "./skills.css";

export default function Skills() {
     return (
        <div id="skills">
            <h2><hr/><span>S</span>kills<hr/></h2>
            <div className='skills-container'>
                <i className="fab fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-github"></i>
                <i className="fab fa-git-alt"></i>
                <i className="fab fa-chrome"></i>
                <i className="fab fa-react"></i>
                <i className="fab fa-node-js"></i>
            </div>
        </div>
     )
}