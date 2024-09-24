import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import StageOne from '../components/form/StageOne';
import StageTwo from '../components/form/StageTwo';
import StageThree from '../components/form/StageThree';
import StageFour from '../components/form/StageFour';
import { Link, useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion';
export default function SignUpPage({setUser}) {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({
    registerAs: 'user',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    players: [],
    teamName: '',
    captainName: '',
    playersCount: '',
    perferredFormat: '',

  });
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: name === "playersCount" ? Number(value) : value // Convert playersCount to a number
    });
  };


  const validateForm = () => {
    let formErrors = {};
    if (currentStage === 0) {
      if (!formData.firstName) formErrors.firstName = 'First name is required';
      if (!formData.lastName) formErrors.lastName = 'Last name is required';
      if (!formData.email) formErrors.email = 'Email is required';
      if (!formData.password) formErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword)
        formErrors.confirmPassword = 'Passwords do not match';
    }
    if (currentStage === 1) {
      if(!formData.teamName) formErrors.teamName = 'Team name is required';
      if(!formData.captainName) formErrors.captainName = 'Captain name is required';
      if(formData.playersCount<11) formErrors.playersCount = '11 Players  is required'; 
    }
    if(currentStage === 2) {
      if(formData.players.length < formData.playersCount) formErrors.players = 'Minimum 11 players are required';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Proceed to the next stage
  const handleNext = (e) => {
    console.log(currentStage);
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      console.log('errors:', errors); 
      setCurrentStage((prevStage) => prevStage + 1);
    }
  };

  // Go back to the previous stage
  const handlePrevious = (e) => {
    e.preventDefault();
    setCurrentStage((prevStage) => prevStage - 1);
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      const { confirmPassword, ...data } = formData;
      setUser(data)
        navigate('/');
        // Redirects after 2 seconds
      console.log('Form submitted successfully:', formData);

      // try{
      //   const response = await fetch('https://api.example.com/register', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //   });
      //   const result = await response.json();
      //   if(response.ok) {
      //     console.log('Server response:', result);
      //     alert('Form submitted successfully');
      //   } else {
      //     console.error('Server error:', result);
      //     alert('An error occurred. Please try again later');
      //   }
      // }
      // catch(error){
      //   console.error('Server error:', error);
      //   alert('An error occurred. Please try again later');
      // }   

    }

  };

  const progressPercentage = ((currentStage) / 4) * 100; // Adjust to total stages

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center p-6">
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
       className="bg-white bg-opacity-10 backdrop-blur-md p-8 shadow-lg max-w-2xl w-full rounded-[28px] overflow-hidden">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Create Your CrickClick Account
        </h1>
        <div className="h-2 bg-gray-300 rounded-full mb-4">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <form onSubmit={formData.registerAs==="user" ? handleSubmit : currentStage===3 ?handleSubmit :handleNext} className="space-y-4">
          {currentStage === 0 && <StageOne formData={formData} handleChange={handleChange} errors={errors} />}
          {currentStage === 1 && <StageTwo formData={formData} handleChange={handleChange} errors={errors} />}
          {currentStage === 2 && (
            <StageThree
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
          )}
          {currentStage === 3 && (
            <StageFour formData={formData} handleChange={handleChange} errors={errors} />
          )}
          {
            errors.players && <span className="text-red-500">{errors.players}</span>
          }
          <div className="flex justify-between">
            {currentStage > 0 && (
              <button
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-full font-medium flex items-center"
                onClick={handlePrevious}
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
            )}
            {formData.registerAs === "team" ? (
              <button
                className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium flex items-center justify-end"
                type="submit"
              >
                {currentStage === 3 ? 'Submit and Pay' : 'Next'} <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <motion.button  
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full justify-end font-medium"
                type="submit"
              >
                Create Account
              </motion.button>
            )}
          </div>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account? <Link to="/sign-in" className="text-green-500 hover:underline">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
