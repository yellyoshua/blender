import { useCurrentUserStore } from '../stores';

// const defaultProfilePhoto = '/images/avatar-default.svg';

export default function ProfilePhoto ({ size = 40, className = '' }) {
  const {currentUser} = useCurrentUserStore();
  console.log('currentUser.picture :', currentUser.picture);

  return (
    <img
      className={`
        rounded-full border border-gray-200 shadow-sm cursor-pointer
        ${className}
      `}
      src={currentUser.picture}
      alt="profile-pic"
      referrerPolicy="no-referrer"
      width={size}
      height={size}
    />
  );
}
