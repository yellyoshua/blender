import Login from '../modules/login';
import Terms from '../modules/terms';
import PageNotFound from '../modules/errors/PageNotFound';

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
    path: '*',
    element: <PageNotFound />
  }
];
