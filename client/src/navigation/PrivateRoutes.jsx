import * as App from '../modules/app';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App.default />,
    loader: App.loader,
    children: []
  }
];
