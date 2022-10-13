import { useMemo } from 'react';

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
      <div className="flex items-center justify-center">
        <p className="text-lg">
          Location already enabled
        </p>
        <button onClick={handleDoneGeolocation}>
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <h1>Enable Location</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleEnableLocation}
      >
        Add Location
      </button>
      <button
        onClick={handleDoneGeolocation}
        className="bg-gray-500 text-white p-2 rounded"
      >
        Skip
      </button>
    </div>
  );
}
