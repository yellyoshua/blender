/* eslint-disable id-length */
import _ from 'underscore';
import { useCurrentUserStore } from '../app/stores';

export default function Discover () {
  const { currentUser } = useCurrentUserStore();

  const interests_with_personalities = _(currentUser.profile.interests).
  union(currentUser.profile.personalities);

  return (
    <div className="m-8">
      <h1 className="text-center text-4xl text-primary font-roboto p-3" >
        {currentUser.first_name}
      </h1>
      <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
        from San francisco, ca
      </h2>
      <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
        in quito, ecu
      </h2>
      <div className="
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white py-2 px-2">
        {
          interests_with_personalities.map((interest) => {
            return (
              <h1 key={interest._id} className="bg-primary px-2 rounded-2xl select-none">
                {interest.name}
              </h1>
            );
          })
        }
      </div>
    </div>

  );
}
