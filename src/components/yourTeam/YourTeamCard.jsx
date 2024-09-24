import React from 'react'
import { MdSportsCricket } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdStadium } from "react-icons/md";
import { MdPlace } from "react-icons/md";

const YourTeamCard = ({match, venue, when, stadium}) => {
  return (
    <div className='grid py-2 bg-gray-800 text-white rounded-lg m-3'>
        <div className='flex pl-3 gap-2 text-2xl font-semibold'><MdSportsCricket size={23}/>{match}</div>
        <div className='flex pl-3 gap-2'><MdDateRange size={20}/>{when}</div>
        <div className='flex pl-3 gap-2'><MdStadium size={20}/>{stadium}</div>
        <div className='flex pl-3 gap-2'><MdPlace size={20}/>{venue}</div>
    </div>
  )
}

export default YourTeamCard