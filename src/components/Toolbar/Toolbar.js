import React from "react";
import "./Toolbar.css";
import { Link } from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo"><a href="/"> Cloud Fitness</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <Link to="/services">
                        <li> Services </li>
                    </Link>
                    <Link to="/pricing">
                        <li> Pricing</li>
                    </Link>
                    <Link>
                        <li> Shop </li>
                    </Link>
                    <Link to="/about">
                        <li> About </li>
                    </Link>
                    <Link to="/contact">
                        <li> Contact </li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;