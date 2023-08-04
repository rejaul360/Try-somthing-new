import React from 'react';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id="contact" class="md:p-10 mb-6">
      <div class="text-center md:mt-4 md:p-6  mb-6">
        <h5 class="text-center text-white text-xl" data-aos="slide-left">Get In Touch</h5>
        <h2 class="text-center text-white" data-aos="slide-left">Contact Us</h2>
      </div>

      <div class="flex flex-col md:flex-row ">
        <div class="md:w-1/3 md:mr-4 md:mb-0 px-2 text-white">
          <article class="contact_option mb-7 flex flex-col items-center text-center" data-aos="zoom-in">
            <BsMessenger class="contact_option_icon"></BsMessenger>
            <h4>Messenger</h4>
            <h5>Rejaul Islam</h5>
            <a href="https://www.facebook.com/messages/t/100009522973070" target="_blank">Send a Message</a>
          </article>
          <article class="contact_option mb-7 flex flex-col items-center" data-aos="zoom-in">
            <BsWhatsapp class="contact_option_icon"></BsWhatsapp>
            <h4>WhatsApp</h4>
            <h5>Rejaul Islam</h5>
            <a href="https://web.whatsapp.com/" target="_blank">Send a Message</a>
          </article>
          <article class="contact_option mb-7 flex flex-col items-center" data-aos="zoom-in">
            <HiOutlineMail class="contact_option_icon"></HiOutlineMail>
            <h4>Email</h4>
            <h5>rejaraju2k19@gmail.com</h5>
            <a href="rejaraju2k19@gmail.com" target="_blank">Send a Message</a>
          </article>
        </div>
        <form class="md:w-2/3 md:px-10 text-white">
          <input class="p-4 mb-4 contact_option text-white" data-aos="zoom-in" type="text" name="name" placeholder="Enter Your Name" required />
          <input class="p-4 mb-4 contact_option text-white" data-aos="zoom-in" type="text" name="email" placeholder="Enter Your Email" required />
          <textarea class="p-4 mb-4 contact_option text-white" data-aos="zoom-in" name="" cols="30" rows="8" placeholder="Your Message Here..."></textarea>
          <button type="submit" class="btn btn-outline btn-info" data-aos="zoom-in">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;