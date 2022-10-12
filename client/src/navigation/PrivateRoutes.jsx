import App from '../modules/app';
import PageNotFound from '../modules/errors/pagenotfound';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/not-found',
    element: <PageNotFound />
  }
];
