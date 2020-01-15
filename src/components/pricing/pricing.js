import React from 'react';
import "./pricing.scss";
import { Link } from 'react-router-dom';
import Price from '../media/price.jpg';



function Pricing({history}) {
    function showServices () {
        history.push("/services")
    }
    return (
        <div>
            <h1> The Pricing page </h1>
            <img src={Price} alt="pricing" />
            <form>
                <Link to="/bookings">
                <button> Book a session </button>
                </Link>
            </form>
        </div>
    );
};

export default Pricing;