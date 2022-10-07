import PublicLayout from '../layouts/PublicLayout';
import * as Home from '../modules/home';
import * as Login from '../modules/login';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '',
        element: <Home.default />,
        loader: Home.loader
      },
      {
        path: 'login',
        element: <Login.default />
      }
    ]
  }
];
