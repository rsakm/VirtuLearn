import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <div className='flex items-center'><img className='w-12 h-12 fill-blue-600' src={assets.logo_dark}alt="logo" /><span className='text-white   md:text-xl'>VirtuLearn</span></div>
        <p className='text-white/80 mt-6 text-center md:text-left text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='text-white mb-5 font-semibold'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between md:space-y-2 text-white/80 text-sm'>
            <li href="#">Home</li>
            <li href="#">About us</li>
            <li href="#">Contact us</li>
            <li href="#">Privacy Policy</li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-start w-full' >
          <h2 className='text-white mb-5 font-semibold'>Subscribe to our newsletter</h2>
          <p className='text-white/80 text-sm'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input className='border border-gray-500/30 bg-gray-800 rounded px-2 py-2 text-sm  text-gray-500 placeholder-gray-500 outline-none w-64 h-9' type="email" placeholder='Enter your email' />
            <button className='bg-blue-600 w-24 h-9 text-white rounded'>Subscribe</button>
          </div>
        </div>
      </div> 
      <p className='text-white/80 text-center py-5'>Copyright &copy; 2025 VirtuaLearn. All rights reserved</p> 
    </footer>
  )
}

export default Footer