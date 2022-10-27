import { useUserStore } from '../../shared/store';

export default function ProfilePhoto ({ size = 40, width, height, className = '' }) {
  const {user} = useUserStore();

  const picture = user.profile_picture
    ? user.profile_picture.url
    : user.picture;

  return (
    <img
      className={`
        rounded-full border border-gray-200 shadow-sm cursor-pointer object-contain
        ${className}
      `}
      src={picture}
      alt="profile-pic"
      referrerPolicy="no-referrer"
      width={width || size}
      height={height || size}
    />
  );
}
