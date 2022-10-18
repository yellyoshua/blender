import {Navigate} from 'react-router-dom';
import App from '../modules/app';
import PageNotFound from '../modules/errors/PageNotFound';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'discover', element: <h1>Discover page</h1> },
      { index: '*', element: <Navigate replace to="/discover" /> }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];
