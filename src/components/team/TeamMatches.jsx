import React from 'react'
import YourTeamCard from '../yourTeam/YourTeamCard'
import YourTournamentCard from '../yourTeam/YourTournamentCard'
import { motion } from "framer-motion"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  
export default function TeamMatches() {


  return (
    <div  className='bg-gray-900 flex flex-col md:flex-row gap-5 text-white p-6 rounded-lg mt-[4rem] shadow-md'>
        <div className='grid flex-grow p-2'>
            <h2 className='text-center text-4xl font-bold'>Upcoming Matches</h2>
            <motion.div
                className='p-2 py-4'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                <motion.div variants={cardVariants}>   
                    <YourTeamCard 
                        match={"Delhi VS Pune"}
                        venue={"Delhi"}
                        when={"20 October 2024"}
                        stadium={"Arun Jaitley Stadium"}/>
                </motion.div> 
                <motion.div variants={cardVariants}>  
                    <YourTeamCard
                        match={"Mumbai VS Rajasthan"}
                        venue={"Mumbai"}
                        when={"5 October 2024"}
                        stadium={"Wankhede Stadium"}/>
                </motion.div> 
                <motion.div variants={cardVariants}>  
                    <YourTeamCard
                        match={"Punjab VS Lucknow"}
                        venue={"Lucknow"}
                        when={"29 September 2024"}
                        stadium={"Ekana Cricket Stadium"}/>
                </motion.div>

            </motion.div>
      </div>
      <div className='flex-grow p-2'>
            <p className='text-center text-4xl font-bold'>Upcoming Tournaments</p>
            <motion.div
                className='p-2 py-4'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                >
                <motion.div variants={cardVariants}>   
                    <YourTournamentCard
                        tournament={"UP Premier League"}
                        participant={"12"}
                        duration={"4 Nov 2024 - 24 Nov 2024"}
                        venue={"Lucknow, Kanpur"}/>
                </motion.div> 
                <motion.div variants={cardVariants}> 
                    <YourTournamentCard
                        tournament={"Rajasthan Premier League"}
                        participant={"8"}
                        duration={"12 Nov 2024 - 18 Nov 2024"}
                        venue={"Jaipur"}/>
                </motion.div> 
            </motion.div>
      </div>
    </div>
  )
}
