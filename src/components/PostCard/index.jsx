import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PostCard = ({ imageSrc, name, id }) => {
  return (
    <div className='group relative bg-white rounded-md'>
      <div className='shadow rounded-md '>
        <img
          src={imageSrc}
          alt=''
          className='w-full h-36 object-cover object-top'
        />
        <div className='p-5'>
          <h3 className='text-xl font-medium  text-gray-800 hover:underline'>
            <NavLink className='block' to={`/posts/detail/${id}`}>
              {name}
            </NavLink>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
            asperiores
          </p>
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PostCard;
