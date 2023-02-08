import React from 'react';


const AboutMemberInfo = ({ member }) => {
    console.log(member)
    const { name, phone, Address, Teacher } = member;


    return (
        <div className="card w-96 bg-neutral text-neutral-content ">
            <div className="card-body items-center text-center  ">
                <h2 className="card-title">{name}</h2>
                <p>  {Teacher}</p>
                <p> {Address}</p>
                <p> {phone}</p>
            </div>
        </div>
    );
};

export default AboutMemberInfo;