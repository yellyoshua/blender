import createStore from 'zustand';
import GoogleIcon from '../shared/icons/GoogleIcon';

export const useAuthProvidersStore = createStore(() => ({
  google: {
    providerAuthUrl: '/api/auth/google',
    ProviderLogo: GoogleIcon,
    providerLabel: 'Google'
  }
}));
