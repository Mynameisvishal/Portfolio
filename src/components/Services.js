import React from 'react';
import 'services.css';
import {Icon} from 'semantic-ui-react';

function Services() {
    return (
        <div className="services__page">
            <div className="services__flex">
                <div className="media">
                    <Icon name="code" className="media__img"/>
                    <h2>Web Development</h2>
                    <p></p>
                </div>
                <div className="media"></div>
                <div className="media"></div>
            </div>
        </div>
    )
}

export default Services
