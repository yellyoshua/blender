import { Link } from 'react-router-dom';
import PencilIcon from '@/icons/PencilIcon';
import BadgesList from '@/components/BadgesList';

export default function ProfileInterests ({user}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-left text-base font-bold text-primary font-roboto p-3" >
          Interests
        </p>
        <Link to="/profile/edit/interests">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <PencilIcon className="inline-block mr-1" width={13} height={13} />
            Edit
          </button>
        </Link>
      </div>
      <BadgesList badges={user.profile.interests} />

      <div className="flex justify-between items-center">
        <p className="text-left text-base font-bold text-primary font-roboto p-3" >
          Personalities
        </p>
        <Link to="/profile/edit/personalities">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <PencilIcon className="inline-block mr-1" width={13} height={13} />
            Edit
          </button>
        </Link>
      </div>
      <BadgesList badges={user.profile.personalities} />
    </div>
  );
}
