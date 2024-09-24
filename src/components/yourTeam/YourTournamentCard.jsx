import React from 'react'
import { MdPlace } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdTour } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

const YourTournamentCard = ({tournament, participant, duration, venue}) => {
  return (
    <div className='grid  bg-gray-800 text-white rounded-lg m-3'>
        <div className='flex pl-3 py-1 gap-2 text-2xl font-semibold'><MdTour size={25}/>{tournament}</div>
        <div className='flex pl-3 gap-2'><IoIosPeople size={23}/><p>Number of Teams: {participant}</p></div>
        <div className='flex pl-3 gap-2'><MdDateRange size={23}/>{duration}</div>
        <div className='flex pl-3 gap-2'><MdPlace size={23}/>{venue}</div>
        <div className='flex justify-end m-2'><button className='bg-green-700 h-8 w-32 rounded-md text-white text-lg tr hover:bg-green-600 active:bg-green-800  '>Participate</button></div>
    </div>
  )
}

export default YourTournamentCard