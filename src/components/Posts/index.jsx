import React from 'react';
import Item from './Item';

const Posts = ({ data }) => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {data.map((product, idx) => (
        <Item key={`${idx + 1}`} {...product} />
      ))}
    </div>
  );
};
export default Posts;
