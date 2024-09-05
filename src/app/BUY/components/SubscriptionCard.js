import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { PiInfoThin } from "react-icons/pi";

const SubscriptionCard = () => {
  return (
    <div className="relative max-w-lg p-4">
      {/* Top-right label */}
      <div className="absolute top-10 right-0 translate-x-1/2 -translate-y-1/2 bg-[#4FBE9F] text-white text-xs flex items-center justify-center"
           style={{
             width: '60px',
             height: '30px',
             transform: 'rotate(45deg)',
             padding: '7px 10px',
             boxSizing: 'border-box',
           }}>
        <span>-50%</span>
      </div>

      <div className="bg-white py-10 px-2 rounded-lg shadow-lg p-4">
        <button className="bg-[#4FBE9F] text-white px-4 py-2 text-xs rounded-full">The most advantageous</button>
        <h1 className='text-[#292A34] text-lg md:text-xl mt-2'>
          Professional <span className='text-[#292A34] text-lg md:text-xl'>12 months</span>
        </h1>
        <p className='text-[#888888] text-xs md:text-sm mt-1'>only €14.95 per month</p>
        <div className='mt-4 space-y-2'>
          {[
            "Creating a presentation",
            "SMS notifications",
            "Last minute",
            "Promotions and discounts",
            "1 month TOP"
          ].map((item, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <FaCheck color='#292A34'/>
                <p className='text-[#292A34] text-xs md:text-sm'>{item}</p>
              </div>
              <PiInfoThin className='text-xs md:text-sm' />
            </div>
          ))}
        </div>
        <hr className='my-4'/>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-xs md:text-sm'>Together in <br/><span className='font-bold text-xs md:text-sm'>12 months</span></p>
          </div>
          <div className='text-right'>
            <span className='text-xs md:text-sm line-through text-red-500 mr-2'>
              358€
            </span>
            <br/>
            <span className='text-lg md:text-xl font-bold'>179€</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionCard