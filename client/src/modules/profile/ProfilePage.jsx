import { useMeStore } from '@/shared/store';
import ProfileTabs from './scenes/ProfileTabs';
import ProfileHeader from './scenes/ProfileHeader';
import ProfileInfo from './scenes/ProfileInfo';
import ProfileInterests from './scenes/ProfileInterests';

export default function Profile () {
  const { me, getMe, updateMe } = useMeStore();

  return (
    <div className="my-8" style={{paddingBottom: 65}}>
      <ProfileHeader user={me} refreshUser={getMe} />
      <ProfileInfo user={me} updateUser={updateMe} />
      <ProfileInterests user={me} />
      <ProfileTabs />
    </div>
  );
}
