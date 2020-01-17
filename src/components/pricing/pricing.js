import React from 'react';
import "./pricing.scss";
import { Link } from 'react-router-dom';
import Price from '../media/price.jpg';



function Pricing({history}) {
    function showServices () {
        history.push("/services")
    }
    return (
        <div pricing-parent-div>
            <h1> Price </h1>
            <img className="price-img"src={Price} alt="pricing" />
            <div className='booking-button'>
                <Link to="/bookings">
                <button className='booking-button'> BOOK A SESSION </button>
                </Link>
            </div>
        </div>
    );
};

export default Pricing;