/* eslint-disable indent */
import { useState } from 'react';
import { usePersonalitiesStores } from '@/shared/store';
import OptionsSelector from '@/components/OptionsSelector';

export default function SelectPersonalities ({ profile, updateProfile }) {
  const [selectedPersonalities, setSelectedPersonalities] = useState(() => {
    return profile.personalities;
  });

  const {personalities, getPersonalities, loading} = usePersonalitiesStores();

  return (
    <OptionsSelector
      title="Personalities"
      searchPlaceholder="Search for personalities"
      options={personalities}
      selectedOptions={selectedPersonalities}
      setSelectedOptions={setSelectedPersonalities}
      fetchOptions={getPersonalities}
      loading={loading}
      maxSelections={10}
      minSelections={5}
      renderSaveButton={({disabled}) => {
        return (
          <ContinueButton
            selectedPersonalities={selectedPersonalities}
            updateProfile={updateProfile}
            disabled={disabled}
          />
        );
      }}
    />
  );
}

function ContinueButton ({
  disabled,
  selectedPersonalities,
  updateProfile
}) {
  return <button
    className={
      (
        disabled
        ? 'opacity-50 hover:cursor-not-allowed'
        : 'hover:cursor-pointer'
      ).concat(`
        bg-primary text-white
        font-roboto font-light text-lg border-2 w-40 px-2 h-12 rounded-3xl flex items-center
        justify-center text-center leading-5 fixed bottom-10 right-10
      `)
    }
    disabled={disabled}
    onClick={() => updateProfile({
      personalities: selectedPersonalities,
      tutorial: {done_personalities: true}
    })}
  >
    Continue
  </button>;
}
