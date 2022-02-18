import React from 'react';

const product = {
  id: 1,
  name: 'Basic Tee',
  href: '#',
  imageSrc:
    'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum inventore minima esse, quisquam, est corrupti vitae quod tenetur neque obcaecati dignissimos numquam deleniti assumenda similique cupiditate commodi velit ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum inventore minima esse, quisquam, est corrupti vitae quod tenetur neque obcaecati dignissimos numquam deleniti assumenda similique cupiditate commodi velit ipsa!',
};
export default function Detail() {
  return (
    <div className='mx-auto'>
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2 flex flex-col items-center'>
        <img src={product.imageSrc} alt='' />
        <div className='mt-10'>
          <h2 className='text-3xl font-semibold'>{product.name}</h2>
          <p className='mt-5'>{product.desc}</p>
        </div>
      </div>
    </div>
  );
}
