import React from 'react';
import './Welcome.css';
import avatar from '../images/avatar.svg';
import {Button} from 'semantic-ui-react';

function Welcome() {
    const downloadFile = ()=>{
        const win = window.open("https://firebasestorage.googleapis.com/v0/b/vishalportfolio98.appspot.com/o/resume%2FVishal%20resume-16_01_2021.pdf?alt=media&token=2cb4d1fb-7ea5-4c1c-a868-c8db96a4bc22", "_blank");
        win.focus();       
    }

    return (
        <div className="welcome__page" id="welcome">
            <div className="welcome__info">
                <h2   
                    >HELLO👋, I'M</h2>
                <h1>VISHAL PRAKASH</h1>
                <p >UI/UX Designer and a Front-End Developer with the passion of creativity.</p>

                <Button onClick={downloadFile} color="blue">Download CV</Button>
            </div>
            <div className="welcome__avatar">
                <img src={avatar} alt=""/>
            </div>
        </div>
    )
}

export default Welcome
