
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/dasboard/DashSidebar";
import AddAMatch from "../components/dasboard/Match/AddAMatch";
import AddANews from "../components/dasboard/News/AddANews";
import AddATournament from "../components/dasboard/tournament/AddATournament";
import AddStadium from '../components/admin/AddStadium';

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState(() => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get("tab") || "profile"; // Default to 'profile'
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const profilePage = (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg"></div>
  );

  const matchPage = (
    <div className="rounded-[28px] flex items-center justify-center h-full bg-gray-900  shadow-lg">
      <AddAMatch />
    </div>
  );
  const newsPage = (
    <div className="rounded-[28px] flex items-center justify-center h-full bg-gray-900  shadow-lg">
      <AddANews />
    </div>
  );

  const stadiumPage = (
    <div className="">
        <AddStadium/>
    </div>
  );

  const tournamentPage = (
    <div className="rounded-[28px] flex p-6 items-center justify-center h-full bg-gray-900  shadow-lg">
      <AddATournament />
    </div>
  );
  return (

    <div className="bg-black min-h-screen mx-auto">
      <div className="flex flex-col md:flex-row min-h-screen">
        <DashSidebar />
        <div className="w-full md:w-2/3 mx-auto p-4">
          {tab === "profile" && profilePage}
          {tab === "matches" && matchPage}
          {tab === "news" && newsPage}
          {tab === "tournament" && tournamentPage}
          {tab === 'addStadium' && stadiumPage}
          {/* Add more tabs as needed */}
        </div>
      </div>
    </div>
  );
}
