import React from 'react';
import { FaDownload } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function MyTickets() {
  const tickets = [
    {
        id: 1,
        event: 'IPL Final 2024',
        date: 'April 28, 2024',
        venue: 'Wankhede Stadium, Mumbai',
        seat: 'Section A, Row 5, Seat 12',
        price: '₹5000',
      },
      {
        id: 2,
        event: 'Champions Trophy 2024',
        date: 'July 12, 2024',
        venue: 'Feroz Shah Kotla, Delhi',
        seat: 'Section C, Row 7, Seat 30',
        price: '₹4500',
      },
      {
        id: 4,
        event: 'World Cup 2024 Semi-Final',
        date: 'October 20, 2024',
        venue: 'Eden Gardens, Kolkata',
        seat: 'Section B, Row 10, Seat 25',
        price: '₹6000',
      },
      {
        id: 4,
        event: 'World Cup 2024 Semi-Final',
        date: 'October 20, 2024',
        venue: 'Eden Gardens, Kolkata',
        seat: 'Section B, Row 10, Seat 25',
        price: '₹6000',
      },
         
      
      
  ];

  return (
    <div className='bg-gray-900 text-white p-6 rounded-lg mt-[4rem] shadow-md'>
      <h1 className='font-semibold text-3xl mb-6'>My Tickets</h1>

      {tickets.length > 0 ? (
        <div className='flex flex-col gap-6'>
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className='bg-gray-800 p-4 rounded-lg shadow-lg flex justify-between items-center'
            >
              <div>
                <h2 className='text-xl font-semibold'>{ticket.event}</h2>
                <p className='text-gray-400'>{ticket.date}</p>
                <p className='text-gray-400'>{ticket.venue}</p>
                <p className='text-sm text-gray-400'>{ticket.seat}</p>
              </div>
              <div className='text-right flex flex-col gap-2'>
                <p className='text-lg font-bold text-yellow-400'>{ticket.price}</p>
                <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className="bg-gradient-to-r from-green-800 to-green-900 text-white py-3 px-6 rounded-full font-medium hover:shadow-lg hover:bg-green-700 transition-all duration-300 w-full flex items-center justify-center gap-2"
          >
            <FaDownload/> Download
          </motion.button>
                
              </div>
            </div>
          ))}
          
        </div>
      ) : (
        <p className='text-gray-400'>You don't have any tickets yet.</p>
      )}
    </div>
  );
}
