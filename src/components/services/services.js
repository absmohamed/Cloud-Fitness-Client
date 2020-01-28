import React from 'react';
import "./services.scss";
import { Link } from 'react-router-dom';
import Flexandrelax from '../media/flexandrelax.jpg'
import Strength from '../media/strength.jpg'
import Aerobic from '../media/aerobic.jpg'

function Services() {
    return (
        <div className="parent">
            <div className="flexandrelax-div1"><Link to="/shop"> <img src={Flexandrelax} alt="Flex and Relax" /> </Link> </div>
                <h1> SERVICES</h1>
                <p className="flexandrelax-div2">
                    FLEX AND RELAX - LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S
                </p>
            <div onClick className="strength-div3">
                <Link to="/shop"><img className="strength-div3"src={Strength} alt="strength" /></Link>
            </div>
            <p className="stength-div4">
                STRENGTH - LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S
            </p>
            <div className="aerobic-div5">
                <Link to="/shop"><img src={Aerobic} alt="aerobic" /></Link>
            </div>
            <p className="aerobic-div6">
                AEROBIC - LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S
            </p>
        </div>
    );
};

export default Services;