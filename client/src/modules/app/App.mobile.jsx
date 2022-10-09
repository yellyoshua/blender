import { useRecoilValue } from 'recoil';
import { getCurrentUserAtom } from './atoms';

export default function AppMobile () {
  const currentUser = useRecoilValue(getCurrentUserAtom());

  return (
    <div className="text-center">
      <h1>Welcome {currentUser.first_name} with email {currentUser.email}</h1>
    </div>
  );
}
