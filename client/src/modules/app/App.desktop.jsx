import { Outlet } from 'react-router-dom';

export default function AppDesktop () {
  return (
    <div className="text-center">
      <Outlet />
    </div>
  );
}
