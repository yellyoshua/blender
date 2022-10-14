import { useEffect, useMemo } from 'react';
import { usePersonalitiesStores } from '../../stores';


export default function SelectPersonalities({ profile, updateProfile }) {
  const { personalities, getPersonalities, loading } = usePersonalitiesStores();
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
      />
      <div className="mt-6 grid grid-cols-3 gap-3 justify-center">
        {personalities.map((personalities, index) => (
          <div key={index} className="flex items-center gap-2">
            <p
              className={`
              text-primary font-roboto font-light text-lg border-2 w-40 px-2
              h-12 rounded-3xl flex items-center justify-center text-center leading-5
              hover:border-primary hover:font-normal hover:cursor-pointer
              `}
            >
              {personalities.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
