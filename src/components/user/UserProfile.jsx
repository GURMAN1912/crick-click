import React from 'react';
import {motion} from 'framer-motion';
export default function UserProfile() {
    const user=JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className='bg-gray-900 text-white p-6   mt-[4rem] rounded-[28px] shadow-md'>
      <div className='flex flex-col p-2 items-center gap-2 min-w-xl'>
      <h1 className='font-semibold text-3xl mb-6'>User Information</h1>
          <div className='flex  flex-col items-center gap-2 min-w-lg'>
            <img
              src='https://randomuser.me/api/portraits/men/75.jpg' 
              alt='profile'
              className='w-20 h-20 rounded-full object-cover'
            />
            <h1 className='font-semibold text-2xl mb-4'> Profile Picture</h1>
          <div>
            <form className="space-y-4">
            <div>
            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              placeholder="Email"
             className="border border-gray-300 w-full rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring hover: cursor-not-allowed focus:ring-green-500 outline-none transition duration-300"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              disabled
              className="border border-gray-300 w-full rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 hover:cursor-not-allowed outline-none transition duration-300"
              required
            />
          </div>
          <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg hover:bg-green-700 transition-all duration-300 w-full flex items-center justify-center"
          >
            Save Changes 
          </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
