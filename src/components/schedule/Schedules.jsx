import React from "react";
import ScheduleCard from "./ScheduleCard";
import { motion } from "framer-motion";
const Schedules = () => {
  // Array of match schedules
  const scheduleDetails = [
    {
      team1: "Lucknow",
      team2: "Kanpur",
      matchType: "2nd Match",
      stadium: "Green Garden, Kanpur",
      date: "Mon, 23 Sep 2024",
      league: "UP Premier League",
    },
    {
      team1: "Delhi",
      team2: "Mumbai",
      matchType: "3rd Match",
      stadium: "Feroz Shah Kotla, Delhi",
      date: "Wed, 25 Sep 2024",
      league: "Indian Premier League",
    },
    {
      team1: "Chennai",
      team2: "Bangalore",
      matchType: "4th Match",
      stadium: "MA Chidambaram, Chennai",
      date: "Fri, 27 Sep 2024",
      league: "Tamil Nadu Premier League",
    },
    {
      team1: "Hyderabad",
      team2: "Kolkata",
      matchType: "5th Match",
      stadium: "Rajiv Gandhi Stadium, Hyderabad",
      date: "Sun, 29 Sep 2024",
      league: "Indian Premier League",
    },
    {
      team1: "Jaipur",
      team2: "Ahmedabad",
      matchType: "6th Match",
      stadium: "Sawai Mansingh Stadium, Jaipur",
      date: "Tue, 1 Oct 2024",
      league: "Rajasthan Premier League",
    },
    {
      team1: "Pune",
      team2: "Nagpur",
      matchType: "7th Match",
      stadium: "Maharashtra Cricket Association Stadium, Pune",
      date: "Thu, 3 Oct 2024",
      league: "Maharashtra Premier League",
    },
    {
      team1: "Chandigarh",
      team2: "Mohali",
      matchType: "8th Match",
      stadium: "Punjab Cricket Association Stadium, Mohali",
      date: "Sat, 5 Oct 2024",
      league: "Punjab Premier League",
    },
    // Add more matches as needed
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each card's appearance
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-black flex flex-col justify-center items-center h-full mt-[70px]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mt-10 mb-10 bg-[#1b1b1b] rounded-[28px]">
        <div className="title md:mx-10 sm:mx-10">Upcoming Matches:</div>
        <motion.div
          className="mt-10 flex flex-col md:px-10 py-10 gap-10"
          variants={containerVariants}
        >
          {scheduleDetails.map((match, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ScheduleCard
                team1={match.team1}
                team2={match.team2}
                matchType={match.matchType}
                stadium={match.stadium}
                date={match.date}
                league={match.league}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Schedules;
