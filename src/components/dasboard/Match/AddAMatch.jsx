import React, { useState, useEffect } from "react";

const AddAMatch = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    team1: "",
    team2: "",
    venue: "",
    date: "",
    time: "",
  });

  // State for today's date
  const [minDate, setMinDate] = useState("");

  // Arrays for teams and stadiums
  const teams = [
    "Lucknow",
    "Pune",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Rajasthan",
    "Punjab",
  ];
  const stadiums = [
    "Wankhede Stadium",
    "Eden Gardens",
    "M Chinnaswamy Stadium",
    "Arun Jaitley Stadium",
    "Narendra Modi Stadium",
    "M.A. Chidambaram Stadium",
    "Rajiv Gandhi International Cricket Stadium",
    "Sawai Mansingh Stadium",
    "Punjab Cricket Association Stadium",
    "Maharashtra Cricket Association Stadium",
  ];

  // Function to handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Set today's date in the correct format (YYYY-MM-DD) when the component mounts
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    setMinDate(formattedDate);
  }, []);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="rounded-[28px] bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="title mb-6 text-center !text-yellow-300">Add a Match</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          {/* Dropdown for Team 1 */}
          <select
            id="team1"
            value={formData.team1}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          >
            <option value="" disabled>
              Select Team 1
            </option>
            {teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>

          {/* Dropdown for Team 2, filtering out selected team1 */}
          <select
            id="team2"
            value={formData.team2}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          >
            <option value="" disabled>
              Select Team 2
            </option>
            {teams
              .filter((team) => team !== formData.team1) // Filter out selected team1
              .map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
          </select>

          {/* Dropdown for Venue */}
          <select
            id="venue"
            value={formData.venue}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          >
            <option value="" disabled>
              Select Venue
            </option>
            {stadiums.map((stadium, index) => (
              <option key={index} value={stadium}>
                {stadium}
              </option>
            ))}
          </select>

          {/* Date Input with min set to today's date */}
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate} // Disable dates before today
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Time Input */}
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Add Match
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAMatch;
