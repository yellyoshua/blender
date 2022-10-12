import Login from '../modules/login';
import Terms from '../modules/terms';
import PageNotFound from '../modules/errors/pagenotfound';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/terms-page',
    element: <Terms />
  },
  {
    path: '/not-found',
    element: <PageNotFound />
  }
];
