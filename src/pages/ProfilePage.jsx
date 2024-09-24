import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/dasboard/DashSidebar';
import UserProfile from '../components/user/UserProfile';
import MyTickets from '../components/user/MyTicket';
import TeamProfile from '../components/team/TeamProfile';
import EditPlayers from '../components/team/EditPlayers';
import TeamMatches from '../components/team/TeamMatches';

export default function ProfilePage() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);

    const location = useLocation();
  const [tab, setTab] = useState(() => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('tab') || 'profile'; // Default to 'profile'
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get('tab');
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  return (
    <div className='bg-black min-h-screen mx-auto'>
      <div className='flex flex-col md:flex-row min-h-screen '>
        <DashSidebar />
        <div className='w-full min-h-screen md:w-2/3 mx-auto p-4'>
          {tab === 'profile' && user.email==="user@gmail.com" && <UserProfile/>}
          {tab === 'profile' && user.email==="team@gmail.com" && <TeamProfile/>}
          {tab === 'editPlayers' && user.email==="team@gmail.com" && <EditPlayers/>}
          {tab === 'teamMatches' && user.email==="team@gmail.com" && <TeamMatches/>}
          {tab === 'myTickets' && <MyTickets/>}
          {/* Add more tabs as needed */}
        </div>
      </div>
    </div>
  )
}
