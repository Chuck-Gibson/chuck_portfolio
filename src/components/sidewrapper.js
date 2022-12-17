import React from "react";
import './sideWrapper.css';

export default function SideWrapper() {

    return (
        <div className="sideWrapper-container">
            <div className="left-wrapper wrapper">
                <a href="https://github.com/Chuck-Gibson"><i className="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/charles-gibson-2a451524b"><i className="fab fa-linkedin"></i></a>
                <hr/>
                </div>
            <div className="right-wrapper wrapper">
                <a href="mailto:chuckgibson@live.ca" data-content="ChuckGibson @ live.ca">ChuckGibson <span>@</span> live.ca</a><hr/>
                </div>
        </div>
    )
};