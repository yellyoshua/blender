/* eslint-disable id-length */
/* eslint-disable indent */
import _ from 'underscore';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useInterestsStores, useMeStore } from '@/shared/store';
import OptionsSelector from '@/components/OptionsSelector';

export default function ProfileEditInterestsPage () {
  const {me: {profile}, updateMeProfile} = useMeStore();
  const navigate = useNavigate();

  const [selectedInterests, setSelectedInterests] = useState(() => {
    return _(profile.interests).pluck('_id');
  });

  const { interests, getInterests, loading } = useInterestsStores();

  return (
    <div style={{paddingBottom: 65}}>
      <div className="absolute top-4 left-4">
        <Link to="/profile">
          <button
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>
      </div>

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
          <SaveButton
            selectedInterests={selectedInterests}
            updateProfile={updateMeProfile}
            redirect={() => navigate('/profile')}
            disabled={disabled}
          />
        );
      }}
    />
    </div>
  );
}

function SaveButton ({
  disabled,
  selectedInterests,
  redirect,
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
    style={{marginBottom: 65}}
    disabled={disabled}
    onClick={() => updateProfile({
      interests: selectedInterests
    }).then(redirect)}
  >
    Guardar y salir
  </button>;
}
