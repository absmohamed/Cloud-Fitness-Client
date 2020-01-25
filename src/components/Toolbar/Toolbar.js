import React, { Component } from "react";
import "./Toolbar.scss";
import { Link } from 'react-router-dom';
import Logo from "../media/logo.png"
// import { Navbar } from "react-bulma-components"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';


class Toolbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        // Creating two variables called authLinks and guestLinks. Depending on whether the users logged in, they'll see guestLinks or authLinks
        //In authLinks, we want the dashboard and logout
        const authLinks = (
            // onLogoutClick is the function above
            <ul>
                <Link to="/dashboard ">
                    <li> Dashboard</li>
                </Link>
                <a href="" onClick={this.onLogoutClick.bind(this)}>Logout</a>
            </ul>
        )

        const guestLinks = (
            <ul id="reg-log">
                <Link to="/register">
                    <li> SIGN UP</li>
                </Link>
                <Link to="/login ">
                    <li> LOGIN</li>
                </Link>
            </ul>
        )    
    

        return (
            <header className="toolbar">
                <nav role="navigation" className="toolbar_navigation">
                    {/* <div className="toolbar_logo">
                        <Link to="/"> <img src={Logo} alt="" /> </Link>
                    </div> */}
                    <div className="spacer"></div>
                    <div id="menuToggle">
                    <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
    
                        <ul id="menu">
                            <li id="menu-title">MENU</li>
                            <Link to="/">
                                <li> HOME </li>
                            </Link>
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
                                <li className="separate-menu"> ABOUT </li>
                            </Link>
                            <Link to="/contact">
                                <li className="separate-menu"> CONTACT </li>
                            </Link>
                            {/* <Link to="register/">
                                <li> REGISTER </li>
                            </Link> */}
                            {/* Added a ternary, if isAuthenticated, then we display authLinks, else we display guestLinks   */}
                            {isAuthenticated ? authLinks : guestLinks}                   
                        
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
    
Toolbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Toolbar);
