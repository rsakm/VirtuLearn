import React, {createContext} from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';

export const AppContext = createContext();

export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY

    const navigate = useNavigate();

    const [allCourses, setAllCourses] = React.useState([]);

    const [isEducator, setIsEducator] = React.useState(true);
    // fetch all courses
    const fetchAllCourses = async () => {

        try {
        //   const response = await fetch('http://localhost:8000/courses');
        //   const data = await response.json();
        //   setAllCourses(data);

        setAllCourses(dummyCourses);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };

      React.useEffect(() => {
        fetchAllCourses();
      }, []);


    //   Function to calculate the average rating of course

    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0) return 0;
        
        let totalRating = 0;
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating;
        })

        return (totalRating / course.courseRatings.length).toFixed(1);

    }

    // Function to calculate course chapter time
    const calculateCHapterTime = (chapter)=>{
        let time = 0;
        chapter.chapterContent.map((lecture) =>
            time+=lecture.lectureDuration)

        return humanizeDuration(time * 60 *1000,{units: ['h', 'm']});
    }

    

    const value = {
        currency, 
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}