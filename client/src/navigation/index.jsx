// eslint-disable-next-line id-length
import _ from 'underscore';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const router = createBrowserRouter([
  ...compose_private_routes(PrivateRoutes),
  ...compose_public_routes(PublicRoutes)
]);

export default function Navigation () {
  return (
    <RouterProvider
      router={router}
    />
  );
}

function compose_private_routes (privateRoutes) {
  return _(privateRoutes).map((route) => {
    return _(route).extend({
      path: `/app${route.path}`
    });
  });
}

function compose_public_routes (publicRoutes) {
  return publicRoutes;
}
