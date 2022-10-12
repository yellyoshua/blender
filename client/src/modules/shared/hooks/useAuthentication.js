import { useEffect, useState } from 'react';
import createStore from 'zustand';
import services from '../../core/services';

export const useAuthStateStore = createStore(() => ({
  accessToken: services.auth.getAccessToken()
}));

export default function useAuthentication () {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const authState = useAuthStateStore();
  const setAuthState = useAuthStateStore.setState;

  const updateAuthState = (authState = {}) => {
    setAuthState((prevAuthState) => ({
      ...prevAuthState,
      ...authState
    }));
  };

  const login = (accessToken) => {
    services.auth.login(accessToken);
    updateAuthState({accessToken: accessToken});
  };

  const logout = () => {
    services.auth.logout();
    updateAuthState({accessToken: null});
  };

  useEffect(() => {
    setIsAuthenticating(true);
    const accessToken = services.auth.getAccessToken();
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
