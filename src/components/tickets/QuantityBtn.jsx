import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import React, { useState } from 'react'

const QuantityBtn = ({setTotal, total, price}) => {

    const [quantity, setQuantity] = useState(0);

    const OnMinusClick = () =>{
        setQuantity(quantity - 1);
        setTotal(total - price);
    }

    const OnPlusClick = () =>{
        setQuantity(quantity + 1);
        setTotal(total + price);
    }

  return (
    <div className=' pr-2'>
        {!quantity? <button onClick={OnPlusClick} 
        className='bg-gradient-to-r from-green-700 to-green-800  text-white  text-center px-4 rounded-md h-8 w-24'><b>ADD</b></button> : 
        <div className='flex bg-gradient-to-r from-green-700 to-green-800 text-white rounded-lg text-center justify-center items-center w-24 h-8 px-2 gap-4'>
            <FaMinus onClick={OnMinusClick}/>
            <b>{quantity}</b>
            <FaPlus onClick={OnPlusClick}/>
        </div>}
    </div>
  )
}

export default QuantityBtn