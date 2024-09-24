import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import group1 from "../../assets/group1.png"

const Footer = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if(user?.email === 'admin@gmail.com'){
        return null;
    }

    return (
        <div className='footer md:h-full bg-black'>
            <hr className="h-px  bg-white border-0 "></hr>
            <div className='text-white flex max-md:flex-col pt-5 gap-4  mx-10 md:mx-48 justify-between'>
                
                <div className='py-3'>
                    <div className='flex my-4'>
                        <img src={group1} className='w-8 h-8 gap-0' />
                        <p><b className='text-3xl gap-0 '>CricClick</b></p>
                    </div>
                    <p className='leading-6 w-80'>Your go-to hub for cricket tournaments! Join us for live updates, and a vibrant community. Let the games begin!</p>
                </div>
                <div className='leading-8 '>
                    <p className='text-xl my-3'><b>Useful Links</b></p>
                    <p className='cursor-pointer hover:underline'>About us</p>
                    <p className='cursor-pointer hover:underline'>Contact us</p>
                    <p className='cursor-pointer hover:underline'>Privacy Policy</p>
                    <p className='cursor-pointer hover:underline'>Term & Conditions</p>
                </div>
                <div className='leading-10'>
                    <p className='text-xl my-2'><b>Support</b></p>
                    <p className='cursor-pointer hover:underline'>cricClick@gmail.com</p>
                    <div className='flex gap-4'>
                        <FaInstagram className='text-pink-500 cursor-pointer' size={20}/>
                        <FaFacebookF className='text-blue-500 cursor-pointer' size={20}/>
                        <FaTwitter className='text-blue-500 cursor-pointer' size={20}/>
                    </div>
                    <p>2024 © CricClick Private Limited</p>
                </div>
            </div>
        </div>
    )
}

export default Footer