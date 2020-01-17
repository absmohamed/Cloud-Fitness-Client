import React from 'react';
import "./homepage.scss";
import { Link } from 'react-router-dom';
import Flexandrelax from '../media/flexandrelax.jpg'
import Contact from '../contact/contact'

function Homepage() {
    return (
        <div>
            <div className="prama">
                <img className="flexandrelax" src={Flexandrelax} alt="" />
                <Link to="/about">
                    <div class="floatinglogo"> CLOUD FITNESS </div>
                </Link>
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
            <div className="contact-form-container">
                <Contact/>
            </div>
        </div>
    );
};

export default Homepage;