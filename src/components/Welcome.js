import React from 'react';
import './Welcome.css';
import avatar from '../images/avatar.svg';
import {Button} from 'semantic-ui-react';

function Welcome() {
    return (
        <div className="welcome__page" id="welcome">
            <div className="welcome__info">
                <h2 data-aos="slide-right" >HELLO👋, I'M</h2>
                <h1 data-aos="slide-right" data-aos-duration="4000">VISHAL PRAKASH</h1>
                <p data-aos="slide-right" data-aos-duration="10000">Ui/Ux Designer And A Front-End Developer With The Passion Of Creativity.</p>
                <Button data-aos="slide-right" data-aos-duration="12000" color="blue">Download CV</Button>
            </div>
            <div data-aos="slide-left" className="welcome__avatar">
                <img src={avatar} alt=""/>
            </div>
        </div>
    )
}

export default Welcome
