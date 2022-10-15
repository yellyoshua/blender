/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { usePersonalitiesStores } from '../../stores';
import {Ping} from '@uiball/loaders';
import useSearch from '../../../shared/hooks/useSearch';
// Mpqg2312
const parameters = {
  minPersonalities: 5,
  maxPersonalities: 10
};

export default function SelectPersonalities ({ profile, updateProfile }) {
  const [selectedPersonalities, setSelectedPersonalities] = useState(() => [
    ...profile.personalities
  ]);

  const { personalities, getPersonalities, loading } = usePersonalitiesStores();

  const {searchResults, setInputValue} = useSearch({
    source: personalities,
    keys: ['name']
  });

  const selectPersonality = (personality) => {
    if (selectedPersonalities.includes(personality._id)) {
      setSelectedPersonalities(selectedPersonalities.filter((id) => id !== personality._id));
    }

    if (selectedPersonalities.length + 1 > parameters.maxPersonalities) {
      return;
    }

    if (!selectedPersonalities.includes(personality._id)) {
      setSelectedPersonalities([...selectedPersonalities, personality._id]);
    }
  };

  useEffect(() => {
    getPersonalities();
  }, []);

  return (
    <div className="my-10 flex flex-col gap-3 items-center">
      <h1 className="text-3xl text-primary font-bold font-roboto">Personalities</h1>
      <input
        type="text"
        placeholder="Search for personalities"
        className={`
          text-lg px-4 py-2 w-96 h-10 rounded-3xl bg-gray-200 text-primary font-roboto font-light
        `}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <div className="flex flex-wrap justify-center my-2">
        {selectedPersonalities.length}/{parameters.maxPersonalities}
      </div>
      {!loading && 
        <div className="grid md:grid-cols-3 grid-cols-2  gap-3 justify-center">
          {searchResults.map((personality, index) => {
            return <PersonalitiesGrid
              key={index}
              personality={personality}
              selectPersonality={selectPersonality}
              selectedPersonalities={selectedPersonalities}
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
        selectedPersonalities={selectedPersonalities}
        updateProfile={updateProfile}
        minPersonalities={parameters.minPersonalities}
      />
    </div>
  );
}

function PersonalitiesGrid ({
  personality,
  selectPersonality,
  selectedPersonalities
}) {
  const isSelected = selectedPersonalities.includes(personality._id);

  return <div
    className="flex items-center gap-2 select-none"
    onClick={() => selectPersonality(personality)}
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
      {personality.name}</p>
  </div>;
}

function ContinueButton ({
  minPersonalities,
  selectedPersonalities,
  updateProfile
}) {
  const canContinue = selectedPersonalities.length >= minPersonalities;

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
      personalities: selectedPersonalities,
      tutorial: {done_personalities: true}
    })}
  >
    Continue
  </button>;
}
