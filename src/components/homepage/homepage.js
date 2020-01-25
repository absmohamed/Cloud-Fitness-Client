import React, { Component } from 'react';
import "./homepage.scss";
import { Link } from 'react-router-dom';
import Frontpic from '../media/frontpic.jpg'
import Bottompic from '../media/bottompic.jpg'
import Dumbbell from '../media/dumbbell.png'
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
                    <img className="front-pic" src={Bottompic} alt="" /> 
                        <Link to="/about">
                        <div className="logo-name">CLOUD FITNESS</div>   
                        </Link>
                    <p className="quote">
                        BE THE BEST VERSION OF YOU
                    </p>
                    <button className="logo-button">SEE MORE</button>
                </div>
                {/* <iframe className="ytvideo" width="560" height="315" src="https://www.youtube.com/embed/uMQqnqGzgHM?controls=0&amp;start=25" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <div className="container">
                    <Link to="/services">
                        <p className="servicesdiv1"> SERVICES
                        </p>
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
                <img className="flexandrelax" src={Frontpic} alt="" /> 
                {/* <div className="contact-form-container">
                    <Contact/>
                </div> */}
                <div className="about">
                    <Link to="/about">
                    <p className="about-us-title">ABOUT US</p> 
                    </Link>
                        <p className="about-us">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. 
                        </p>
                    <Link to="/about">
                    <p className="about-us-title-2">OUR MISSION</p>
                    </Link>
                        <p className="about-us-2">LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. 
                        </p>
                </div> 
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