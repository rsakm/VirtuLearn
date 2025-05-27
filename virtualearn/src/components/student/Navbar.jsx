import React from 'react'
import { Link } from 'react-router-dom'

// Importing assets from assets.js file
import { assets } from '../../assets/assets'

// Clerk for authentication
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const Navbar = () => {

  const isCourseListPage = window.location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`} >
        <img src={assets.log} alt="Logo" className='w-28 lg:w-32 cursor-pointer'/>

        {/* Desktop view */}
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-5'>

            {/* if user is logged in then show become educator button and my enrollments button */}
           { user && <>
            <button>Become Educator</button>
            | <Link to="/my-enrollments">My Enrollments</Link>
            </>
            }
          </div>

          {/* if user is logged in then show user button */}
          { user ? <UserButton afterSignOutUrl="/"/> :
            <button onClick={() => openSignIn()} className='bg-blue-600 text-white py-2 px-5 rounded-full cursor-pointer'>Create Account</button>}
        </div>

        {/* Mobile view */}
        <div className='md:hidden flex items-center sm:gap-5 gap-2 text-gray-500'>
          <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            
            {
            user && <>
            <button>Become Educator</button>
            | <Link to="/my-enrollments">My Enrollments</Link>
            </>
            }

          </div>
          {
            user ? <UserButton afterSignOutUrl="/"/> : <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} className='cursor-pointer' alt="" />
          </button>}

        </div>  
    </div>
  )
}

export default Navbar