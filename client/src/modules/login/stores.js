import createStore from 'zustand';
import GoogleIcon from '@/icons/GoogleIcon';

export const useAuthProvidersStore = createStore(() => ({
  google: {
    providerAuthUrl: '/api/auth/google',
    ProviderLogo: GoogleIcon,
    providerLabel: 'Google'
  }
}));
