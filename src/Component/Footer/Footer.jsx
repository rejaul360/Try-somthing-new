import React from 'react';
import './Footer.css'
import { IoIosArrowUp } from 'react-icons/io';
const Footer = () => {
    return (
        <div>
            <section className='footer_container px-10 rounded-lg' 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >
                <div className='footer'>
                    <p>Designed and Developed By <span className='footer_name'>REJ@UL ISLAM</span> </p>
                    <small className='text-sm'>&copy; 2022 RIR❤</small>
                    <div className='footer_arrow'>
                        <a href="#"><IoIosArrowUp className='footer_uparrow_icon'></IoIosArrowUp></a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;