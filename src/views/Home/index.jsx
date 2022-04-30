import { NavLink } from 'react-router-dom';
import Homebg from '../../assets/images/home-bg.jpg';
import Logo from '../../assets/images/logo.png';

export default function Home() {
  return (
    <div className='relative bg-white overflow-hidden'>
      <div
        className='w-full h-screen flex justify-center items-center'
        style={{
          backgroundImage: `url(${Homebg})`,
        }}
      >
        <div className='w-full relative z-10 flex flex-col justify-center items-center gap-5'>
          <img src={Logo} alt='' className='w-32' />
          <h2 className='text-white text-2xl font-medium'>MyFilms</h2>
          <div className='flex items-center text-3xl bg-white rounded-md max-w-2xl w-full'>
            <input
              type='text'
              className='w-full text-base outline-none px-4 text-black'
              placeholder='Search film...'
            />
            <i className='fa fa-search text-white bg-blue-800 px-4 py-2 rounded-md' />
          </div>
        </div>
      </div>
      <div className='w-full h-screen bg-black opacity-90 absolute top-0 left-0' />
    </div>
  );
}
