import {Navigate} from 'react-router-dom';

import PrivacyPage from '@/modules/terms/PrivacyPage';
import TermsPage from '@/modules/terms/TermsPage';
import ErrorBoundaryPage from '@/modules/errors/ErrorBoundaryPage';
import UnderConstructionPage from '@/modules/errors/UnderConstructionPage';

import AppPage from '@/modules/app/AppPage';
import DiscoverPage from '@/modules/discover/DiscoverPage';
import CommunityPage from '@/modules/community/CommunityPage';
import ProfilePage from '@/modules/profile/ProfilePage';
import ProfileEditInterestsPage from '@/modules/profile/ProfileEditInterestsPage';
import ProfileEditPersonalitiesPage from '@/modules/profile/ProfileEditPersonalitiesPage';

const errorElement = <ErrorBoundaryPage />;
const underConstruction = <UnderConstructionPage />;

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/terms',
    errorElement,
    element: <TermsPage />
  },
  {
    path: '/privacy',
    errorElement,
    element: <PrivacyPage />
  },
  {
    path: '/',
    element: <AppPage />,
    errorElement,
    children: [
      { index: true, element: <DiscoverPage />, errorElement },
      { path: 'security', element: underConstruction, errorElement },
      { path: 'settings', element: underConstruction, errorElement },
      { path: 'profile/edit/photos', element: underConstruction, errorElement },
      { path: 'profile/edit/interests', element: <ProfileEditInterestsPage />, errorElement },
      { path: 'profile/edit/personalities', element: <ProfileEditPersonalitiesPage />, errorElement },
      { path: 'profile', element: <ProfilePage />, errorElement },
      { path: 'community', element: <CommunityPage />, errorElement },
      { path: 'chat', element: underConstruction, errorElement },
      { path: '/*', element: <Navigate replace to="/" />, errorElement }
    ]
  }
];
