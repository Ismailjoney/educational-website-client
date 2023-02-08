import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../assets/background.jpg'

const CourseCard = ({ cDetails }) => {

    const { name, admisionlastdate, coursefee, coursestart, details, header, img, id } = cDetails;


    return (
        <div style={{ background: `url(${background})` }} className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img style={{ width: '400px', height: '300px' }} src={img} alt="course Image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    <p> {name}</p>
                </h2>
                <div>
                    <h3>Course Name :{header}</h3>
                </div>
                <div>
                    <p>Course Information :{details.length > 100 ? details.slice(0, 100) + '....' : details}</p>
                </div>
                <div className="card-actions justify-end mt-3">
                    <button className='className="btn btn-primary w-100 p-2 fw-bold  '>
                        <Link to={`/uniquequersdetails/${id}`}>
                            Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;