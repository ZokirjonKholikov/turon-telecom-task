import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../../redux/modules/movies/actions';
import Spinner from '../../../components/Spinner';
import MovieCard from '../../../components/Movies';
import Typography from '../../../components/Typography';

export default () => {
  const { id } = useParams();
  const { movie, similarMovies, loading } = useSelector(
    (state) => state.moviesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [id]);

  if (loading) return <Spinner />;
  return (
    <div className='mx-auto'>
      <div>
        <div
          className='w-full h-96 lg:h-100 relative bg-no-repeat bg-cover flex justify-center items-center'
          style={{
            backgroundImage: `url(${movie?.bgImage})`,
          }}
        >
          <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black opacity-70' />
          <div className='relative z-40 w-24 h-24 bg-blue-600 rounded-full flex justify-center items-center'>
            <i className='text-3xl fa fa-play text-white' />
          </div>
        </div>
        <div className='lg:py-6 lg:w-full lg:px-20 px-5 py-2 flex flex-col items-center'>
          <div className='w-full relative z-50 rounded-3xl -mt-40 p-5 bg-white shadow-md flex gap-10'>
            <img
              src={movie?.image}
              alt=''
              className='hidden sm:block w-48 h-72 rounded-md'
            />
            <section className='w-full'>
              <div className='flex flex-col sm:flex-row items-start justify-between gap-3'>
                <button
                  type='button'
                  className='px-3 py-2 bg-blue-600 text-white rounded-2xl flex justify-center items-center'
                >
                  <i className='text-base fa fa-play text-white mr-2' /> Watch
                  now
                </button>
                <button
                  type='button'
                  className='sm:block px-3 py-2 bg-gray-300 text-black rounded-2xl flex justify-center items-center'
                >
                  <i className='text-base fa fa-plus text-black mr-2' /> Add to
                  favorite
                </button>
              </div>
              <div>
                <h2 className='text-3xl font-medium py-4'>{movie?.name}</h2>
                <div className='flex flex-col sm:flex-row mt-2 gap-3 items-start sm:items-center'>
                  <span className='border border-gray-800 px-2 py-1 rounded'>
                    <i className='text-base fa fa-video text-black mr-2' />
                    {movie.genres[0]?.genreName}
                  </span>
                  <span className='border border-gray-800 px-2 py-1 rounded'>
                    {movie?.qualities[0]?.qualityLabel}
                  </span>
                  <span className='text-orange-500 font-semibold'>
                    IMDB: {movie?.rates?.imdb}
                  </span>
                </div>
                <p className='py-3'>{movie?.desc}</p>
              </div>
              <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2'>
                <div>
                  <Typography title='Released' value={movie?.year} />
                  <Typography
                    title='Genre'
                    options={movie?.genres.map((item) => ({
                      name: item?.genreName,
                    }))}
                  />
                  <Typography
                    title='Actors'
                    options={movie?.actors.map((item) => ({
                      name: item.personName,
                    }))}
                  />
                </div>
                <div>
                  <div className='flex'>
                    <Typography title='Duration' value={movie.duration}>
                      <span>min</span>
                    </Typography>
                  </div>
                  <Typography
                    title='Country'
                    value={movie?.countries[0]?.countryName}
                  />
                  <Typography
                    title='Producers'
                    options={movie?.producers.map((item) => ({
                      name: item.personName,
                    }))}
                  />
                </div>
              </div>
            </section>
          </div>
          <p className='py-4'>{movie?.movieSlogan}</p>
          <div className='mt-5 w-full'>
            <p className='py-4'>You may also like</p>
            <MovieCard data={similarMovies} movie />
          </div>
        </div>
      </div>
    </div>
  );
};
