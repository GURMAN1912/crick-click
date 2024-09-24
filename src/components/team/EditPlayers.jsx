import React, { useState } from 'react';

const initialPlayers = [
  { name: 'Virat Kohli', role: 'Batsman' },
  { name: 'Jasprit Bumrah', role: 'Bowler' },
  { name: 'Hardik Pandya', role: 'All-rounder' },
  { name: 'Rohit Sharma', role: 'Batsman' },
  { name: 'MS Dhoni', role: 'Wicketkeeper' },
  { name: 'Ravindra Jadeja', role: 'All-rounder' },
  { name: 'KL Rahul', role: 'Batsman' },
  { name: 'Shikhar Dhawan', role: 'Batsman' },
  { name: 'Bhuvneshwar Kumar', role: 'Bowler' },
  { name: 'Yuzvendra Chahal', role: 'Bowler' },
  { name: 'Rishabh Pant', role: 'Wicketkeeper' },
];

const roles = ['Batsman', 'Bowler', 'All-rounder', 'Wicketkeeper'];

export default function EditPlayers() {
  const [players, setPlayers] = useState(initialPlayers);

  const handleChange = (index, field, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index][field] = value;
    setPlayers(updatedPlayers);
  };

  return (
    <div className='bg-gray-900 text-white p-6 rounded-lg mt-[4rem] shadow-md'>
      <h1 className='font-semibold text-2xl mb-4'>Edit Players</h1>
      <div className='flex flex-col gap-4'>
        {players.map((player, index) => (
          <div key={index} className='flex gap-4 items-center'>
            <span className='text-xl'>{index + 1}.</span>
            <input
              type='text'
              value={player.name}
              placeholder='Player Name'
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              className='border border-gray-300 w-full rounded-md p-4 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300'
              required
            />
            <select
              value={player.role}
              onChange={(e) => handleChange(index, 'role', e.target.value)}
              className='border border-gray-300 w-full rounded-md p-4 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300 hover:bg-black '    
              required
            >
              {roles.map((role, idx) => (
                <option key={idx} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button
        className='mt-4 bg-gradient-to-r from-green-800 to-green-900 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300'
        onClick={() => alert('Changes saved!')}
      >
        Save Changes
      </button>
    </div>
  );
}
