// HeroBanner.js
import React, { useState } from 'react';
import gif from '../../assets/loading1.gif';
import staticImage from '../../assets/static-image.png'; 
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function HeroBanner() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="text-white w-full flex flex-col md:flex-row justify-evenly items-center h-screen bg-cover bg-center relative">
      {/* Left Section: Text and Button */}
      <div className="p-6 md:w-2/5 text-center md:text-left ml-10">
        <h1 className="title mb-4">

          Join the Thrill of Cricket
        </h1>
        <p className="text-xl mb-6">
          Register now for upcoming tournaments in various formats and showcase
          your talent.
        </p>
        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
         onClick={()=>navigate("/sign-up")} className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-2 px-6 rounded-full hover:bg-gradient-to-r flex items-center gap-2 hover:from-green-600 hover:to-green-700">
          Get Started
          <FaArrowRight className="ml-2" />
        </motion.button>
      </div>

      <div className="mx-auto md:w-1/2 flex justify-center">
        <img
          src={isHovered ? gif : staticImage}
          alt="hero"
          className="w-2/3 max-w-md transition duration-300 rounded-[28px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
