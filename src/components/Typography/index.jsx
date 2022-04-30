import React from 'react';

export default ({ title, value, options, children }) => (
  <p className='font-medium'>
    {title}:{' '}
    {options ? (
      options.map((item, idx) => (
        <span key={`${idx + 1}`} className='font-normal italic'>
          {item.name}{' '}
        </span>
      ))
    ) : (
      <span className='font-normal'>
        {value}
        {' '}
        {children}
      </span>
    )}
  </p>
);
