import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../routes/routes';

export default () => {
  const content = useRoutes(routes);
  return <div>{content}</div>;
};
