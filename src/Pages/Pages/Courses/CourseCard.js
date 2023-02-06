import React from 'react';
 

const CourseCard = ({cDetails}) => {
    console.log(cDetails)
    const{name,admisionlastdate,coursefee,coursestart,details,header,img} = cDetails;


    return (
        <div className="card w-96 bg-base-100 shadow-xl leading-6">
            <figure><img src={img} alt="course Image" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <p> {name}</p>
                </h2>
                <h3>Course Name :{header}</h3>
                <p>Course Addimission Fee :{coursefee}</p>
                <p>Addmission Last Date :{admisionlastdate}</p>
                <p>Class Start :{coursestart}</p>
                <p>Course Information :{details}</p>
                
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;