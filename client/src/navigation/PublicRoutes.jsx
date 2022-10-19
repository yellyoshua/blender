import Login from '../modules/login';
import Terms from '../modules/terms';
import PageNotFound from '../modules/errors/PageNotFound';
import Privacy from '../modules/terms/privacy';
import Porfile from '../modules/porfile/porfile';

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
  },
  {
    path: '/privacy-page',
    element: <Privacy />
  },
  {
    path: '/porfile-page',
    element: <Porfile />
  }
];
