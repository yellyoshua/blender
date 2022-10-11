import { useEffect } from 'react';
import CompleteProfile from './CompleteProfile';
import AppMobile from './App.mobile';
import { useCurrentUserStore } from './stores';

export default function App () {
  const {currentUser, getCurrentUser} = useCurrentUserStore();

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!currentUser) {
    return null;
  }

  return (
    <CompleteProfile user={currentUser}>
      <AppMobile />
    </CompleteProfile>
  );
}
