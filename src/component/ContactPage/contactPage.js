import React, { useRef } from 'react';
import './contactPage.css';

import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import GitHubIcon from '../../assets/github-logo.png';

import emailjs from '@emailjs/browser';

import { BrowserRouter, Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d4ql1j4', 'template_ygy4rsn', form.current, 'KGm7I6b1_1c8SkHKB')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id='contactPage'>
    <div id='contactMe'>
        <h1 className='contactMeTitle'> Contact Me!</h1>
        <span className='contactMeDescr'>
        Please, fill out the form below for any business inquiries.
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='text' className='email' placeholder='Your E-mail' name='your_email'/>
            <textarea className='msg'  name='message' rows='5' placeholder='Your Message'></textarea>

            <button  type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>

            <BrowserRouter>
            <Link to="https://www.instagram.com/banhmiman" target="_blank">
                <img src={InstagramIcon} alt='instagram' className='link' />
            </Link>
            </BrowserRouter>
            <BrowserRouter>
                <Link to="https://twitter.com/banhmiman" target="_blank">
                <img src={TwitterIcon} alt='twitter' className='link' />
                </Link>
                </BrowserRouter>
                <BrowserRouter>
                <Link to="https://github.com/BanhMiMan" target="_blank">
                <img src={GitHubIcon} alt='github' className='link' />
                </Link>
                </BrowserRouter>

            </div>

        </form>
    </div>
    </section>
  );
};

export default Contact;