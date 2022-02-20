import React from 'react';
import Avatar from '../../Avatar';

const Item = ({ item }) => {
  return (
    <div className='m-5 '>
      <div className='flex gap-5'>
        <div className='w-12 '>
          <Avatar name={item.name} />
        </div>
        <div className='border-b border-gray-200 pb-3'>
          <h2 className='text-lg font-semibold'>{item.name}</h2>
          <h2 className='text-sm font-semibold italic'>{item.email}</h2>
          <p className='mt-2'>{item.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
