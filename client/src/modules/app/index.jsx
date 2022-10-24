import { useEffect } from 'react';
import Tutorial from './tutorial';
import AppMobile from './App.mobile';
import AppDesktop from './App.desktop';
import {Ping} from '@uiball/loaders';
import { useResizeDeviceStore } from '../shared/components/ResizeDevice';
import Logout from './components/Logout';
import { useUserStore } from '../shared/store';

export default function App () {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const {user, getUser} = useUserStore();

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <div className="flex items-center justify-center h-screen w-full">
      <Ping size={45} speed={1} />
    </div>;
  }

  if (isMobile) {
    return (
      <Tutorial user={user}>
        <Logout />
        <AppMobile />
      </Tutorial>
    );
  }

  return (
    <Tutorial user={user}>
      <Logout />
      <AppDesktop />
    </Tutorial>
  );
}
