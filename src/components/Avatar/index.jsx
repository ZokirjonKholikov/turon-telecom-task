import React from 'react';

const Avatar = ({ name = '' }) => {
  return (
    <div className='relative flex justify-center items-center h-12 w-12 rounded-full bg-gray-200'>
      <h2>{name[0].toUpperCase()}</h2>
    </div>
  );
};

export default Avatar;
