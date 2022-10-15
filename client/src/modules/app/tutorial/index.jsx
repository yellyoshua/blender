import { useCurrentUserStore } from '../stores';
import EnableLocation from './screens/EnableLocation';
import SelectInterests from './screens/SelectInterests';
import SelectPersonalities from './screens/SelectPersonalities';
import {Ping} from '@uiball/loaders';

export default function Tutorial ({ user, children }) {
  const { updateProfile, loading } = useCurrentUserStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Ping size={45} speed={1} />
      </div>
    );
  }

  if (!user.profile.tutorial.done_geolocation) {
    return <EnableLocation
      profile={user.profile}
      updateProfile={updateProfile}
    />;
  }

  if (!user.profile.tutorial.done_personalities) {
    return <SelectPersonalities
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
