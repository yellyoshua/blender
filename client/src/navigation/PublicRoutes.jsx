import ErrorBoundary from '../modules/errors/ErrorBoundary';
import PageNotFound from '../modules/errors/PageNotFound';
import Privacy from '../modules/terms/privacy';
import Terms from '../modules/terms';
import Login from '../modules/login';


/**
 * @type {import('react-router').RouteObject[]}
 */
export default [
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <Login />
  },
  {
    path: '*',
    errorElement: <ErrorBoundary />,
    element: <PageNotFound />
  },
  {
    path: '/terms-page',
    errorElement: <ErrorBoundary />,
    element: <Terms />
  },
  {
    path: '/privacy-page',
    errorElement: <ErrorBoundary />,
    element: <Privacy />
  }
];
