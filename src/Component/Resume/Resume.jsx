import React from 'react';
import CV from "../../assets/images/final developer  Resume_2.pdf"

const Resume = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-outline font-bold hover:bg-success text-white'>Get Resume</a>
            <a href="#about" className='btn btn-accent font-bold '>About Me</a>
        </div>
    );
};

export default Resume;