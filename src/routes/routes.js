import { Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../views/Home';
import Posts from '../views/Posts/List';
import Detail from '../views/Posts/View';

export const routes = [
  {
    element: <Layout />,
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: (
              <>
                <Posts />
                <Outlet />
              </>
            ),
          },
          { path: 'detail/:id', element: <Detail /> },
        ],
      },
    ],
  },
];
