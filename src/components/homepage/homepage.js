import React from 'react';
import "./homepage.css";
import { Link } from 'react-router-dom';
import Prama from '../media/prama.jpg';
function Homepage() {
    return (
        <div>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/uMQqnqGzgHM?controls=0&amp;start=25" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img src={Prama} alt="" />
            <div className="container">
                <Link to="/services">
                    <p className="servicesdiv1"> Services</p>
                </Link>
                <Link to="">
                    <p className="bookingsdiv2"> Buy a pass </p>
                </Link>
            </div>
        </div>
    );
};

export default Homepage;