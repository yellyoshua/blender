import { useEffect } from 'react';
import Tutorial from './tutorial';
import AppMobile from './App.mobile';
import { useCurrentUserStore } from './stores';
import { useResizeDeviceStore } from '../shared/components/ResizeDevice';

export default function App () {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const {currentUser, getCurrentUser} = useCurrentUserStore();

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!currentUser) {
    return null;
  }

  if (isMobile) {
    return (
      <Tutorial user={currentUser}>
        <AppMobile />
      </Tutorial>
    );
  }

  return (
    <Tutorial user={currentUser}>
      <AppMobile />
    </Tutorial>
  );
}
