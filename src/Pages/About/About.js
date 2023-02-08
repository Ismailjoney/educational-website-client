import React from 'react';
import AboutMemberInfo from './AboutMemberInfo';
 

const About = () => {
    const members =[
        {   
            id:"01",
            name: 'Mohammad Ismail Hossen Joney',
            Teacher: 'Programmer Instractor',
            Address: 'Barisal,Bangladesh',
            phone: "+8801898977"
             
        },
        {   
            id:"02",
            name: 'Dalan Chandra Dey',
            Teacher: 'Basic Computer Instractor',
            Address: 'Silok,Rangunia,Chittagong,Bangladesh',
            phone: "+8801898867"
            
        },
        {   
            id:"03",
            name: 'Rabiul Haque Rabu',
            Teacher: 'Spoken English',
            Address: 'Lalmonirhat,Rangpur,Bangladesh',
            phone: "+8801874977"
        },
        {   
            id:"04",
            name: 'Mohammad Ikbal Hosen ',
            Teacher: 'Games Maker Instractor',
            Address: 'Rangunia,Chittagong,Bangladesh',
            phone: "+8801893402"
        },
        {   
            id:"05",
            name: 'Md Shohag Hosen',
            Teacher: 'PhotoShop',
            Address: 'Lalmonirhat,Rangpur,Bangladesh',
            phone: "+8801895210"
        },
        {   
            id:"06",
            name: 'Yeasin Arafat Oyasti',
            Teacher: 'Digital Marketing',
            Address: 'Lalmonirhat,Rangpur,Bangladesh',
            phone: "+8801801239"
        },
    ]
    return (
        <div cla>
            <h2 className='text-center text-2xl my-14'>Our Team Member</h2>
            <div className='grid grid-cols-1 gap-4 justify-center lg:grid-cols-3 lg:justify-center '>
                {
                    members.map(member =><AboutMemberInfo
                    key={member.id}
                    member={member}
                    ></AboutMemberInfo>)
                }
            </div>
        </div>
    );
};

export default About;