import { useEffect } from 'react';
import Tutorial from './tutorial';
import AppMobile from './App.mobile';
import AppDesktop from './App.desktop';
import {Ping} from '@uiball/loaders';
import { useResizeDeviceStore } from '@/shared/components/ResizeDevice';
import Logout from './components/Logout';
import { useMeStore } from '@/shared/store';

export default function AppPage () {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const {me, getMe} = useMeStore();

  useEffect(() => {
    getMe();
  }, []);

  if (!me) {
    return <div className="flex items-center justify-center h-screen w-full">
      <Ping size={45} speed={1} />
    </div>;
  }

  if (isMobile) {
    return (
      <Tutorial user={me}>
        <Logout />
        <AppMobile />
      </Tutorial>
    );
  }

  return (
    <Tutorial user={me}>
      <Logout />
      <AppDesktop />
    </Tutorial>
  );
}
