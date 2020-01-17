import React from "react";
import "./Toolbar.scss";
import { Link } from 'react-router-dom';
import Logo from "../media/logo.png"
// import { Navbar } from "react-bulma-components"


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
            <Link to="/"> <img src={Logo} alt="" /> </Link>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <Link to="/services">
                        <li> SERVICES </li>
                    </Link>
                    <Link to="/pricing">
                        <li> PRICING</li>
                    </Link>
                    <Link to="bookings/">
                        <li> BOOK </li>
                    </Link>
                    {/* <Link to="/about">
                        <li className="separate-menu"> ABOUT </li>
                    </Link>
                    <Link to="/contact">
                        <li className="separate-menu"> CONTACT </li>
                    </Link> */}
                
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;