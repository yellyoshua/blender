import App from '../modules/app';
import PageNotFound from '../modules/errors/PageNotFound';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];
