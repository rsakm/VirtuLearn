import React from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  const {currency, calculateRating} = React.useContext(AppContext)
  
  return (
    <Link to={`/course/${course._id}`} onClick={()=>scrollTo(0,0)}
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    >
        <img className='w-full' src={course.courseThumbnail} alt="course thumbnail" />
        <div className='p-4 text-left'>
          <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
          <p className=' text-gray-500'>
            
          {/* // course.educator.name} */}
          
          Rajshree</p>

          <div className='flex items-center space-x-2 '>
            <p>{calculateRating(course)}</p>
            <div className='flex '>
              {[...Array(5)].map((_, index) => (
                // <span key={index}>&#9733;</span>

                <img key={index} src={index < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="star" className='w-3.5 h-3.5' />
              ))}
            </div>
            <p className='text-gray-500'>{course.courseRatings.length}</p>
          </div>
          <p className=' text0base text-gray-800 font-semibold'>{currency}{(course.coursePrice-(course.discount/100)*course.coursePrice).toFixed(2)}</p>
        </div>
    </Link>
  )
}

export default CourseCard