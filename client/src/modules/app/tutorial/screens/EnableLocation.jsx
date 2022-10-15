import { useMemo } from 'react';
import LocationIcon from '../../../shared/icons/LocationIcon';

// Get location with navigator.geolocation https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

export default function EnableLocation ({profile, updateProfile}) {
  const alreadyEnabled = useMemo(() => {
    const {latitude, longitude} = profile.geolocation || {};
    return latitude && longitude;
  }, [profile]);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      updateProfile({
        geolocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
      navigator.geolocation.clearWatch(position);
    }, (error) => {
      if (error.code === 1) {
        handleEnableLocation();
      }
    });
  };

  const handleDoneGeolocation = () => {
    updateProfile({tutorial: {done_geolocation: true}});
  };

  if (alreadyEnabled) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
        <div
          className={`
            flex items-center justify-center w-28 h-28 rounded-full bg-primary
          `}
        >
          <LocationIcon
            className="w-16 h-16 text-white"

          />
        </div>
        <p className="text-lg mb-6">
          You have already enabled location.
        </p>
        <button
          onClick={handleDoneGeolocation}
          className={`
            bg-primary text-white px-4 py-2 rounded-md
            hover:bg-primary-dark transition-colors shadow-md
          `}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
      <div className="max-w-sm flex flex-col gap 3 mx-6 min-h-screen py-3">
        <div className="grow"></div>
        <div className="grow">
          <div
            className={`
              flex items-center justify-center w-28 h-28 rounded-full bg-primary
            `}
          >
            <LocationIcon
              className="w-16 h-16 text-white"

            />
          </div>
        </div>
        <div className="grow">
          <h1
            className="text-4xl md:text-2xl font-bold text-left mb-4 text-primary"
          >
            Set your location services
          </h1>
          <p>
            We use your location to show you potential matches in your area.
          </p>
        </div>
        <div className="grow"></div>
        <div className="grow flex flex-col justify-end items-center">
          <button
            className="p-3 w-60 bg-primary text-white text-base rounded-3xl px-4"
            onClick={handleEnableLocation}
          >
            Set location services
          </button>
          <button
            onClick={handleDoneGeolocation}
            className="text-primary-light p-2"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
