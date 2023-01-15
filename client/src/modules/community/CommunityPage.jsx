import { Ping } from '@uiball/loaders';
import { useEffect } from 'react';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import { useResizeDeviceStore } from '../shared/components/ResizeDevice';
import useSearch from '../shared/hooks/useSearch';
import { useCommunitiesStores } from '../shared/store';

export default function Community () {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);
  const {communities, loading, getCommunities} = useCommunitiesStores();

  const {searchResults, setInputValue} = useSearch({
    source: communities,
    keys: ['name', 'description']
  });

  useEffect(() => {
    getCommunities();
  }, []);

  return (
    <div className="my-8 px-4 md:mx-0 w-full" style={{paddingBottom: 65}}>
      <h1 className="text-center text-2xl text-primary font-roboto p-3 font-bold mb-6" >
        Matching communities?
      </h1>
      <div className="flex justify-center items-center">
        <input
          className="w-full border-2 border-primary rounded-lg p-2"
          type="text"
          placeholder="Search by your own"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          className="bg-primary text-white text-sm font-bold py-2 px-2 ml-2 rounded mx-auto block"
        >
          <HiMagnifyingGlass className="inline-block w-7 h-7" />
        </button>
      </div>

      <div>
        <h3 className="text-center font-bold font-roboto text-2xl text-primary mt-2">
          Perfect fits!
        </h3>
        <p className="text-base font-roboto text-primary text-center max-w-xs m-auto">
          These communties have at least 50% of matching with your interests.
        </p>
        
        {
          loading &&
          <div className="flex justify-center w-full mt-6">
            <Ping size={45} speed={1} />
          </div>
        }

        <div className="flex flex-wrap justify-center items-center mt-4">
          {
            !loading && searchResults.map((community) => {
              return (
                <div key={community._id} className="flex items-center p-2 h-40 bg-primary rounded-xl w-full">
                  <img
                    src={community.image?.url}
                    alt={community.name}
                    className="h-full sm:w-1/3 w-2/3 object-cover bg-white rounded-tl-xl rounded-bl-xl"
                  />
                  <div className="grow flex flex-col justify-center items-center py-2 pl-1">
                    <h3 className="font-roboto text-2xl font-bold text-white uppercase">
                      {community.name}
                    </h3>
                    <p className="font-roboto text-sm font-bold text-white text-center">
                      {community.members?.length} Members
                    </p>
                    <div className="grow"></div>
                    <div className="pt-3 overflow-x-hidden">
                      {
                        !isMobile && community.interests.map((interest) => {
                          return (
                            <div key={interest._id} className="inline-block bg-white text-primary rounded-full px-2 py-1 text-sm font-bold mr-1">
                              {interest.name}
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
