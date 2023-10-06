import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from "../images/contact.png"
import e from "../images/e.png"
import m from "../images/m.png"
import {  useGlobalContext } from '../context'

import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import upwork from "../images/upwork.png"
import fiver from "../images/fiver.png"


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tvrm7in', 
      'template_2ghxon9', 
      form.current, 
      'qLH_V0qGIYvtkQBgS')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Sucessfully")
      }, (error) => {
          console.log(error.text);
      });
  };

  const {offsetY, mode} = useGlobalContext()

  return (

    <div id={`contact${mode}`}>
      <div className='contact_frame'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label><br/>
        <input type="text" name="user_name" /><br/>
        <label>Email:</label><br/>
        <input type="email" name="user_email" /><br/>
        <label>Message:</label><br/>
        <textarea name="message" /><br/>
        <input type="submit" value="Send" className='submit'/>
        </form>
        <div className="socials">
          <a href='https://www.linkedin.com/in/samyak-maharjan-767909293/' target='_blank' className='highlight'><img src={linkedin} width="35px"></img></a>
          <a href='https://github.com/Samyak0-0/' target='_blank' className='highlight'><img src={github} width="35px"></img></a>
          <a href='https://www.fiverr.com/samyak_maharjan' target='_blank' className='highlight'><img src={fiver} width="35px"></img></a>
          <a href='https://www.upwork.com/freelancers/~011887f8e74c8fb94c' target='_blank' className='highlight'><img src={upwork} width="35px"></img></a>
        </div>
      </div>
      <div className="contact_img">
          <img src={contact} className='contact_us_1'/>
          <div className="me">
            <img src={m} className='m' style={(offsetY>=window.innerHeight*2)? {backgroundColor: `rgb(${(window.innerHeight*3-offsetY)*0.5},10,10)`, 
            transform: `translateY(-${(window.innerHeight>=700)? (window.innerHeight*3-offsetY)*0.4: (window.innerHeight*3-offsetY)*0.2}px)`}: {}}/>
            <img src={e} className='e'/>
          </div>
          <div className="triangle" style={(offsetY>=window.innerHeight*2)? {transform: `translateY(${(window.innerHeight*3-offsetY)*1.5}px)`}: {}}></div>
          <div className="semi_circle" style={(offsetY>=window.innerHeight*2)? {transform: `translateX(-${(window.innerHeight*3-offsetY)*0.3}px)`}: {}}></div>
      </div>
    </div>

  )
}

//Styles
// const StyledContactForm = styled.div`
// background: red;
// `

export default Contact