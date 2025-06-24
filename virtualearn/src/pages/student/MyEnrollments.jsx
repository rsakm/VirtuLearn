import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const MyEnrollments = () => {

  const {enrolledCourses, calculateCourseDuration} = useContext(AppContext);

  return (
    <>
    <div className='px-8 md:px-36 pt-10'>
        <h1 className='text-2xl font-semibold'>My Enrollments</h1>
        <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left mx:sm-hidden'>
            <tr>
              <th className='px-4 py-3 font-semibold truncate'>Course</th>
              <th className='px-4 py-3 font-semibold truncate'>Duration</th>
              <th className='px-4 py-3 font-semibold truncate'>Completed</th>
              <th className='px-4 py-3 font-semibold truncate'>Status</th>

            </tr>
          </thead>
          <tbody>
            {
              enrolledCourses.map((course, index) =>(
                <tr key={index}>
                  <td>
                    <img src={course.courseThumbnail} alt="" className='w-14 sm:w-24 md:w-28' />
                    <div>
                      <p>{course.courseTitle} </p>

                    </div>
                  </td>
                  <td>
                    <p>{calculateCourseDuration(course)}</p>
                  </td>
                  <td>
                    4 / 10 <span>Lectures</span>
                  </td>
                  <td>
                    <button>On Going</button>
                  </td>
                </tr>
              )) }
                
          </tbody>
        </table>
    </div>
    </>
  )
}

export default MyEnrollments