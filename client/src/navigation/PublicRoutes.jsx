import * as Home from '../modules/home';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <Home.default />,
    loader: Home.loader,
    children: []
  }
];
