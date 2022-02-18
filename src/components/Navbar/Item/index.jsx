import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Item({ name, href }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? ' text-orange-500 font-medium  hover:text-gray-900'
          : 'text-gray-500 font-medium  hover:text-gray-900'
      }
    >
      {name}
    </NavLink>
  );
}
Item.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
