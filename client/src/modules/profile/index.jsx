/* eslint-disable id-length */
import { Link } from 'react-router-dom';
import { useCurrentUserStore } from '../app/stores';
import PencilIcon from '../shared/icons/PencilIcon';
import AddIcon from '../shared/icons/AddIcon';
import ProfilePhoto from '../app/components/ProfilePhoto';

export default function Profile () {
  const { currentUser } = useCurrentUserStore();

  return (
    <div className="m-8">
      <div className="flex justify-center">
        <ProfilePhoto className="w-20 h-20" />
      </div>
      <h1 className="text-center text-4xl text-primary font-roboto p-3" >
        {currentUser.first_name}
      </h1>
      <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
        in {currentUser.profile.location_city}, {currentUser.profile.location_country}
      </h2>

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
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
      <div className="
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white py-2 px-2">
        {
          currentUser.profile.interests.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl select-none">
                {interest.name}
              </h1>
            );
          })
        }
      </div>

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
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
      <div className="
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white py-2 px-2">
        {
          currentUser.profile.personalities.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl select-none">
                {interest.name}
              </h1>
            );
          })
        }
      </div>

      <div className="flex justify-between items-center">
        <p className="text-left text-sm font-bold text-primary font-roboto p-3" >
          Photos
        </p>
        <Link to="/profile/edit/photos">
          <button
            className="text-primary text-sm font-bold py-1 px-4 rounded mx-auto block"
            type="button"
          >
            <AddIcon className="inline-block mr-1" width={13} height={13} />
            Add
          </button>
        </Link>
      </div>
    </div>

  );
}
