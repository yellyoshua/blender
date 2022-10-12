import { useCurrentUserStore } from './stores';

export default function AppMobile () {
  const {currentUser} = useCurrentUserStore();

  return (
    <div className="text-center">
      <h1>Welcome {currentUser.first_name} with email {currentUser.email}</h1>
    </div>
  );
}
