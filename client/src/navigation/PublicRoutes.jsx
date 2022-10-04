import * as Home from '../modules/home';
import * as Login from '../modules/login';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <Home.default />,
    loader: Home.loader,
    children: []
  },
  {
    path: '/login',
    element: <Login.default />
  }
];
