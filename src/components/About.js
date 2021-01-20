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
                <p>I'm Vishal, a skilled UI/UX designer and web developer. I'm passionate towards web development and have done various projects in the same. 
 </p>
                {/* <Button disabled color='green'>Enroll now</Button> */}
            </div>
        </div>
    )
}

export default About
