import React from 'react';
import { BsFacebook , BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs';
function HeaderSocial() {
    return (
        <div className=' social-icons p-0  gap-12 flex text-center justify-center items-center '>
            <a className='mt-5 mb-5' href="https://www.facebook.com/rejaraju2k19" target="_blank"><BsFacebook></BsFacebook></a>
            <a className='mt-5 mb-5' href="#" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a className='mt-5 mb-5' href="https://github.com/rejaul360" target="_blank"><BsGithub></BsGithub></a>
            <a className='mt-5 mb-5' href="#" target="_blank"><BsTwitter></BsTwitter></a>
        </div>
    );
}

export default HeaderSocial;