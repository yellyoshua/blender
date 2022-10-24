import {Navigate} from 'react-router-dom';
import App from '../modules/app';
import Discover from '../modules/discover';
import Profile from '../modules/profile';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/profile/edit/interests',
    element: <h1>Edit profile interests</h1>
  },
  {
    path: '/profile/edit/personalities',
    element: <h1>Edit profile personalities</h1>
  },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Discover /> },
      { path: 'profile', element: <Profile /> },
      { path: 'community', element: <p>Community path</p> },
      { path: 'chat', element: <p>Chat path</p> },
      { path: '/*', element: <Navigate replace to="/" /> }
    ]
  }
];
