import React from 'react';
import "./pricing.css";
import Price from '../media/price.jpg'



function Pricing({history}) {
    function showServices () {
        history.push("/services")
    }
    return (
        <div>
            <h1> The Pricing page </h1>
            <img src={Price} alt="pricing" />
            <form>
                <imput type="submit" name="Services" className="button is-info" onClick={showServices}></imput>
            </form>
           
        </div>
    );
};

export default Pricing;