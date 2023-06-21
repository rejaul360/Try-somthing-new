import React, { useEffect } from 'react';
import './Info.css'
import { BiAward } from 'react-icons/bi';
import { IoMdCodeWorking } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import aboutMe from '../../assets/images/about.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Info = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section id='about' className='max-w-7xl mx-auto mb-8 py-8'>
      <h5 className='text-center text-white mt-5 text-xl' data-aos="fade" data-aos-duration="1500">Get To Know</h5>
      <h2 className='text-center text-white' data-aos="fade" data-aos-duration="1500">About Me</h2>

      <div className='container about_container mt-10' data-aos="fade" data-aos-duration="1500">
        <div className='p-10 mt-4' data-aos="flip-left" data-aos-duration="1500">
          <img className='rounded-lg' src={aboutMe} alt="" />
        </div>
        <div className='about_content mt-4 p-10 justify-start' data-aos="fade" data-aos-duration="1500">
          <div className='about_cards' data-aos="zoom-in" data-aos-duration="1500">
            <article className='about_card items-center text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon items-center' href=""><BiAward /></a>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about_card text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon' href=""><IoMdCodeWorking /></a>
              <h5>Working Place</h5>
              <small>P-Hero</small>
            </article>
            <article className='about_card text-white' data-aos="zoom-in" data-aos-duration="1500">
              <a className='about_icon' href=''><AiOutlineProject /></a>
              <h5>Projects</h5>
              <small>40+ Projects Completed</small>
            </article>
          </div>
          <div className='text-white'>
            <p className='my-6 text-white' data-aos="fade-left" data-aos-duration="1500">My name is Rejaul Islam Raju. I am from Dinajpur, Bangladesh. <br /> Currently, I finish my study at Dinajpur Poltechnic Institute, Diploma in Computer Science and Engineering. I started coding since I was in high school. Coding is also an art for me.</p>
            <p className='my-2 text-white' data-aos="fade-left" data-aos-duration="1500"> Passing Year : 2022 </p>
            <p className='my-2 text-white' data-aos="fade-left" data-aos-duration="1500">CGPA : 3.83</p>
          </div>
          <a href="https://github.com/rejaul360" target='_blank' className='btn btn-primary' data-aos="fade-left">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Info;