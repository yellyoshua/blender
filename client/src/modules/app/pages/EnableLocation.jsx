import { useCurrentUserStore } from '../stores';

// Get location with navigator.geolocation https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

export default function EnableLocation () {
  const {updateProfile, loading} = useCurrentUserStore();

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Enable Location</h1>
      <button onClick={handleEnableLocation}>
        Add Location
      </button>
    </div>
  );
}
