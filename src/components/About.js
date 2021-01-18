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
                <p>I'm Vishal, a skilled UI/UX designer, web developer and freelancer. Having a lot of experience and love towards the front end development, I'm planning to share my experience so far, the learning process, difficulties in learning and ability to manage the difficulties in learning frontend development with anyone who is keen and interested. In case you're up for this, an exclusive one-on-one zoom meet will be set up with a structured agenda and lesson plan. A summary of the specifics of the course will be shared soon. Enroll now to know more.
 </p>
                <Button disabled color='green'>Enroll now</Button>
            </div>
        </div>
    )
}

export default About
