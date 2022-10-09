import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { getCurrentUserAtom } from './atoms';
import CompleteProfile from './CompleteProfile';
import AppMobile from './App.mobile';

export default function App () {
  const currentUser = useRecoilValue(getCurrentUserAtom());

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <CompleteProfile user={currentUser}>
        <AppMobile />
      </CompleteProfile>
    </Suspense>
  );
}
