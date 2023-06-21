import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';
import { DiCss3, DiJavascript, DiReact, DiNodejsSmall } from 'react-icons/di';
import { BsFillBootstrapFill } from 'react-icons/bs';
import './Technology.css'
import { motion } from 'framer-motion';

const Technology = () => {
  return (
    <section   className="max-w-7xl mx-auto   h-auto  mb-8 p-10" id="technology">
      <h5 className="text-xl text-center text-white py-6">Technology</h5>

      <div className="container experience_container mt-4">
        <div className="frontend_development p-10 rounded-3xl mb-3">
          <h3>Frontend Development</h3>
          <motion.div className="experience_content">
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <AiFillHtml5 />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">HTML</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Experienced
                </motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <DiCss3 />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">CSS</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Intermediate
                </motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <BsFillBootstrapFill />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">BOOTSTRAP</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Experienced
                </motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <SiTailwindcss />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">TAILWIND</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Intermediate
                </motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <DiJavascript />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">JAVASCRIPT</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Intermediate
                </motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <DiReact />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">REACT JS</motion.h4>
                <motion.small className="text-light" data-aos="zoom-in">
                  Intermediate
                </motion.small>
              </div>
            </motion.article>
          </motion.div>
        </div>
        {/* start backend_development */}
        <div className="backend_development p-10 rounded-3xl mb-3">
          <h3>Backend Development</h3>
          <motion.div className="experience_content">
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <DiNodejsSmall />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">NODE JS</motion.h4>
                <motion.small data-aos="zoom-in">Intermediate</motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <SiExpress />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">EXPRESS JS</motion.h4>
                <motion.small data-aos="zoom-in">Intermediate</motion.small>
              </div>
            </motion.article>
            <motion.article
              className="experience_details"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div className="experience_details_icons" data-aos="zoom-in">
                <SiMongodb />
              </motion.div>
              <div>
                <motion.h4 data-aos="zoom-in">MONGODB</motion.h4>
                <motion.small data-aos="zoom-in">Intermediate</motion.small>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;


