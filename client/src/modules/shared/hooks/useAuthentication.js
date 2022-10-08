import { useEffect, useState } from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import authService from '../../core/services/auth.service';
import interceptors from '../../core/configurations/interceptors';

export const authStateAtom = atom({
  key: 'authStateAtom',
  default: {
    accessToken: authService().getAccessToken()
  }
});

export const accessTokenAtom = selector({
  key: 'accessTokenAtom',
  get: ({ get }) => get(authStateAtom).accessToken
});

export default function useAuthentication () {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const authState = useRecoilValue(authStateAtom);
  const setAuthState = useSetRecoilState(authStateAtom);

  const updateAuthState = (authState = {}) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      ...authState
    }));
  };

  const login = (accessToken) => {
    authService().login(accessToken);
    interceptors.setupAuthHeaders({authorization: `Bearer ${accessToken}`});
    updateAuthState({accessToken: accessToken});
  };

  const logout = () => {
    authService().logout();
    interceptors.setupAuthHeaders({authorization: null});
    updateAuthState({accessToken: null});
  };

  useEffect(() => {
    setIsAuthenticating(true);
    const accessToken = authService().getAccessToken();
    interceptors.setupAuthHeaders({authorization: `Bearer ${accessToken}`});
    updateAuthState({accessToken: accessToken});
    setIsAuthenticating(false);
  }, [authState.accessToken]);

  return {
    login,
    logout,
    authState,
    isAuthenticating
  };
}