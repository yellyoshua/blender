export const LOCAL_STORAGE_AUTH_KEY = 'blender-auth-token-key';

export default function authService () {
  return {
    login (access_token) {
      localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, access_token);
      return access_token;
    },
    logout () {
      return localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
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
