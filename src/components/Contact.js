import React,{useState} from 'react';
import {Icon,Form,Message} from 'semantic-ui-react';
import './Contact.css';
import firebase from '../firebase';
// import emailjs from 'emailjs-com';
// import e from 'cors';

function Contact() {
    const comments = firebase.database().ref('comments');
    // ${uuidv4()}
    // const sendEmail=(e)=> {
    //     e.preventDefault();
    
    //     emailjs.sendForm('gmail', 'template_s4ri7b6', e.target, 'user_XYlXYB8TqlfFhZE1HiPEz')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset();
    //   }

    const[firstName,setFirstName] = useState('');
    // const[fName,setFName] = useState(false);
    const[lastName,setLastName] = useState('');
    // const[lName,setLName] = useState(false);
    const[email,setEmail] = useState('');
    // const[mail,setMail] = useState(false);
    const[message,setMessage] = useState('');
    const[success,setSuccess] = useState(false);
    const[failure,setFailure] = useState(false);
    const[count,setCount] = useState(0);
    const[error,setError] = useState([]);

    const validate=()=>{
       console.log('inside validation');
       if(firstName === ""){
           return false;
       }else if(lastName === ""){
           return false;
       }else if(email === ""){
           return false;
       }else if(message === ""){
           return false;
       }else{
           return true;
       }
    }

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log('inside send message');
        if(validate() ){
            const msg = {
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                firstname: firstName,
                lastname: lastName,
                email: email,
                message: message
              };
            comments
                .push()
                .set(msg)
                .then(() => {
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setMessage('');
                    setCount(0);
                    console.log('success');
                    setSuccess(true);
                    setFailure(false);
                  })
                .catch(err => {
                    setSuccess(false);
                    setFailure(true);
                    console.error(err);
                    setError(error.concat(err));
                });
        }else{
            setFailure(true);
            setError(error.concat('Fill in all fields'));
        }
    };

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
                    {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                   {success && <Message positive>
                        <Message.Header>Message sent successfully.</Message.Header>
                        <p>
                        Thanks for your <b>valuable Message</b>.
                        </p>
                    </Message>}
                   {failure && <Message negative>
                        <Message.Header>Message not sent.</Message.Header>
                            {error.map((er,id)=>(
                                <p key={id}>{er}</p>
                            ))}
                    </Message>}
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid onChange={(e)=>setFirstName(e.target.value)} value={firstName} label='First name' placeholder='First name' />
                            <Form.Input fluid onChange={(e)=>setLastName(e.target.value)} value={lastName} label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} label="Email" placeholder="Enter a vaild Email" fluid/>
                        <Form.TextArea onKeyUp={(e)=>setCount(e.target.value.length)} onChange={(e)=>setMessage(e.target.value)} value={message} label='Message'className="contact__textarea" placeholder='Your Message...' />
                        <span>Characters entered- {count}</span>
                        {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
                        <Form.Button color="green" className="contact__submit" onClick={sendMessage}>Submit</Form.Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
