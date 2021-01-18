import React from 'react';
import './Services.css';
import {Icon} from 'semantic-ui-react';

function Services() {
    return (
        <div className="services__page" id="services">
            <h1>My services</h1>
            <p>The cost would be calculated on the basis of time flow, features and responsiveness.</p>
            <div className="services__flex">
                <div data-aos="fade-up" data-aos-delay="300" className="media">
                    <Icon name="code" className="media__img"/>
                    <h2>Web Development</h2>
                    <p>The website will be designed to satisfy the needs of customers. I ensure that the website is supplied with a decent design, GUI and tidy code.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="media">
                    <Icon name="paint brush" className="media__img"/>
                    <h2>Ui/Ux Design</h2>
                    <p>The wireframes and the high fidelity version of the client product would be constructed in compliance with the customer's specifications.</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="media">
                    <Icon name="mobile alternate" className="media__img"/>
                    <h2>Responsiveness</h2>
                    <p>The website will be built to fit all sizes of your smartphone, tablet, desktop and PC.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
