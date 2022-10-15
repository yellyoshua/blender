/* eslint-disable indent */
import { useEffect, useState } from 'react';
import { usePersonalitiesStores } from '../../stores';
import Fuse from 'fuse.js';


export default function SelectPersonalities ({ profile, updateProfile }) {
  const [personalitiesFiltered, setPersonalitiesFiltered] = useState([]);
  const [selectedPersonalities, setSelectedPersonalities] = useState(() => [
    ...profile.personalities
  ]);

  const { personalities, getPersonalities, loading } = usePersonalitiesStores();

  const selectPersonality = (personality) => {
    if (selectedPersonalities.includes(personality._id)) {
      setSelectedPersonalities(selectedPersonalities.filter((id) => id !== personality._id));
    }

    if (selectedPersonalities.length + 1 > 10) {
      return;
    }

    if (!selectedPersonalities.includes(personality._id)) {
      setSelectedPersonalities([...selectedPersonalities, personality._id]);
    }
  };
  
  const fuse = new Fuse(personalities, {
    keys: ['name']
  });

  useEffect(() => {
    getPersonalities();
  }, []);

  useEffect(() => {
    if (personalities.length > 0) {
      setPersonalitiesFiltered(personalities);
    }
  }, [personalities.length]);

  return (
    <div className="my-10 flex flex-col gap-3 items-center">
      <h1 className="text-3xl text-primary font-bold font-roboto">Personalities</h1>
      <input
        type="text"
        placeholder="Search for personalities"
        className={`
          text-lg px-4 py-2 w-96 h-10 rounded-3xl bg-gray-200 text-primary font-roboto font-light
        `}
        onChange={(event) => {
          const { value } = event.target;
          const results = fuse.search(value);
          setPersonalitiesFiltered(results.map((result) => result.item));
          if (personalitiesFiltered.length > 0) {
            setPersonalitiesFiltered(personalities);
          }
        }}

      />
      <div className="mt-6 grid md:grid-cols-3 grid-cols-2  gap-3 justify-center">
        {personalitiesFiltered.map((personality, index) => {
          const isSelected = selectedPersonalities.includes(personality._id);
          return <div
            key={index}
            className={`
              flex items-center gap-2 select-none
            `}
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
        })}
      </div>
    </div>
  );
}
