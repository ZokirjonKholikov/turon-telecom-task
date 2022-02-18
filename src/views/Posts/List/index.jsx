import React from 'react';
import PostCard from '../../../components/PostCard';

const products = Array.from({ length: 10 }).map(() => ({
  id: 1,
  name: 'Basic Tee',
  href: '#',
  imageSrc:
    'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
}));

const Posts = () => {
  return (
    <div
      className='mx-auto'
      style={{
        backgroundColor: '#f9f9f9',
      }}
    >
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product, idx) => (
            <PostCard key={`${idx + 1}`} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
