import React from 'react';
import './About.css'
import aboutMe from '../../assets/images/about.jpg'; //
import { motion } from 'framer-motion';
import HeaderSocial from '../HeaderSocial/HeaderSocial';
import Resume from '../Resume/Resume';

const About = () => {
    
    return (
      <header className="max-w-7xl mx-auto px-2">
      <motion.div
        className="container header_container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h4 className='text-xl fontStyle'>Hello! I am</h4>
        <h1 style={{ fontStyle: "initial" }} className="my_name text-3xl">
          REJAUL ISLAM
        </h1>
        <h5 className="text-light text-xl letter-sp">Frontend Developer</h5>
        <Resume></Resume>
        <HeaderSocial></HeaderSocial>

        <div className="me">
          <img src={aboutMe} alt="me" data-aos="zoom-in"/>
        </div>
        <a href="#contact" className="scroll-down">
          scroll down
        </a>
      </motion.div>
    </header>
    );
};

export default About;