import React from 'react';
import './Footer.css';
import {Icon} from "semantic-ui-react";

function Footer() {
    return (
        <div className="footer__page">
            <div className="footer__socialMedia">
                <span className="contact__sm">
                    <Icon name='facebook f' className="ico--" size="huge" />           
                </span>
                <span className="contact__sm">
                    <Icon name='twitter' className="ico--" size="huge" />  
                </span>
                <span className="contact__sm">
                    <Icon name='linkedin' className="ico--" size="huge" />
                </span>
                <span className="contact__sm">
                    <Icon name='github' className="ico--" size="huge" />
                </span>

                <span className="contact__sm">
                    <Icon name='instagram' className="ico--" size="huge" />
                </span>
            </div> 
            copyrights ©2021
        </div>
    )
}

export default Footer
