import React from 'react';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact">
            <div className='text-center'>
                <h5>Get In Touch</h5>
                <h2>Contact Us</h2>
            </div>

            <div className="flex flex-wrap  ">
                <div className=" flex  text-center md:mr-4 md:mb-0">
                    <article className=" mb-4 flex flex-col items-center">
                        <HiOutlineMail className="contact_option_icon"></HiOutlineMail>
                        <h4>Email</h4>
                        <h5>rejaraju2k19@gmail.com</h5>
                        <a href="rejaraju2k19@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option mb-4 flex flex-col items-center">
                        <BsMessenger className="contact_option_icon"></BsMessenger>
                        <h4>Messenger</h4>
                        <h5>Rejaul Islam</h5>
                        <a href="https://m.me/Modhupurno/" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option mb-4 flex flex-col items-center">
                        <BsWhatsapp className="contact_option_icon"></BsWhatsapp>
                        <h4>Whats Up</h4>
                        <h5>+8801307325024</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801307325024" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/* <form className="md:w-1/2">
                    <input className="p-4 border-blue-500 mb-4" type="text" name="name" placeholder="Enter Your Name" required />
                    <input className="p-4 border-blue-500 mb-4" type="text" name="email" placeholder="Enter Your Email" required />
                    <textarea className="p-4 border-blue-500 mb-4" name="" cols="30" rows="8" placeholder="Your Message Here..."></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form> */}
            </div>
        </section>
    );
};

export default Contact;