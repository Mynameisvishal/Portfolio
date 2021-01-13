import React from 'react'
import './About.css';
import {Button} from 'semantic-ui-react';
import Vishal from "../images/vishal.jpg";

function About() {
    return (
        <div className="about__page" id="about">
            <div data-aos="slide-right" data-aos-duration="5000" className="about__pic">
                <img src={Vishal} alt="Vishal P"/>
            </div>  
            <div data-aos="slide-left" className="about__me">
                <h1>About Me</h1>
                <p>I am Vishal and I am an Ui/Ux designer, a web developer, and a freelancer. I have a lot of experience in the front-end. I'm interested in sharing my experience, and anybody interested can have one-on-one zoom lessons. The summary of the specifics of the course will be given below. </p>
                <Button color='green'>Enroll now</Button>
            </div>
        </div>
    )
}

export default About
