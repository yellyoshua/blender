import {Navigate} from 'react-router-dom';
import App from '../modules/app';
import Discover from '../modules/discover';
import Profile from '../modules/profile';
import UnderConstruction from '../modules/errors/UnderConstruction';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Discover /> },
      { path: 'profile/edit/photos', element: <UnderConstruction /> },
      { path: 'profile/edit/interests', element: <UnderConstruction /> },
      { path: 'profile/edit/personalities', element: <UnderConstruction /> },
      { path: 'profile', element: <Profile /> },
      { path: 'community', element: <UnderConstruction /> },
      { path: 'chat', element: <UnderConstruction /> },
      { path: '/*', element: <Navigate replace to="/" /> }
    ]
  }
];
