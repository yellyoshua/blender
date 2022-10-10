import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Authentication from '../modules/shared/components/Authentication';

const privateRoutes = createBrowserRouter(PrivateRoutes);
const publicRoutes = createBrowserRouter(PublicRoutes);

export default function Navigation () {
  return (
    <Authentication
      privateRoute={<RouterProvider router={privateRoutes} />}
      publicRoute={<RouterProvider router={publicRoutes} />}
    />
  );
}
