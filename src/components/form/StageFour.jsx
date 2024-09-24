import React from 'react'

export default function StageFour( {formData ,handleChange, errors} ) {
    console.log(formData)
  return (
    <div className='grid md:grid-cols-3 grid-col-1 gap-3' >
        <div className='flex flex-col  gap-2'>

        <div className="flex flex-col">
        <label htmlFor="firstname" className="text-white mb-2 font-semibold">First name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="First name"
                    />
                  {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col">
                <label htmlFor="lastname" className="text-white mb-2 font-semibold">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Last name"
                    />
                  {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                </div>
        <div className="flex flex-col">
        <label htmlFor="Email" className="text-white mb-2 font-semibold">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Email"
                    />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                    </div>
                    <div className=' flex flex-col gap-3'>
        
              <div className="flex flex-col">
              <label htmlFor="team name" className="text-white mb-2 font-semibold">Team Name:</label>
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
                <label htmlFor="Captain name" className="text-white mb-2 font-semibold">Captain Name:</label>
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
                <label htmlFor="no of Players" className="text-white mb-2 font-semibold">No of Players:</label>
                  <input
                    type="number"
                    name="palyersCount"
                    value={formData.playersCount}
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
    <div className='flex flex-col gap-2 px-2'>
      <h2 className="text-xl text-white font-semibold">Players List</h2>
    {formData.players.length > 0 && (
        <div className="">
          <ul className="list-disc pl-5 text-white">
            {formData.players.map((player, index) => (
              <li key={index}>{`${player.name} - ${player.role}`}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
      
    </div>
  )
}
