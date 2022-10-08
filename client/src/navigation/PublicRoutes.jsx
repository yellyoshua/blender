import Login from '../modules/login';
import Terms from '../modules/terms';

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
  }
];
