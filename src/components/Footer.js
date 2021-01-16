import React from 'react';
import './Footer.css';
import {Icon} from "semantic-ui-react";

function Footer() {
    return (
        <div className="footer__page">
            <div className="footer__socialMedia">
                <span data-aos="fade-down-left" data-aos-duration="4000" onClick={()=>window.open("https://www.facebook.com/vishal.rao.7393/", "_blank").focus()} className="contact__sm">
                    <Icon name='facebook f' className="ico--" size="huge" />           
                </span>
                <span data-aos="fade-down-left" data-aos-duration="4000" onClick={()=>window.open("https://twitter.com/VishalR02957882", "_blank").focus()} className="contact__sm">
                    <Icon name='twitter' className="ico--" size="huge" />  
                </span>
                <span data-aos="fade-down-left" data-aos-duration="4000" onClick={()=>window.open("https://www.linkedin.com/in/vishal-p-557078190/", "_blank").focus()} className="contact__sm">
                    <Icon name='linkedin' className="ico--" size="huge" />
                </span>
                <span data-aos="fade-down-left" data-aos-duration="4000" onClick={()=>window.open("https://github.com/Mynameisvishal", "_blank").focus()} className="contact__sm">
                    <Icon name='github' className="ico--" size="huge" />
                </span>

                <span data-aos="fade-down-left" data-aos-duration="4000" onClick={()=>window.open("https://www.instagram.com/insta__vishal/", "_blank").focus()} className="contact__sm">
                    <Icon name='instagram' className="ico--" size="huge" />
                </span>
            </div> 
            <div className="footer-copyrights">
            copyrights ©2021
            </div>
        </div>
    )
}

export default Footer
