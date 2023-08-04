import React from 'react';
import CV from "../../assets/images/Front End Developer of Rejaul.pdf"

const Resume = () => {
    return (
        <div className='mt-6'>
            <a href={CV} download className='btn btn-outline btn-info text-white mr-4'>Get Resume</a>
            <a href="#project" className='btn btn-info '>Projects</a>
        </div>
    );
};

export default Resume;