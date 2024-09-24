import React, { useState } from "react";
import logo from "../../assets/ball.png";
import { FaSearch, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/')[1];

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/'); // Redirect to home after signing out
    window.location.reload();
  };

  // Only render the navbar if the location is not "dashboard"
  if (location === 'dashboard') return null;
  console.log(user);

  return (
    <nav className="bg-[rgba(0,0,0,0.6)] z-10 fixed top-0 left-0 w-full text-white px-4 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl md:text-2xl font-bold">CrickClick</h1>
        </Link>

        <div className="hidden md:flex justify-center">
          <form className="relative w-64 text-black">
            <input
              type="text"
              className="w-full rounded-full border-gray-300 px-5 py-2 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="absolute text-white md:text-black inset-y-0 right-0 flex items-center px-3">
              <FaSearch />
            </div>
          </form>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/schedule" className="hover:underline">Schedule</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/tickets" className="hover:underline">Tickets</Link>
        </div>

        {user ? (
          <div className="hidden md:flex space-x-6 items-center">
            <Link to={user.password==="admin" ?"/dashboard":"/profile"} className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-2 px-6 rounded-full hover:bg-gradient-to-r flex items-center gap-2 hover:from-green-600 hover:to-green-700">
              <FaUser />
              {
                user.email==="admin@gmail.com" ? "Dashboard" : "Profile"
              }
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-2 px-6 rounded-full hover:bg-gradient-to-r flex items-center gap-2 hover:from-green-600 hover:to-green-700"
            >
              <FaSignOutAlt /> Sign Out
            </button>
          </div>
        ) : (
          <div className="hidden md:flex space-x-2 items-center">
            <Link to="/sign-in" className="bg-gradient-to-r from-green-800 to-green-900 font-thin py-2 px-6 rounded-full hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700">
              Sign In
            </Link>
            <Link to="/sign-up" className="bg-gradient-to-r from-green-800 to-green-900 py-2 px-6 rounded-full font-thin hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700">
              Sign Up
            </Link>
          </div>
        )}

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start mt-2 space-y-2 bg-black">
          <Link to="/schedule" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Schedule</Link>
          <Link to="/news" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">News</Link>
          <Link to="/tickets" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Tickets</Link>
          {user ? (
            <>
              <Link to={user.password==="admin" ?"/dashboard":"/profile"} className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Profile</Link>
              <button onClick={handleSignOut} className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Sign In</Link>
              <Link to="/sign-up" className="block py-2 pl-2 hover:bg-[rgba(255,255,255,0.1)] rounded">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
