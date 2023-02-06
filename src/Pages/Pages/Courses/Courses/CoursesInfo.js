import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard';

const CoursesInfo = () => {
    const[courseName, setCourseName] = useState([])
    const[courseDetails, setCourseDetails] = useState([])


    useEffect( () => {
        fetch('http://localhost:5000/coursename')
        .then(res => res.json())
        .then(data => setCourseName(data))
    },[])


    useEffect( () => {
        fetch('http://localhost:5000/coursedetails')
        .then(res => res.json())
        .then(data => setCourseDetails(data))
    },[])
    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
             <div className="card-body">
                {
                    courseName.map(cname =>console.log(cname)
                )}
             </div>
            <div className="card-body">
                 <div className='grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                 {
                    courseDetails.map(cDetails =><CourseCard
                    key={cDetails.id}
                    cDetails={cDetails}
                    ></CourseCard>)
                 }
                 </div>
            </div>
        </div>
    );
};

export default CoursesInfo;