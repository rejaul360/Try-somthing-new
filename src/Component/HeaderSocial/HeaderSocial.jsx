import React from 'react';
import { BsFacebook , BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs';

function HeaderSocial() {
    return (
        <div className=' social-icons mt-6 gap-12 flex text-center justify-center items-center  positon_absulite'>
            <a className='mt-5 mb-4' href="https://www.facebook.com/rejaraju2k19" target="_blank"><BsFacebook></BsFacebook></a>
            <a className='mt-5 mb-4' href="https://www.linkedin.com/in/rejaul-islam-82283322b/" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a className='mt-5 mb-4' href="https://github.com/rejaul360" target="_blank"><BsGithub></BsGithub></a>
            <a className='mt-5 mb-4' href="#" target="_blank"><BsTwitter></BsTwitter></a>
        </div>
    );
}

export default HeaderSocial;