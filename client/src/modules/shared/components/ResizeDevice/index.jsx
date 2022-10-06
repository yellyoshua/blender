import { useEffect } from 'react';
import {atom, selector, useRecoilState} from 'recoil';

export const resizeDeviceState = atom({
  key: 'resizeDeviceState',
  default: {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768
  }
});

export const isMobileState = selector({
  key: 'isMobileState',
  get: ({get}) => {
    return get(resizeDeviceState).isMobile;
  }
});

export default function ResizeDevice ({children}) {
  const [, setResizeDevice] = useRecoilState(resizeDeviceState);

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
