import EnableLocation from './pages/EnableLocation';

export default function CompleteProfile ({user, children}) {
  if (!user.profile?.geolocation) {
    return <EnableLocation />;
  }

  return (
    <>
      {children}
    </>
  );
}
