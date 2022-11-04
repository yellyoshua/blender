/* eslint-disable id-length */
import { useEffect } from 'react';
import dayjs from 'dayjs';
import _ from 'underscore';
import { Ping } from '@uiball/loaders';
import { useDiscoverStores } from './stores';
import ActionButtons from './components/ActionButtons';
import EmptyDiscover from './components/EmptyDiscover';

export default function Discover () {
  const {potentialMatch, loading, discover} = useDiscoverStores();

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

  if (!potentialMatch) {
    return <EmptyDiscover refresh={discover} />;
  }


  const age = dayjs().diff(potentialMatch.profile.birthdate, 'year');
  const isValidAge = age >= 18 && age <= 99;
  const has_location = potentialMatch.profile.location_city &&
  potentialMatch.profile.location_country;

  return (
    <div className="my-5 px-5" style={{paddingBottom: 65}}>
      <img
        src={potentialMatch.picture}
        alt="avatar"
        className="md:rounded-full rounded-xl mx-auto md:h-72 h-60 w-56 object-cover"
      />
      <h1 className="text-center text-3xl text-primary font-roboto px-3 pt-3" >
        {potentialMatch.first_name}{isValidAge && `, ${age}`}
      </h1>
      {has_location && <h2 className="text-center text-xs text-teal-800 font-roboto uppercase font-bold pb-6">
        in {potentialMatch.profile.location_city},&nbsp;
        {potentialMatch.profile.location_country}
      </h2>}

      <div className="flex justify-between items-center px-2">
        <p className="text-left text-sm font-bold text-primary font-roboto" >
          Interests
        </p>
        <p className="text-primary text-sm font-bold rounded text-right">
          {potentialMatch.percentage_interests}% Alike
        </p>
      </div>
      <div className={`
        grid gap-4 md:grid-cols-4 sm:grid-cols-3
        grid-cols-2 text-center text-white pb-6 px-2
      `}
      >
        {
          potentialMatch.profile.interests.map((interest) => {
            const isCommonMatch = _(potentialMatch.common_interests).
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
          {potentialMatch.percentage_personalities}% Alike
        </p>
      </div>
      <div
        className={`
          grid gap-4 md:grid-cols-4 sm:grid-cols-3
          grid-cols-2 text-center text-white pb-6 px-2
        `}
        style={{paddingBottom: 95}}
      >
        {
          potentialMatch.profile.personalities.map((interest) => {
            const isCommonMatch = _(potentialMatch.common_personalities).
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
      <ActionButtons
        discover={discover}
        potentialMatchId={potentialMatch._id}
      />
    </div>
  );
}
