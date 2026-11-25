import React from 'react';

const Card = (props) => {

return (
    <div className='bg-white border-2 border-gray-200 m-2 rounded-xl px-5 py-5 w-80 shadow-lg'>

        {/* Profile Image */}
        <img
            src={props.users.profile}
            alt="Profile"
            className='w-28 h-28 rounded-full object-cover border-4 border-gray-100 mx-auto'
        />

        {/* User Details */}
        <div className='text-center mt-3'>

            <h1 className='text-2xl font-bold text-gray-800'>
                {props.users.fullName}
            </h1>

            <p className='text-gray-500 text-sm mt-1'>
                {props.users.title}
            </p>

        </div>

        {/* Likes and Views */}
        <div className='flex justify-around border-y border-gray-200 py-4 my-5'>

            <div className='text-center'>
                <h2 className='text-xl font-bold'>
                    {props.users.likesCount}
                </h2>
                <p className='text-sm text-gray-500'>Likes</p>
            </div>

            <div className='text-center'>
                <h2 className='text-xl font-bold'>
                    {props.users.viewsCount}
                </h2>
                <p className='text-sm text-gray-500'>Views</p>
            </div>

        </div>

        {/* Follow Status */}
        <button className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold'>
            {props.users.followed ? 'Following' : 'Follow'}
        </button>

    </div>
);


};

export default Card;