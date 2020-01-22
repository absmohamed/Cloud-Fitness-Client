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
                {/* <h1 div="flexandrelax-text">flex and relax</h1> */}
                <p className="flexandrelax-div2">
                    Flex and Relax - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            <div onClick className="strength-div3">
                <Link to="/shop"><img className="strength-div3"src={Strength} alt="strength" /></Link>
            </div>
            <p className="stength-div4">
                Strength - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className="aerobic-div5">
                <Link to="/shop"><img src={Aerobic} alt="aerobic" /></Link>
            </div>
            <p className="aerobic-div6">
                aerobic - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
    );
};

export default Services;