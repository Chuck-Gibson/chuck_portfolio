import React from "react";
import "./about.css";
export default function About() {

    return (
        <div className='about-container'>
            <img src={require("../resources/images/cartoonchuck.png")} alt="a cartoon of Chuck Gibson"/>
            <div className="text-container">
            <h2><span>A</span>bout <span>M</span>e</h2>
            <p>Hi! im Chuck Gibson!

I am from canada and am an aspiring coder. Forklift driver by trade I've always been interested in how things work, none more so than computers and computer programs.

After discovery of a new open-source streaming platform called Glimesh and learning that i could help build and grow the site if i had some technical coding skills I was inspired to begin my learning

My current skills touch primarily on the Front end side of websites but I'm excited to be learning more Back end and Dev ops as continue my studies</p>
            </div>
        </div>
    )
}