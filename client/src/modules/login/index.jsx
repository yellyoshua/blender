import { useRecoilValue } from 'recoil';
import { isMobileState } from '../shared/components/ResizeDevice';
import LoginDesktop from './components/Login.desktop';
import LoginMobile from './components/Login.mobile';

export default function Login () {
  const isMobile = useRecoilValue(isMobileState);

  if (isMobile) {
    return <LoginMobile />;
  }

  return <LoginDesktop />;
}
