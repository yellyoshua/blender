import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  ...PrivateRoutes,
  ...PublicRoutes
]);

export default function Navigation () {
  return (
    <RouterProvider
      router={router}
    />
  );
}
