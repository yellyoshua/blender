import ErrorBoundaryPage from '@/modules/errors/ErrorBoundaryPage';
import NotFoundPage from '@/modules/errors/NotFoundPage';
import PrivacyPage from '@/modules/terms/PrivacyPage';
import TermsPage from '@/modules/terms/TermsPage';
import LoginPage from '@/modules/login/LoginPage';

/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    errorElement: <ErrorBoundaryPage />,
    element: <LoginPage />
  },
  {
    path: '*',
    errorElement: <ErrorBoundaryPage />,
    element: <NotFoundPage />
  },
  {
    path: '/terms',
    errorElement: <ErrorBoundaryPage />,
    element: <TermsPage />
  },
  {
    path: '/privacy',
    errorElement: <ErrorBoundaryPage />,
    element: <PrivacyPage />
  }
];
