import React from 'react'
import QuantityBtn from './QuantityBtn'

const TicketCard = ({seatType, price, setTotal, total}) => {
  return (
    <div className='bg-white border-gray-600 m-3 rounded-[14px] h-[100px] w-[400px]'>
        <h2 className='py-2 px-6 text-xl'><b>{seatType}</b></h2>
        {seatType==="Regular" || seatType==="Premium" ?<div className='w-24 text-center pl-1'><p 
        className='text-xs bg-yellow-200 rounded-full'>Expiring Soon</p></div>:<></>}
        <div className='flex justify-between'>
            <h2 className='py-2 px-6 text-xl'>₹{price}</h2>
            <QuantityBtn  setTotal={setTotal} price={price} total={total}/>
        </div>
    </div>
  )
}

export default TicketCard