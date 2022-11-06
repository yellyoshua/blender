import {Navigate} from 'react-router-dom';
import Privacy from '../modules/terms/privacy';
import Terms from '../modules/terms';
import ErrorBoundary from '../modules/errors/ErrorBoundary';
import UnderConstruction from '../modules/errors/UnderConstruction';
import App from '../modules/app';
import Discover from '../modules/discover';
import Community from '../modules/community';
import Profile from '../modules/profile';
import ProfileEditInterests from '../modules/profile/interests';
import ProfileEditPersonalities from '../modules/profile/personalities';

const errorElement = <ErrorBoundary />;

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/terms-page',
    errorElement: <ErrorBoundary />,
    element: <Terms />
  },
  {
    path: '/privacy-page',
    errorElement: <ErrorBoundary />,
    element: <Privacy />
  },
  {
    path: '/',
    element: <App />,
    errorElement,
    children: [
      { index: true, element: <Discover />, errorElement },
      { path: 'security', element: <UnderConstruction />, errorElement },
      { path: 'settings', element: <UnderConstruction />, errorElement },
      { path: 'profile/edit/photos', element: <UnderConstruction />, errorElement },
      { path: 'profile/edit/interests', element: <ProfileEditInterests />, errorElement },
      { path: 'profile/edit/personalities', element: <ProfileEditPersonalities />, errorElement },
      { path: 'profile', element: <Profile />, errorElement },
      { path: 'community', element: <Community />, errorElement },
      { path: 'chat', element: <UnderConstruction />, errorElement },
      { path: '/*', element: <Navigate replace to="/" />, errorElement }
    ]
  }
];
