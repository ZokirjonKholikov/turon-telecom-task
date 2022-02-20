import React from 'react';
import Item from './Item';

const Comments = ({ comments }) => {
  return (
    <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2 bg-gray-50'>
      <h2 className='text-3xl font-semibold italic'>Comments</h2>
      <div className='mt-5'>
        {comments.map((item, idx) => (
          <Item item={item} key={`${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
