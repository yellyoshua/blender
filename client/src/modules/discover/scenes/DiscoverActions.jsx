import BumpingFistsIcon from '@/icons/BumpingFistsIcon';
import {HiArrowPath} from 'react-icons/hi2';
import { useBumpFistsStore } from '../stores';
import { Ping } from '@uiball/loaders';

export default function DiscoverActions ({discover, match}) {
  const {loading, addBumpFist} = useBumpFistsStore();
  return (
    <div className="fixed left-0 right-0 flex justify-center" style={{bottom: 70, height: 80}}>
      <div className="rounded-l-2xl rounded-r-2xl flex items-center justify-center bg-white px-2 shadow-xl">
        {loading &&
          <div className="flex items-center justify-center h-screen w-full">
            <Ping size={45} speed={1} />
          </div>
        }

        {!loading &&
          <>
            <button
              className="text-white font-bold rounded-full mr-1"
              type="button"
              onClick={() => {
                addBumpFist(match._id).
                then(discover);
              }}
            >
              <BumpingFistsIcon className="w-14 h-14" />
            </button>
            <button
              className="bg-primary text-white font-bold py-2 px-2 rounded-full ml-1"
              type="button"
              onClick={discover}
            >
              <HiArrowPath className="w-9 h-9" />
            </button>
          </>  
        }
      </div>
    </div>
  );
}
