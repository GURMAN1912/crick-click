import React from "react";
import { useNavigate } from "react-router-dom";

const LiveScoreCard = ({ op1, op2, score1, score2, status, format, venue }) => {
  // Function to determine the result message based on status
  const getResultMessage = () => {
    if (status === "Live") {
      return <p>{op1} chose to bat.</p>;
    } else if (status === "Upcoming") {
      return <p>Toss not completed.</p>;
    } else {
      return <p>{op2} won by 25 runs.</p>;
    }
  };
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/match/id?=1");
      }}
      className="bg-white rounded-[28px] lg:w-[400px] max-h-[200px]"
    >
      <div className="headings flex p-6">
        <p className="font-semibold">{status} &nbsp;•&nbsp;</p>
        <p className="font-thin">1st {format}&nbsp;•&nbsp;</p>
        <p className="font-extralight">{venue}</p>
      </div>
      <div className="text-xl teams-scores flex justify-between mx-10">
        <div>
          <p className="font-bold capitalize truncate">{op1}*</p>
          <p className="font-bold text-gray-500">{op2}</p>
        </div>
        <div>
          <p className="font-bold">{score1}</p>
          <p className="font-bold text-gray-500">{score2}</p>
        </div>
      </div>
      <div className="results text-xl font-bold text-gray-700 flex justify-between mx-8 mt-6 pb-5">
        {getResultMessage()}
      </div>
    </div>
  );
};

export default LiveScoreCard;
