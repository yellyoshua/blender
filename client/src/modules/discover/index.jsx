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


  const age = dayjs().diff(firstPotentialMatch.profile.birthday, 'year');

  return (
    <div className="m-5" style={{paddingBottom: 65}}>
      <img
        src={firstPotentialMatch.picture}
        alt="avatar"
        className="rounded-full mx-auto h-72"
      />
      <h1 className="text-center text-4xl text-primary font-roboto px-3 pt-3" >
        {firstPotentialMatch.first_name}, {age}
      </h1>
      <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold pb-6">
        in {firstPotentialMatch.profile.location_city},&nbsp;
        {firstPotentialMatch.profile.location_country}
      </h2>

      <div className="flex justify-between items-center px-2">
        <p className="text-left text-sm font-bold text-primary font-roboto" >
          Interests
        </p>
        <p className="text-primary text-sm font-bold rounded text-right">
          {firstPotentialMatch.percentage_interests}% Alike
        </p>
      </div>
      <div className={`
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white pb-6 px-2
      `}
      >
        {
          firstPotentialMatch.profile.interests.map((interest) => {
            const isCommonMatch = _(firstPotentialMatch.common_interests).
            findWhere({_id: interest._id});

            return (
              <h1
                key={interest._id}
                className={`
                  ${isCommonMatch ? 'bg-teal-800' : 'bg-primary'} px-2 rounded-2xl select-none
                `}
              >
                {interest.name}
              </h1>
            );
          })
        }
      </div>

      <div className="flex justify-between items-center px-2">
        <p className="text-left text-sm font-bold text-primary font-roboto" >
          Personalities
        </p>
        <p className="text-primary text-sm font-bold rounded text-right">
          {firstPotentialMatch.percentage_personalities}% Alike
        </p>
      </div>
      <div
        className={`
          grid gap-4 md:grid-cols-4 sm:grid-cols-3
          grid-cols-2 text-center text-white pb-6 px-2
        `}
      >
        {
          firstPotentialMatch.profile.personalities.map((interest) => {
            const isCommonMatch = _(firstPotentialMatch.common_personalities).
            findWhere({_id: interest._id});

            return (
              <h1
                key={interest._id}
                className={`
                  ${isCommonMatch ? 'bg-teal-800' : 'bg-primary'} px-2 rounded-2xl select-none
                `}
              >
                {interest.name}
              </h1>
            );
          })
        }
      </div>
      <ActionButtons potentialMatch={firstPotentialMatch} />
    </div>
  );
}

function ActionButtons () {
  return (
    <div className="fixed ">

    </div>
  );
}
