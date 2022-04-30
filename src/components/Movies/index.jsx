import React from 'react';
import Item from './Item';

export default ({ data, movie }) => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-6'>
      {data.map((product, idx) => (
        <Item key={`${idx + 1}`} {...product} movie={movie} />
      ))}
    </div>
  );
};
