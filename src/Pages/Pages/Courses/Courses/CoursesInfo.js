import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard';
import background from '../../../../assets/background.jpg'
const CoursesInfo = () => {
    const [courseName, setCourseName] = useState([])
    const [courseDetails, setCourseDetails] = useState([])

    //course single name
    useEffect(() => {
        fetch(`http://localhost:5000/coursename`)
            .then(res => res.json())
            .then(data => setCourseName(data))
    }, [])

    //course details
    useEffect(() => {
        fetch('http://localhost:5000/coursedetails')
            .then(res => res.json())
            .then(data => setCourseDetails(data))
    }, [])

    return (
        <div style ={{ background: `url(${background})` }} className="flex flex-col lg:flex-row  bg-base-100 shadow-xl justify-around  ">
            <div className="mr-3">
                {
                    courseName.map(cname => <p key={cname.id}>
                        <button className='w-100 p-2 fw-bold'>
                            <Link to={`/uniquequersdetails/${cname.id}`}>
                                  {cname.name}
                            </Link>
                        </button>
                    </p>
                    )}
            </div>
            <div className=" grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {
                    courseDetails.map(cDetails => <CourseCard
                        key={cDetails.id}
                        cDetails={cDetails}
                    ></CourseCard>)
                }
                 
            </div>
        </div>
    );
};

export default CoursesInfo;