import {Navigate} from 'react-router-dom';
import ErrorBoundary from '../modules/errors/ErrorBoundary';
import UnderConstruction from '../modules/errors/UnderConstruction';
import App from '../modules/app';
import Discover from '../modules/discover';
import Profile from '../modules/profile';
import ProfileEditInterests from '../modules/profile/interests';
import ProfileEditPersonalities from '../modules/profile/personalities';

const errorElement = <ErrorBoundary />;

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    element: <App />,
    errorElement,
    children: [
      { index: true, element: <Discover />, errorElement },
      { path: 'profile/edit/photos', element: <UnderConstruction />, errorElement },
      { path: 'profile/edit/interests', element: <ProfileEditInterests />, errorElement },
      { path: 'profile/edit/personalities', element: <ProfileEditPersonalities />, errorElement },
      { path: 'profile', element: <Profile />, errorElement },
      { path: 'community', element: <UnderConstruction />, errorElement },
      { path: 'chat', element: <UnderConstruction />, errorElement },
      { path: '/*', element: <Navigate replace to="/" />, errorElement }
    ]
  }
];
