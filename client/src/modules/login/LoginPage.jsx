import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import LoginDesktop from './Login.desktop';
import LoginMobile from './Login.mobile';
import { useResizeDeviceStore } from '@/components/ResizeDevice';
import useAuthentication from '@/shared/hooks/useAuthentication';

export default function LoginPage () {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const auth = useAuthentication();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      setSearchParams({}, {replace: true});
      auth.login(accessToken);
    }
  }, []);

  if (isMobile) {
    return <LoginMobile />;
  }

  return <LoginDesktop />;
}
