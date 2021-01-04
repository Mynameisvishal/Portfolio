import React from 'react';
import './Welcome.css';
import avatar from '../images/avatar.svg';
import {Button} from 'semantic-ui-react';

function Welcome() {
    return (
        <div className="welcome__page">
            <div className="welcome__info">
                <h2>HELLO👋, I'M</h2>
                <h1>VISHAL PRAKASH</h1>
                <p>Ui/Ux Designer And A Front-End Developer With The Passion Of Creativity.</p>
                <Button color="blue">Download CV</Button>
            </div>
            <div className="welcome__avatar">
                <img src={avatar} alt=""/>
            </div>
        </div>
    )
}

export default Welcome
