import React from "react";
import "./projects.css";

export default function Projects() {

    const carouselCollection = document.getElementsByClassName('radio');
    
    
    
    const projectForward = () =>{
        const carouselArr = Array.prototype.slice.call(carouselCollection);
        const checked = carouselArr.filter(item => item.checked)
        if(+checked[0].id < 4){ 
            const newChecked = +checked[0].id + 1;
            return document.getElementById(newChecked).checked = true;  
        }
    }
    const projectBack = () =>{
        const carouselArr = Array.prototype.slice.call(carouselCollection);
        const checked = carouselArr.filter(item => item.checked)
        if(+checked[0].id > 1){ 
            const newChecked = +checked[0].id - 1;
            return document.getElementById(newChecked).checked = true;  
        }
    }

    
    return (
        <div className="projects-container">
            <h2 id='projects'><hr/><span>P</span>rojects<hr/></h2>
            <div className="carousel-container">
                <span className="arrow" id="left-arrow" onClick={projectBack}>{"<"}</span>
                <input className="radio" type="radio" name="position" id="1" defaultChecked/>
                <input className="radio" type="radio" name="position" id="2"/>
                <input className="radio" type="radio" name="position" id="3"/>
                <input className="radio" type="radio" name="position" id="4"/>
                <span className="arrow" id="right-arrow" onClick={projectForward}>{">"}</span>
            <div id="carousel">
                <div className="project">
               <img src={require("../resources/images/fotomat.png")} alt="A sample photography website"/>
                    <div className="project-content">
                        <a href="https://chuck-gibson.github.io/capstone_fotomatic-CC/" ><h3>Capstone Fotomatic</h3></a>
                        <p className="project-discription">
                        A landing page for mock camera company. Built using HTML and CSS focusing on Flexbox and responsive design. Multiple of these small projects were done to strengthen my core understanding of Css and html fundamentals </p>
                        <div className="details">                 
                            <p className="skills-used">CSS Html</p>
                            <a className="link-to-project" href="https://github.com/Chuck-Gibson/capstone_fotomatic-CC"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                <img src={require("../resources/images/jamming.png")} alt="A sample photography website"/>
                <div className="project-content">
                    <a href="https://main--selsjamming.netlify.app/" ><h3>Jammming</h3></a>
                    <p className="project-discription">
                        A single page React app that interacts with the Spotify API to allow searching of songs, building of playlists, and saving those playlists to your spotify account
                    </p>
                        <div className="details"> 
                            <p className="skills-used">CSS JavaScript React</p>
                            <a className="link-to-project" href="https://github.com/Chuck-Gibson/jammming"><i className="fab fa-github"></i></a>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <img src={require("../resources/images/reddit_app.png")} alt="A sample photography website"/>
                    <div className="project-content">
                        <a href="https://github.com/Chuck-Gibson/reddit-app"><h3>Reddit Client</h3></a>
                        <p className="project-discription"> 
                            A "from the ground up" build of a React App. as CodeCademy's final front end project, whos purpose was not only to excercise all i had learned from wireframing, to production for front end developement, but also dive into back end with Node.js in order to interact with the Reddit API. This was also a group project to gain experience and knowledge in colaborative coding and expanded use of GitHub  
                        </p>
                        <div className="details"> 
                            <p className="skills-used">CSS JavaScript React/Redux Node</p>
                            <a className="link-to-project"href="https://github.com/Chuck-Gibson/reddit-app"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={require("../resources/images/Portfolio.png")} alt="A sample photography website"/>
                    <div className="project-content">
                        <a href="Chuckgibson.tech"><h3>Portfolio Site</h3></a>
                        <p className="project-discription">
                        A challenge project from CodeCademy to showcase what ive worked on and as an aid for potential work aplications in the future. The design was inspired by Brittany Chiang but alterd to test my skills and ad my own flair. 
                        </p>
                        <div className="details"> 
                            <p className="skills-used">CSS React</p>
                            <a className="link-to-project"href="https://github.com/Chuck-Gibson/chuck_portfolio"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}