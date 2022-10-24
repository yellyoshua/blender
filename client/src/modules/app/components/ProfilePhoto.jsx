import { useUserStore } from '../../shared/store';

export default function ProfilePhoto ({ size = 40, className = '' }) {
  const {user} = useUserStore();

  return (
    <img
      className={`
        rounded-full border border-gray-200 shadow-sm cursor-pointer
        ${className}
      `}
      src={user.picture}
      alt="profile-pic"
      referrerPolicy="no-referrer"
      width={size}
      height={size}
    />
  );
}
