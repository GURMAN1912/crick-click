import React from "react";

const ScheduleCard = ({ team1, team2, matchType, stadium, date, league }) => {
  return (
    <div className=" border-[1px] p-4 rounded-[28px] items-center flex text-gray-300 justify-between gap-10 flex-wrap">
      {/* Date Section */}
      <div className="date min-w-[150px]">
        <p className="font-bold text-xl whitespace-nowrap">{date}</p>
      </div>

      {/* Teams and Match Info */}
      <div className="flex-grow max-w-[400px]">
        <h1 className="font-bold text-2xl text-yellow-300 truncate">
          {team1} vs {team2}
        </h1>
        <p className="font-extralight whitespace-nowrap truncate">
          {matchType} at {stadium}
        </p>
      </div>

      {/* League Section */}
      <div className="font-bold text-xl truncate whitespace-nowrap">
        {league}
      </div>
    </div>
  );
};

export default ScheduleCard;
