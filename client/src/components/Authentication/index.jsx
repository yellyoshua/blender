import useAuthentication from '@/shared/hooks/useAuthentication';

export default function Authentication ({privateRoute, publicRoute}) {
  const {isAuthenticating, authState} = useAuthentication();

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
