import React,{useState} from 'react';
import {Icon,Form} from 'semantic-ui-react';
import './Contact.css';

function Contact() {
    // const[firstName,setFirstName] = useState('');
    // const[fName,setFName] = useState(false);
    // const[lastName,setLastName] = useState('');
    // const[lName,setLName] = useState(false);
    // const[email,setEmail] = useState('');
    // const[mail,setMail] = useState(false);
    // const[message,setMessage] = useState('');
    // const[msg,setMsg] = useState(false);
    const[count,setCount] = useState(0);
    // const[error,setError] = useState('');

    return (
        <div className="contact__page" id="contact">
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
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First name' placeholder='First name' />
                            <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Input type="email" label="Email" placeholder="Enter a vaild Email" fluid/>
                        <Form.TextArea onKeyUp={(e)=>setCount(e.target.value.length)} label='Message'className="contact__textarea" placeholder='Your Message...' />
                        <span>max character 255- {count}</span>
                        {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                        <Form.Button color="green" className="contact__submit">Submit</Form.Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
