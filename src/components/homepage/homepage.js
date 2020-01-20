import React, { Component } from 'react';
import "./homepage.scss";
import { Link } from 'react-router-dom';
import Flexandrelax from '../media/flexandrelax.jpg'
// import Contact from '../contact/contact'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class homepage extends Component {
    // If the user is logged in, this will take it to the dashboard instead of the home page
    componentDidMount() {
        // Check to see if we're logged in
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <div>
                <div className="prama">
                    <img className="flexandrelax" src={Flexandrelax} alt="" />
                    
                    <div className="logo-name"> 
                        <Link to="/about">
                            CLOUD FITNESS
                        </Link>
                    </div>   
                    <p className="quote">
                        BE THE BEST VERSION OF YOU
                    </p>
                    <button className="logo-button">SEE MORE</button>
                </div>
                {/* <iframe className="ytvideo" width="560" height="315" src="https://www.youtube.com/embed/uMQqnqGzgHM?controls=0&amp;start=25" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <div className="container">
                    <Link to="/services">
                        <p className="servicesdiv1"> SERVICES</p>
                    </Link>
                    <Link to="/about">
                        <p className="bookingsdiv2"> BUY A PASS </p>
                    </Link>
                    <Link to="/about">
                        <p className="amenities"> AMENITIES </p>
                    </Link>
                    <Link to="/about">
                        <p className="community"> COMMUNITY </p>
                    </Link>
                </div>
                {/* <div className="contact-form-container">
                    <Contact/>
                </div> */}
            </div>
        );
    }
}
homepage.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(homepage);