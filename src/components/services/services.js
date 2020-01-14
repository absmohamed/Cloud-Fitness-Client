import React from 'react';
import "./services.css";
import { Link } from 'react-router-dom';
import Flexandrelax from '../media/flexandrelax.jpg'
import Strength from '../media/strength.jpg'
import Aerobic from '../media/aerobic.jpg'

function Services() {
    return (
        <div>
            <h1> The Services page </h1>
            <img src={Flexandrelax} alt="pricing" />
            <img src={Strength} alt="strength" />
            <img src={Aerobic} alt="aerobic" />
        </div>
    );
};

export default Services;