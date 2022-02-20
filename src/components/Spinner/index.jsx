import React from 'react';

const Spinner = () => {
  return (
    <div className='absolute flex justify-center items-center h-full w-full top-0 left-0 bg-white bg-opacity-90 z-50'>
      <div
        style={{
          borderTopColor: 'transparent',
        }}
        className='w-16 h-16 border-8 border-orange-400 border-dotted rounded-full animate-spin'
      />
    </div>
  );
};

export default Spinner;
