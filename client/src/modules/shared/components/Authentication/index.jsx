import useAuthentication from '../../hooks/useAuthentication';

const statusCodesForLogout = [401, 403];

export default function Authentication ({interceptors, privateRoute, publicRoute}) {
  const {isAuthenticating, authState, logout} = useAuthentication();

  const onRequestSuccess = (response) => response;
  const onRequestFail = (error) => {
    const textError = String(error);
    const statusCode = Number(textError.match(/\d+/ug)[0]);

    if (statusCodesForLogout.includes(statusCode)) {
      return logout();
    }

    return Promise.reject(error);
  };

  interceptors.responseInterceptor(onRequestSuccess, onRequestFail);

  if (isAuthenticating) {
    return null;
  }

  return (
    <>
      {
        authState.accessToken
          ? privateRoute
          : publicRoute
      }
    </>
  );
}
