import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightIcon, BeakerIcon, check, } from '@heroicons/react/24/solid'
import BannerOne from '../../../../assets/BannerOne.png'

const Banner = () => {
    return (
        <div className="grid gap-6 lg:grid-cols-2 justify-center align-center  min-h-screen  mt-20 mr-2 ml-2 sm:grid-cols-1">
            <div className='w-full'>
                <img src={BannerOne} alt="" className=" rounded-lg shadow-2xl w-full h-3/4 " />
            </div>
            <div className='mt-2 ml-2 lg:mt-20 lg:ml-20'>
                <TypeAnimation
                    sequence={[
                        `Hello, Learner`, 1500,
                        `Wellcome to Our Website`, 2000,
                        () => {
                            // console.log('Done typing!');  
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', fontWeight: 'bold' }}
                />
                <h2 className='text-2xl text-bold'>Our Courses</h2>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline font-extrabold' />Programing</p>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline  ' />Spoken English</p>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline  ' />PhotoShop</p>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline  ' />Digital Marting</p>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline  ' />3d Games make</p>
                <p className='font-bold'><ArrowRightIcon className='w-6 h-6 pr-2 text-white-500 inline f ' />Basic Computer</p>
            </div>
        </div>
    )
};

export default Banner;