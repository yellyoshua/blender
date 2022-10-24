import ErrorBoundary from '../modules/errors/ErrorBoundary';
import PageNotFound from '../modules/errors/PageNotFound';
import Privacy from '../modules/terms/privacy';
import Login from '../modules/login';
import Terms from '../modules/terms';


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
    path: '/terms-page',
    errorElement: <ErrorBoundary />,
    element: <Terms />
  },
  {
    path: '*',
    errorElement: <ErrorBoundary />,
    element: <PageNotFound />
  },
  {
    path: '/privacy-page',
    errorElement: <ErrorBoundary />,
    element: <Privacy />
  }
];
