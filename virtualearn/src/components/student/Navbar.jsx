import React from 'react'
import { Link } from 'react-router-dom'

// Importing assets from assets.js file
import { assets } from '../../assets/assets'

const Navbar = () => {

  const isCourseListPage = window.location.pathname.includes('/course-list');

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`} >
        <img src={assets.log} alt="Logo" className='w-28 lg:w-32 cursor-pointer'/>

        {/* Desktop view */}
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-5'>
            <button>Become Educator</button>
            | <Link to="/my-enrollments">My Enrollments</Link>
          </div>
          <button className='bg-blue-600 text-white py-2 px-5 rounded-full'>Create Account</button>
        </div>

        {/* Mobile view */}
        <div className='md:hidden'>

        </div>  
    </div>
  )
}

export default Navbar