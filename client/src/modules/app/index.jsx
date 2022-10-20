import { useEffect } from 'react';
import Tutorial from './tutorial';
import AppMobile from './App.mobile';
import AppDesktop from './App.desktop';
import {Ping} from '@uiball/loaders';
import { useCurrentUserStore } from './stores';
import { useResizeDeviceStore } from '../shared/components/ResizeDevice';
import ProfileMenu from './components/ProfileMenu';

export default function App () {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const {currentUser, getCurrentUser} = useCurrentUserStore();

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!currentUser) {
    return <div className="flex items-center justify-center h-screen w-full">
      <Ping size={45} speed={1} />
    </div>;
  }

  if (isMobile) {
    return (
      <Tutorial user={currentUser}>
        <ProfileMenu />
        <AppMobile />
      </Tutorial>
    );
  }

  return (
    <Tutorial user={currentUser}>
      <ProfileMenu />
      <AppDesktop />
    </Tutorial>
  );
}
