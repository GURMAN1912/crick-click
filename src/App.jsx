import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import bg from "./assets/bg.png";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SchedulePage from "./pages/SchedulePage";
import NewsPage from "./pages/NewsPage";
import TicketsPage from "./pages/TicketsPage";
import Footer from "./components/footer/Footer";
import PrivateRoute from "./components/PrivateRoute";
import DashBoard from "./pages/DashBoard";
import NewsDetails from "./pages/NewsDetails";
import MatchDetails from "./pages/MatchDetails";
import ProfilePage from "./pages/ProfilePage";

const bgStyles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: "0.3",
};

function App() {
  const [user, setUser] = useState(null);

  // Use useEffect to set the user from local storage on mount
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="absolute inset-0 -z-10 bg-black" style={bgStyles} />
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUpPage setUser={setUser} />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/match/:id" element={<MatchDetails />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
