import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Item = ({
  imageSrc,
  name,
  id,
  genre = '',
  ageLimit = '',
  year = '',
  movie,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className='group relative p-1'>
      <div>
        <NavLink
          to={movie ? `/movies/${id}` : '/streams'}
          className='block relative w-full h-64'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <img
            src={imageSrc}
            alt=''
            className='w-full h-full object-center rounded-xl'
          />
          {movie && (
            <span className='absolute top-1 left-1 py-0.5 px-1 rounded z-30 text-red-500 font-semibold'>
              +{ageLimit}
            </span>
          )}
          {movie && (
            <span className='absolute top-1 right-1 py-0.5 px-1 rounded z-30 bg-white font-semibold'>
              HD
            </span>
          )}
          {show && (
            <div className='flex justify-center items-center w-full h-full absolute rounded-xl z-20 hover:bg-opacity-50 hover:bg-black top-0 left-0 transition-all duration-200'>
              <div className='w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center'>
                <i className='fa fa-play text-white' />
              </div>
            </div>
          )}
        </NavLink>
        <div>
          <h3
            className='text-base font-medium  text-gray-800 hover:text-blue-600'
            title={name}
          >
            <NavLink
              className='block'
              to={movie ? `/movies/${id}` : '/streams'}
            >
              {name.substr(0, 15)}...
            </NavLink>
          </h3>
          {movie && (
            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>{year}</span>
              <span className='border rounded-lg border-gray-300 px-1 py-0.5 text-gray-500'>
                {genre}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
