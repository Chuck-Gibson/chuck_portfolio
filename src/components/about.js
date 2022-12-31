import React from "react";
import "./about.css";
export default function About() {

    return (
        <div className='about-container'>
             <h2 id='about-me'><hr/><span>A</span>bout  Me <hr/></h2>
            <div className='content-container'>
            <img src={require("../resources/images/chuck1.jpg")} alt="a cartoon of Chuck Gibson"/>
            <div className="text-container">
                <p>I am from canada and am an aspiring coder.</p> 
                <p>Growing up in the 90s and early 2000s, I always had a fascination with computers, space, technology, AI, and how's things worked. Coding and web develpoment is a natural progression of that for me. Building functional and helpfull Apps for the future</p>
                <details className="about-me-more">
                    <summary><p className='show-more'><span>more</span></p></summary>
                    <div className="more-content">
                    <p>But growing up in small town Saskatchewan, I did not see many opportunities in the tech industry. Smartphones did not exist yet, and Facebook and Google were just fledgling websites.</p>
                    <p>So I did what I knew how to pay the bills and found work in the trades and building material industries. </p>
                    <p>It was good. It paid my debts but never left me feeling fulfilled at the end of the day. It was a job, but never felt like a career. Working 55-60+ hours per week outside, in all weather conditions also left me with the desire for a better work/life balance. </p>
                    <p>When the pandemic hit I saw a shift to not only online learning but remote working as well. Though my job was secure with the temporary increased demand from Do-it-yourselfers stuck at home. The increase in reliance on online services like Amazon, Twitch, and Zoom. The discovery of Open source projects like <span><a href="https://glimesh.tv">Glimesh</a></span> where the community can contribute to the end product.
And the advent of internet constilations like Starlink and One web laying groundwork for more demand to come, spurred me to begin my studies and invest my time in what i hoped to be my future. 
</p>
                    </div>
                </details>
                <p>CodeCademy has been my primary learning tool. I've been learning and practicing primarily the PERN stack in the few downtime hours I have daily outside of work. It's made me feel great pride and accomplishment in being able to solve problems and watch my creations come to life. </p>
                <p>I believe that I could now get much more out of applying what I've been learning in a full time real word setting not only accelerating the development of my skills but also converting what to this point has been a hobby, into a career. </p>
            </div>
            </div>
        </div>
    )
}