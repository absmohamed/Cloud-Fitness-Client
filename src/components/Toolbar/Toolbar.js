import React, { Component } from "react";
import "./Toolbar.scss";
import { Link } from 'react-router-dom';
import Logo from "../media/logo.png"
// import { Navbar } from "react-bulma-components"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Toolbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }
    render() {
        const { isAuthenticated } = this.props.auth;

        // Creating two variables called authLinks and guestLinks. Depending on whether the users logged in, they'll see guestLinks or authLinks
        //In authLinks, we want the dashboard and logout
        const authLinks = (
            // onLogoutClick is the function above
            <ul>
                <a href="" onClick={this.onLogoutClick.bind(this)}>Logout</a>
            </ul>
        )

        const guestLinks = (
            <ul>
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
                            {/* Added a ternary, if isAuthenticated, then we display authLinks, else we display guestLinks   */}
                            {isAuthenticated ? authLinks : guestLinks}                   
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

export default connect(mapStateToProps, { logoutUser })(Toolbar);
