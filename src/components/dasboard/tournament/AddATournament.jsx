import React, { useState, useEffect } from "react";

const AddATournament = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    teams: 0,
    description: "",
    date: "",
    venue: "",
    organizer: "",
    contact: "",
    email: "",
    tournamentType: "",
  });

  const [minDate, setMinDate] = useState("");

  // Set minimum date to today's date
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    setMinDate(formattedDate);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle counter for number of teams
  const incrementTeams = () => {
    setFormData((prevData) => ({
      ...prevData,
      teams: prevData.teams + 1,
    }));
  };

  const decrementTeams = () => {
    setFormData((prevData) => ({
      ...prevData,
      teams: prevData.teams > 0 ? prevData.teams - 1 : 0,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle the form data here (e.g., submit to API)
  };

  return (
    <div className="rounded-[28px] bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="title mb-6 text-center !text-yellow-300">
          Add a Tournament
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Tournament Name"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          <div className="flex justify-center w-full items-center gap-4">
            <button
              type="button"
              onClick={decrementTeams}
              className="p-2 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              -
            </button>
            <span>{formData.teams} Teams</span>
            <button
              type="button"
              onClick={incrementTeams}
              className="p-2 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              +
            </button>
          </div>

          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Tournament Description"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            rows="4"
            required
          />

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
            {stadiums.map((stadium) => (
              <option key={stadium} value={stadium}>
                {stadium}
              </option>
            ))}
          </select>

          <select
            id="tournamentType"
            value={formData.tournamentType}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          >
            <option value="" disabled>
              Select Tournament Type
            </option>
            <option value="knockout">Knockout</option>
            <option value="league">League</option>
            <option value="round-robin">Round Robin</option>
          </select>

          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            min={minDate} // Disable dates before today
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          <button
            type="submit"
            className="p-3 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Add Tournament
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddATournament;
