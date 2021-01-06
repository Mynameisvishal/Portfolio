import React from 'react';
import {Icon,Button} from 'semantic-ui-react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact__page">
            <h1>Contact Me</h1>
            <p>You can contact me by mail, by phone, at my place, or by leaving your valuable comment.</p>
            <div className="contact__flex">
                <div className="contact__info">
                    <div className="contact__formal">
                        <Icon size="big" className="contact__icon" name="map marker alternate" />
                        <h3>Address</h3>
                        <p>Maduravoyal, Chennai, Tamil Nadu, India</p>
                    </div>
                    <div className="contact__formal">
                        <Icon size="big" className="contact__icon" name="mail" />
                        <h3>Email</h3>
                        <p>vishalprakaash@gmail.com</p>
                    </div>
                    <div className="contact__formal">
                        <Icon size="big" className="contact__icon" name="call" />
                        <h3>Phone</h3>
                        <p>+91 90942 08960</p>
                    </div>
                </div>
                <div className="contact__message">
                    <div className="flex">
                        <div className="flex">
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" />
                        </div>
                        <div className="flex">
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name" />
                        </div>
                    </div>
                    <label for="email">Email</label>
                    <input type="email" id="email" />
                    <label for="message">Message</label>
                    <textarea id="message" cols="" rows=""></textarea>
                    <p> * max message size 255 characters</p>
                    <textarea className='error' name="error" cols="30" rows="1"></textarea>
                    <Button color="blue">send message</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
