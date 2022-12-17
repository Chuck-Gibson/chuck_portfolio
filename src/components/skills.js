import React from "react";
import "./skills.css";

export default function Skills() {
     return (
        <div className="skills-container" id="skills">
            <h2><hr/><span>S</span>kills<hr/></h2>
            <div className='skills'>
                <div className="skill"><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" ><i className="fab fa-html5"></i><p>Html</p></a></div>
                <div className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><i className="fab fa-css3-alt"></i><p>Css</p></a></div>
                <div className="skill"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><i className="fab fa-js"></i><p>JavaScript</p></a></div>
                <div className="skill"><a href="https://github.com"><i className="fab fa-github"></i><p>Github</p></a></div>
                <div className="skill"><a href="https://git-scm.com"><i className="fab fa-git-alt"></i><p>Git</p></a></div>
                <div className="skill"><a href="https://developer.chrome.com/docs/devtools"><i className="fab fa-chrome"></i><p>Chrome Dev</p></a></div>
                <div className="skill"><a href="https://reactjs.org"><i className="fab fa-react"></i><p>React</p></a></div>
                <div className="skill"><a href="https://nodejs.org/en/about/"><i className="fab fa-node-js"></i><p>Node</p></a></div>
            </div>
        </div>
     )
}