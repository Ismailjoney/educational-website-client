import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import background from '../../../../assets/background.jpg'

const UniqueCourseDetails = () => {

    const courseDetails = useLoaderData()
    console.log(courseDetails)
    const { name, admisionlastdate, coursefee, coursestart, details, header, img, id } = courseDetails;

   
return (
    <section  style = {{
        background: `url(${background})`
    }
}
 className='flex justify-center'>
        <div className="card w-96  bg-base-100 shadow-xl image-full  ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Course Addimission Fee :{coursefee}</p>
                <p>Addmission Last Date :{admisionlastdate}</p>
                <p>Class Start :{coursestart}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to='/primiumCoursedetails'>Premium</Link>
                        </button>
                </div>
            </div>
        </div>
    </section>
);
};

export default UniqueCourseDetails;