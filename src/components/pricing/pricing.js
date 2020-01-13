import React from 'react';
import "./pricing.css";
import Price from '../media/price.jpg'

function Pricing() {
    return (
        <div>
            <h1> The Pricing page </h1>
            <img src={Price} alt="pricing" />
        </div>
    );
};

export default Pricing;