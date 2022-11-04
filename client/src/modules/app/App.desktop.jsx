import { Outlet } from 'react-router-dom';
import BottomNavigator from './components/BottomNavigator';

export default function AppDesktop () {
  const bottomNavigatorHeight = 65;

  return (
    <div className="h-screen max-w-2xl flex justify-center mx-auto">
      <div className="w-full select-none">
        <Outlet />
      </div>
      <BottomNavigator height={bottomNavigatorHeight} />
    </div>
  );
}
