import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Item = ({ imageSrc, name, id, desc }) => {
  return (
    <div className='group relative bg-white rounded-md shadow'>
      <div>
        <img
          src={imageSrc}
          alt=''
          className='w-full h-36 object-cover object-top'
        />
        <div className='p-5'>
          <h3
            className='text-xl font-medium  text-gray-800 hover:underline'
            title={name}
          >
            <NavLink className='block' to={`/posts/detail/${id}`}>
              {name.substr(0, 15)}...
            </NavLink>
          </h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
