import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion"
import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (

        <div className="max-w-7xl mx-auto py-2 px-2">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown text-center py-4 text-white text-xl">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/* <ul
                tabIndex={0}
                className="gap-7 flex menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>Home</li>
                </motion.li>
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>About</li>
                </motion.li>
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>Skills</li>
                </motion.li>
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>Projects</li>
                </motion.li>
                <motion.li
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <li>Contact</li>
                </motion.li>
                <div className="divider"></div>
              </ul> */}
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a className="normal-case ">
                <img className='h-14 w-14 rounded-full logo' src={logo} alt="" />
              </a>
            </motion.div>
          </div>
          <div className="navbar-center hidden lg:flex menu_bar">
            {/* <ul className="menu menu-horizontal px-1 gap-7">
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <li>Home</li>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <li>About</li>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <li>Skills</li>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <li>Projects</li>
              </motion.li>
              <motion.li
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <li>Contact</li>
              </motion.li>
            </ul> */}
          </div>
          <div className="navbar-end mr-5">
            <div className="social-icons">
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/rejaul360"
                target="_blank"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

    );
};

export default Header;