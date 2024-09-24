import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/batsman2.png';

export default function BookTicketBanner() {
    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-12 rounded-[28px] shadow-2xl overflow-hidden my-12 mx-6 md:mx-24">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                {/* Left Side: Text Content */}
                <div className="flex  justify-center items-center flex-col text-white space-y-6 max-w-lg text-center md:text-left md:   mt-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        Experience Cricket Like Never Before!
                    </h2>
                    <p className="text-lg md:text-xl">
                        Be part of the action! Book your tickets today for the most thrilling cricket tournaments of the season.
                    </p>

                    {/* Motion Button */}
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => navigate("/tickets")}
                        className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-3 px-8 rounded-full flex items-center gap-3 hover:from-green-600 hover:to-green-700 transition-colors duration-300 ease-in-out"
                    >
                        Book Tickets
                        <FaArrowRight className="ml-1" />
                    </motion.button>
                </div>

                {/* Right Side: Cricket Image */}
                <div className=" flex   justify-between">
                    <img
                        src={image}
                        alt="Cricket Batsman"
                        className=" md:w-[400px] object-cover drop-shadow-2xl "
                        
                    />
                </div>
            </div>
        </div>
    );
}
