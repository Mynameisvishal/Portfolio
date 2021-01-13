import React from 'react';
import './Pricing.css';
import {Icon, Button } from 'semantic-ui-react';

function Pricing() {
    return (
        <div className="pricing__page" id="pricing">
            <h1>Pricing</h1>
            <p>Price depending on the number of sites, Responsiveness, email support, and hosting.</p>
            <div className="pricing__flex">
                <div data-aos="flip-left" className="media">
                    <div className="symbol">🚀</div>
                    <h2>Minimum</h2>
                    <span>₹2000</span>
                    <p>5 Pages</p>
                    <Button color="blue">Buy Now</Button>
                </div>
                <div data-aos="flip-left" className="media">
                    <Icon color="red" size="huge" name="shield" />
                    <h2>Standard</h2>
                    <span>₹5000</span>
                    <p>20 Pages</p>
                    <p>Responsiveness</p>
                    <Button color="blue">Buy Now</Button>
                </div>
                <div data-aos="flip-left" className="media">
                    <Icon color="yellow" size="huge" name="handshake" />
                    <h2>Premium</h2>
                    <span>₹9000</span>
                    <p>unlimited pages</p>
                    <p>Responsiveness</p>
                    <p>Dedicated Support</p>
                    <p>Hosting</p>
                    <Button color="blue">Buy Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
