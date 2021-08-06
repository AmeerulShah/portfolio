import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from '../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';

const Contact = () =>{


    return(
        <div className='section-container'>
            <Header heading=  "Get in touch."
            details= "Feel free to drop a message!"/>
            

            <div className='contact-form-container'>
                <form className='contact-form'   action="https://formspree.io/f/mpzkybdj" method="POST">

                    <input type="email" placeholder="Your Email ID" className='input-box email-input' name="_replyto"/>

                    <textarea type="text" placeholder="Your Message" name="message"  className='input-box body-input'>

                    </textarea>

                <button type='submit' className='contact-btn'> Send Email</button>
                
                </form>
            </div>


            <div className='social-icons-container'>

            <a href="https://www.linkedin.com/in/ameerulshah/" target="_blank" rel="noreferrer" className='social-icon'>
                <img src = {linkedin} alt="social" />
            </a>

            <a href="https://github.com/AmeerulShah" target="_blank" rel="noreferrer" className='social-icon'>
                <img src = {github} alt="social" />
            </a>

            <a href="https://instagram.com/ameerul.shah" target="_blank"  rel="noreferrer" className='social-icon'>
                <img src = {instagram} alt="social" />
            </a>

            <a href="hhttps://AmeerulShah.github.io/portfolio/" target="_blank"  rel="noreferrer" className='social-icon'>
                <img src = {web} alt="social" />
            </a>
            

            </div>


           <FooterLink phrase = "Read more about " link="me!" toAddress="/skills" />

           <div className='vector-frame'>
               <img src = {contactVector} alt='vector' className='about-vector' />

           </div>
        </div>
    );
};

export default Contact;

