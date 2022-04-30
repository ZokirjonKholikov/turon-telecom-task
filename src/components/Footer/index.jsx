import React from 'react';

const Navbar = () => {
  return (
    <div className='mx-auto '>
      <div className='text-white bg-blue-900 lg:py-6 flex flex-col sm:flex-row items-center justify-start sm:justify-between gap-3 lg:w-full lg:px-20 px-5 py-2 shadow-sm'>
        <p>Privacy Policy © 2022</p>

        <div className='flex gap-3 items-center'>
          <h4 className='text-white text-xs'>Phone:</h4>
          <h2>77 123 45 67</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
