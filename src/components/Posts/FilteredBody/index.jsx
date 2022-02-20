/* eslint jsx-a11y/label-has-associated-control: off */
import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

const PostsFilter = ({ users, setUser, user }) => {
  return (
    <div className='flex flex-col sm:flex-row gap-5 items-end'>
      <div className='w-full flex gap-3 items-center  bg-white py-2 px-3 shadow-sm rounded-md'>
        <SearchIcon className='w-5 h-5 text-gray-400' />
        <input
          type='text'
          name='search'
          placeholder='Search post...'
          id='search'
          className='block w-full sm:text-sm outline-none'
        />
      </div>
      <div
        style={{
          minWidth: '160px',
        }}
      >
        <label
          htmlFor='country'
          aria-controls='country'
          className='block text-sm font-medium text-gray-700'
        >
          Filter by user
        </label>
        <select
          id='country'
          name='country'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete='country-name'
          className=' block w-full py-2 px-3  bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        >
          <option value=''>All</option>
          {users.map((item, idx) => (
            <option value={item.id} key={`${idx + 1}`}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PostsFilter;
