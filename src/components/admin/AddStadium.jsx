import React, { useState } from 'react'
import upload_area from "../../assets/upload_area.png"

const AddStadium = () => {

    const [image, setImage] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };

  return (
    <div className='bg-gray-900 md:p-9 rounded-[28px] grid place-items-center shadow-lg'>
        <div className='bg-gray-800 text-white md:p-8 rounded-lg shadow-lg w-full max-w-md'>
        <div className='title mb-6 text-center !text-yellow-300'>
            <p>Add Stadium :</p>
        </div >
        <form action="" className='grid place-items-center'>
            <div className="max-w-[200px] max-h-[200px]">
                    <p className='p-2 text-xl text-center'>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div >
            <div className=' py-4'>
                <div className='py-2'><input type="text" className='p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-96' placeholder='Enter Stadium Name' required/></div>
                <div className='py-2'><input type="text" className='p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-96' placeholder='Enter Stadium Address'  required/></div>
                <div className='py-2'><input type="text" className='p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-96' placeholder='Add Stadium Capacity'  required/></div>
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-2'>
                    <p>Does Stadium have FloodLights?</p>
                    <div>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                        />
                        Yes
                    </div>

                    <div>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                        />  
                        No
                    </div>
                </div>
                <div className='py-2'><input type="text" className='p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-96' placeholder='Enter Stadium Manager Name' required/></div>
                <div className='py-2'><input type="text" className='p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-96' placeholder='Enter Stadium Manager Phone No.' required/></div>
                <div className='py-2'><button className='p-3 bg-yellow-300 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300 h-12 w-96 '>Add Stadium</button> </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default AddStadium