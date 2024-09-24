import React, { useState, useEffect } from "react";

const AddANews = () => {
  // State to hold form data for news
  const [formData, setFormData] = useState({
    headline: "",
    author: "",
    description: "",
    image: null, // For file upload
    date: "",
  });

  // State for today's date
  const [minDate, setMinDate] = useState("");

  // Set today's date in the correct format (YYYY-MM-DD) when the component mounts
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format to YYYY-MM-DD
    setMinDate(formattedDate);
  }, []);

  // Function to handle form field changes
  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      // Handling file input for image
      setFormData((prevState) => ({
        ...prevState,
        [id]: files[0], // Store the first file selected
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // If you plan to send data to the backend, you can use FormData
    const newsData = new FormData();
    newsData.append("headline", formData.headline);
    newsData.append("author", formData.author);
    newsData.append("description", formData.description);
    newsData.append("image", formData.image); // Appending the uploaded file
    newsData.append("date", formData.date);

    // Log or send to backend
    console.log("Submitted Data", formData);

    // Example: sending the formData to an API (you can replace the URL)
    // fetch('/api/news', {
    //   method: 'POST',
    //   body: newsData,
    // }).then(response => console.log(response));
  };

  return (
    <div className="rounded-[28px] bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="title mb-6 text-center !text-yellow-300">Add a News</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Headline Input */}
          <input
            type="text"
            id="headline"
            value={formData.headline}
            onChange={handleChange}
            placeholder="Enter Headline"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Author Input */}
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter Author Name"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          {/* Description Input */}
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter News Description"
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            rows="4"
            required
          />

          {/* Image File Input */}
          <input
            type="file"
            id="image"
            accept="image/*" // Only accept image file types
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

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

          {/* Submit Button */}
          <button
            type="submit"
            className="p-3 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Add News
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddANews;
