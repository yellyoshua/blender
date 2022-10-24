/* eslint-disable id-length */
import { Ping } from '@uiball/loaders';
import { useEffect } from 'react';
import _ from 'underscore';
import { useDiscoverStores } from './stores';
import dayjs from 'dayjs';

export default function Discover () {
  const {potentialMatches, loading, discover} = useDiscoverStores();

  useEffect(() => {
    discover();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center mx-auto">
        <Ping size={45} speed={1} />
      </div>
    );
  }

  if (!potentialMatches.length) {
    return (
      <div className="h-screen flex justify-center items-center mx-auto">
        <div>
          <h1 className="text-center text-4xl text-primary font-roboto p-3" >
            !Oops
          </h1>
          <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
            We couldn&apos;t find any matches for you
          </h2>

          <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
            Try again later
          </h2>
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
            type="button"
            onClick={discover}
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  const firstPotentialMatch = potentialMatches[0];

  const interests_with_personalities = _(firstPotentialMatch.profile.interests).
  union(firstPotentialMatch.profile.personalities);

  const age = dayjs().diff(firstPotentialMatch.profile.birthday, 'year');

  return (
    <div className="m-8">
      <h1 className="text-center text-4xl text-primary font-roboto p-3" >
        {firstPotentialMatch.first_name}, {age}
      </h1>
      {
        false && (
          <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
            from San francisco, ca
          </h2>
        )
      }
      <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
        in {firstPotentialMatch.profile.location_city},&nbsp;
        {firstPotentialMatch.profile.location_country}
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
