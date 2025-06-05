import React from 'react'
import {assets} from '../../assets/assets'
const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
        <h1 className='text-xl md:text-4xl font-semibold text-gray-800'>Learn anything, anytime, anywhere</h1>
        <p className='sm:text-base text-gray-500'>
  <span className='text-blue-600 font-medium'>Join</span> thousands of learners upgrading their skills 
  <span className='text-gray-700 font-medium'> with</span> expert-led courses, <br />
  real-world projects, and <span className='text-yellow-600 font-semibold'>24/7</span> access — all at your fingertips.
</p>


        <div className='flex items-center mt-4 gap-4'>
          <button className='px-10 py-3 rounded-md bg-blue-600 text-white'>Get Started</button>
          <button className='flex items-center gap-2'>Learn More<img src={assets.arrow_icon}alt="arrow icon" /> </button>
        </div>
    </div>

  )
}

export default CallToAction