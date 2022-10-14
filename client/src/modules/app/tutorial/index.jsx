import { useCurrentUserStore } from '../stores';
import EnableLocation from './screens/EnableLocation';
import SelectInterests from './screens/SelectInterests';

export default function Tutorial ({user, children}) {
  const {updateProfile, loading} = useCurrentUserStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!user.profile.tutorial.done_geolocation) {
    return <EnableLocation
      profile={user.profile}
      updateProfile={updateProfile}
    />;
  }
  if (!user.profile.tutorial.done_interests) {
    return <SelectInterests
      profile={user.profile}
      updateProfile={updateProfile}
    />;
  }

  return (
    <>
      {children}
    </>
  );
}
