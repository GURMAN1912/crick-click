import React from "react";
import { motion } from "framer-motion";

const Match = () => {
  const batters = [
    "Rohit Sharma",
    "KL Rahul",
    "Virat Kohli",
    "Suryakumar Yadav",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Mohammed Shami",
    "Jasprit Bumrah",
    "Mohammed Siraj",
    "Yuzvendra Chahal",
  ];
  const runs = [3, 23, 54, 48, 0, 0, 0, 0, 0, 0, 0];
  const balls = [6, 26, 33, 25, 0, 0, 0, 0, 0, 0, 0];
  const bowlers = ["Malinga", "Johnson", "Starc", "Cummins", "Rabada"];
  const overs = [4, 4, 4, 2.3, 1];
  const bowler_runs = [44, 25, 25, 20, 14];
  const wkts = [1, 0, 0, 1, 0];
  const economy = [11, 6.25, 6.25, 8.6, 14];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black flex justify-center items-center h-full mt-[70px]"
    >
      <div className="mt-10 flex flex-col mb-10 bg-[#1b1b1b] rounded-[28px] shadow-lg p-8">
        <div className="title text-2xl font-bold text-yellow-300 p-4 text-center">
          Lucknow Vs Kanpur
        </div>

        <div className="scores flex justify-between mx-10 text-white border-b border-gray-700 pb-4 mb-4">
          <div>
            <p className="font-bold">Lucknow</p>
            <p className="font-bold">Kanpur</p>
          </div>
          <div>
            <p className="text-xl font-bold">128/2 (15.3) </p>
            <p className="text-xl font-thin">Yet to bat</p>
          </div>
        </div>

        <div className="scorecard flex justify-between mx-10 text-gray-300">
          <div className="w-1/3">
            <h1 className="text-lg font-semibold mb-2">Batters</h1>
            {batters.map((batter, index) => (
              <p className="border-b border-gray-700 truncate py-1" key={index}>
                {batter}
              </p>
            ))}
          </div>
          <div className="flex w-2/3 justify-between">
            <div className="runs text-center">
              <h1 className="text-lg font-semibold mb-2">Runs</h1>
              {runs.map((run, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {run}
                </p>
              ))}
            </div>
            <div className="balls text-center">
              <h1 className="text-lg font-semibold mb-2">Balls</h1>
              {balls.map((ball, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {ball}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="text-gray-200 flex mx-10 justify-between mt-10">
          <div className="bowlers w-1/4">
            <h1 className="text-lg font-semibold mb-2">Bowlers</h1>
            {bowlers.map((bowler, index) => (
              <p className="border-b border-gray-700 py-1" key={index}>
                {bowler}
              </p>
            ))}
          </div>
          <div className="flex w-3/4 justify-between">
            <div className="overs text-center">
              <h1 className="text-lg font-semibold mb-2">Overs</h1>
              {overs.map((over, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {over}
                </p>
              ))}
            </div>
            <div className="bowler-runs text-center">
              <h1 className="text-lg font-semibold mb-2">Runs</h1>
              {bowler_runs.map((run, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {run}
                </p>
              ))}
            </div>
            <div className="wkts text-center">
              <h1 className="text-lg font-semibold mb-2">Wickets</h1>
              {wkts.map((wkt, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {wkt}
                </p>
              ))}
            </div>
            <div className="economy text-center">
              <h1 className="text-lg font-semibold mb-2">Economy</h1>
              {economy.map((eco, index) => (
                <p className="border-b border-gray-700 py-1" key={index}>
                  {eco}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Match;
