import React from 'react'

export default function StageTwo({formData, handleChange, errors}) {
  return (
    <div className=' flex flex-col gap-3'>
        
              <div className="flex flex-col">
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="TeamName"
                  />
                  {errors.teamName && <span className="text-red-500">{errors.teamName}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="captain name"
                  />
                  {errors.captainName && <span className="text-red-500">{errors.captionName}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="number"
                    name="playersCount"
                    value={formData.palyersCount}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="No of players"
                  />
                  {errors.palyersCount && <span className="text-red-500">{errors.palyersCount}</span>}
                </div>
                <div className="flex flex-col">
                <label htmlFor="Perferred Format" className="text-white mb-2 font-semibold">Perferred Format:</label>
                <select
                  name="perferredFormat"
                  value={formData.perferredFormat}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-400 focus:ring focus:ring-green-400 outline-none transition duration-300  hover:bg-opacity-80 hover:bg-black"
                  id="perferredFormat"
                >
                  <option value="T20">T20</option>
                  <option value="ODI">ODI</option>
                  <option value="Test">Test</option>
                </select>
              </div>
      
    </div>
  )
}
