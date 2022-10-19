import {Navigate} from 'react-router-dom';
import App from '../modules/app';
import PageNotFound from '../modules/errors/PageNotFound';
import Discover from '../modules/discover';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'discover', element: <Discover/> },
      { index: '*', element: <Navigate replace to="/discover" /> }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];
