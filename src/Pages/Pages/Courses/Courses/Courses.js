import React from 'react';
import CoursesInfo from './CoursesInfo';
import background from '../../../../assets/background.jpg'
const Courses = () => {
    return (
        <div style ={{ background: `url(${background})` }}>
            <CoursesInfo></CoursesInfo>
        </div>
    );
};

export default Courses;