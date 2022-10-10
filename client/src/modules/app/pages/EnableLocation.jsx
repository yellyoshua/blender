import { useRecoilCallback } from 'recoil';
import {updateProfileAtom} from '../atoms';

export default function EnableLocation () {
  const updateProfile = console.log;
  return (
    <div>
      <h1>Enable Location</h1>
      <button onClick={() => updateProfile({location_country: 'Ecuador'})}>
        Add Location
      </button>
    </div>
  );
}
