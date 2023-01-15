import FireworksConfetti from '../../shared/components/FireworksConfetti';
import BumpingFistsIcon from '@/icons/BumpingFistsIcon';
import { useMeStore } from '../../shared/store';

export default function Punched ({
  punched = {
    picture: 'https://i.pinimg.com/564x/1d/55/fe/1d55feec31162ce932689190f81bbd02.jpg',
    profile_picture: null,
    last_name: 'Doe',
    first_name: 'John'
  },
  discover
}) {
  const {me} = useMeStore();

  return (
    <div className={`
      fixed top-0 left-0 w-full h-full flex justify-center items-center z-50
      bg-white screen-overflow-hidden
    `}>
      <FireworksConfetti
        delay={1000}
        duration={6000}
      />
      <div className="bg-white rounded-lg p-4 max-w-2xl">
        <h1 className="text-center text-2xl text-primary font-roboto p-3" >
          <div className="flex justify-center">
            <img
              src={me.profile_picture ? me.profile_picture.url : me.picture}
              alt="profile"
              className="w-28 h-28 rounded-full mx-auto object-cover -mr-2"
            />
            <img
              src={punched.receptor.profile_picture ? punched.receptor.profile_picture.url : punched.receptor.picture}
              alt="profile"
              className="w-28 h-28 rounded-full mx-auto object-cover -ml-2"
            />
          </div>
          <BumpingFistsIcon className="inline-block" />
        </h1>
        <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
          You have bumped fists with
        </h2>
        <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold my-10">
          {punched.receptor.first_name} {punched.receptor.last_name}
        </h2>
        <button
          className="bg-primary w-full text-white font-bold py-1 px-4 rounded-2xl mt-4 mx-auto block"
          type="button"
        >
          View Profile
        </button>
        <button
          className="text-primary font-bold px-4 rounded text-sm mt-2 mx-auto block"
          type="button"
          onClick={discover}
        >
          Discover More
        </button>
      </div>
    </div>
  );
}
