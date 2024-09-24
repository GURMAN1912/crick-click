import { p } from 'framer-motion/client';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SignInPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const data={
    userData:{
      email:"user@gmail.com",
      password:"user"
    },
    adminData:{
      email:"admin@gmail.com",
      password:"admin"
  },
  teamData:{
    email:"team@gmail.com",
    password:"team",
  }
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const validateForm = () => {
    const formErrors = {};
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let userRole = null;

      if (email === data.userData.email && password === data.userData.password) {
        userRole = data.userData;
      } else if (email === data.adminData.email && password === data.adminData.password) {
        userRole = data.adminData;
      } else if (email === data.teamData.email && password === data.teamData.password) {
        userRole = data.teamData;
      }

      if (userRole) {
        localStorage.setItem('currentUser', JSON.stringify(userRole)); // Store the user role and data
        console.log('User logged in:', userRole);
        navigate('/'); // Redirect to home
    window.location.reload();

      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
       className= "sign-in-container bg-white bg-opacity-10 backdrop-blur-md p-8 shadow-lg max-w-2xl w-full rounded-[28px] overflow-hidden">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Sign In to CrickClick Account </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
             className="border border-gray-300 w-full rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              className="border border-gray-300 w-full rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
              required
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
          </div>
          <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg hover:bg-green-700 transition-all duration-300 w-full flex items-center justify-center"
          >
            Sign In <FaArrowRight className="ml-2" />
          </motion.button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account? <Link to="/sign-up" className="text-green-500 hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
