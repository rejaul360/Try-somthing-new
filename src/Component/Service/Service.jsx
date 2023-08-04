import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Development from "./Development.json";
import responsive from "./res4.json"
import data from "./security.json"

import Lottie from "lottie-react";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id='services' className=''>
      <div>
        <h2 className='text-center text-white text-xl my-6 p-8' data-aos="slide-left">My Services</h2>
      </div>
      <div className="flex flex-wrap justify-between about_cards my-6 px-8">
        <div
          className="w-80 p-8 about_card"
          data-aos="fade-up"
        >
          <div style={{ width: "100%" }}>
            <Lottie loop={true} animationData={Development} />
          </div>
          <h2 className="text-xl font-semibold mt-5  mb-4"> Website Development</h2>
          <p className='text-gray-200'></p>
        </div>
        <div
          className="w-80 p-8 about_card"
          data-aos="zoom-in"
        >
                    <div style={{ width: "100%" }}>
            <Lottie loop={true} animationData={responsive} />
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-4">Responsive Web Design</h2>
          <p className='text-gray-200'></p>
        </div>
        <div
          className="w-80 p-8 about_card"
          data-aos="slide-left"
        >
                              <div style={{ width: "100%" }}>
            <Lottie loop={true} animationData={data} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Database Integration</h2>
          <p className='text-gray-200'></p>
        </div>
      </div>
    </div>
  );
};

export default Service;
