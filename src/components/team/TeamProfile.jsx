import React from 'react';
import { motion } from 'framer-motion';

export default function TeamProfile() {
  const team = JSON.parse(localStorage.getItem('currentTeam'));
  const teamData = {
    logo: 'https://th.bing.com/th/id/OIP.HwylqQM_APR3ZYRKdZz1WwHaHa?rs=1&pid=ImgDetMain',
    teamName: 'The Strikers',
    captain: 'John Doe',
    preferredFormat: 'T20',
    players: [
        { name: 'Virat Kohli', role: 'Batsman' },
        { name: 'Jasprit Bumrah', role: 'Bowler' },
        { name: 'Ravindra Jadeja', role: 'All-rounder' },
        { name: 'Rishabh Pant', role: 'Wicketkeeper' },
        { name: 'Rohit Sharma', role: 'Batsman' },
        { name: 'Mohammed Shami', role: 'Bowler' },
        { name: 'Hardik Pandya', role: 'All-rounder' },
        { name: 'Kuldeep Yadav', role: 'Bowler' },
        { name: 'Shubman Gill', role: 'Batsman' },
        { name: 'KL Rahul', role: 'All-rounder' },
        { name: 'Yuzvendra Chahal', role: 'Bowler' }
      ]
      
  };


  return (
    <div className='bg-gray-900 text-white p-6 mt-[4rem] rounded-[28px] shadow-md max-w-4xl mx-auto'>
      <div className='flex flex-col p-6 items-center gap-4'>
        <h1 className='font-semibold text-4xl mb-8'>Team Information</h1>
        <div className='flex flex-col items-center gap-6 w-full'>
          {/* Team Logo */}
          <img
            src={teamData.logo || 'https://via.placeholder.com/150'}
            alt='team-logo'
            className='w-28 h-28 rounded-full object-cover'
          />
          <h1 className='font-semibold text-2xl mb-4'>Team Logo</h1>

          {/* Team Name */}
          <div className='w-full'>
            <input
              type='text'
              name='teamName'
              value={teamData?.teamName || ''}
              placeholder='Team Name'
              className='border border-gray-300 w-full rounded-md p-4 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring hover: cursor-not-allowed focus:ring-green-500 outline-none transition duration-300'
              disabled
              required
            />
          </div>

          {/* Team Captain */}
          <div className='w-full'>
            <input
              type='text'
              name='teamCaptain'
              value={teamData?.captain || ''}
              placeholder='Team Captain'
              className='border border-gray-300 w-full rounded-md p-4 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring hover: cursor-not-allowed focus:ring-green-500 outline-none transition duration-300'
              disabled
              required
            />
          </div>

          {/* Preferred Format */}
          <div className='w-full'>
            <input
              type='text'
              name='preferredFormat'
              value={teamData?.preferredFormat || ''}
              placeholder='Preferred Format'
              className='border border-gray-300 w-full rounded-md p-4 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring hover: cursor-not-allowed focus:ring-green-500 outline-none transition duration-300'
              disabled
              required
            />
          </div>

          {/* Players List */}
          <div className='w-full flex flex-col gap-2'>
    <h1 className='font-semibold text-2xl mb-4'>Players Name and Role:</h1>
    <div className='bg-gray-800 rounded-md p-4 shadow-md'>
        {teamData.players.map((player, index) => (
            <div key={index} className='flex justify-between items-center border-b border-gray-700 py-2'>
                <span className='text-lg font-medium text-white'>{player.name}</span>
                <span className='text-md text-gray-400'>{player.role}</span>
            </div>
        ))}
    </div>
</div>


          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 255, 0, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-8 rounded-full font-medium hover:shadow-lg hover:bg-green-700 transition-all duration-300 w-full flex items-center justify-center mt-4'
          >
            Save Changes
          </motion.button>
        </div>
      </div>
    </div>
  );
}
