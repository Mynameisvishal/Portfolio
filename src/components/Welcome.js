import React from 'react';
import './Welcome.css';
import avatar from '../images/avatar.svg';
import {Button} from 'semantic-ui-react';

function Welcome() {
    const downloadFile = ()=>{
        const win = window.open("https://firebasestorage.googleapis.com/v0/b/vishalportfolio98.appspot.com/o/vishal-resume.pdf?alt=media&token=f0b5fe5b-d024-4aae-b02a-e42e840b5d89", "_blank");
        win.focus();       
    }

    return (
        <div className="welcome__page" id="welcome">
            <div className="welcome__info">
                <h2   
                    >HELLO👋, I'M</h2>
                <h1>VISHAL PRAKASH</h1>
                <p >Ui/Ux Designer And A Front-End Developer With The Passion Of Creativity.</p>

                <Button onClick={downloadFile} color="blue">Download CV</Button>
            </div>
            <div className="welcome__avatar">
                <img src={avatar} alt=""/>
            </div>
        </div>
    )
}

export default Welcome
