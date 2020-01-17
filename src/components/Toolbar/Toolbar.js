import React from "react";
import "./Toolbar.scss";
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../drawerToggleButton/drawerToggleButton';
// import Logo from "../media/logo.png"

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton/>
            </div>
            <div className="toolbar_logo">
            {/* <Link to="/"> <img className="logo" src={Logo} alt="" /> </Link> */}
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
                    <Link to="/about">
                        <li> ABOUT </li>
                    </Link>
                    <Link to="/contact">
                        <li> CONTACT </li>
                    </Link>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;