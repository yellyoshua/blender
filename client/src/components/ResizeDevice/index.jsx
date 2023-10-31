import { useEffect } from 'react';
import createStore from 'zustand';

export const useResizeDeviceStore = createStore(() => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < 768
}));

export default function ResizeDevice ({children}) {
  const setResizeDevice = useResizeDeviceStore.setState;

  const handleResize = () => {
    setResizeDevice({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return children;
}
