import React from 'react';
import './Contact.css';
import {Icon,Button} from 'semantic-ui-react';

function Contact() {
    return (
        <div className="contact__page">
            <h1>Contact Me</h1>
            <p>You can contact me by mail, by phone, at my place, or by leaving your valuable comment.</p>
            <div className="contact__info">
                <div className="contact__formal">
                    <Icon name="map marker alternate" />
                    <h3>Address</h3>
                    <p>Maduravoyal, Chennai, Tamil Nadu, India</p>
                </div>
                <div className="contact__formal">
                    <Icon name="mail" />
                    <h3>Email</h3>
                    <p>vishalprakaash@gmail.com</p>
                </div>
                <div className="contact__formal">
                    <Icon name="call" />
                    <h3>Phone</h3>
                    <p>+91 90942 08960</p>
                </div>
                <div className="contact__message">
                    <div className="same_line">
                    <input type="text" placeholder="First name *" name="first-name" id=""/>
                    <input type="text" placeholder="Second name *" name="last-name" id=""/>
                    </div>
                    <input placeholder="Valid Email *" type="email" name="" id=""/>
                    <textarea placeholder="Message *" name="" id="" cols="30" rows="10"></textarea>
                    <span></span>
                    <textarea name="error" id="" cols="30" rows="1"></textarea>
                    <Button color="blue">send message</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
