import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comments from '../../../components/Comments';
import { fetchPost } from '../../../redux/modules/posts/actions';
import Spinner from '../../../components/Spinner';

export default function Detail() {
  const { id } = useParams();
  const { post, comments, loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className='mx-auto'>
      <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2 flex flex-col items-center'>
        <img src={post.imageSrc} alt='' />
        <div className='mt-10'>
          <h2 className='text-3xl font-semibold'>{post.title}</h2>
          <p className='mt-5'>{post.body}</p>
        </div>
      </div>
      <Comments comments={comments} />
    </div>
  );
}
