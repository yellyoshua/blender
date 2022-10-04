// Auth service
import repositories from '../repositories';

export const LOCAL_STORAGE_AUTH_KEY = 'blender-auth-token-key';

export default function authService () {
  return {
    async login (credentials) {
      const {access_token} = await repositories.auth.post(credentials);
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, access_token);
      return access_token;
    },
    logout () {
      localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
    },
    getAccessToken () {
      return localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
    },
    isAuthenticated () {
      return Boolean(this.getAccessToken());
    },
    getLocalStorageAuthKey () {
      return LOCAL_STORAGE_AUTH_KEY;
    }
  };
}
