import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../views/Home';
import Movies from '../views/Movies/List';
import MovieDetail from '../views/Movies/View';
import LiveStreams from '../views/LiveStreams/List';

export const routes = [
  {
    element: <Layout />,
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      { path: '/streams', element: <LiveStreams /> },
      {
        path: '/movies',
        children: [
          {
            index: true,
            element: (
              <>
                <Movies />
                <Outlet />
              </>
            ),
          },
          { path: ':id', element: <MovieDetail /> },
        ],
      },
    ],
  },
];
