import { Outlet } from 'react-router-dom';
import { useCurrentUserStore } from './stores';

export default function AppMobile () {
  const {currentUser} = useCurrentUserStore();

  return (
    <div className="text-center">
      <Outlet />
    </div>
  );
}
