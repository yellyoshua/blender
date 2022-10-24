/* eslint-disable indent */
import { useState } from 'react';
import { useInterestsStores } from '../../../shared/store';
import OptionsSelector from '../../../shared/components/OptionsSelector';

export default function SelectInterests ({ profile, updateProfile }) {
  const [selectedInterests, setSelectedInterests] = useState(() => {
    return profile.interests;
  });

  const { interests, getInterests, loading } = useInterestsStores();

  return (
    <OptionsSelector
      title="Interests"
      searchPlaceholder="Search for interests"
      options={interests}
      selectedOptions={selectedInterests}
      setSelectedOptions={setSelectedInterests}
      fetchOptions={getInterests}
      loading={loading}
      maxSelections={10}
      minSelections={5}
      renderSaveButton={({disabled}) => {
        return (
          <ContinueButton
            selectedInterests={selectedInterests}
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
  selectedInterests,
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
      interests: selectedInterests,
      tutorial: {done_interests: true}
    })}
  >
    Continue
  </button>;
}
