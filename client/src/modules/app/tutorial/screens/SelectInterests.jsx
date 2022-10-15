/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { useInterestsStores } from '../../stores';
import {Ping} from '@uiball/loaders';
import useSearch from '../../../shared/hooks/useSearch';

const parameters = {
  minInterests: 5,
  maxInterests: 10
};

export default function SelectInterests ({ profile, updateProfile }) {
  const [selectedInterests, setSelectedInterests] = useState(() => [
    ...profile.interests
  ]);

  const { interests, getInterests, loading } = useInterestsStores();

  const {searchResults, setInputValue} = useSearch({
    source: interests,
    keys: ['name']
  });


  const selectInterest = (interest) => {
    if (selectedInterests.includes(interest._id)) {
      setSelectedInterests(selectedInterests.filter((id) => id !== interest._id));
    }

    if (selectedInterests.length + 1 > parameters.maxInterests) {
      return;
    }

    if (!selectedInterests.includes(interest._id)) {
      setSelectedInterests([...selectedInterests, interest._id]);
    }
  };

  useEffect(() => {
    getInterests();
  }, []);

  return (
    <div className="my-10 flex flex-col gap-3 items-center">
      <h1 className="text-3xl text-primary font-bold font-roboto">Interests</h1>
      <input
        type="text"
        placeholder="Search for interests"
        className={`
        text-lg px-4 py-2 w-96 h-10 rounded-3xl bg-gray-200 text-primary font-roboto font-light 
        `}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className="flex flex-wrap justify-center my-2">
        {selectedInterests.length}/{parameters.maxInterests}
      </div>
      {!loading && 
        <div className="grid md:grid-cols-3 grid-cols-2  gap-3 justify-center">
          {searchResults.map((interest, index) => {
            return <InterestsGrid
              key={index}
              interest={interest}
              selectInterest={selectInterest}
              
              selectedInterests={selectedInterests}
            />;
          })}
        </div>
      }
      {loading && 
        <div className="mt-12">
          <Ping size={45} speed={1} />
        </div>
      }

      <ContinueButton
        selectedInterests={selectedInterests}
        updateProfile={updateProfile}
        minInterests={parameters.minInterests}
      />
    </div>
  );
}

function InterestsGrid ({
  interest,
  selectInterest,
  selectedInterests
}) {
  const isSelected = selectedInterests.includes(interest._id);

  return <div
    className="flex items-center gap-2 select-none"
    onClick={() => selectInterest(interest)}
  >
    <p
      className={`
      text-primary font-roboto font-light text-lg border-2 w-40 px-2
      h-12 rounded-3xl flex items-center justify-center text-center leading-5
      hover:border-primary hover:font-normal hover:cursor-pointer
        ${isSelected
          ? 'bg-primary text-white'
          : 'bg-white text-primary'
        }
      `}
    >
      {interest.name}</p>
  </div>;
}

function ContinueButton ({
  minInterests,
  selectedInterests,
  updateProfile
}) {
  const canContinue = selectedInterests.length >= minInterests;

  return <button
    className={
      (
        canContinue
        ? 'hover:cursor-pointer'
        : 'opacity-50 hover:cursor-not-allowed'
      ).concat(`
        bg-primary text-white
        font-roboto font-light text-lg border-2 w-40 px-2 h-12 rounded-3xl flex items-center
        justify-center text-center leading-5 fixed bottom-10 right-10
      `)
    }
    disabled={!canContinue}
    onClick={() => updateProfile({
      interests: selectedInterests,
      tutorial: {done_interests: true}
    })}
  >
    Continue
  </button>;
}
