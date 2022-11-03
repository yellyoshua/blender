import BumpingFistsIcon from '../../shared/icons/BumpingFistsIcon';
import { useUserStore } from '../../shared/store';

export default function Punched ({bumpFist, discover}) {
  const {user, getUser} = useUserStore();

  return (
    <div className={`
      fixed top-0 left-0 w-full h-full flex justify-center items-center z-50
      bg-white screen-overflow-hidden
    `}>
      <div className="bg-white rounded-lg p-4 max-w-2xl">
        <h1 className="text-center text-2xl text-primary font-roboto p-3" >
          <BumpingFistsIcon className="inline-block" />
        </h1>
        <h2 className="text-center text-sm text-primary font-roboto uppercase p-2 font-bold">
          You have bumped fists with
        </h2>
        <h2 className="text-center text-sm text-teal-800 font-roboto uppercase font-bold">
          {/* {bumpFist?.profile?.first_name} */}
          Yoshua Lopez
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
