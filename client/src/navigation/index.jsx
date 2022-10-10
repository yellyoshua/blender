import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Authentication from '../modules/shared/components/Authentication';
import interceptors from '../modules/core/configurations/interceptors';

const privateRoutes = createBrowserRouter(PrivateRoutes);
const publicRoutes = createBrowserRouter(PublicRoutes);

export default function Navigation () {
  return (
    <Authentication
      interceptors={interceptors}
      privateRoute={<RouterProvider router={privateRoutes} />}
      publicRoute={<RouterProvider router={publicRoutes} />}
    />
  );
}
