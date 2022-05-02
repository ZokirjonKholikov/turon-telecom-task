import React from 'react';
import Item from './Item';

export default ({ data, movie }) => {
  return (
    <div className='mt-6 grid grid-cols-2  gap-y-8 gap-x-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:gap-x-6'>
      {data.map((product, idx) => (
        <Item key={`${idx + 1}`} {...product} movie={movie} />
      ))}
    </div>
  );
};
