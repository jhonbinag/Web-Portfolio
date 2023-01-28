import React, { useState } from "react";
import {
  FaInfinity,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import logo from '../assets/infinity.png';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt='Jhon Binag' width={'40px'} height={'100%'}/>
      </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex z-10">
        <li>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li>
        <Link to="skill" smooth={true} duration={500}>
          Skill
        </Link>
        </li>
        <li>
        <Link to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
          Skill
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/* Social Menu */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33313d] rounded-r-[50px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jhonbinag/" target='_blank'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33313d] rounded-r-[50px]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/PaulBinag1963/" target='_blank'
            >
              Facebook <FaFacebookSquare size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
