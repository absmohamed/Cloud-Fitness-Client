import React from 'react';
import "./pricing.css";
import { Link } from 'react-router-dom';
import Price from '../media/price.jpg';

function Pricing() {
    return (
        <div>
            <h1> The Pricing page </h1>
            <img src={Price} alt="pricing" />
            <Link to="/services">
                <button onClick>Book a pass</button>
            </Link>
        </div>
    );
};

export default Pricing;