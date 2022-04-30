import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Item({ name, href }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? ' text-white font-medium py-2  border-b border-white'
          : 'text-white font-medium py-2  hover:border-b hover:border-white'
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
