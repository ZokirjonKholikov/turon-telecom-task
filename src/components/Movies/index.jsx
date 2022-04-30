import React from 'react';
import Item from './Item';

export default ({ data, movie }) => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8'>
      {data.map((product, idx) => (
        <Item key={`${idx + 1}`} {...product} movie={movie} />
      ))}
    </div>
  );
};
