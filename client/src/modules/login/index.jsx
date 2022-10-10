import { useEffect } from 'react';
import { atom, useRecoilValue } from 'recoil';
import { useSearchParams } from 'react-router-dom';
import LoginDesktop from './Login.desktop';
import LoginMobile from './Login.mobile';
import { isMobileState } from '../shared/components/ResizeDevice';
import GoogleIcon from '../shared/icons/GoogleIcon';
import FacebookIcon from '../shared/icons/FacebookIcon';
import useAuthentication from '../shared/hooks/useAuthentication';

export const authProvidersAtom = atom({
  key: 'authProvidersAtom',
  default: {
    google: {
      providerAuthUrl: '/api/auth/google',
      providerLogo: <GoogleIcon />,
      providerLabel: 'Google'
    },
    facebook: {
      providerAuthUrl: '/api/auth/facebook',
      providerLogo: <FacebookIcon />,
      providerLabel: 'Facebook'
    }
  }
});

export default function Login () {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMobile = useRecoilValue(isMobileState);
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
