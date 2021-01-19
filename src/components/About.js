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
                <p>I'm Vishal, a skilled UI/UX designer, web developer, and freelancer. I'm passionate towards web development and have done various projects in the same. I wish to share my experience in learning and applying front-end development to anyone who's keen and interested. This would help to streamline their learning process and extend it to real-life scenarios. In case you're up for this, an exclusive one-on-one zoom meet will be set up with a structured agenda and lesson plan. A summary of the specifics of the course will be shared soon. Enroll now to know more.
 </p>
                <Button disabled color='green'>Enroll now</Button>
            </div>
        </div>
    )
}

export default About
