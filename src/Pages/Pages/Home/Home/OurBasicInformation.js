import React from 'react';
import { Link } from 'react-router-dom';
import bannerTwo from '../../../../assets/bannerTwo.png'

const OurBasicInformation = () => {
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-8'>
            <div>
                <h2 className='text-3xl text-center font-bold my-5'>Our Info</h2>
                <p className='pl-4 '>
                Online education describes a situation where a students learn from home or anywhere by using internet and other technologies. Online education has some benefits as well as few limitations also. The other name of online education is e-learning. For online class every students need mobile or laptop with internet access. Online classes are a versatile means of rapid learning. Its flexibility and efficiency make it more popular in the days of epidemics
                </p>
        <br />
                <p className='pl-4  '>
                It reduces the geographical distance of learning. Students from different corners of the world can join an online class, wherever it is held. Although there are many differences between online and physical classes, online classes offer huge opportunities for research from the Internet. Internet surfing plays the most important role in ensuring students’ sincere engagement with the given subject.
                </p>
                <button className="btn btn-accent mt-3 ml-4">
                    <Link to='/about'>About Us</Link>
                </button>
            </div>
            <div className='flex justify-center'>
                <img className='w-3/4 rounded-lg' src={bannerTwo} alt="" />
            </div>
        </div>
    );
};

export default OurBasicInformation;