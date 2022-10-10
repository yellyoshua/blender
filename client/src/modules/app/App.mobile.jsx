import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { getCurrentUserAtom } from './atoms';

export default function AppMobile () {
  const currentUser = useRecoilValue(getCurrentUserAtom());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-center">
        <h1>Welcome {currentUser.first_name} with email {currentUser.email}</h1>
      </div>
    </Suspense>
  );
}
