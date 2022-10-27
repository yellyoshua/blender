import { Outlet } from 'react-router-dom';
import BottomNavigator from './components/BottomNavigator';

export default function AppMobile () {
  const bottomNavigatorHeight = 65;

  return (
    <div className="text-center">
      <div className="w-full">
        <Outlet />
      </div>
      <BottomNavigator height={bottomNavigatorHeight} />
    </div>
  );
}
