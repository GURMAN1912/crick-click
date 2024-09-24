import React, { useState } from 'react';

export default function StageThree({ formData, setFormData, errors }) {
  const [playerDetails, setPlayerDetails] = useState({ name: '', role: '' });

  // Handle input changes for player details
  const handlePlayerChange = (e) => {
    setPlayerDetails({ ...playerDetails, [e.target.name]: e.target.value });
  };

  // Add player to formData
  const handleAddPlayer = () => {
    if (playerDetails.name && playerDetails.role) {
      setFormData({
        ...formData,
        players: [...formData.players, playerDetails],
      });
      setPlayerDetails({ name: '', role: '' }); // Reset player details after adding
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl text-white font-semibold">Player Details</h1>

      {/* Player Name Input */}
      <div className="flex flex-col">
        <label htmlFor="playersName" className="text-white mb-2 font-semibold">
          Player Name:
        </label>
        <input
          type="text"
          name="name"
          value={playerDetails.name}
          onChange={handlePlayerChange}
          className={`border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300 ${
            errors.playersName ? 'border-red-500' : ''
          }`}
          placeholder="Enter player name"
        />
        {errors.playersName && (
          <span className="text-red-500">{errors.playersName}</span>
        )}
      </div>

      {/* Player Role Input */}
      <div className="flex flex-col">
        <label htmlFor="role" className="text-white mb-2 font-semibold">Role:</label>
        <select
          name="role"
          value={playerDetails.role}
          onChange={handlePlayerChange}
          className={`border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-400 focus:ring focus:ring-green-400 outline-none transition duration-300  hover:bg-opacity-80 hover:bg-black ${
            errors.role ? 'border-red-500' : ''
          }`}
          id="role"
        >
          <option value="">Select Role</option>
          <option value="batsman">Batsman</option>
          <option value="bowler">Bowler</option>
          <option value="allRounder">All Rounder</option>
          <option value="wicketKeeper">Wicket Keeper</option>
        </select>
        {/* {errors.players && <span className="text-red-500">{errors.players}</span>}X */}
      </div>
      

      {/* Add Player Button */}
      <button
        onClick={handleAddPlayer}
        className="bg-green-500 text-white mt-2 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add Player
      </button>

      {/* Display Players List */}
      {formData.players.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl text-white font-semibold">Players List</h2>
          <ul className="list-disc pl-5 text-white">
            {formData.players.map((player, index) => (
              <li key={index}>{`${player.name} - ${player.role}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
