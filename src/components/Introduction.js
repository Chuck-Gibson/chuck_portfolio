import React from "react";
import "./introduction.css";

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro">
            <p><span>Hi my name is...</span></p>
            <h1 id="name">Chuck Gibson</h1><h1>and i build things for <span>the web</span></h1>
            <p>I am a self taught Full stack developer, and it is my goal to build apps and software that people would love to use </p>
            </div>
        </div>
    )
}