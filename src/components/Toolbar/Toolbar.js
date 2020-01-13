import React from "react";
import "./Toolbar.css";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
            </div>
            <div className="toolbar_logo"><a href="/"> Cloud Fitness</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/"> Services</a></li>
                    <li><a href="/"> Pricing</a></li>
                    <li><a href="/"> Shop</a></li>
                    <li><a href="/"> About</a></li>
                    <li><a href="/"> Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;